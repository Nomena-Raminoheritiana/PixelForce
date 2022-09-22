<?php


namespace App\Controller;

use App\Entity\CategorieFormationAgent;
use App\Entity\Formation;
use App\Entity\FormationAgent;
use App\Manager\EntityManager;
use App\Repository\CategorieFormationAgentRepository;
use App\Repository\CategorieFormationRepository;
use App\Repository\ContactRepository;
use App\Repository\FormationAgentRepository;
use App\Repository\FormationRepository;
use App\Repository\RFormationCategorieRepository;
use App\Repository\SecteurRepository;
use App\Services\CategorieFormationAgentService;
use App\Services\MailerService;
use Doctrine\ORM\EntityManagerInterface;
use Exception;
use Knp\Component\Pager\PaginatorInterface;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Component\Routing\Annotation\Route;

class AgentFormationController extends AbstractController
{
    /**
     * @var PaginatorInterface
     */
    private $paginator;
    /**
     * @var FormationRepository
     */
    private $formationRepository;
    /**
     * @var FormationAgentRepository
     */
    private $formationAgentRepository;
    /**
     * @var EntityManager
     */
    private $entityManager;
    /**
     * @var SecteurRepository
     */
    private $secteurRepository;

    /** @var MailerService $mailerService; */
    private $mailerService;

    /** @var RFormationCategorieRepository $repoRelationFormationCategorie */
    protected $repoRelationFormationCategorie;
    
    /** @var CategorieFormationAgentService $categorieFormationAgentService */
    protected $categorieFormationAgentService;

    /** @var SessionInterface $sessionInterface */
    protected $sessionInterface;

    /** @var CategorieFormationRepository $repoCatFormation */
    protected $repoCatFormation;

    /** @var ContactRepository $repoContact */
    protected $repoContact;

    /** @var CategorieFormationAgentRepository $repoCategorieAgent */
    protected $repoCategorieAgent;

    public function __construct(EntityManager $entityManager, SecteurRepository $secteurRepository, PaginatorInterface $paginator, FormationRepository $formationRepository, FormationAgentRepository $formationAgentRepository, MailerService $mailerService, RFormationCategorieRepository $repoRelationFormationCategorie, CategorieFormationAgentService $categorieFormationAgentService, SessionInterface $sessionInterface, CategorieFormationRepository $repoCatFormation, ContactRepository $repoContact, CategorieFormationAgentRepository $repoCategorieAgent)
    {
        $this->paginator = $paginator;
        $this->formationRepository = $formationRepository;
        $this->formationAgentRepository = $formationAgentRepository;
        $this->entityManager = $entityManager;
        $this->secteurRepository = $secteurRepository;
        $this->mailerService = $mailerService;
        $this->repoRelationFormationCategorie = $repoRelationFormationCategorie;
        $this->categorieFormationAgentService = $categorieFormationAgentService;
        $this->sessionInterface = $sessionInterface;
        $this->repoCatFormation = $repoCatFormation;
        $this->repoContact = $repoContact;
        $this->repoCategorieAgent = $repoCategorieAgent;
    }

    /**
     * @Route("/agent/formation/list", name="agent_formation_list", options={"expose"=true})
     * @IsGranted("ROLE_AGENT")
     */
    public function agent_formation_list(Request $request, SessionInterface $session)
    {
        // todo: miandry anle login agent izay ataon Tsiory mba haazaoana ilay session micontenir anle secteur
        $agent = $this->getUser();
        $secteur_id = $session->get('secteurId');
        $secteur = $this->secteurRepository->findOneBy(['id' => $secteur_id]);
        

        if($secteur) {
                        // dd($request->query->get('q'));
            $criteres = $request->query->get('q');
            $criteres = $criteres ? $criteres : [];
            $formations = $this->formationRepository->searchForAgent($criteres, $secteur);
           
            $formations = $this->paginator->paginate(
                $formations,
                $request->query->getInt('page', 1),
                20
            );

            // dd($formationsInCategory);
            return $this->render('formation/video/agent_formation_list.html.twig', [
                'formations' => $formations,
                'criteres' => $criteres,
                'formationAgentRepository' => $this->formationAgentRepository,
                'categories' => $this->repoCatFormation->findBy(['statut' => 1]),
                'nbrAllMyContacts' => count($this->repoContact->findAll()),
            ]);
        }

        $this->addFlash('danger', 'Vous \'avez pas renseigné le secteur');
        return $this->redirectToRoute('agent_accueil');
    }
    // public function agent_formation_list(Request $request, SessionInterface $session)
    // {
    //     // todo: miandry anle login agent izay ataon Tsiory mba haazaoana ilay session micontenir anle secteur
    //     $agent = $this->getUser();
    //     $allCategoriesOfAgent = $this->categorieFormationAgentService->getCategoriesFromFormationAgent($agent);
    //     $secteur_id = $session->get('secteurId');
    //     $secteur = $this->secteurRepository->findOneBy(['id' => $secteur_id]);
    //     $categorie = $this->categorieFormationAgentService->getCurrentAgentCategorie($agent, $secteur);
        

    //     if($secteur) {
    //                     // dd($request->query->get('q'));
    //         if($criteres = $request->query->get('q')) {
    //             $formations = $this->formationRepository->searchForAgent($criteres, $secteur);
    //         } else {
    //             // $formations = $secteur ? $this->formationRepository->AgentfindBySecteur($secteur) : [];
    //             // $formations = $this->formationRepository->findFormationsAgentBySecteurAndCategorie($secteur, $agent, $categorie, false);
    //             $formations = $this->formationRepository->findFormationsAgentBySecteurAndCategorie($secteur, $agent, null, false);
    //         }

