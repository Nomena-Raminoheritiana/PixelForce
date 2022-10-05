<?php

namespace App\Controller\Ref;

use App\Entity\RefService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use App\Form\RefServiceFilterType;
use App\Form\RefServiceFormType;
use App\Repository\RefServiceRepository;
use App\Repository\SecteurRepository;
use App\Services\FileHandler;
use App\Services\SearchService;
use App\Util\PopupUtil;
use App\Util\Search\MyCriteriaParam;
use App\Util\Status\Status;
use Knp\Component\Pager\PaginatorInterface;
use Exception;
use Symfony\Component\HttpFoundation\Session\SessionInterface;

/**
 * @Route("/agent/refservice")
 */
class RefServiceControllerAgent extends AbstractController
{
    private $entityManager;
    private $refServiceRepository;
    private $session;
    private $fileHandler;

    public function __construct(EntityManagerInterface $entityManager, 
        RefServiceRepository $refServiceRepository, 
        SessionInterface $session, 
        FileHandler $fileHandler){
        $this->entityManager = $entityManager;
        $this->refServiceRepository = $refServiceRepository;
        $this->session = $session;
        $this->fileHandler = $fileHandler;
    }

   /**
     * @Route("/", name="agent_refservice_list")
     */
    public function index(Request $request, PaginatorInterface $paginator, SearchService $searchService): Response
    {
        $secteurId = $this->session->get('secteurId');
        $user = (object)$this->getUser();
        $page = $request->query->get('page', 1);
        $limit = 6;
        $criteria = [
            ['prop' => 'ref', 'op' => 'LIKE'],
            ['prop' => 'prixMin', 'op' => '>=', 'col' => 'prix', 'case_sensitive' => true],
            ['prop' => 'prixMax', 'op' => '<=', 'col' => 'prix', 'case_sensitive' => true]
        ];

        $filter = [];

        $form = $this->createForm(RefServiceFilterType::class, $filter, [
            'method' => 'GET'
        ]);

        $form->handleRequest($request);
        $filter = $form->getData();

        $query = $this->entityManager
            ->createQueryBuilder()
            ->select('r')
            ->from(RefService::class, 'r')
            ->join('r.secteur', 's');
        ;  

        $where =  $searchService->getWhere($filter, new MyCriteriaParam($criteria, 'r'));   
        $query->where($where["where"]." and r.statut != 0 and s.id = :secteurId ");
        $where["params"]["secteurId"] = $secteurId;
        $searchService->setAllParameters($query, $where["params"]);
        $searchService->addOrderBy($query, $filter, ['sort' => 'r.id', 'direction' => 'asc']);

        $refList = $paginator->paginate(
            $query,
            $page,
            $limit
        );

        return $this->render('user_category/agent/ref/service/service_list.html.twig', [
            'refList' => $refList,
            'filesDirectory' => $this->getParameter('files_directory_relative'),
            'form' => $form->createView()
        ]);

    }
    
    /**
     * @Route("/popup", name="agent_refservice_popup")
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
            ['prop' => 'ref', 'op' => 'LIKE'],
            ['prop' => 'prixMin', 'op' => '>=', 'col' => 'prix', 'case_sensitive' => true],
            ['prop' => 'prixMax', 'op' => '<=', 'col' => 'prix', 'case_sensitive' => true]
        ];

        $filter = [];

        $form = $this->createForm(RefServiceFilterType::class, $filter, [
            'method' => 'GET'
        ]);

        $form->handleRequest($request);
        $filter = $form->getData();

        $query = $this->entityManager
            ->createQueryBuilder()
            ->select('r')
            ->from(RefService::class, 'r')
            ->join('r.secteur', 's');
        ;  

        $where =  $searchService->getWhere($filter, new MyCriteriaParam($criteria, 'r'));   
        $query->where($where["where"]." and r.statut != 0 and s.id = :secteurId ");
        $where["params"]["secteurId"] = $secteurId;
        $searchService->setAllParameters($query, $where["params"]);
        $searchService->addOrderBy($query, $filter, ['sort' => 'r.id', 'direction' => 'asc']);

        $refList = $paginator->paginate(
            $query,
            $page,
            $limit
        );

        return $this->render('user_category/agent/ref/service/service_popup.html.twig', [
            'filesDirectory' => $this->getParameter('files_directory_relative'),
            'refList' => $refList,
            'form' => $form->createView(),
            'mapPopup' => $mapPopup,
            'opener' => $opener,
            'popup' => $popup
        ]);

    }
    
    /**
     * @Route("/new", name="agent_refservice_new")
     */
    public function new(Request $request, SecteurRepository $secteurRepository): Response
    {
        $isEdit = false;
        $secteurId = $this->session->get('secteurId');
        $secteur = $secteurRepository->find($secteurId);
        $ref = new RefService();
        $form = $this->createForm(RefServiceFormType::class, $ref);

        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {

            try{
                
                $ref->setSecteur($secteur);
                $ref->setStatut(Status::VALID);
                $this->entityManager->persist($ref);
                $this->entityManager->flush();
                
                $this->addFlash('success', "Service ajoutée");
                return $this->redirectToRoute('agent_refservice_list');
            } catch(Exception $ex){
                $error = $ex->getMessage();
                $this->addFlash('danger', $error);
            }
        }

        return $this->render('user_category/agent/ref/service/service_form.html.twig',[
            'form' => $form->createView(),
            'ref' => $ref,
            'filesDirectory' => $this->getParameter('files_directory_relative'),
            'isEdit' => $isEdit
        ]);
    }

    /**
     * @Route("/edit/{id}", name="agent_refservice_edit")
     */
    public function edit(Request $request, RefService $ref): Response
    {
        $isEdit = true;
        $form = $this->createForm(RefServiceFormType::class, $ref);

        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {

            try{
            
                $this->entityManager->persist($ref);
                $this->entityManager->flush();
                
                $this->addFlash('success', "Service modifiée");
                return $this->redirectToRoute('agent_refservice_list');
            } catch(Exception $ex){
                $error = $ex->getMessage();
                $this->addFlash('danger', $error);
            }
        }

        return $this->render('user_category/agent/ref/service/service_form.html.twig',[
            'form' => $form->createView(),
            'ref' => $ref,
            'filesDirectory' => $this->getParameter('files_directory_relative'),
            'isEdit' => $isEdit
        ]);
    }

    /**
     * @Route("/delete/{id}", name="agent_refservice_delete")
     */
    public function delete(RefService $ref): Response
    {
        try{
            $ref->setStatut(Status::INVALID);
            $this->entityManager->persist($ref);
            $this->entityManager->flush();
            $this->addFlash('success', 'Service supprimé');
        } catch(Exception $ex){
            $error = $ex->getMessage();
            $this->addFlash('error', $error);
        }
        return $this->redirectToRoute('agent_refservice_list');
    }

}
