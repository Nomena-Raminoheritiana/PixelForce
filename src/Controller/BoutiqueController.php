<?php

namespace App\Controller;

use App\Entity\Produit;
use App\Entity\Secteur;
use App\Form\MyProduitFilterType;
use App\Repository\AgentSecteurRepository;
use App\Repository\ProduitRepository;
use App\Repository\UserRepository;
use App\Services\FileHandler;
use App\Services\SearchService;
use App\Util\Search\MyCriteriaParam;
use Doctrine\ORM\EntityManagerInterface;
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
     * @Route("/secteur/{id}", name="boutique_secteur")
     */
    public function secteur($token, Secteur $secteur, Request $request, PaginatorInterface $paginator, SearchService $searchService): Response
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
     * @Route("/product/{id}", name="client_product_details")
     */
    public function details($token, Produit $product): Response
    {
        $agent = $this->userRepository->findAgentByToken($token);
        return $this->render('user_category/client/product/product_details.html.twig',[
            'product' => $product,
            'filesDirectory' => $this->getParameter('files_directory_relative'),
            'agent' => $agent,
            'token' => $token
        ]);
    }

    
}