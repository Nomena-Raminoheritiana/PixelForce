<?php

namespace App\Controller\Devis;

use App\Entity\DemandeDevis;
use App\Entity\Devis;
use App\Entity\OrderDigital;
use App\Entity\User;
use App\Form\DevisType;
use App\Manager\EntityManager;
use App\Repository\UserRepository;
use App\Services\StripeService;
use App\Util\GenericUtil;
use Exception;
use Nucleos\DompdfBundle\Wrapper\DompdfWrapperInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\FormType;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use Symfony\Component\Form\FormFactoryInterface;
use Symfony\Component\HttpFoundation\BinaryFileResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\ResponseHeaderBag;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Validator\Constraints\File;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Component\Validator\Constraints\NotNull;

/**
 * @Route("/client/{token}/demandedevis")
 */
class ClientDevisController extends AbstractController
{
    private $userRepository;
    private $entityManager;

    public function __construct(UserRepository $userRepository, EntityManager $entityManager)
    {
        $this->userRepository = $userRepository;
        $this->entityManager = $entityManager;
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

    /**
     * @Route("/devis/{devis}/file/{index}", name="client_devis_file_download")
     */
    public function client_devis_file_download(Devis $devis, int $index)
    {
        $filepath = $devis->getFiles()[$index];
        $response = new BinaryFileResponse(
            $this->getParameter('files_directory_relative')."/".
            $devis->getFiles()[$index]
        );
        $response->setContentDisposition(
            ResponseHeaderBag::DISPOSITION_ATTACHMENT,
            GenericUtil::getFileName($filepath)
        );
        return $response;

    }
}
