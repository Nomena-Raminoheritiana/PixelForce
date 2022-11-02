<?php

namespace App\Controller\Categorie;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use App\Entity\CategorieDD;
use App\Entity\User;
use App\Form\CategorieDDFormType;
use App\Form\CategorieDDFilterType;

use App\Repository\CategorieDDRepository;
use App\Services\SearchService;
use App\Util\Search\MyCriteriaParam;
use Knp\Component\Pager\PaginatorInterface;
use Exception;

/**
 * @Route("/coach/categorydd")
 */
class CategorieDDControllerCoach extends AbstractController
{
    private $entityManager;
    private $CategorieDDRepository;
    public function __construct(EntityManagerInterface $entityManager, CategorieDDRepository $CategorieDDRepository){
        $this->entityManager = $entityManager;
        $this->CategorieDDRepository = $CategorieDDRepository;

    }

   /**
     * @Route("/", name="admin_categorydd_list")
     */
    public function index(Request $request, PaginatorInterface $paginator, SearchService $searchService): Response
    {
        $error = null;
        $user = (object)$this->getUser();
        $page = $request->query->get('page', 1);
        $limit = 5;
        $criteria = [
            ['prop' => 'description', 'op' => 'LIKE'],
            ['prop' => 'nom', 'op' => 'LIKE']
        ];

        $filter = [];

        $form = $this->createForm(CategorieDDFilterType::class, $filter, [
            'method' => 'GET'
        ]);

        $form->handleRequest($request);
        $filter = $form->getData();

        $query = $this->entityManager
            ->createQueryBuilder()
            ->select('c')
            ->from(CategorieDD::class, 'c')
            ->join('c.secteur', 's');
        ;  

        $where =  $searchService->getWhere($filter, new MyCriteriaParam($criteria, 'c'));   
        $query->where($where["where"]." and c.statut != 0 and s.id = :secteurId ");
        $where["params"]["secteurId"] = $user->getUniqueCoachSecteur()->getId();
        $searchService->setAllParameters($query, $where["params"]);
        $searchService->addOrderBy($query, $filter, ['sort' => 'c.nom', 'direction' => 'asc']);

        $categoryList = $paginator->paginate(
            $query,
            $page,
            $limit
        );

        return $this->render('user_category/coach/categorydd/categorydd_list.html.twig', [
            'categoryList' => $categoryList,
            'form' => $form->createView(),
            'error' => $error
        ]);

    }
    
    
    /**
     * @Route("/new", name="admin_categorydd_new")
     */
    public function new(Request $request): Response
    {
        $isEdit = false;
        $error = null;
        $categorydd = new CategorieDD();
        $form = $this->createForm(CategorieDDFormType::class, $categorydd);

        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {

            try{
                $user = (object)$this->getUser();
                $categorydd->setSecteur($user->getUniqueCoachSecteur());
                $categorydd->setStatut(1);
                $this->entityManager->persist($categorydd);
                $this->entityManager->flush();

                return $this->redirectToRoute('admin_categorydd_list');
            } catch(Exception $ex){
                $error = $ex->getMessage();
            }
        }

        return $this->render('user_category/coach/categorydd/categorydd_form.html.twig',[
            'form' => $form->createView(),
            'error' => $error,
            'isEdit' => $isEdit
        ]);
    }

    /**
     * @Route("/edit/{id}", name="admin_categorydd_edit")
     */
    public function edit(Request $request, CategorieDD $categorydd): Response
    {
        $isEdit = true;
        $error = null;
        $form = $this->createForm(CategorieDDFormType::class, $categorydd);

        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {

            try{
                $this->entityManager->persist($categorydd);
                $this->entityManager->flush();

                return $this->redirectToRoute('admin_categorydd_list');
            } catch(Exception $ex){
                $error = $ex->getMessage();
            }
        }

        return $this->render('user_category/coach/categorydd/categorydd_form.html.twig',[
            'form' => $form->createView(),
            'error' => $error,
            'isEdit' => $isEdit
        ]);
    }

    /**
     * @Route("/delete/{id}", name="admin_categorydd_delete")
     */
    public function delete(CategorieDD $categorydd): Response
    {
        try{
            $categorydd->setStatut(0);
            $this->entityManager->persist($categorydd);
            $this->entityManager->flush();
            $this->addFlash('success', 'Catégorie supprimée');
        } catch(Exception $ex){
            $error = $ex->getMessage();
            $this->addFlash('error', $error);
        }
        return $this->redirectToRoute('admin_categorydd_list');
    }

}
