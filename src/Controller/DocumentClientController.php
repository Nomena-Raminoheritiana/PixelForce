<?php

namespace App\Controller;

use App\Entity\Document;
use App\Entity\DocumentRecipient;
use App\Form\DocumentFilterType;
use App\Form\DocumentClientFormType;
use App\Form\DocumentPayFormType;
use App\Form\SignDocumentType;
use App\Repository\DocumentRecipientRepository;
use App\Services\DocumentService;
use App\Services\FileHandler;
use App\Services\StripeService;
use Doctrine\ORM\EntityManagerInterface;
use Exception;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\BinaryFileResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\ResponseHeaderBag;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use DateTime;
/**
 * @Route("/dc/{token}")
 */
class DocumentClientController extends AbstractController
{
    private $entityManager;
    private $documentRecipientRepository;
    private $fileHandler;
    private $documentService;
    private $stripeService;

    public function __construct(EntityManagerInterface $entityManager, DocumentRecipientRepository $documentRecipientRepository, FileHandler $fileHandler, DocumentService $documentService, StripeService $stripeService){
        $this->entityManager = $entityManager;
        $this->documentRecipientRepository = $documentRecipientRepository;
        $this->fileHandler = $fileHandler;
        $this->documentService = $documentService;
        $this->stripeService = $stripeService;
    }

    /**
     * @Route("/", name="dc_document_fiche")
     */
    public function index($token): Response
    {
        $rec = $this->documentRecipientRepository->findRecipientByToken($token);
        return $this->render('user_category/dc/document/document_fiche.html.twig',[
            'rec' => $rec,
            'token' => $token,
            'error' => null,
            'filesDirectory' => $this->getParameter('files_directory_relative')
        ]);
    }

    /**
     * @Route("/view", name="dc_document_view")
     */
    public function view($token): Response
    {
        $rec = $this->documentRecipientRepository->findRecipientByToken($token);
        $response = new BinaryFileResponse(
            $this->getParameter('files_directory_relative')."/".(
            $rec->getSignedFile() ?
            $rec->getSignedFile() : $rec->getDocument()->getFile()
            )
        );
        $response->headers->set('Content-Type', 'appication/pdf');
        $response->setContentDisposition(
            ResponseHeaderBag::DISPOSITION_INLINE,
            'doc.pdf'
        );
        return $response;
    }

    /**
     * @Route("/sign", name="dc_document_sign")
     */
    public function sign($token, Request $request): Response
    {
        $filesDirectory = $this->getParameter('files_directory_relative');
        $error = null;
        $rec = $this->documentRecipientRepository->findRecipientByToken($token);
        $form = $this->createForm(SignDocumentType::class);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {

            try{
                $signature = $form->get('signature')->getData();
                $photo = $this->fileHandler->saveBase64($signature, $filesDirectory."docs/signatures/signature-".$rec->getId().'.png');
                $this->documentService->signDocument($rec, $photo);
                $this->addFlash('success', 'Document signé');

                return $this->redirectToRoute('dc_document_set_intent', ['token' => $token]);
            } catch(Exception $ex){
                $error = $ex->getMessage();
            }
        }

        return $this->render('user_category/dc/document/document_sign.html.twig',[
            'rec' => $rec,
            'form' => $form->createView(),
            'error' => $error,
            'token' => $token,
            'filesDirectory' => $filesDirectory
        ]);
    }

    /**
     * @Route("/setIntent", name="dc_document_set_intent")
     */
    public function setIntent($token, Request $request): Response
    {
        
       
        try{
            $rec = $this->documentRecipientRepository->findRecipientByToken($token);
            $paymentIntent = $this->stripeService->paymentIntent($rec->getDocument()->getAmount());
            $rec->setPaymentIntentId($paymentIntent->id);
            $this->entityManager->flush();

            return $this->redirectToRoute('dc_document_pay', ['token' => $token]);
        } catch(Exception $ex){
            $error = $ex->getMessage();
            $this->addFlash('danger', $error);
            return $this->redirectToRoute('dc_document_sign', ['token' => $token]);
        }
    }

    /**
     * @Route("/upload", name="dc_document_upload")
     */
    public function upload($token,Request $request): Response
    {
        $rec = $this->documentRecipientRepository->findRecipientByToken($token);
        $error = null;
        $doc = new Document();
        $form = $this->createForm(DocumentClientFormType::class, $doc);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {

            try{
                $file = $form->get('file')->getData();
                $filename = $this->fileHandler->uploadTmp($file, "Contrats", $token);
                $rec->setSignedFile($filename);
                // $rec->setDateSigned(new DateTime());
                $this->entityManager->flush(); 

                $this->addFlash('success', 'Document importé');

                return $this->redirectToRoute('dc_document_sign', ['token' => $token]);
            } catch(Exception $ex){
                $error = $ex->getMessage();
            }
        }

        return $this->render('user_category/dc/document/document_upload.html.twig',[
            'form' => $form->createView(),
            'error' => $error,
            'token' => $token,
            'filesDirectory' => $this->getParameter('files_directory_relative')
        ]);
    }

    /**
     * @Route("/pay", name="dc_document_pay")
     */
    public function pay($token, Request $request): Response
    {
        $error = null;
        $rec = $this->documentRecipientRepository->findRecipientByToken($token);
        $form = $this->createForm(DocumentPayFormType::class);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {

            try{
                $stripeToken = $form->get('token')->getData();
                $this->documentService->pay($rec);
                $this->addFlash('success', 'Paiement effectué');
                return $this->redirectToRoute('dc_document_fiche', ['token' => $token]);
            } catch(Exception $ex){
                $error = $ex->getMessage();
            }
        }

        $stripeIntentSecret = $this->stripeService->intentSecretByPaymentIntentId($rec->getPaymentIntentId());
        return $this->render('user_category/dc/document/document_pay.html.twig',[
            'stripe_public_key' => $this->getParameter('stripe_public_key'),
            'rec' => $rec,
            'form' => $form->createView(),
            'error' => $error,
            'token' => $token,
            'stripeIntentSecret' => $stripeIntentSecret,
        ]);
    }
}