    //         $formations = $this->paginator->paginate(
    //             $formations,
    //             $request->query->getInt('page', 1),
    //             20
    //         );

    //         $categorie = $this->categorieFormationAgentService->getCurrentAgentCategorie($agent, $secteur);
    //         $formationsInCategory = $this->formationRepository->findFormationsAgentBySecteurAndCategorie($secteur, $agent, $categorie, true);
    //         if (count($formationsInCategory) > 0) {
    //             $firstFormation = $formationsInCategory[0];
    //         }else{
    //             $firstFormation = null;
    //         }            

    //         // dd($formationsInCategory);
    //         return $this->render('formation/video/agent_formation_list.html.twig', [
    //             'formations' => $formations,
    //             'criteres' => $criteres,
    //             'formationAgentRepository' => $this->formationAgentRepository,
    //             'categories' => $this->repoCatFormation->findBy(['statut' => 1]),
    //             'allCategoriesOfAgent' => $allCategoriesOfAgent,
    //             'nbrAllMyContacts' => count($this->repoContact->findAll()),
    //             'firstFormation' => $firstFormation
    //         ]);
    //     }

    //     $this->addFlash('danger', 'Vous \'avez pas renseigné le secteur');
    //     return $this->redirectToRoute('agent_accueil');
    // }

    /**
     * @Route("/agent/formation/fiche/{id}", name="agent_formation_fiche", options={"expose"=true})
     * @IsGranted("ROLE_AGENT")
     */
    public function coach_formation_fiche(Formation $formation, Request $request)
    {
       return $this->render('formation/video/agent_formation_fiche.html.twig', [
           'formation' => $formation,
           'formationAgentRepository' => $this->formationAgentRepository
       ]);
    }
    // public function coach_formation_fiche(Formation $formation, Request $request)
    // {
    //    return $this->render('formation/video/agent_formation_fiche.html.twig', [
    //        'formation' => $formation,
    //        'formationAgentRepository' => $this->formationAgentRepository
    //    ]);
    // }

    /**
     * @Route("/agent/formation/terminer/{id}", name="agent_formation_terminer", options={"expose"=true})
     * @IsGranted("ROLE_AGENT")
     */
    public function coach_formation_terminer(Formation $formation, Request $request, EntityManagerInterface $entityManagerInterface)
    {
        try{
            $agent = $this->getUser();
            $coach = $formation->getCoach();
            $result = $this->formationAgentRepository->findBy(['agent' => $agent, 'formation' => $formation]);
            $formationAgent = null;
            if(count($result) > 0){
                $formationAgent = $result[0];
            } else{
                $formationAgent = new FormationAgent();
                $formationAgent->setAgent($agent);
                $formationAgent->setFormation($formation);
            }
            $formationAgent->setStatut(Formation::STATUT_TERMINER);
            $entityManagerInterface->persist($formationAgent);
            $entityManagerInterface->flush();
            $this->mailerService->sendMailAfterDoneFormation($agent, $coach, $formation);
            $this->addFlash('success', '<h2 class="text-secondary text-center"> 🎉 Félicitations! Vous venez de terminer la formation : '.$formation->getTitre().' 🎉</h2>');
        } catch(Exception $ex){
            $this->addFlash('danger', $ex->getMessage());
        }
        
        if (isset($_GET['path'] ) and $_GET['path'] === 'fromDashboard') {
            // On redirige l'utilisateur vers le dashbord lorsqu'il a cliquer le bouton 'J'ai terminé la formation' depuis le dashboard
            $secteur_id = $this->sessionInterface->get('secteurId');
            return $this->redirectToRoute('agent_dashboard_secteur', ['id' => $secteur_id]);
        } else {
            return $this->redirectToRoute('agent_formation_list');
        }
        
    }
    // public function coach_formation_terminer(Formation $formation, Request $request)
    // {
    //     $agentCategorie = new CategorieFormationAgent();
    //     $agent = $this->getUser();
    //     $coach = $formation->getCoach();
    //     $formationAgentRelation = $this->formationAgentRepository->findOneBy(['formation' => $formation, 'agent' => $this->getUser()]);
    //     if($formationAgentRelation) {
    //         $formationAgentRelation->setStatut(Formation::STATUT_TERMINER);
    //         $this->entityManager->save($formationAgentRelation);
    //     }

    //     $agentCategories = $this->categorieFormationAgentService->getAllAgentCategories($agent);
    //     $categorie = $formation->getCategorieFormation();
    //     $isCategoryAlreadyExisting =  $this->categorieFormationAgentService->isCategoryAlreadyExisting($agentCategories, $categorie);
    //     // dd($isCategoryAlreadyExisting);
    //     if (!$isCategoryAlreadyExisting) {
    //         $agentCategorie->setAgent($agent);
    //         $agentCategorie->setCategorieFormation($categorie);
    //         $this->entityManager->save($agentCategorie);
    //     }

    //     $this->mailerService->sendMailAfterDoneFormation($agent, $coach, $formation);
    //     $this->addFlash('success', '<h2 class="text-secondary text-center"> 🎉 Félicitations! Vous venez de terminer la formation : '.$formation->getTitre().' 🎉</h2>');
        
    //     if (isset($_GET['path'] ) and $_GET['path'] === 'fromDashboard') {
    //         // On redirige l'utilisateur vers le dashbord lorsqu'il a cliquer le bouton 'J'ai terminé la formation' depuis le dashboard
    //         $secteur_id = $this->sessionInterface->get('secteurId');
    //         return $this->redirectToRoute('agent_dashboard_secteur', ['id' => $secteur_id]);
    //     } else {
    //         return $this->redirectToRoute('agent_formation_list');
    //     }
        
    // }

}