<?php

namespace App\Controller;

use App\Form\DocumentPayFormType;
use App\Form\SignDocumentType;
use App\Repository\DocumentRecipientRepository;
use App\Services\DocumentService;
use App\Services\FileHandler;
use Doctrine\ORM\EntityManagerInterface;
use Exception;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\BinaryFileResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\ResponseHeaderBag;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/dc/{token}")
 */
class DocumentClientController extends AbstractController
{
    private $entityManager;
    private $documentRecipientRepository;
    private $fileHandler;
    private $documentService;

    public function __construct(EntityManagerInterface $entityManager, DocumentRecipientRepository $documentRecipientRepository, FileHandler $fileHandler, DocumentService $documentService){
        $this->entityManager = $entityManager;
        $this->documentRecipientRepository = $documentRecipientRepository;
        $this->fileHandler = $fileHandler;
        $this->documentService = $documentService;
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
            $rec->getDateSigned() ?
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
                return $this->redirectToRoute('dc_document_fiche', ['token' => $token]);
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
                $this->documentService->pay($stripeToken, $rec);
                $this->addFlash('success', 'Paiement éffectué');
                return $this->redirectToRoute('dc_document_fiche', ['token' => $token]);
            } catch(Exception $ex){
                $error = $ex->getMessage();
            }
        }

        return $this->render('user_category/dc/document/document_pay.html.twig',[
            'stripe_public_key' => $this->getParameter('stripe_public_key'),
            'rec' => $rec,
            'form' => $form->createView(),
            'error' => $error,
            'token' => $token
        ]);
    }
}
