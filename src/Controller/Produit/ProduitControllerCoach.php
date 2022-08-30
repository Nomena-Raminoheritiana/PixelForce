<?php

namespace App\Controller\Produit;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use App\Entity\Produit;
use App\Form\MyProductFilter;
use App\Form\MyProduitFilterType;
use App\Form\ProduitFormType;
use App\Form\ProduitFilterType;
use Nucleos\DompdfBundle\Wrapper\DompdfWrapperInterface;

use App\Repository\ProduitRepository;
use Knp\Component\Pager\PaginatorInterface;
use App\Services\SearchService;
use App\Services\ExcelService;
use App\Services\FileHandler;
use App\Util\GenericUtil;
use App\Util\PopupUtil;
use App\Util\Search\MyCriteriaParam;
use Exception;
use Stripe\Product;

/**
 * @Route("/coach/product")
 */
class ProduitControllerCoach extends AbstractController
{
    private $entityManager;
    private $produitRepository;
    private $fileHandler;

    public function __construct(EntityManagerInterface $entityManager, ProduitRepository $produitRepository, FileHandler $fileHandler){
        $this->entityManager = $entityManager;
        $this->produitRepository = $produitRepository;
        $this->fileHandler = $fileHandler;
    }

   /**
     * @Route("/", name="admin_product_list")
     */
    public function index(Request $request, PaginatorInterface $paginator, SearchService $searchService): Response
    {
        $error = null;
        $user = (object)$this->getUser();
        $page = $request->query->get('page', 1);
        $limit = 5;
        $criteria = [
            ['prop' => 'categorie.id', 'col' => 'id', 'alias' => 'c'],
            ['prop' => 'description', 'op' => 'LIKE'],
            ['prop' => 'prixMin', 'op' => '>=', "col" => "prix"],
            ['prop' => 'prixMax', 'op' => '<=', "col" => "prix"],
            ['prop' => 'nom', 'op' => 'LIKE']
        ];

        $filter = [];

        $form = $this->createForm(MyProduitFilterType::class, $filter, [
            'method' => 'GET'
        ]);

        $form->handleRequest($request);
        $filter = $form->getData();

        $query = $this->entityManager
            ->createQueryBuilder()
            ->select('p')
            ->from(Produit::class, 'p')
            ->join('p.categorie', 'c')
            ->join('p.secteur', 's')
        ;  

        $where =  $searchService->getWhere($filter, new MyCriteriaParam($criteria, 'p'));   
        $query->where($where["where"]." and p.statut != 0 and s.id = :secteurId ");
        $where["params"]["secteurId"] = $user->getUniqueCoachSecteur()->getId();
        $searchService->setAllParameters($query, $where["params"]);
        $searchService->addOrderBy($query, $filter, ['sort' => 'p.id', 'direction' => 'asc']);

        $productList = $paginator->paginate(
            $query,
            $page,
            $limit
        );

        return $this->render('user_category/coach/product/product_list.html.twig', [
            'productList' => $productList,
            'form' => $form->createView(),
            'error' => $error,
            'filesDirectory' => $this->getParameter('files_directory_relative'),
            'page' => $page,
            'queryString' => $request->getQueryString()
        ]);

    }
    

    /**
     * @Route("/export", name="admin_product_export")
     */
    public function export(Request $request, PaginatorInterface $paginator, SearchService $searchService, ExcelService $excelService, DompdfWrapperInterface $wrapper)
    {
        $error = null;
        $page = $request->query->get('page', 1);
        $dataType = $request->query->get('dataType', 0);
        $fileType = $request->query->get('fileType', 0);

        $limit = 5;
        $criteria = [
            ['prop' => 'categorie.id', 'col' => 'id', 'alias' => 'c'],
            ['prop' => 'description', 'op' => 'LIKE'],
            ['prop' => 'prixMin', 'op' => '>=', "col" => "prix"],
            ['prop' => 'prixMax', 'op' => '<=', "col" => "prix"],
            ['prop' => 'nom', 'op' => 'LIKE']
        ];

        $filter = [];

        $form = $this->createForm(MyProduitFilterType::class, $filter, [
            'method' => 'GET'
        ]);

        $form->handleRequest($request);
        $filter = $form->getData();

        $query = $this->entityManager
            ->createQueryBuilder()
            ->select('p')
            ->from(Produit::class, 'p')
            ->join('p.categorie', 'c')
        ;  

        $where =  $searchService->getWhere($filter, new MyCriteriaParam($criteria, 'p'));   
        $query->where($where["where"]);
        $searchService->setAllParameters($query, $where["params"]);
        $searchService->addOrderBy($query, $filter, ['sort' => 'p.id', 'direction' => 'asc']);

        $productList = [];
        if($dataType == 0){
            $productList = $query->getQuery()->getResult();
        } else{
            $productList = $paginator->paginate(
                $query,
                $page,
                $limit
            );
        }
        
        $date = (new \DateTime())->format('Y-m-d');
        if($fileType == 0){
            $headers = ["Id", "Nom", "Description", "Prix", "Catégorie"];
            $fields = ["id", "nom", "description", "prix", "categorie.nom"];
            $file = $excelService->export($productList, $fields, $headers);
            
            return $this->file($file, "produits-$date.csv");
        } else{
            $html = $this->renderView('pdf/produits.html.twig', [
                'productList' => $productList
            ]);
            
            return $wrapper->getStreamResponse($html, "produits-$date.pdf", ['isRemoteEnabled' => true]);
        } 
        
    }

