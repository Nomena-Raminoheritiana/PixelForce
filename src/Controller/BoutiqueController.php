<?php

namespace App\Controller;

use App\Entity\Produit;
use App\Entity\ProduitDD;
use App\Entity\ProduitFavori;
use App\Entity\Secteur;
use App\Form\MyProduitDDFilterType;
use App\Form\MyProduitFilterType;
use App\Repository\AgentSecteurRepository;
use App\Repository\ProduitFavoriRepository;
use App\Repository\ProduitRepository;
use App\Repository\UserRepository;
use App\Services\FileHandler;
use App\Services\SearchService;
use App\Util\Search\MyCriteriaParam;
use DateTime;
use Doctrine\ORM\EntityManagerInterface;
use Exception;
use Knp\Component\Pager\PaginatorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/boutique/{token}")
 */
class BoutiqueController extends AbstractController
{
    private $userRepository;
    private $session;
    private $entityManager;
    private $produitRepository;
    private $fileHandler;

    public function __construct(UserRepository $userRepository, SessionInterface $session, 
        EntityManagerInterface $entityManager, ProduitRepository $produitRepository, FileHandler $fileHandler)
    {
        $this->userRepository = $userRepository;
        $this->session = $session;
        $this->entityManager = $entityManager;
        $this->produitRepository = $produitRepository;
        $this->fileHandler = $fileHandler;
    }

    /**
     * @Route("/", name="boutique_home")
     */
    public function index($token, AgentSecteurRepository $agentSecteurRepository): Response
    {
        $agent = $this->userRepository->findAgentByToken($token);
        $agentSecteurs = $agentSecteurRepository->findValidByAgent($agent->getId());
        return $this->render('user_category/client/boutique/home.html.twig', [
            'agentSecteurs' => $agentSecteurs,
            'agent' => $agent,
            'token' => $token
        ]);
    }

    
 
    
   /**
     * @Route("/secteurdd/{id}", name="boutique_secteurdd")
     */
    public function secteurdd($token, Secteur $secteur, Request $request, PaginatorInterface $paginator, SearchService $searchService): Response
    {
        $this->session->set('secteurId', $secteur->getId());
        $agent = $this->userRepository->findAgentByToken($token);
        $error = null;
        $page = $request->query->get('page', 1);
        $limit = 5;
        $criteria = [
            ['prop' => 'categorie.id', 'col' => 'id', 'alias' => 'c'],
            ['prop' => 'description', 'op' => 'LIKE'],
            ['prop' => 'nom', 'op' => 'LIKE']
        ];

        $filter = [];

        $form = $this->createForm(MyProduitDDFilterType::class, $filter, [
            'method' => 'GET'
        ]);

        $form->handleRequest($request);
        $filter = $form->getData();

        $query = $this->entityManager
            ->createQueryBuilder()
            ->select('p')
            ->from(ProduitDD::class, 'p')
            ->join('p.categorie', 'c')
            ->join('p.secteur', 's')
        ;  


        $where =  $searchService->getWhere($filter, new MyCriteriaParam($criteria, 'p'));   
        $query->where($where["where"]." and p.statut != 0 and s.id = :secteurId ");
        $where["params"]["secteurId"] = $secteur->getId();
        $searchService->setAllParameters($query, $where["params"]);
        $searchService->addOrderBy($query, $filter, ['sort' => 'p.id', 'direction' => 'asc']);

        $productList = $paginator->paginate(
            $query,
            $page,
            $limit
        );

        return $this->render('user_category/client/dd/product/product_list.html.twig', [
            'productList' => $productList,
            'form' => $form->createView(),
            'error' => $error,
            'filesDirectory' => $this->getParameter('files_directory_relative'),
            'agent' => $agent,
            'token' => $token
        ]);

    }

   /**
     * @Route("/secteur/{id}", name="boutique_secteur")
     */
    public function secteur($token, Secteur $secteur, Request $request, PaginatorInterface $paginator, SearchService $searchService, ProduitFavoriRepository $produitFavoriRepository): Response
    {
        $this->session->set('secteurId', $secteur->getId());
        $agent = $this->userRepository->findAgentByToken($token);
        $error = null;
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
        $where["params"]["secteurId"] = $secteur->getId();
        $searchService->setAllParameters($query, $where["params"]);
        $searchService->addOrderBy($query, $filter, ['sort' => 'p.id', 'direction' => 'asc']);

        $productList = $paginator->paginate(
            $query,
            $page,
            $limit
        );

        $user = (object) $this->getUser();
        if($user){
            foreach($productList as $p){
                $produitFavori = $produitFavoriRepository->findProduitFavori($p->getId(), $user->getId());
                $p->setEstFavori($produitFavori ? true : false);
            }
        }

        return $this->render('user_category/client/product/product_list.html.twig', [
            'productList' => $productList,
            'form' => $form->createView(),
            'error' => $error,
            'filesDirectory' => $this->getParameter('files_directory_relative'),
            'agent' => $agent,
            'token' => $token
        ]);

    }

