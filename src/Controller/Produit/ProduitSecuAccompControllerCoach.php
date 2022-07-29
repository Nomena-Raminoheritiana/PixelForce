<?php

namespace App\Controller\Produit;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use App\Entity\ProduitSecuAccomp;
use App\Form\MyproductSecuAccompFilter;
use App\Form\MyProduitSecuAccompFilterType;
use App\Form\ProduitSecuAccompFormType;
use Nucleos\DompdfBundle\Wrapper\DompdfWrapperInterface;

use App\Repository\ProduitSecuAccompRepository;
use Knp\Component\Pager\PaginatorInterface;
use App\Services\SearchService;
use App\Services\ExcelService;
use App\Services\FileHandler;
use App\Util\PopupUtil;
use App\Util\Search\MyCriteriaParam;
use Exception;
use Stripe\Product;

/**
 * @Route("/coach/productsecuaccomp")
 */
class ProduitSecuAccompControllerCoach extends AbstractController
{
    private $entityManager;
    private $ProduitSecuAccompRepository;
    private $fileHandler;

    public function __construct(EntityManagerInterface $entityManager, ProduitSecuAccompRepository $ProduitSecuAccompRepository, FileHandler $fileHandler){
        $this->entityManager = $entityManager;
        $this->ProduitSecuAccompRepository = $ProduitSecuAccompRepository;
        $this->fileHandler = $fileHandler;
    }

   /**
     * @Route("/", name="admin_productsecuaccomp_list")
     */
    public function index(Request $request, PaginatorInterface $paginator, SearchService $searchService): Response
    {
        $error = null;
        $user = (object)$this->getUser();
        $page = $request->query->get('page', 1);
        $limit = 5;
        $criteria = [
            ['prop' => 'prixMin', 'op' => '>=', "col" => "prix"],
            ['prop' => 'prixMax', 'op' => '<=', "col" => "prix"],
            ['prop' => 'description', 'op' => 'LIKE'],
            ['prop' => 'nom', 'op' => 'LIKE']
        ];

        $filter = [];

        $form = $this->createForm(MyProduitSecuAccompFilterType::class, $filter, [
            'method' => 'GET'
        ]);

        $form->handleRequest($request);
        $filter = $form->getData();

        $query = $this->entityManager
            ->createQueryBuilder()
            ->select('p')
            ->from(ProduitSecuAccomp::class, 'p')
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

        return $this->render('user_category/coach/productsecuaccomp/productsecuaccomp_list.html.twig', [
            'productList' => $productList,
            'form' => $form->createView(),
            'error' => $error,
            'filesDirectory' => $this->getParameter('files_directory_relative'),
            'page' => $page,
            'queryString' => $request->getQueryString()
        ]);

    }
    

