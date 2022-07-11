<?php

namespace App\Controller\Stock;

use App\Controller\BaseControllerAdmin;
use App\Entity\InventaireMere;
use App\Entity\Mouvement;
use App\Form\EntreeType;
use App\Form\InventaireFilterType;
use App\Form\InventaireMereType;
use App\Form\ProductStockFilter;
use App\Models\EntreeMere;
use App\Services\SearchService;
use App\Services\StockService;
use App\Util\Search\MyCriteriaParam;
use App\Entity\ProduitQteStock;
use App\Repository\InventaireFilleRepository;
use Doctrine\ORM\EntityManagerInterface;
use Exception;
use Knp\Component\Pager\PaginatorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;

/**
 * @Route("/coach/stock")
 */
class StockControllerCoach extends AbstractController
{
    
    private $orderRepository;
    private $stockService;
    public function __construct(EntityManagerInterface $entityManager, StockService $stockService){
        $this->entityManager = $entityManager;
        $this->stockService = $stockService;
    }
    
    /**
     * @Route("/", name="admin_stock_list")
     */
    public function index(Request $request, PaginatorInterface $paginator, SearchService $searchService): Response
    {
        $page = $request->query->get('page', 1);
        $user = (object)$this->getUser();
        $limit = 5;
        $criteria = [
            ['prop' => 'qteStockMin', 'col' => 'qteStock', 'op' => '>='],
            ['prop' => 'qteStockMax', 'col' => 'qteStock', 'op' => '<='],
            ['prop' => 'categorie.id', 'col' => 'id', 'alias' => 'c'],
            ['prop' => 'nom', 'col' => 'nom', 'op' => 'LIKE', 'alias' => 'p']
        ];

        $filter = [];

        $form = $this->createForm(ProductStockFilter::class, $filter, [
            'method' => 'GET'
        ]);

        $form->handleRequest($request);
        $filter = $form->getData();

        $query = $this->entityManager
            ->createQueryBuilder()
            ->select('s')
            ->from(ProduitQteStock::class, 's')
            ->join('s.produit', 'p')
            ->join('p.categorie', 'c')
            ->join('p.secteur', 'sc')
        ;  

        $where =  $searchService->getWhere($filter, new MyCriteriaParam($criteria, 's'));   
        $query->where($where["where"]." and p.statut != 0 and sc.id = :secteurId ");
        $where["params"]["secteurId"] = $user->getUniqueCoachSecteur()->getId();
        $searchService->setAllParameters($query, $where["params"]);
        $searchService->addOrderBy($query, $filter, ['sort' => 'p.nom', 'direction' => 'asc']);

        $orderList = $paginator->paginate(
            $query,
            $page,
            $limit
        );

        return $this->render('user_category/coach/stock/stock_list.html.twig', [
            'productList' => $orderList,
            'form' => $form->createView()
        ]);

    }

    /**
     * @Route("/entree", name="admin_stock_entree")
     */
    public function saisie_entree(Request $request): Response
    {
        $error = null;
        $success = null;
        $entreeMere = new EntreeMere();
        $entreeMere->initEntrees(3);
        $form = $this->createForm(EntreeType::class, $entreeMere);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {

            try{
                $this->stockService->saveEntrees($entreeMere->getEntrees());
                $success = 'Mouvements effectués';
            } catch(Exception $ex){
                $error = $ex->getMessage();
            }
        }

        
        return $this->render('user_category/coach/stock/entree.html.twig', [
            'form' => $form->createView(),
            'error' => $error,
            'success' => $success
        ]);
    }

    /**
     * @Route("/inventaire", name="admin_stock_inventaire")
     */
    public function saisie_inventaire(Request $request): Response
    {
        $error = null;
        $success = null;
        $mere = new InventaireMere();
        $mere->setDateInventaire(new \Datetime());
        $mere->initFilles(3);
        $form = $this->createForm(InventaireMereType::class, $mere);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {

            try{
                $this->stockService->saveIntenvaire($this->getUser(), $mere);
                $success = 'Inventaire effectué';
            } catch(Exception $ex){
                $error = $ex->getMessage();
            }
        }

        return $this->render('user_category/coach/stock/inventaire.html.twig', [
            'form' => $form->createView(),
            'error' => $error,
            'success' => $success
        ]);
    }