    /**
     * @Route("/new", name="admin_product_new")
     */
    public function new(Request $request): Response
    {
        $isEdit = false;
        $error = null;
        $product = new Produit();
        $form = $this->createForm(ProduitFormType::class, $product);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {

            try{
                $imageFile = $form->get('imageFile')->getData();
                if ($imageFile) {
                    $photo = $this->fileHandler->upload($imageFile, "images\products");
                    $product->setPhoto($photo);
                }
                $product->setStatut(1);
                $product->setSecteur($product->getCategorie()->getSecteur());
                $this->entityManager->persist($product);
                $this->entityManager->flush();

                return $this->redirectToRoute('admin_product_list');
            } catch(Exception $ex){
                $error = $ex->getMessage();
            }
        }

        return $this->render('user_category/coach/product/product_form.html.twig',[
            'form' => $form->createView(),
            'error' => $error,
            'isEdit' => $isEdit,
            'product' => null,
            'filesDirectory' => $this->getParameter('files_directory_relative')
        ]);
    }

    /**
     * @Route("/{id}/fiche", name="admin_product_fiche")
     */
    public function fiche(Produit $product): Response
    {
        return $this->render('user_category/coach/product/product_fiche.html.twig',[
            'product' => $product,
            'filesDirectory' => $this->getParameter('files_directory_relative')
        ]);
    }

    /**
     * @Route("/edit/{id}", name="admin_product_edit")
     */
    public function edit(Request $request, Produit $product): Response
    {
        $isEdit = true;
        $error = null;
        $form = $this->createForm(ProduitFormType::class, $product);
        $form->handleRequest($request);

        // $currentImageFile = $this->fileHandler->getFile( $product->getPhoto());
        // $form->get('imageFile')->setData($currentImageFile);
        // $error = $currentImageFile->getFileName();
        if ($form->isSubmitted() && $form->isValid()) {

            try{
                $imageFile = $form->get('imageFile')->getData();
                if ($imageFile) {
                    $photo = $this->fileHandler->upload($imageFile, "images\products");
                    $product->setPhoto($photo);
                }
                $this->entityManager->persist($product);
                $this->entityManager->flush();

                return $this->redirectToRoute('admin_product_list');
            } catch(Exception $ex){
                $error = $ex->getMessage();
            }
        }

        return $this->render('user_category/coach/product/product_form.html.twig',[
            'form' => $form->createView(),
            'error' => $error,
            'isEdit' => $isEdit,
            'product' => $product,
            'filesDirectory' => $this->getParameter('files_directory_relative')
        ]);
    }

    /**
     * @Route("/delete/{id}", name="admin_product_delete")
     */
    public function delete(Produit $product): Response
    {
        try{
            $product->setStatut(0);
            $this->entityManager->flush();
            $this->addFlash('success', 'Produit supprimé');
        } catch(Exception $ex){
            $this->addFlash('error', $ex->getMessage());
        }
        return $this->redirectToRoute('admin_product_list');
    }

    
    /**
     * @Route("/popup", name="admin_product_popup")
     */
    public function popup(Request $request, PaginatorInterface $paginator, SearchService $searchService): Response
    {
        $user = (object)$this->getUser();
        $opener = $request->query->get('opener', '');
        $popup = $request->query->get('popup', '');
        $mapPopup = PopupUtil::getMapPopup($opener, $popup);

        $page = $request->query->get('page', 1);
        $limit = 5;
        $criteria = [
            ['prop' => 'categorie.id', 'col' => 'id', 'alias' => 'c'],
            ['prop' => 'nom', 'op' => 'LIKE']
        ];

        $filter = [];

        $form = $this->createForm(MyProductFilter::class, $filter, [
            'method' => 'GET'
        ]);

        $form->handleRequest($request);
        $filter = $form->getData();

        $query = $this->entityManager
            ->createQueryBuilder()
            ->select('p')
            ->from(Produit::class, 'p')
            ->join('p.categorie', 'c')
            ->join('p.secteur', 's')
        ;  

        $where =  $searchService->getWhere($filter, new MyCriteriaParam($criteria, 'p'));   
        $query->where($where["where"]." and p.statut != 0 and s.id = :secteurId ");
        $where["params"]["secteurId"] = $user->getUniqueCoachSecteur()->getId();
        $searchService->setAllParameters($query, $where["params"]);
        $searchService->addOrderBy($query, $filter, ['sort' => 'p.nom', 'direction' => 'asc']);

        $orderList = $paginator->paginate(
            $query,
            $page,
            $limit
        );

        return $this->render('user_category/coach/product/product_popup.html.twig', [
            'productList' => $orderList,
            'form' => $form->createView(),
            'mapPopup' => $mapPopup,
            'opener' => $opener,
            'popup' => $popup
        ]);

    }
}
