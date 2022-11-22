<?php

namespace App\Controller\Produit;

use App\Entity\ImplantationAroma;
use App\Form\ImplantationAromaFormType;
use App\Repository\ImplantationElmtAromaRepository;
use App\Services\FileHandler;
use App\Services\ImplatationService;
use App\Services\SearchService;
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
    private $implatationService;
    private $fileHandler;
    public function __construct(EntityManagerInterface $entityManager, ImplatationService $implatationService, FileHandler $fileHandler){
        $this->entityManager = $entityManager;
        $this->implatationService = $implatationService;
        $this->fileHandler = $fileHandler;
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
                $imageFile = $form->get('imageFile')->getData();
                if ($imageFile) {
                    $photo = $this->fileHandler->upload($imageFile, "images\products\aroma\implantation");
                    $mere->setImage($photo);
                }
                $this->implatationService->saveImplantation($mere);
                $this->addFlash('success', 'Implantation ajoutée');
                return $this->redirectToRoute('admin_aroma_implantation_details', ['id' => $mere->getId()]);
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

    #[Route('/{id}/supprimer', name: 'admin_aroma_implantation_delete')]
    public function supprimer_inventaire(ImplantationAroma $mere): Response
    {
        try{
            $this->implatationService->supprimerImplantation($mere);
            $this->addFlash('success', 'Inventaire supprimé');
        } catch(Exception $ex){
            $this->addFlash('error', $ex->getMessage());
        }
        return new Response();
        //return $this->redirectToRoute('app_admin_stock_inventaire_list');
    }

    
    #[Route('/{id}/edit', name: 'admin_aroma_implantation_edit')]
    public function edit(ImplantationAroma $mere, Request $request, ImplantationElmtAromaRepository $implantationElmtAromaRepository): Response
    {
        
        $mere->setFilles($implantationElmtAromaRepository->findValidByMere($mere->getId()));
        $mere->initFilles(0);
        $form = $this->createForm(ImplantationAromaFormType::class, $mere);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {

            try{
                $imageFile = $form->get('imageFile')->getData();
                if ($imageFile) {
                    $photo = $this->fileHandler->upload($imageFile, "images\products\aroma\implantation");
                    $mere->setImage($photo);
                }
                $this->implatationService->saveImplantation($mere);
                $this->addFlash('success', 'Implantation modifiée');
                return $this->redirectToRoute('admin_aroma_implantation_details', ['id' => $mere->getId()]);
            } catch(Exception $ex){
                $this->addFlash('danger', $ex->getMessage());
            }
        }

        return $this->render('user_category/coach/aroma/implantation/implantation_form.html.twig', [
            'form' => $form->createView(),
            'isEdit' => true,
            'mere' => $mere 
        ]);
    }

    #[Route('/{id}/details', name: 'admin_aroma_implantation_details')]
    public function details(ImplantationAroma $mere): Response
    {
        return $this->render('user_category/coach/aroma/implantation/implantation_details.html.twig', [
            'mere' => $mere
        ]);
    }
    
    /*
    
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