    /**
     * @Route("/favoris", name="client_produit_favoris")
     */
    public function favoris($token, Request $request, PaginatorInterface $paginator, SearchService $searchService, ProduitFavoriRepository $produitFavoriRepository): Response
    {
        $user = (object)$this->getUser();
        $secteurId = $this->session->get('secteurId');
        $agent = $this->userRepository->findAgentByToken($token);
        $error = null;
        $page = $request->query->get('page', 1);
        $limit = 5;
        $criteria = [
            ['prop' => 'categorie.id', 'col' => 'id', 'alias' => 'c'],
            ['prop' => 'description', 'op' => 'LIKE', 'alias' => 'p'],
            ['prop' => 'prixMin', 'op' => '>=', "col" => "prix", 'alias' => 'p'],
            ['prop' => 'prixMax', 'op' => '<=', "col" => "prix", 'alias' => 'p'],
            ['prop' => 'nom', 'op' => 'LIKE', 'alias' => 'p']
        ];

        $filter = [];

        $form = $this->createForm(MyProduitFilterType::class, $filter, [
            'method' => 'GET'
        ]);

        $form->handleRequest($request);
        $filter = $form->getData();

        $query = $this->entityManager
            ->createQueryBuilder()
            ->select('pf')
            ->from(ProduitFavori::class, 'pf')
            ->join('pf.produit', 'p')
            ->join('pf.client', 'u')
            ->join('p.categorie', 'c')
            ->join('p.secteur', 's')
        ;  

        $where =  $searchService->getWhere($filter, new MyCriteriaParam($criteria, 'pf'));   
        $query->where($where["where"]." and (pf.statut != 0 or pf.statut is NULL) and (p.statut != 0 or p.statut is NULL) and s.id = :secteurId and u.id = :clientId ");
        $where["params"]["secteurId"] = $secteurId;
        $where["params"]["clientId"] = $user->getId();
        $searchService->setAllParameters($query, $where["params"]);
        $searchService->addOrderBy($query, $filter, ['sort' => 'pf.dateFavori', 'direction' => 'desc']);

        $productList = $paginator->paginate(
            $query,
            $page,
            $limit
        );

    
        return $this->render('user_category/client/product/product_favori.html.twig', [
            'productList' => $productList,
            'form' => $form->createView(),
            'error' => $error,
            'filesDirectory' => $this->getParameter('files_directory_relative'),
            'agent' => $agent,
            'token' => $token
        ]);

    }

    /**
     * @Route("/product/{id}", name="client_product_details")
     */
    public function details($token, Produit $product, ProduitFavoriRepository $produitFavoriRepository): Response
    {

        $agent = $this->userRepository->findAgentByToken($token);
        $user = (object) $this->getUser();
        if($user){
            $produitFavori = $produitFavoriRepository->findProduitFavori($product->getId(), $user->getId());
            $product->setEstFavori($produitFavori ? true : false);
        }
        return $this->render('user_category/client/product/product_details.html.twig',[
            'product' => $product,
            'filesDirectory' => $this->getParameter('files_directory_relative'),
            'agent' => $agent,
            'token' => $token
        ]);
    }

    /**
     * @Route("/product/{id}/toogleFavori", name="client_product_toogle_favori")
     */
    public function toogleFavori($token, Produit $produit, ProduitFavoriRepository $produitFavoriRepository): Response
    {
        try{
            $user = (object)$this->getUser();
            $produitFavori = $produitFavoriRepository->findProduitFavori($produit->getId(), $user->getId());
            $message = null;
            if($produitFavori){
                $produitFavori->setStatut(0);
                $message = 'Produit supprimé des favoris';
            } else {
                $produitFavori = new ProduitFavori();
                $produitFavori->setClient($user);
                $produitFavori->setProduit($produit);
                $produitFavori->setStatut(1);
                $produitFavori->setDateFavori(new DateTime());
                $this->entityManager->persist($produitFavori);
                $message = 'Produit ajouté aux favoris';
            }
            
            $this->entityManager->flush();
            $this->addFlash('success', $message);
        } catch(Exception $ex){
            $this->entityManager->clear();
            $this->addFlash('danger', $ex->getMessage());
            
        }
        return $this->redirectToRoute('client_produit_favoris', ['token' => $token, 'id' => $produit->getId()]);
        
    }


    /**
     * @Route("/productdd/{id}", name="client_productdd_details")
     */
    public function detailsdd($token, ProduitDD $product): Response
    {
        $agent = $this->userRepository->findAgentByToken($token);
        return $this->render('user_category/client/dd/product/product_details.html.twig',[
            'product' => $product,
            'filesDirectory' => $this->getParameter('files_directory_relative'),
            'agent' => $agent,
            'token' => $token
        ]);
    }

    
}
