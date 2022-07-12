<?php

namespace App\Controller\Order;

use App\Controller\BaseControllerAdmin;
use App\Entity\Order;
use App\Entity\Utilisateur;
use App\Form\OrderClientFilterType;
use App\Repository\OrderRepository;
use App\Services\OrderService;
use App\Services\SearchService;
use App\Util\Search\MyCriteriaParam;
use Doctrine\ORM\EntityManagerInterface;
use Exception;
use Knp\Component\Pager\PaginatorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/agent/order")
 */
class OrderControllerAdmin extends AbstractController
{
    private $entityManager;
    private $orderRepository;
    private $orderService;
    private $session; 

    public function __construct(EntityManagerInterface $entityManager, OrderRepository $orderRepository, OrderService $orderService, SessionInterface $session)
    {
        $this->entityManager = $entityManager;
        $this->orderRepository = $orderRepository;
        $this->orderService = $orderService;
        $this->session = $session;
    }

    /**
     * @Route("/", name="admin_order_list")
     */
    public function index(Request $request, PaginatorInterface $paginator, SearchService $searchService): Response
    {

        $user = (object)$this->getUser();
        $secteurId = $this->session->get('secteurId');
        $page = $request->query->get('page', 1);
        $limit = 5;
        $criteria = [
            ['prop' => 'status'],
            ['prop' => 'dateMin', 'col' => 'orderDate', 'op' => '>='],
            ['prop' => 'dateMax', 'col' => 'orderDate', 'op' => '<='],
            ['prop' => 'clientName', 'col' => "concat(concat(coalesce(u.prenom, ''), ' '), u.nom)", 'alias' => null, 'op' => 'LIKE']
        ];

        $filter = [];

        $form = $this->createForm(OrderClientFilterType::class, $filter, [
            'method' => 'GET',
            'admin' => true
        ]);

        $form->handleRequest($request);
        $filter = $form->getData();

        $query = $this->entityManager
            ->createQueryBuilder()
            ->select('o')
            ->from(Order::class, 'o')
            ->join('o.user', 'u')
            ->join('o.agent', 'a')
            ->join('o.secteur', 's')
        ;  

        $where =  $searchService->getWhere($filter, new MyCriteriaParam($criteria, 'o'));   
        $query->where($where["where"]." and a.id = :agentId and s.id = :secteurId ");
        $where["params"]["agentId"] = $user->getId();
        $where["params"]["secteurId"] = $secteurId;
        $searchService->setAllParameters($query, $where["params"]);
        $searchService->addOrderBy($query, $filter, ['sort' => 'o.orderDate', 'direction' => 'desc']);

        $orderList = $paginator->paginate(
            $query,
            $page,
            $limit
        );

        return $this->render('user_category/agent/order/order_list.html.twig', [
            'orderList' => $orderList,
            'form' => $form->createView(),
        ]);

    }

    /**
     * @Route("/{id}", name="admin_order_details")
     */
    public function details(Request $request, Order $order): Response
    {
        $error = null;
        return $this->render('user_category/agent/order/order_details.html.twig',[
            'error' => $error,
            'order' => $order,
            'filesDirectory' => $this->getParameter('files_directory_relative')
        ]);

    }

    /**
     * @Route("/{id}/validate", name="admin_order_validate")
     */
    public function validate(Request $request, int $id): Response
    {
        try{
            $this->orderService->changeStatus($id, Order::VALIDATED);
            $this->addFlash(
                'success',
                'Commande validée'
            ); 
        } catch(Exception $ex){
            $this->addFlash(
               'error',
               $ex->getMessage()
            );
        } 
        return $this->redirectToRoute('admin_order_details', ['id' => $id]);
    }

}