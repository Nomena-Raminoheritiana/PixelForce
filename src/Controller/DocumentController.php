<?php

namespace App\Controller;

use App\Entity\Document;
use App\Entity\DocumentRecipient;
use App\Form\DocumentFilterType;
use App\Form\DocumentFormType;
use App\Form\DocumentRecipientFormType;
use App\Repository\DocumentRecipientRepository;
use App\Repository\DocumentRepository;
use App\Services\DocumentService;
use App\Services\FileHandler;
use App\Services\SearchService;
use App\Util\Search\MyCriteriaParam;
use DateTime;
use Doctrine\ORM\EntityManagerInterface;
use Exception;
use Knp\Component\Pager\PaginatorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\BinaryFileResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\ResponseHeaderBag;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/do")
 */
class DocumentController extends AbstractController
{
    private $entityManager;
    private $documentRepository;
    private $fileHandler;
    private $documentService;

    public function __construct(EntityManagerInterface $entityManager, DocumentRepository $documentRepository, FileHandler $fileHandler, DocumentService $documentService){
        $this->entityManager = $entityManager;
        $this->documentRepository = $documentRepository;
        $this->fileHandler = $fileHandler;
        $this->documentService = $documentService;
    }

    /**
     * @Route("/", name="do_document_list")
     */
    public function index(Request $request, PaginatorInterface $paginator, SearchService $searchService): Response
    {
        $error = null;
        $user = (object)$this->getUser();
        $page = $request->query->get('page', 1);
        $limit = 5;
        $criteria = [
            ['prop' => 'dateMin', 'op' => '>=', "col" => "dateCreation"],
            ['prop' => 'dateMax', 'op' => '<=', "col" => "dateCreation"],
            ['prop' => 'nom', 'op' => 'LIKE']
        ];

        $filter = [];

        $form = $this->createForm(DocumentFilterType::class, $filter, [
            'method' => 'GET'
        ]);

        $form->handleRequest($request);
        $filter = $form->getData();

        $query = $this->entityManager
            ->createQueryBuilder()
            ->select('d')
            ->from(Document::class, 'd')
            ->join('d.owner', 'o')
        ;  

        $where =  $searchService->getWhere($filter, new MyCriteriaParam($criteria, 'd'));   
        $query->where($where["where"]." and d.statut != 0 and o.id = :ownerId ");
        $where["params"]["ownerId"] = $user->getId();
        $searchService->setAllParameters($query, $where["params"]);
        $searchService->addOrderBy($query, $filter, ['sort' => 'd.dateCreation', 'direction' => 'asc']);

        $documentList = $paginator->paginate(
            $query,
            $page,
            $limit
        );

        return $this->render('user_category/do/document/document_list.html.twig', [
            'documentList' => $documentList,
            'form' => $form->createView(),
            'error' => $error,
            'filesDirectory' => $this->getParameter('files_directory_relative'),
            'page' => $page
        ]);

    }

    /**
     * @Route("/new", name="do_document_new")
     */
    public function new(Request $request): Response
    {
        $isEdit = false;
        $error = null;
        $doc = new Document();
        $form = $this->createForm(DocumentFormType::class, $doc);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {

            try{
                $file = $form->get('file')->getData();
                $filename = $this->fileHandler->upload($file, "docs");
                $doc->setFile($filename);
                $doc->setStatut(1);
                $doc->setOwner($this->getUser());
                $doc->setDateCreation(new DateTime());
                $this->entityManager->persist($doc);
                $this->entityManager->flush();

                return $this->redirectToRoute('do_document_list');
            } catch(Exception $ex){
                $error = $ex->getMessage();
            }
        }

        return $this->render('user_category/do/document/document_form.html.twig',[
            'form' => $form->createView(),
            'error' => $error,
            'isEdit' => $isEdit,
            'filesDirectory' => $this->getParameter('files_directory_relative')
        ]);
    }

    /**
     * @Route("/{id}/fiche", name="do_document_fiche")
     */
    public function fiche(Document $document, DocumentRecipientRepository $documentRecipientRepository): Response
    {
        $recList = $documentRecipientRepository->findValidByDocument($document->getId()); 
        return $this->render('user_category/do/document/document_fiche.html.twig',[
            'document' => $document,
            'recList' => $recList,
            'filesDirectory' => $this->getParameter('files_directory_relative')
        ]);
    }

    /**
     * @Route("/{id}/view", name="do_document_view")
     */
    public function view(DocumentRecipient $rec): Response
    {
        $response = new BinaryFileResponse(
            $this->getParameter('files_directory_relative')."/".
            $rec->getSignedFile()
        );
        $response->headers->set('Content-Type', 'appication/pdf');
        $response->setContentDisposition(
            ResponseHeaderBag::DISPOSITION_INLINE,
            'doc.pdf'
        );
        return $response;
    }

    /**
     * @Route("/{id}/send", name="do_document_send")
     */
    public function send(Document $document, Request $request): Response
    {
        $isEdit = false;
        $error = null;
        $rec = new DocumentRecipient();
        $form = $this->createForm(DocumentRecipientFormType::class, $rec);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {

            try{
                $rec->setDocument($document);
                $this->documentService->sendDocument($rec);
                $this->entityManager->persist($rec);
                $this->entityManager->flush();

                return $this->redirectToRoute('do_document_fiche', ['id' => $document->getId()]);
            } catch(Exception $ex){
                $error = $ex->getMessage();
            }
        }

        return $this->render('user_category/do/document/document_send.html.twig',[
            'form' => $form->createView(),
            'error' => $error,
            'document' => $document,
            'filesDirectory' => $this->getParameter('files_directory_relative')
        ]);
    }

}
