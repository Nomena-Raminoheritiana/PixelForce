<?php

namespace App\Controller\Categorie;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use App\Entity\CategorieSecu;
use App\Entity\User;
use App\Form\CategorieSecuFormType;
use App\Form\CategorieSecuFilterType;

use App\Repository\CategorieSecuRepository;
use App\Services\SearchService;
use App\Util\Search\MyCriteriaParam;
use Knp\Component\Pager\PaginatorInterface;
use Exception;

/**
 * @Route("/coach/categorysecu")
 */
class CategorieSecuControllerCoach extends AbstractController
{
    private $entityManager;
    private $CategorieSecuRepository;
    public function __construct(EntityManagerInterface $entityManager, CategorieSecuRepository $CategorieSecuRepository){
        $this->entityManager = $entityManager;
        $this->CategorieSecuRepository = $CategorieSecuRepository;

    }

   /**
     * @Route("/", name="admin_categorysecu_list")
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

        $form = $this->createForm(CategorieSecuFilterType::class, $filter, [
            'method' => 'GET'
        ]);

        $form->handleRequest($request);
        $filter = $form->getData();

        $query = $this->entityManager
            ->createQueryBuilder()
            ->select('c')
            ->from(CategorieSecu::class, 'c')
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

        return $this->render('user_category/coach/categorysecu/categorysecu_list.html.twig', [
            'categoryList' => $categoryList,
            'form' => $form->createView(),
            'error' => $error
        ]);

    }
    
    
    /**
     * @Route("/new", name="admin_categorysecu_new")
     */
    public function new(Request $request): Response
    {
        $isEdit = false;
        $error = null;
        $categorysecu = new CategorieSecu();
        $form = $this->createForm(CategorieSecuFormType::class, $categorysecu);

        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {

            try{
                $user = (object)$this->getUser();
                $categorysecu->setSecteur($user->getUniqueCoachSecteur());
                $categorysecu->setStatut(1);
                $this->entityManager->persist($categorysecu);
                $this->entityManager->flush();

                return $this->redirectToRoute('admin_categorysecu_list');
            } catch(Exception $ex){
                $error = $ex->getMessage();
            }
        }

        return $this->render('user_category/coach/categorysecu/categorysecu_form.html.twig',[
            'form' => $form->createView(),
            'error' => $error,
            'isEdit' => $isEdit
        ]);
    }

    /**
     * @Route("/edit/{id}", name="admin_categorysecu_edit")
     */
    public function edit(Request $request, CategorieSecu $categorysecu): Response
    {
        $isEdit = true;
        $error = null;
        $form = $this->createForm(CategorieSecuFormType::class, $categorysecu);

        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {

            try{
                $this->entityManager->persist($categorysecu);
                $this->entityManager->flush();

                return $this->redirectToRoute('admin_categorysecu_list');
            } catch(Exception $ex){
                $error = $ex->getMessage();
            }
        }

        return $this->render('user_category/coach/categorysecu/categorysecu_form.html.twig',[
            'form' => $form->createView(),
            'error' => $error,
            'isEdit' => $isEdit
        ]);
    }

    /**
     * @Route("/delete/{id}", name="admin_categorysecu_delete")
     */
    public function delete(CategorieSecu $categorysecu): Response
    {
        try{
            $categorysecu->setStatut(0);
            $this->entityManager->persist($categorysecu);
            $this->entityManager->flush();
            $this->addFlash('success', 'Catégorie supprimée');
        } catch(Exception $ex){
            $error = $ex->getMessage();
            $this->addFlash('error', $error);
        }
        return $this->redirectToRoute('admin_categorysecu_list');
    }

}
