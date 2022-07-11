<?php

namespace App\Controller\Categorie;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use App\Entity\Categorie;
use App\Form\CategorieFormType;
use App\Form\CategorieFilterType;

use App\Repository\CategorieRepository;
use App\Services\SearchService;
use App\Util\Search\MyCriteriaParam;
use Knp\Component\Pager\PaginatorInterface;
use Exception;

/**
 * @Route("/coach/category")
 */
class CategorieControllerCoach extends AbstractController
{
    private $entityManager;
    private $categorieRepository;
    public function __construct(EntityManagerInterface $entityManager, CategorieRepository $categorieRepository){
        $this->entityManager = $entityManager;
        $this->categorieRepository = $categorieRepository;

    }

   /**
     * @Route("/", name="admin_category_list")
     */
    public function index(Request $request, PaginatorInterface $paginator, SearchService $searchService): Response
    {
        $error = null;
        $page = $request->query->get('page', 1);
        $limit = 5;
        $criteria = [
            ['prop' => 'description', 'op' => 'LIKE'],
            ['prop' => 'nom', 'op' => 'LIKE']
        ];

        $filter = [];

        $form = $this->createForm(CategorieFilterType::class, $filter, [
            'method' => 'GET'
        ]);

        $form->handleRequest($request);
        $filter = $form->getData();

        $query = $this->entityManager
            ->createQueryBuilder()
            ->select('c')
            ->from(Categorie::class, 'c')
        ;  

        $where =  $searchService->getWhere($filter, new MyCriteriaParam($criteria, 'c'));   
        $query->where($where["where"]." and c.statut != 0 ");
        $searchService->setAllParameters($query, $where["params"]);
        $searchService->addOrderBy($query, $filter, ['sort' => 'c.nom', 'direction' => 'asc']);

        $categoryList = $paginator->paginate(
            $query,
            $page,
            $limit
        );

        return $this->render('user_category/coach/category/category_list.html.twig', [
            'categoryList' => $categoryList,
            'form' => $form->createView(),
            'error' => $error
        ]);

    }
    
    
    /**
     * @Route("/new", name="admin_category_new")
     */
    public function new(Request $request): Response
    {
        $isEdit = false;
        $error = null;
        $category = new Categorie();
        $form = $this->createForm(CategorieFormType::class, $category);

        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {

            try{
                $category->setStatut(1);
                $this->entityManager->persist($category);
                $this->entityManager->flush();

                return $this->redirectToRoute('admin_category_list');
            } catch(Exception $ex){
                $error = $ex->getMessage();
            }
        }

        return $this->render('user_category/coach/category/category_form.html.twig',[
            'form' => $form->createView(),
            'error' => $error,
            'isEdit' => $isEdit
        ]);
    }

    /**
     * @Route("/edit/{id}", name="admin_category_edit")
     */
    public function edit(Request $request, Categorie $category): Response
    {
        $isEdit = true;
        $error = null;
        $form = $this->createForm(CategorieFormType::class, $category);

        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {

            try{
                $this->entityManager->persist($category);
                $this->entityManager->flush();

                return $this->redirectToRoute('admin_category_list');
            } catch(Exception $ex){
                $error = $ex->getMessage();
            }
        }

        return $this->render('user_category/coach/category/category_form.html.twig',[
            'form' => $form->createView(),
            'error' => $error,
            'isEdit' => $isEdit
        ]);
    }

    /**
     * @Route("/delete/{id}", name="admin_category_delete")
     */
    public function delete(Categorie $category): Response
    {
        try{
            $category->setStatut(0);
            $this->entityManager->persist($category);
            $this->entityManager->flush();
            $this->addFlash('success', 'Catégorie supprimée');
        } catch(Exception $ex){
            $error = $ex->getMessage();
            $this->addFlash('error', $error);
        }
        return $this->redirectToRoute('admin_category_list');
    }

}