    /**
     * @Route("/export", name="admin_productsecuaccomp_export")
     */
    public function export(Request $request, PaginatorInterface $paginator, SearchService $searchService, ExcelService $excelService, DompdfWrapperInterface $wrapper)
    {
        $error = null;
        $user = (object)$this->getUser();
        $page = $request->query->get('page', 1);
        $dataType = $request->query->get('dataType', 0);
        $fileType = $request->query->get('fileType', 0);

        $limit = 5;
        $criteria = [
            ['prop' => 'prixMin', 'op' => '>=', "col" => "prix"],
            ['prop' => 'prixMax', 'op' => '<=', "col" => "prix"],
            ['prop' => 'description', 'op' => 'LIKE'],
            ['prop' => 'nom', 'op' => 'LIKE']
        ];

        $filter = [];

        $form = $this->createForm(MyProduitSecuAccompFilterType::class, $filter, [
            'method' => 'GET'
        ]);

        $form->handleRequest($request);
        $filter = $form->getData();

        $query = $this->entityManager
            ->createQueryBuilder()
            ->select('p')
            ->from(ProduitSecuAccomp::class, 'p')
            ->join('p.secteur', 's')
        ;  

        $where =  $searchService->getWhere($filter, new MyCriteriaParam($criteria, 'p'));   
        $query->where($where["where"]." and p.statut != 0 and s.id = :secteurId ");
        $where["params"]["secteurId"] = $user->getUniqueCoachSecteur()->getId();
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
            $headers = ["Id", "Nom", "Description", "Prix"];
            $fields = ["id", "nom", "description", "prix"];
            $file = $excelService->export($productList, $fields, $headers);
            
            return $this->file($file, "produitsdd-$date.csv");
        } else{
            $html = $this->renderView('pdf/produitssecuaccomp.html.twig', [
                'productList' => $productList
            ]);
            return $wrapper->getStreamResponse($html, "produitssecuaccomp-$date.pdf", ['isRemoteEnabled' => true]);
        } 
        
    }

    /**
     * @Route("/new", name="admin_productsecuaccomp_new")
     */
    public function new(Request $request): Response
    {
        $user = (object)$this->getUser();
        $isEdit = false;
        $error = null;
        $product = new ProduitSecuAccomp();
        $form = $this->createForm(ProduitSecuAccompFormType::class, $product);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {

            try{
                $imageFile = $form->get('imageFile')->getData();
                if ($imageFile) {
                    $photo = $this->fileHandler->upload($imageFile, "images\products");
                    $product->setPhoto($photo);
                }
                $product->setStatut(1);
                $product->setSecteur($user->getUniqueCoachSecteur());
                $this->entityManager->persist($product);
                $this->entityManager->flush();

                return $this->redirectToRoute('admin_productsecuaccomp_list');
            } catch(Exception $ex){
                $error = $ex->getMessage();
            }
        }

        return $this->render('user_category/coach/productsecuaccomp/productsecuaccomp_form.html.twig',[
            'form' => $form->createView(),
            'error' => $error,
            'isEdit' => $isEdit,
            'product' => null,
            'filesDirectory' => $this->getParameter('files_directory_relative')
        ]);
    }

    /**
     * @Route("/{id}/fiche", name="admin_productsecuaccomp_fiche")
     */
    public function fiche(ProduitSecuAccomp $product): Response
    {
        return $this->render('user_category/coach/productsecuaccomp/productsecuaccomp_fiche.html.twig',[
            'product' => $product,
            'filesDirectory' => $this->getParameter('files_directory_relative')
        ]);
    }

    /**
     * @Route("/edit/{id}", name="admin_productsecuaccomp_edit")
     */
    public function edit(Request $request, ProduitSecuAccomp $product): Response
    {
        $isEdit = true;
        $error = null;
        $form = $this->createForm(ProduitSecuAccompFormType::class, $product);
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

                return $this->redirectToRoute('admin_productsecuaccomp_list');
            } catch(Exception $ex){
                $error = $ex->getMessage();
            }
        }

        return $this->render('user_category/coach/productsecuaccomp/productsecuaccomp_form.html.twig',[
            'form' => $form->createView(),
            'error' => $error,
            'isEdit' => $isEdit,
            'product' => $product,
            'filesDirectory' => $this->getParameter('files_directory_relative')
        ]);
    }

    /**
     * @Route("/delete/{id}", name="admin_productsecuaccomp_delete")
     */
    public function delete(ProduitSecuAccomp $product): Response
    {
        try{
            $product->setStatut(0);
            $this->entityManager->flush();
            $this->addFlash('success', 'Produit supprimé');
        } catch(Exception $ex){
            $this->addFlash('error', $ex->getMessage());
        }
        return $this->redirectToRoute('admin_productsecuaccomp_list');
    }

    
    /**
     * @Route("/popup", name="admin_productsecuaccomp_popup")
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
            ['prop' => 'nom', 'op' => 'LIKE']
        ];

        $filter = [];

        $form = $this->createForm(MyproductSecuAccompFilter::class, $filter, [
            'method' => 'GET'
        ]);

        $form->handleRequest($request);
        $filter = $form->getData();

        $query = $this->entityManager
            ->createQueryBuilder()
            ->select('p')
            ->from(ProduitSecuAccomp::class, 'p')
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

        return $this->render('user_category/coach/productsecuaccomp/productsecuaccomp_popup.html.twig', [
            'productList' => $orderList,
            'form' => $form->createView(),
            'mapPopup' => $mapPopup,
            'opener' => $opener,
            'popup' => $popup
        ]);

    }
}
