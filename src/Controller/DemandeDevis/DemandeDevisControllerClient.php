<?php

namespace App\Controller\DemandeDevis;

use App\Entity\DemandeDevis;
use App\Entity\Devis;
use App\Entity\OrderDigital;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use App\Entity\Produit;
use App\Entity\ProduitDD;
use App\Entity\User;
use App\Form\DemandeDevisFilterType;
use App\Form\DemandeDevisFormType;
use App\Form\DevisType;
use App\Form\MyProductFilter;
use App\Form\MyProduitFilterType;
use App\Form\ProduitFormType;
use App\Form\ProduitFilterType;
use App\Repository\DemandeDevisRepository;
use App\Repository\DevisRepository;
use Nucleos\DompdfBundle\Wrapper\DompdfWrapperInterface;

use App\Repository\ProduitRepository;
use App\Repository\SecteurRepository;
use App\Repository\UserRepository;
use Knp\Component\Pager\PaginatorInterface;
use App\Services\SearchService;
use App\Services\ExcelService;
use App\Services\FileHandler;
use App\Services\StripeService;
use App\Util\GenericUtil;
use App\Util\PopupUtil;
use App\Util\Search\MyCriteriaParam;
use DateTime;
use Exception;
use SessionIdInterface;
use Stripe\Product;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\FormType;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use Symfony\Component\Form\FormFactoryInterface;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Component\Validator\Constraints\File;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Component\Validator\Constraints\NotNull;

/**
 * @Route("/client/{token}/demandedevis")
 */
class DemandeDevisControllerClient extends AbstractController
{
    private $entityManager;
    private $demandeDevisRepository;
    private $fileHandler;
    private $secteurRepository;
    private $session;
    private $userRepository;
    private $repoDevis;

    public function __construct(UserRepository $userRepository, SessionInterface $session, EntityManagerInterface $entityManager, DemandeDevisRepository $demandeDevisRepository, FileHandler $fileHandler, SecteurRepository $secteurRepository, DevisRepository $repoDevis){
        $this->entityManager = $entityManager;
        $this->demandeDevisRepository = $demandeDevisRepository;
        $this->fileHandler = $fileHandler;
        $this->secteurRepository = $secteurRepository;
        $this->session = $session;
        $this->userRepository = $userRepository;
        $this->repoDevis = $repoDevis;
    }

   /**
     * @Route("/", name="client_demandedevis_list")
     */
    public function index($token, Request $request, PaginatorInterface $paginator, SearchService $searchService): Response
    {
        $secteurId = $this->session->get('secteurId');
        $agent = $this->userRepository->findAgentByToken($token);
        $page = $request->query->get('page', 1);
        $limit = 5;
        $criteria = [
            ['prop' => 'status'],
            ['prop' => 'nomProduit', 'col' => 'nom', 'op' => 'LIKE', 'alias' => 'p'],
            ['prop' => 'dateMin', 'col' => 'dateDemande', 'op' => '>='],
            ['prop' => 'dateMax', 'col' => 'dateDemande', 'op' => '<='],
            ['prop' => 'user', 'col' => 'id', 'alias' => 'c']
        ];

        $filter = [];

        $form = $this->createForm(DemandeDevisFilterType::class, $filter, [
            'method' => 'GET',
        ]);
        $form->handleRequest($request);
        $filter = $form->getData();
        $filter["user"] = ((object)$this->getUser())->getId();

        $query = $this->entityManager
            ->createQueryBuilder()
            ->select('d')
            ->from(DemandeDevis::class, 'd')
            ->join('d.client', 'c')
            ->join('d.agent', 'a')
            ->join('d.secteur', 's')
            ->join('d.produit', 'p')
        ;  

        $where =  $searchService->getWhere($filter, new MyCriteriaParam($criteria, 'd'));   
        $query->where($where["where"]." and a.id = :agentId and s.id = :secteurId ");
        $where["params"]["agentId"] = $agent->getId();
        $where["params"]["secteurId"] = $secteurId;
        $searchService->setAllParameters($query, $where["params"]);
        $searchService->addOrderBy($query, $filter, ['sort' => 'd.dateDemande', 'direction' => 'desc']);

        $ddList = $paginator->paginate(
            $query,
            $page,
            $limit
        );

        return $this->render('user_category/client/dd/demandedevis/demandedevis_list.html.twig', [
            'ddList' => $ddList,
            'form' => $form->createView(),
            'token' => $token,
            'agent' => $agent
        ]);

    }
    

