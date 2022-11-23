<?php

namespace App\Controller\Produit;

use App\Entity\ImplantationAroma;
use App\Entity\ImplantationMereAroma;
use App\Form\ImplantationAromaFormType;
use App\Repository\ImplantationElmtAromaRepository;
use App\Repository\ImplantationMereAromaRepository;
use App\Services\FileHandler;
use App\Services\ImplatationService;
use App\Services\SearchService;
use App\Util\Search\MyCriteriaParam;
use DateTime;
use Doctrine\ORM\EntityManagerInterface;
use Exception;
use Knp\Component\Pager\PaginatorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\RouterInterface;

#[Route('/coach/aroma/implantation')]
class ImplantationAromaControllerCoach extends AbstractController
{
    
    private $entityManager;
    private $implatationService;
    private $fileHandler;
    private $router;

    public function __construct(EntityManagerInterface $entityManager, ImplatationService $implatationService, FileHandler $fileHandler, RouterInterface $router){
        $this->entityManager = $entityManager;
        $this->implatationService = $implatationService;
        $this->fileHandler = $fileHandler;
        $this->router = $router;
    }
    
    
    
    #[Route('/new', name: 'admin_aroma_implantation_new')]
    public function new(Request $request, ImplantationMereAromaRepository $implantationMereAromaRepository): Response
    {
        $superMere = null;
        $superMereId = $request->get('id');
        if($superMereId){
            $superMere = $implantationMereAromaRepository->find($superMereId);
        }
        $mere = new ImplantationAroma();
        $mere->initFilles(1, 2);
        $form = $this->createForm(ImplantationAromaFormType::class, $mere);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {

            try{
                
                $imageFile = $form->get('imageFile')->getData();
                if ($imageFile) {
                    $photo = $this->fileHandler->upload($imageFile, "images\products\aroma\implantation");
                    $mere->setImage($photo);
                }
                if($superMere) $mere->setMere($superMere);
                $this->implatationService->saveImplantation($mere);
                $this->addFlash('success', 'Implantation ajoutée');
                return $this->redirectToRoute('admin_aroma_implantation_details', ['id' => $mere->getMere()->getId()]);
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
                $url = $this->router->generate('admin_aroma_implantation_details', ['id' => $mere->getMere()->getId()]);
                $url .= "#fille".$mere->getId();
                return new RedirectResponse($url);
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
    public function details(ImplantationMereAroma $superMere): Response
    {
        return $this->render('user_category/coach/aroma/implantation/implantation_details.html.twig', [
            'superMere' => $superMere
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
