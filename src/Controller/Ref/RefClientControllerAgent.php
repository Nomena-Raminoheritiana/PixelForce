<?php

namespace App\Controller\Ref;

use App\Entity\RefClient;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use App\Entity\RefSociete;
use App\Form\RefClientFilterType;
use App\Form\RefClientFormType;
use App\Repository\RefClientRepository;
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
 * @Route("/agent/refclient")
 */
class RefClientControllerAgent extends AbstractController
{
    private $entityManager;
    private $refClientRepository;
    private $session;
    private $fileHandler;

    public function __construct(EntityManagerInterface $entityManager, 
        RefClientRepository $refClientRepository, 
        SessionInterface $session, 
        FileHandler $fileHandler){
        $this->entityManager = $entityManager;
        $this->refClientRepository = $refClientRepository;
        $this->session = $session;
        $this->fileHandler = $fileHandler;
    }

   /**
     * @Route("/", name="agent_refclient_list")
     */
    public function index(Request $request, PaginatorInterface $paginator, SearchService $searchService): Response
    {
        $secteurId = $this->session->get('secteurId');
        $user = (object)$this->getUser();
        $page = $request->query->get('page', 1);
        $limit = 6;
        $criteria = [
            ['prop' => 'nom', 'col' => "concat(concat(coalesce(r.prenom, ''), ' '), r.nom)", 'alias' => null, 'op' => 'LIKE']
        ];

        $filter = [];

        $form = $this->createForm(RefClientFilterType::class, $filter, [
            'method' => 'GET'
        ]);

        $form->handleRequest($request);
        $filter = $form->getData();

        $query = $this->entityManager
            ->createQueryBuilder()
            ->select('r')
            ->from(RefClient::class, 'r')
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

        return $this->render('user_category/agent/ref/client/client_list.html.twig', [
            'refList' => $refList,
            'filesDirectory' => $this->getParameter('files_directory_relative'),
            'form' => $form->createView()
        ]);

    }
    
    /**
     * @Route("/popup", name="agent_refclient_popup")
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
            ['prop' => 'nom', 'col' => "concat(concat(coalesce(r.prenom, ''), ' '), r.nom)", 'alias' => null, 'op' => 'LIKE']
        ];

        $filter = [];

        $form = $this->createForm(RefClientFilterType::class, $filter, [
            'method' => 'GET'
        ]);

        $form->handleRequest($request);
        $filter = $form->getData();

        $query = $this->entityManager
            ->createQueryBuilder()
            ->select('r')
            ->from(RefClient::class, 'r')
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

        return $this->render('user_category/agent/ref/client/client_popup.html.twig', [
            'filesDirectory' => $this->getParameter('files_directory_relative'),
            'refList' => $refList,
            'form' => $form->createView(),
            'mapPopup' => $mapPopup,
            'opener' => $opener,
            'popup' => $popup
        ]);

    }
    
    /**
     * @Route("/new", name="agent_refclient_new")
     */
    public function new(Request $request, SecteurRepository $secteurRepository): Response
    {
        $isEdit = false;
        $secteurId = $this->session->get('secteurId');
        $secteur = $secteurRepository->find($secteurId);
        $ref = new RefClient();
        $form = $this->createForm(RefClientFormType::class, $ref);

        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {

            try{
                
                $ref->setSecteur($secteur);
                $ref->setStatut(Status::VALID);
                $this->entityManager->persist($ref);
                $this->entityManager->flush();
                
                $this->addFlash('success', "Client ajouté");
                return $this->redirectToRoute('agent_refclient_list');
            } catch(Exception $ex){
                $error = $ex->getMessage();
                $this->addFlash('danger', $error);
            }
        }

        return $this->render('user_category/agent/ref/client/client_form.html.twig',[
            'form' => $form->createView(),
            'ref' => $ref,
            'filesDirectory' => $this->getParameter('files_directory_relative'),
            'isEdit' => $isEdit
        ]);
    }

    /**
     * @Route("/edit/{id}", name="agent_refclient_edit")
     */
    public function edit(Request $request, RefClient $ref): Response
    {
        $isEdit = true;
        $form = $this->createForm(RefClientFormType::class, $ref);

        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {

            try{
            
                $this->entityManager->persist($ref);
                $this->entityManager->flush();
                
                $this->addFlash('success', "Client modifié");
                return $this->redirectToRoute('agent_refclient_list');
            } catch(Exception $ex){
                $error = $ex->getMessage();
                $this->addFlash('danger', $error);
            }
        }

        return $this->render('user_category/agent/ref/client/client_form.html.twig',[
            'form' => $form->createView(),
            'ref' => $ref,
            'filesDirectory' => $this->getParameter('files_directory_relative'),
            'isEdit' => $isEdit
        ]);
    }

    /**
     * @Route("/delete/{id}", name="agent_refclient_delete")
     */
    public function delete(RefClient $ref): Response
    {
        try{
            $ref->setStatut(Status::INVALID);
            $this->entityManager->persist($ref);
            $this->entityManager->flush();
            $this->addFlash('success', 'Client supprimé');
        } catch(Exception $ex){
            $error = $ex->getMessage();
            $this->addFlash('error', $error);
        }
        return $this->redirectToRoute('agent_refclient_list');
    }

}
