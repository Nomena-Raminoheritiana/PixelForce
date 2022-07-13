<?php

namespace App\Controller\DemandeDevis;

use App\Entity\DemandeDevis;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use App\Entity\Produit;
use App\Entity\ProduitDD;
use App\Form\DemandeDevisFormType;
use App\Form\MyProductFilter;
use App\Form\MyProduitFilterType;
use App\Form\ProduitFormType;
use App\Form\ProduitFilterType;
use App\Repository\DemandeDevisRepository;
use Nucleos\DompdfBundle\Wrapper\DompdfWrapperInterface;

use App\Repository\ProduitRepository;
use App\Repository\SecteurRepository;
use App\Repository\UserRepository;
use Knp\Component\Pager\PaginatorInterface;
use App\Services\SearchService;
use App\Services\ExcelService;
use App\Services\FileHandler;
use App\Util\GenericUtil;
use App\Util\PopupUtil;
use App\Util\Search\MyCriteriaParam;
use DateTime;
use Exception;
use SessionIdInterface;
use Stripe\Product;
use Symfony\Component\HttpFoundation\Session\SessionInterface;

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

    public function __construct(UserRepository $userRepository, SessionInterface $session, EntityManagerInterface $entityManager, DemandeDevisRepository $demandeDevisRepository, FileHandler $fileHandler, SecteurRepository $secteurRepository){
        $this->entityManager = $entityManager;
        $this->demandeDevisRepository = $demandeDevisRepository;
        $this->fileHandler = $fileHandler;
        $this->secteurRepository = $secteurRepository;
        $this->session = $session;
        $this->userRepository = $userRepository;
    }

//    /**
//      * @Route("/", name="admin_product_list")
//      */
//     public function index(Request $request, PaginatorInterface $paginator, SearchService $searchService): Response
//     {
//         $error = null;
//         $user = (object)$this->getUser();
//         $page = $request->query->get('page', 1);
//         $limit = 5;
//         $criteria = [
//             ['prop' => 'categorie.id', 'col' => 'id', 'alias' => 'c'],
//             ['prop' => 'description', 'op' => 'LIKE'],
//             ['prop' => 'prixMin', 'op' => '>=', "col" => "prix"],
//             ['prop' => 'prixMax', 'op' => '<=', "col" => "prix"],
//             ['prop' => 'nom', 'op' => 'LIKE']
//         ];

//         $filter = [];

//         $form = $this->createForm(MyProduitFilterType::class, $filter, [
//             'method' => 'GET'
//         ]);

//         $form->handleRequest($request);
//         $filter = $form->getData();

//         $query = $this->entityManager
//             ->createQueryBuilder()
//             ->select('p')
//             ->from(Produit::class, 'p')
//             ->join('p.categorie', 'c')
//             ->join('p.secteur', 's')
//         ;  

//         $where =  $searchService->getWhere($filter, new MyCriteriaParam($criteria, 'p'));   
//         $query->where($where["where"]." and p.statut != 0 and s.id = :secteurId ");
//         $where["params"]["secteurId"] = $user->getUniqueCoachSecteur()->getId();
//         $searchService->setAllParameters($query, $where["params"]);
//         $searchService->addOrderBy($query, $filter, ['sort' => 'p.id', 'direction' => 'asc']);

//         $productList = $paginator->paginate(
//             $query,
//             $page,
//             $limit
//         );

//         return $this->render('user_category/coach/product/product_list.html.twig', [
//             'productList' => $productList,
//             'form' => $form->createView(),
//             'error' => $error,
//             'filesDirectory' => $this->getParameter('files_directory_relative'),
//             'page' => $page,
//             'queryString' => $request->getQueryString()
//         ]);

//     }
    

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
                
                $dd->setStatut(1);
                $dd->setSecteur($secteur);
                $dd->setAgent($agent);
                $dd->setClient($user);
                $dd->setProduit($produit);
                $dd->setDateDemande(new DateTime());
                $this->entityManager->persist($dd);
                $this->entityManager->flush();

                return $this->redirectToRoute('client_demandedevis_fiche', ['token' => $token, 'id' => $dd->getId()]);
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
        return $this->render('user_category/client/dd/demandedevis/demandedevis_details.html.twig',[
            'dd' => $dd,
            'filesDirectory' => $this->getParameter('files_directory_relative'),
            'agent' => $agent,
            'error' => null,
            'token' => $token
        ]);
    }

    

    
    
}
