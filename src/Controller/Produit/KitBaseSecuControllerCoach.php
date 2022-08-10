<?php

namespace App\Controller\Produit;

use App\Entity\KitBaseSecu;
use App\Form\KitBaseFilterType;
use App\Form\KitBaseSecuType;
use App\Repository\KitBaseElmtSecuRepository;
use App\Repository\KitBaseSecuRepository;
use App\Services\FileHandler;
use App\Services\KitBaseSecuService;
use App\Services\SearchService;
use App\Util\Search\MyCriteriaParam;
use Doctrine\ORM\EntityManagerInterface;
use Exception;
use Knp\Component\Pager\PaginatorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/coach/kitbasesecu")
 */
class KitBaseSecuControllerCoach extends AbstractController
{
    private $entityManager;
    private $kitBaseSecuRepository;
    private $kitBaseElmtSecuRepository;
    private $fileHandler;
    private $kitBaseSecuService;

    public function __construct(EntityManagerInterface $entityManager, KitBaseSecuRepository $kitBaseSecuRepository, KitBaseElmtSecuRepository $kitBaseElmtSecuRepository, FileHandler $fileHandler, KitBaseSecuService $kitBaseSecuService){
        $this->entityManager = $entityManager;
        $this->kitBaseSecuRepository = $kitBaseSecuRepository;
        $this->kitBaseElmtSecuRepository = $kitBaseElmtSecuRepository;
        $this->fileHandler = $fileHandler;
        $this->kitBaseSecuService = $kitBaseSecuService;
    }

    /**
     * @Route("/", name="admin_kitbasesecu_list")
     */
    public function index(Request $request, PaginatorInterface $paginator, SearchService $searchService): Response
    {
        $user = (object)$this->getUser();
        $page = $request->query->get('page', 1);
        $limit = 5;
        $criteria = [
            ['prop' => 'description', 'op' => 'LIKE'],
            ['prop' => 'nom', 'op' => 'LIKE'],
            ['prop' => 'prixMin', 'op' => '>=', "col" => "prix"],
            ['prop' => 'prixMax', 'op' => '<=', "col" => "prix"],
        ];

        $filter = [];

        $form = $this->createForm(KitBaseFilterType::class, $filter, [
            'method' => 'GET'
        ]);

        $form->handleRequest($request);
        $filter = $form->getData();

        $query = $this->entityManager
            ->createQueryBuilder()
            ->select('k')
            ->from(KitBaseSecu::class, 'k')
            ->join('k.secteur', 's')
        ;  

        $where =  $searchService->getWhere($filter, new MyCriteriaParam($criteria, 'k'));   
        $query->where($where["where"]." and k.status != 0 and s.id = :secteurId ");
        $where["params"]["secteurId"] = $user->getUniqueCoachSecteur()->getId();
        $searchService->setAllParameters($query, $where["params"]);
        $searchService->addOrderBy($query, $filter, ['sort' => 'k.id', 'direction' => 'asc']);

        $kitbaseList = $paginator->paginate(
            $query,
            $page,
            $limit
        );

        return $this->render('user_category/coach/kitbasesecu/kitbasesecu_list.html.twig', [
            'kitbaseList' => $kitbaseList,
            'form' => $form->createView(),
            'filesDirectory' => $this->getParameter('files_directory_relative')
        ]);

    }
    
    /**
     * @Route("/new", name="admin_kitbasesecu_new")
     */
    public function newKitBase(Request $request): Response
    {
        $user = (object)$this->getUser();
        $mere = new KitBaseSecu();
        $mere->initFilles(3);
        $form = $this->createForm(KitBaseSecuType::class, $mere);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {

            try{
                $imageFile = $form->get('imageFile')->getData();
                if ($imageFile) {
                    $photo = $this->fileHandler->upload($imageFile, "images/kitbase/".$user->getUniqueCoachSecteur()->getId());
                    $mere->setImage($photo);
                }
                $this->kitBaseSecuService->saveKitBase($user, $mere);
                $this->addFlash('success', 'Kit de base enregistré');
                return $this->redirectToRoute('admin_kitbasesecu_list');
            } catch(Exception $ex){
                $error = $ex->getMessage();
                $this->addFlash('danger', $error);
            }
        }

        return $this->render('user_category/coach/kitbasesecu/kitbasesecu_form.html.twig', [
            'form' => $form->createView(),
            'kitbase' => $mere
        ]);
    }
}