    /**
     * @Route("/{id}/new", name="client_demandedevis_new")
     */
    public function new($token, ProduitDD $produit, Request $request): Response
    {
        $user = (object)$this->getUser();
        $secteurId = $this->session->get('secteurId');
        $secteur = $this->secteurRepository->find($secteurId);
        $agent = $this->userRepository->findAgentByToken($token);
        $isEdit = false;
        $error = null;
        $dd = new DemandeDevis();
        $dd->setNom($user->getNom());
        $dd->setPrenom($user->getPrenom());
        $dd->setTelephone($user->getTelephone());
        $dd->setEmail($user->getEmail());
        $form = $this->createForm(DemandeDevisFormType::class, $dd);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {

            try{
                $files = [];

                $data = $form->get('files')->getData();
                for($i=0; $i<count($data); $i++){
                    $filename = $this->fileHandler->upload($data[$i], "dd/".date('Y-m-d-H-i-s'));
                    $files[] = $filename;
                }

                $dd->setFiles($files);
                $dd->setStatut(1);
                $dd->setSecteur($secteur);
                $dd->setAgent($agent);
                $dd->setClient($user);
                $dd->setProduit($produit);
                $dd->setDateDemande(new DateTime());
                $this->entityManager->persist($dd);
                $this->entityManager->flush();

                return $this->redirectToRoute('client_demandedevis_list', ['token' => $token]);
                // return $this->redirectToRoute('client_demandedevis_fiche', ['token' => $token, 'id' => $dd->getId()]);
            } catch(Exception $ex){
                $error = $ex->getMessage();
            }
        }

        return $this->render('user_category/client/dd/demandedevis/demandedevis_form.html.twig',[
            'form' => $form->createView(),
            'error' => $error,
            'isEdit' => $isEdit,
            'produit' => $produit,
            'filesDirectory' => $this->getParameter('files_directory_relative'),
            'agent' => $agent,
            'token' => $token
        ]);
    }

    /**
     * @Route("/{id}/fiche", name="client_demandedevis_fiche")
     */
    public function fiche($token, DemandeDevis $dd): Response
    {
        $secteurId = $this->session->get('secteurId');
        $secteur = $this->secteurRepository->find($secteurId);
        $agent = $this->userRepository->findAgentByToken($token);
        $allDevis = $this->repoDevis->findBy(['demandeDevis'=> $dd]);

        return $this->render('user_category/client/dd/demandedevis/demandedevis_details.html.twig',[
            'dd' => $dd,
            'filesDirectory' => $this->getParameter('files_directory_relative'),
            'agent' => $agent,
            'error' => null,
            'token' => $token,
            'allDevis' => $allDevis
        ]);
    }

    
    /**
     * @Route("/{dd}/devis/{devis}/fiche", name="client_agent_devis_fiche")
     */
    public function client_agent_devis_fiche($token, DemandeDevis $dd, Devis $devis, Request $request)
    {
        $agent = $this->userRepository->findAgentByToken($token);
        $formDevis = $this->createForm(DevisType::class, $devis)
            ->remove('title')
            ->remove('price')
            ->remove('files')
        ;
        $formDevis->handleRequest($request);

        if($formDevis->isSubmitted() && $formDevis->isValid()) {
            $this->entityManager->persist($devis);
            $this->entityManager->flush();
            $this->addFlash(
               'success',
               'Devis "'.$devis->getTitle().'" modifié'
            );
            return $this->redirectToRoute('client_demandedevis_fiche', ['token' => $token, 'id' => $dd->getId()]);
        }

        return $this->render('user_category/client/dd/devis/devis_details.html.twig',[
            'dd' => $dd,
            'devis' => $devis,
            'agent' => $agent,
            'token' => $token,
            'filesDirectory' => $this->getParameter('files_directory_relative'),
            'formDevis' => $formDevis->createView(),
            'DEVIS_STATUS' => Devis::DEVIS_STATUS
        ]);
    }

    /**
     * @Route("/{dd}/devis/{devis}/reject", name="agent_client_devis_reject")
     */
    public function agent_client_devis_reject($token, DemandeDevis $dd, Devis $devis)
    {
        $devis->setStatus(Devis::DEVIS_STATUS['REJECTED']);
        $this->entityManager->persist($devis);
        $this->entityManager->flush();
        $this->addFlash(
           'danger',
           'Devis rejeté'
        );
        return $this->redirectToRoute('client_demandedevis_fiche', ['token' => $token, 'id' => $dd->getId()]);
    }
    
    
    /**
     * @Route("/{dd}/devis/{devis}/signature/step/one", name="client_devis_signature_step_one")
     */
    public function client_devis_signature_step_one($token, DemandeDevis $dd, Devis $devis): Response
    {
        $agent = $this->userRepository->findAgentByToken($token);
        return $this->render('user_category/client/dd/devis/signature-step/signature_devis_step_one.html.twig',[
            'dd' => $dd,
            'devis' => $devis,
            'agent' => $agent,
            'token' => $token,
        ]);    
    }

