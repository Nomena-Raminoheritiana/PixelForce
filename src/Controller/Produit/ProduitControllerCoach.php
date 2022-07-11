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
        $page = $request->query->get('page', 1);
        $limit = 5;
        $criteria = [
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
        ;  

        $where =  $searchService->getWhere($filter, new MyCriteriaParam($criteria, 'p'));   
        $query->where($where["where"]);
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
            'queryString' => GenericUtil::getQueryString("my_produit_filter", $filter)
        ]);

    }
    /*public function index(Request $request, PaginatorInterface $paginator): Response
    {
        $error = null;
        $limit = 5;
        $page = $request->query->getInt('page', 1);
        $product = new Produit();
        $form = $this->createForm(ProduitFilterType::class, $product, [
            'method' => 'GET',
        ]);
        $form->handleRequest($request);
        $options = [];
        $options['prixMin'] = $form->get('prixMin')->getData();
        $options['prixMax'] = $form->get('prixMax')->getData();
        $options['orderBy'] = $form->get('orderBy')->getData();
        $options['order'] = $form->get('order')->getData();
        
        $query = $this->produitRepository->getSearchQuery($product, $options);  
        $productList = $paginator->paginate(
            $query,
            $page,
            $limit
        );
        return $this->render('admin/product/product_list.html.twig', [
            'productList' => $productList,
            'form' => $form->createView(),
            'error' => $error,
            'filesDirectory' => $this->getParameter('files_directory_relative')
        ]);
    }*/


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

                $this->entityManager->persist($product);
                $this->entityManager->flush();

                return $this->redirectToRoute('admin_product_list');
            } catch(Exception $ex){
                $error = $ex->getMessage();
            }
        }

        return $this->render('admin/product/product_form.html.twig',[
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
        return $this->render('admin/product/product_fiche.html.twig',[
            'product' => $product,
            'filesDirectory' => $this->getParameter('files_directory_relative')
        ]);
    }

    /**
     * @Route("/edit/{id}", name="admin_product_edit")
     */
    public function edit(Request $request, int $id): Response
    {
        $isEdit = true;
        $error = null;
        $product = $this->produitRepository->find($id);
        if($product == null)  {
            $product = new Produit();
            $error = "Le produit n°".$id." n'existe pas, l'action suivante va créer un nouveau produit une fois validée.";
            $isEdit = false;
        }


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

        return $this->render('admin/product/product_form.html.twig',[
            'form' => $form->createView(),
            'error' => $error,
            'isEdit' => $isEdit,
            'product' => $product,
            'filesDirectory' => $this->getParameter('files_directory_relative')
        ]);
    }

    /**
     * @Route("/delete/{id}", name="admin_product_delete", methods={"DELETE"})
     */
    public function delete(int $id): JsonResponse
    {
        try{
            $product = $this->produitRepository->find($id);
            $this->produitRepository->remove($product);
            $this->entityManager->flush();

            return new JsonResponse(array('id' => $id));
        } catch(Exception $ex){
            return new JsonResponse(array('message' => $ex->getMessage()), 500);
        }
    }

     /**
     * @Route("/deleteNormal/{id}", name="admin_product_delete_normal")
     */
    public function deleteNormal(int $id): Response
    {
        try{
            $product = $this->produitRepository->find($id);
            $this->produitRepository->remove($product);
            $this->entityManager->flush();
            $this->addFlash('success', 'Produit supprimé');
            return $this->redirectToRoute('admin_product_list');
        } catch(Exception $ex){
            $this->addFlash('error', $ex->getMessage());
            return $this->redirectToRoute('admin_product_fiche', ['id' => $id]);
        }
    }

    /**
     * @Route("/popup", name="admin_product_popup")
     */
    public function popup(Request $request, PaginatorInterface $paginator, SearchService $searchService): Response
    {
        $opener = $request->query->get('opener', '');
        $popup = $request->query->get('popup', '');
        $mapPopup = PopupUtil::getMapPopup($opener, $popup);

        $page = $request->query->get('page', 1);
        $limit = 5;
        $criteria = [
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
        ;  

        $where =  $searchService->getWhere($filter, new MyCriteriaParam($criteria, 'p'));   
        $query->where($where["where"]);
        $searchService->setAllParameters($query, $where["params"]);
        $searchService->addOrderBy($query, $filter, ['sort' => 'p.nom', 'direction' => 'asc']);

        $orderList = $paginator->paginate(
            $query,
            $page,
            $limit
        );

        return $this->render('admin/product/product_popup.html.twig', [
            'productList' => $orderList,
            'form' => $form->createView(),
            'mapPopup' => $mapPopup,
            'opener' => $opener,
            'popup' => $popup
        ]);

    }
}
