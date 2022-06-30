<?php

namespace App\Controller;

use App\Entity\CategorieFormation;
use App\Entity\SearchEntity\CategorieFormationSearch;
use App\Form\CategorieFormationSearchType;
use App\Form\CategorieFormationType;
use App\Manager\EntityManager;
use App\Repository\CategorieFormationRepository;
use Knp\Component\Pager\PaginatorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class AdminCategorieFormationController extends AbstractController
{
    protected $repoCatFormation;

    protected $entityManager;

    public function __construct(CategorieFormationRepository $repoCatFormation, EntityManager $entityManager)
    {
        $this->repoCatFormation = $repoCatFormation;
        $this->entityManager = $entityManager;
    }

    /**
     * @Route("/admin/formation/categorie/liste", name="admin_formation_categorie_list")
     */
    public function admin_formation_categorie_list(Request $request, PaginatorInterface $paginator): Response
    {
        $search = new CategorieFormationSearch();
        $searchForm = $this->createForm(CategorieFormationSearchType::class, $search)->remove('description');
        $searchForm->handleRequest($request);
        
        $categories = $paginator->paginate(
            $this->repoCatFormation->findCategorieFormationQuery($search),
            $request->query->getInt('page', 1),
            20
        );

        return $this->render('user_category/admin/formation/category/list_categories.html.twig', [
            'categories' => $categories,
            'searchForm' => $searchForm->createView()
        ]);
    }


    /**
     * @Route("/admin/formation/categorie/add", name="admin_formation_categorie_add")
     */
    public function admin_formation_categorie_add(Request $request)
    {
        $category = new CategorieFormation();
        $formCat = $this->createForm(CategorieFormationType::class, $category)->remove('ordreCatFormation');
        
        $formCat->handleRequest($request);
        if ($formCat->isSubmitted() && $formCat->isValid()) {
            $categories = $this->repoCatFormation->findAll();
            if(count($categories) === 0){
                $category->setOrdreCatFormation(1);
            }else{
                $lastOrderCat = $this->repoCatFormation->findBy([],['id'=>'DESC'],1,0);
                $newOrderCat = $lastOrderCat[0]->getOrdreCatFormation() + 1;
                $category->setOrdreCatFormation($newOrderCat);
            }
            $this->entityManager->save($category);
            $this->addFlash('success', "Catégorie ajoutée avec succès");
            return $this->redirectToRoute('admin_formation_categorie_list');    
        }

        return $this->render('user_category/admin/formation/category/add_category.html.twig', [
            'formCat' => $formCat->createView(),          
        ]);    
    }

    /**
     * @Route("/admin/formation/categorie/{id}/edit", name="admin_formation_categorie_edit")
     */
    public function admin_formation_categorie_edit(CategorieFormation $category, Request $request)
    {
        $formCat = $this->createForm(CategorieFormationType::class, $category);
        
        $formCat->handleRequest($request);
        if ($formCat->isSubmitted() && $formCat->isValid()) {
            $lastOrderCat = $this->repoCatFormation->findBy([],['id'=>'DESC'],1,0);
            $lastOrderCat = $lastOrderCat[0]->getOrdreCatFormation() + 1;
            $this->entityManager->save($category);
            $this->addFlash('success', "Catégorie modifiée avec succès");
            return $this->redirectToRoute('admin_formation_categorie_list');    
        }

        return $this->render('user_category/admin/formation/category/add_category.html.twig', [
            'formCat' => $formCat->createView(),
            'button' => 'Modifier'          
        ]);    
    }

    /**
     * @Route("/admin/formation/categorie/{id}/statut/deleted", name="admin_formation_categorie_statut_deleted")
     */
    public function admin_formation_categorie_statut_deleted(CategorieFormation $category): Response
    {
        $category->setStatut(-1);
        $this->entityManager->save($category);
        $this->addFlash('danger', "Catégorie supprimée");
        return $this->redirectToRoute('admin_formation_categorie_list');    
    }
}