    /**
     * @Route("/{dd}/devis/{devis}/signature/step/two", name="client_devis_signature_step_two")
     */
    public function client_devis_signature_step_two($token, DemandeDevis $dd, Devis $devis, FormFactoryInterface $formFactory, Request $request): Response
    {
        
        $user = (object) $this->getUser();
        $agent = $this->userRepository->findAgentByToken($token);

        $form = $formFactory
            ->createNamedBuilder("upload-contrat-form", FormType::class)
            ->add('file', FileType::class, [
                'mapped' => false,
                "required" => true,
                'constraints' => [
                    new NotNull(["message" => "Fichier obligatoire"]),
                    new File([
                        // 'maxSize' => '1024k',
                        'mimeTypes' => [
                            "application/pdf", 
                            "application/x-pdf"
                        ],
                        'mimeTypesMessage' => 'Sélectionner un fichier PDF valide',
                    ])
                ]
            ])
            ->getForm();

        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            try{
                $file = $form->get('file')->getData();
                $filename = $this->fileHandler->upload($file, "digital/devis/contrat/client/".$user->getId()."/".date('Y-m-d-H-i-s'));
                $devis->setContratFileName($filename);
                $this->entityManager->persist($devis);
                $this->entityManager->flush();
                return $this->redirectToRoute('client_devis_signature_step_three', ['token' => $token, 'dd' => $dd->getId(), 'devis' => $devis->getId()]);
            } catch(Exception $ex){
                $error = $ex->getMessage();
                $this->addFlash('danger', $error);
            }

        }


        return $this->render('user_category/client/dd/devis/signature-step/signature_devis_step_two.html.twig',[
            'dd' => $dd,
            'devis' => $devis,
            'agent' => $agent,
            'token' => $token,
            'form' => $form->createView()
        ]);    
    }

    /**
     * @Route("/{dd}/devis/{devis}/signature/step/three", name="client_devis_signature_step_three")
     */
    public function client_devis_signature_step_three($token, DemandeDevis $dd, Devis $devis, StripeService $stripeService, Request $request, FormFactoryInterface $formFactory): Response
    {
        /** @var User $client */
        $client = $this->getUser();
        $agent = $this->userRepository->findAgentByToken($token);

        // $devisPrice = $devis->getPrice();
        // $stripeIntentSecret = $stripeService->intentSecret($devisPrice);
        $stripePublishableKey = $_ENV['STRIPE_PUBLIC_KEY'];
        $orderDigital = new OrderDigital();
        
        $form = $formFactory
            ->createNamedBuilder("payment-form")
            ->add('token', HiddenType::class, [
                'constraints' => [new NotBlank()],
            ])
            ->getForm();

        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $stripeToken =  $form->get('token')->getData();
            
            $orderDigital->setAmount($devis->getPrice());
            $orderDigital->setAgent($agent);
            $orderDigital->setAgentEmail($agent->getEmail());
            $orderDigital->setClient($client);
            $orderDigital->setClientEmail($client->getEmail());
            $orderDigital->setDevis($devis);

            $chargeId = $stripeService
                ->createCharge(
                    $stripeToken, 
                    $devis->getPrice(), ['description' => 'Paiement signature devis']
            );
            $orderDigital->setStripeChargeId($chargeId);

            $devis->setStatus(Devis::DEVIS_STATUS['PAID']);
            $this->entityManager->persist($orderDigital);
            $this->entityManager->flush();
            $this->addFlash('success', 'Devis payé');
            return $this->redirectToRoute('client_agent_devis_fiche', ['token' => $token, 'dd' => $dd->getId(), 'devis' => $devis->getId()]);
        }
        return $this->render('user_category/client/dd/devis/signature-step/signature_devis_step_three.html.twig',[
            'dd' => $dd,
            'devis' => $devis,
            'agent' => $agent,
            'token' => $token,
            'stripePublishableKey' => $stripePublishableKey,
            'form' => $form->createView()
        ]);    
    }

    /**
     * @Route("/{dd}/devis/{devis}/download", name="client_devis_download")
     */
    public function client_devis_download(DemandeDevis $dd, Devis $devis, DompdfWrapperInterface $wrapper)
    {
        $html = $this->renderView('pdf/signature_devis.html.twig', [
            'dd' => $dd,
            'devis' => $devis
        ]);

        $date = (new \DateTime())->format('Y-m-d m:s');
        return $wrapper->getStreamResponse($html, "signature-devis-$date.pdf", ['isRemoteEnabled' => true]);
    }
}