    /**
     * @Route("/inventaire/{id}/modif", name="admin_stock_inventaire_modif")
     */
    public function modif_inventaire(InventaireMere $mere, Request $request, InventaireFilleRepository $inventaireFilleRepository): Response
    {
        $error = null;
        $success = null;
        $mere->setInventaireFilles($inventaireFilleRepository->findValidByMere($mere->getId()));
        $mere->initFilles(0);
        $form = $this->createForm(InventaireMereType::class, $mere);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {

            try{
                $this->stockService->saveIntenvaire($this->getUser(), $mere);
                $success = 'Inventaire modifié';
            } catch(Exception $ex){
                $error = $ex->getMessage();
            }
        }

        return $this->render('user_category/coach/stock/inventaire.html.twig', [
            'form' => $form->createView(),
            'error' => $error,
            'success' => $success,
            'btnText' => 'Modifier'
        ]);
    }

    /**
     * @Route("/inventaire/{id}", name="admin_stock_inventaire_fiche")
     */
    public function fiche_inventaire(InventaireMere $inventaire, InventaireFilleRepository $inventaireFilleRepository): Response
    {
        
        $inventaire->setInventaireFilles($inventaireFilleRepository->findValidByMere($inventaire->getId()));
        return $this->render('user_category/coach/stock/inventaire_fiche.html.twig', [
            'inventaire' => $inventaire
        ]);
    }

    /**
     * @Route("/inventaire/{id}/supprimer", name="admin_stock_inventaire_supprimer")
     */
    public function supprimer_inventaire(InventaireMere $inventaire): Response
    {
        try{
            $this->stockService->supprimerInventaire($inventaire);
            $this->addFlash('success', 'Inventaire supprimé');
            return $this->redirectToRoute('admin_stock_inventaire_list');
        } catch(Exception $ex){
            $this->addFlash('error', $ex->getMessage());
            return $this->redirectToRoute('admin_stock_inventaire_fiche', ['id' => $inventaire->getId()]);
        }

    }

    /**
     * @Route("/inventaireList", name="admin_stock_inventaire_list")
     */
    public function inventaire_list(Request $request, PaginatorInterface $paginator, SearchService $searchService): Response
    {
        $user = (object)$this->getUser();
        $page = $request->query->get('page', 1);
        $limit = 5;
        $criteria = [
            ['prop' => 'dateMin', 'col' => 'dateInventaire', 'op' => '>='],
            ['prop' => 'dateMax', 'col' => 'dateInventaire', 'op' => '<='],
            ['prop' => 'description', 'op' => 'LIKE']
        ];

        $filter = [];

        $form = $this->createForm(InventaireFilterType::class, $filter, [
            'method' => 'GET'
        ]);

        $form->handleRequest($request);
        $filter = $form->getData();

        $query = $this->entityManager
            ->createQueryBuilder()
            ->select('i')
            ->from(InventaireMere::class, 'i')
            ->join('i.secteur', 's')
        ;  

        $where =  $searchService->getWhere($filter, new MyCriteriaParam($criteria, 'i')); 
        $where["where"] .= " and (i.statut is NULL or i.statut != 0) and s.id = :secteurId ";  
        $where["params"]["secteurId"] = $user->getUniqueCoachSecteur()->getId();
        $query->where($where["where"]);
        $searchService->setAllParameters($query, $where["params"]);
        $searchService->addOrderBy($query, $filter, ['sort' => 'i.dateInventaire', 'direction' => 'desc']);

        $inventaireList = $paginator->paginate(
            $query,
            $page,
            $limit
        );

        return $this->render('user_category/coach/stock/inventaire_list.html.twig', [
            'inventaireList' => $inventaireList,
            'form' => $form->createView(),
        ]);

    }
}
