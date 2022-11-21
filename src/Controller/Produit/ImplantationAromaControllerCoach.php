<?php

namespace App\Controller\Produit;

use App\Entity\ImplantationAroma;
use App\Form\ImplantationAromaFormType;
use App\Services\SearchService;
use App\Services\StockService;
use App\Util\Search\MyCriteriaParam;
use DateTime;
use Doctrine\ORM\EntityManagerInterface;
use Exception;
use Knp\Component\Pager\PaginatorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;


#[Route('/coach/aroma/implantation')]
class ImplantationAromaControllerCoach extends AbstractController
{
    
    private $entityManager;
    public function __construct(EntityManagerInterface $entityManager){
        $this->entityManager = $entityManager;
    }
    
    
    
    #[Route('/new', name: 'admin_aroma_implantation_new')]
    public function new(Request $request): Response
    {

        $mere = new ImplantationAroma();
        $mere->setElementUnique(true);
        $mere->initFilles(1);
        $form = $this->createForm(ImplantationAromaFormType::class, $mere);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {

            try{
                //$this->stockService->saveIntenvaire($mere);
                $this->addFlash('success', 'Implantation ajoutée');
                //return $this->redirectToRoute('app_admin_stock_inventaire_list');
            } catch(Exception $ex){
                $this->addFlash('danger', $ex->getMessage());
            }
        }

        return $this->render('user_category/coach/aroma/implantation/implantation_form.html.twig', [
            'form' => $form->createView(),
            'isEdit' => false,
            'mere' => $mere
        ]);
    }

    /*
    #[Route('/inventaire/{id}/modif', name: 'app_admin_stock_inventaire_modif')]
    public function modif_inventaire(InventaireMere $mere, Request $request, InventaireFilleRepository $inventaireFilleRepository): Response
    {
        
        $mere->setInventaireFilles($inventaireFilleRepository->findValidByMere($mere->getId()));
        $mere->initFilles(0);
        $form = $this->createForm(InventaireMereFormType::class, $mere);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {

            try{
                $this->stockService->saveIntenvaire($mere);
                $this->addFlash('success', 'Inventaire modifié');
                return $this->redirectToRoute('app_admin_stock_inventaire_list');
            } catch(Exception $ex){
                $this->addFlash('danger', $ex->getMessage());
            }
        }

        return $this->render('admin/stock/inventaire.html.twig', [
            'form' => $form->createView(),
            'isEdit' => true 
        ]);
    }

    
    #[Route('/inventaire/{id}/supprimer', name: 'app_admin_stock_inventaire_supprimer')]
    public function supprimer_inventaire(InventaireMere $inventaire): Response
    {
        try{
            $this->stockService->supprimerInventaire($inventaire);
            $this->addFlash('success', 'Inventaire supprimé');
        } catch(Exception $ex){
            $this->addFlash('error', $ex->getMessage());
        }
        return $this->redirectToRoute('app_admin_stock_inventaire_list');
    }

    
    #[Route('/inventaireList', name: 'app_admin_stock_inventaire_list')]
    public function inventaire_list(Request $request, PaginatorInterface $paginator, SearchService $searchService): Response
    {
        $page = $request->query->get('page', 1);
        $limit = 6;
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
        ;  

        $where =  $searchService->getWhere($filter, new MyCriteriaParam($criteria, 'i')); 
        $where["where"] .= " and (i.statut is NULL or i.statut != 0)  ";  
        $query->where($where["where"]);
        $searchService->setAllParameters($query, $where["params"]);
        $searchService->addOrderBy($query, $filter, ['sort' => 'i.dateInventaire', 'direction' => 'desc']);

        $inventaireList = $paginator->paginate(
            $query,
            $page,
            $limit
        );

        return $this->render('admin/stock/inventaire_list.html.twig', [
            'inventaireList' => $inventaireList,
            'form' => $form->createView(),
        ]);

    }
    */
    
}
