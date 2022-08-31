<?php

namespace App\Controller\DemandeDevis;

use App\Entity\DemandeDevis;
use App\Entity\Devis;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use App\Entity\Produit;
use App\Entity\ProduitDD;
use App\Form\DemandeDevisFilterType;
use App\Form\DemandeDevisFormType;
use App\Form\DevisType;
use App\Form\MyProductFilter;
use App\Form\MyProduitFilterType;
use App\Form\ProduitFormType;
use App\Form\ProduitFilterType;
use App\Repository\DemandeDevisRepository;
use App\Repository\DevisRepository;
use Nucleos\DompdfBundle\Wrapper\DompdfWrapperInterface;

use App\Repository\ProduitRepository;
use App\Repository\SecteurRepository;
use App\Repository\UserRepository;
use Knp\Component\Pager\PaginatorInterface;
use App\Services\SearchService;
use App\Services\ExcelService;
use App\Services\FileHandler;
use App\Util\GenericUtil;
use App\Util\PopupUtil;
use App\Util\Search\MyCriteriaParam;
use DateTime;
use Exception;
use SessionIdInterface;
use Stripe\Product;
use Symfony\Component\HttpFoundation\BinaryFileResponse;
use Symfony\Component\HttpFoundation\ResponseHeaderBag;
use Symfony\Component\HttpFoundation\Session\SessionInterface;

/**
 * @Route("/agent/demandedevis")
 */
class DemandeDevisControllerAgent extends AbstractController
{
    private $entityManager;
    private $demandeDevisRepository;
    private $fileHandler;
    private $secteurRepository;
    private $session;
    private $userRepository;
    private $repoDevis;

    public function __construct(UserRepository $userRepository, SessionInterface $session, EntityManagerInterface $entityManager, DemandeDevisRepository $demandeDevisRepository, FileHandler $fileHandler, SecteurRepository $secteurRepository, DevisRepository $repoDevis){
        $this->entityManager = $entityManager;
        $this->demandeDevisRepository = $demandeDevisRepository;
        $this->fileHandler = $fileHandler;
        $this->secteurRepository = $secteurRepository;
        $this->session = $session;
        $this->userRepository = $userRepository;
        $this->repoDevis = $repoDevis;
    }

   /**
     * @Route("/", name="agent_demandedevis_list")
     */
    public function index(Request $request, PaginatorInterface $paginator, SearchService $searchService): Response
    {
        $secteurId = $this->session->get('secteurId');
        $page = $request->query->get('page', 1);
        $limit = 5;
        $criteria = [
            ['prop' => 'status'],
            ['prop' => 'nomProduit', 'col' => 'nom', 'op' => 'LIKE', 'alias' => 'p'],
            ['prop' => 'dateMin', 'col' => 'dateDemande', 'op' => '>='],
            ['prop' => 'dateMax', 'col' => 'dateDemande', 'op' => '<='],
            ['prop' => 'user', 'col' => 'id', 'alias' => 'c'],
            ['prop' => 'clientName', 'col' => "concat(concat(coalesce(d.prenom, ''), ' '), d.nom)", 'alias' => null, 'op' => 'LIKE']
        ];

        $filter = [];

        $form = $this->createForm(DemandeDevisFilterType::class, $filter, [
            'method' => 'GET',
            'admin' => true
        ]);

        $form->handleRequest($request);
        $filter = $form->getData();

        $query = $this->entityManager
            ->createQueryBuilder()
            ->select('d')
            ->from(DemandeDevis::class, 'd')
            ->join('d.client', 'c')
            ->join('d.agent', 'a')
            ->join('d.secteur', 's')
            ->join('d.produit', 'p')
        ;  

        $where =  $searchService->getWhere($filter, new MyCriteriaParam($criteria, 'd'));   
        $query->where($where["where"]." and a.id = :agentId and s.id = :secteurId ");
        $where["params"]["agentId"] = ((object)$this->getUser())->getId();
        $where["params"]["secteurId"] = $secteurId;
        $searchService->setAllParameters($query, $where["params"]);
        $searchService->addOrderBy($query, $filter, ['sort' => 'd.dateDemande', 'direction' => 'desc']);

        $ddList = $paginator->paginate(
            $query,
            $page,
            $limit
        );

        return $this->render('user_category/agent/dd/demandedevis/demandedevis_list.html.twig', [
            'ddList' => $ddList,
            'form' => $form->createView()
        ]);

    }


    /**
     * @Route("/{id}/fiche", name="agent_demandedevis_fiche")
     */
    public function fiche(DemandeDevis $dd): Response
    {
        $secteurId = $this->session->get('secteurId');
        $allDevis = $this->repoDevis->findBy(['demandeDevis'=> $dd]);
        return $this->render('user_category/agent/dd/demandedevis/demandedevis_details.html.twig',[
            'dd' => $dd,
            'filesDirectory' => $this->getParameter('files_directory_relative'),
            'error' => null,
            'allDevis' => $allDevis
        ]);
    }


    /**
     * @Route("/{id}/file/{index}", name="agent_demandedevis_file_download")
     */
    public function view(DemandeDevis $dd, int $index): Response
    {
        $filepath = $dd->getFiles()[$index];
        $response = new BinaryFileResponse(
            $this->getParameter('files_directory_relative')."/".
            $dd->getFiles()[$index]
        );
        $response->setContentDisposition(
            ResponseHeaderBag::DISPOSITION_ATTACHMENT,
            GenericUtil::getFileName($filepath)
        );
        return $response;
    }
    

}
