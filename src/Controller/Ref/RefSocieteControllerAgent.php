<?php

namespace App\Controller\Ref;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use App\Entity\RefSociete;
use App\Form\RefSocieteFilterType;
use App\Form\RefSocieteFormType;
use App\Repository\RefSocieteRepository;
use App\Repository\SecteurRepository;
use App\Services\FileHandler;
use App\Services\SearchService;
use App\Util\PopupUtil;
use App\Util\Search\MyCriteriaParam;
use App\Util\Status;
use Knp\Component\Pager\PaginatorInterface;
use Exception;
use Symfony\Component\HttpFoundation\Session\SessionInterface;

/**
 * @Route("/agent/refsociete")
 */
class RefSocieteControllerAgent extends AbstractController
{
    private $entityManager;
    private $refSocieteRepository;
    private $session;
    private $fileHandler;

    public function __construct(EntityManagerInterface $entityManager, 
        RefSocieteRepository $refSocieteRepository, 
        SessionInterface $session, 
        FileHandler $fileHandler){
        $this->entityManager = $entityManager;
        $this->refSocieteRepository = $refSocieteRepository;
        $this->session = $session;
        $this->fileHandler = $fileHandler;
    }

   /**
     * @Route("/", name="agent_refsociete_list")
     */
    public function index(Request $request, PaginatorInterface $paginator, SearchService $searchService): Response
    {
        $secteurId = $this->session->get('secteurId');
        $user = (object)$this->getUser();
        $page = $request->query->get('page', 1);
        $limit = 6;
        $criteria = [
            ['prop' => 'nom', 'op' => 'LIKE']
        ];

        $filter = [];

        $form = $this->createForm(RefSocieteFilterType::class, $filter, [
            'method' => 'GET'
        ]);

        $form->handleRequest($request);
        $filter = $form->getData();

        $query = $this->entityManager
            ->createQueryBuilder()
            ->select('r')
            ->from(RefSociete::class, 'r')
            ->join('r.secteur', 's');
        ;  

        $where =  $searchService->getWhere($filter, new MyCriteriaParam($criteria, 'r'));   
        $query->where($where["where"]." and r.statut != 0 and s.id = :secteurId ");
        $where["params"]["secteurId"] = $secteurId;
        $searchService->setAllParameters($query, $where["params"]);
        $searchService->addOrderBy($query, $filter, ['sort' => 'r.nom', 'direction' => 'asc']);

        $refList = $paginator->paginate(
            $query,
            $page,
            $limit
        );

        return $this->render('user_category/agent/ref/societe/societe_list.html.twig', [
            'refList' => $refList,
            'filesDirectory' => $this->getParameter('files_directory_relative'),
            'form' => $form->createView()
        ]);

    }
    
    /**
     * @Route("/popup", name="agent_refsociete_popup")
     */
    public function popup(Request $request, PaginatorInterface $paginator, SearchService $searchService): Response
    {
        $secteurId = $this->session->get('secteurId');
        $user = (object)$this->getUser();
        $opener = $request->query->get('opener', '');
        $popup = $request->query->get('popup', '');
        $mapPopup = PopupUtil::getMapPopup($opener, $popup);

        $page = $request->query->get('page', 1);
        $limit = 6;
        $criteria = [
            ['prop' => 'nom', 'op' => 'LIKE']
        ];

        $filter = [];

        $form = $this->createForm(RefSocieteFilterType::class, $filter, [
            'method' => 'GET'
        ]);

        $form->handleRequest($request);
        $filter = $form->getData();

        $query = $this->entityManager
            ->createQueryBuilder()
            ->select('r')
            ->from(RefSociete::class, 'r')
            ->join('r.secteur', 's');
        ;  

        $where =  $searchService->getWhere($filter, new MyCriteriaParam($criteria, 'r'));   
        $query->where($where["where"]." and r.statut != 0 and s.id = :secteurId ");
        $where["params"]["secteurId"] = $secteurId;
        $searchService->setAllParameters($query, $where["params"]);
        $searchService->addOrderBy($query, $filter, ['sort' => 'r.nom', 'direction' => 'asc']);

        $refList = $paginator->paginate(
            $query,
            $page,
            $limit
        );

        return $this->render('user_category/agent/ref/societe/societe_popup.html.twig', [
            'filesDirectory' => $this->getParameter('files_directory_relative'),
            'refList' => $refList,
            'form' => $form->createView(),
            'mapPopup' => $mapPopup,
            'opener' => $opener,
            'popup' => $popup
        ]);

    }
    
    /**
     * @Route("/new", name="agent_refsociete_new")
     */
    public function new(Request $request, SecteurRepository $secteurRepository): Response
    {
        $isEdit = false;
        $secteurId = $this->session->get('secteurId');
        $secteur = $secteurRepository->find($secteurId);
        $ref = new RefSociete();
        $form = $this->createForm(RefSocieteFormType::class, $ref);

        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {

            try{
                $imageFile = $form->get('imageFile')->getData();
                if ($imageFile) {
                    $photo = $this->fileHandler->upload($imageFile, "images/ref/societe");
                    $ref->setLogo($photo);
                }
                $ref->setSecteur($secteur);
                $ref->setStatut(Status::VALID);
                $this->entityManager->persist($ref);
                $this->entityManager->flush();
                
                $this->addFlash('success', "Société ajoutée");
                return $this->redirectToRoute('agent_refsociete_list');
            } catch(Exception $ex){
                $error = $ex->getMessage();
                $this->addFlash('danger', $error);
            }
        }

        return $this->render('user_category/agent/ref/societe/societe_form.html.twig',[
            'form' => $form->createView(),
            'ref' => $ref,
            'filesDirectory' => $this->getParameter('files_directory_relative'),
            'isEdit' => $isEdit
        ]);
    }

    /**
     * @Route("/edit/{id}", name="agent_refsociete_edit")
     */
    public function edit(Request $request, RefSociete $ref): Response
    {
        $isEdit = true;
        $form = $this->createForm(RefSocieteFormType::class, $ref);

        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {

            try{
                $imageFile = $form->get('imageFile')->getData();
                if ($imageFile) {
                    $photo = $this->fileHandler->upload($imageFile, "images/ref/societe");
                    $ref->setLogo($photo);
                }
                $this->entityManager->persist($ref);
                $this->entityManager->flush();
                
                $this->addFlash('success', "Société modifiée");
                return $this->redirectToRoute('agent_refsociete_list');
            } catch(Exception $ex){
                $error = $ex->getMessage();
                $this->addFlash('danger', $error);
            }
        }

        return $this->render('user_category/agent/ref/societe/societe_form.html.twig',[
            'form' => $form->createView(),
            'ref' => $ref,
            'filesDirectory' => $this->getParameter('files_directory_relative'),
            'isEdit' => $isEdit
        ]);
    }

    /**
     * @Route("/delete/{id}", name="agent_refsociete_delete")
     */
    public function delete(RefSociete $ref): Response
    {
        try{
            $ref->setStatut(Status::INVALID);
            $this->entityManager->persist($ref);
            $this->entityManager->flush();
            $this->addFlash('success', 'Société supprimée');
        } catch(Exception $ex){
            $error = $ex->getMessage();
            $this->addFlash('error', $error);
        }
        return $this->redirectToRoute('agent_refsociete_list');
    }

}
