<?php


namespace App\Controller;

use App\Entity\AgentSecteur;
use App\Entity\CategorieFormation;
use App\Entity\Secteur;
use App\Repository\AgentSecteurRepository;
use App\Repository\CategorieFormationRepository;
use App\Repository\ContactRepository;
use App\Repository\FormationAgentRepository;
use App\Repository\FormationRepository;
use App\Repository\RFormationCategorieRepository;
use App\Repository\SecteurRepository;
use App\Services\AgentSecteurService;
use App\Services\CategorieFormationAgentService;
use App\Services\FormationAgentService;
use Knp\Component\Pager\PaginatorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\CalendarEventRepository;

class AgentAccountController extends AbstractController
{
    protected $repoSecteur;
    protected $repoAgentSecteur;
    protected $repoFormation;
    protected $session;
    protected $repoContact;
    protected $repoFormationAgent;
    protected $repoCatFormation;
    protected $repoRelationFormationCategorie;
    protected $categorieFormationAgentService;
    private $calendarEventRepository;

    public function __construct(SecteurRepository $repoSecteur, AgentSecteurRepository $repoAgentSecteur, FormationRepository $repoFormation,SessionInterface $session, ContactRepository $repoContact, FormationAgentRepository $repoFormationAgent, CategorieFormationRepository $repoCatFormation, RFormationCategorieRepository $repoRelationFormationCategorie, CategorieFormationAgentService $categorieFormationAgentService, CalendarEventRepository $calendarEventRepository)
    {
        $this->repoSecteur = $repoSecteur;
        $this->repoAgentSecteur = $repoAgentSecteur;
        $this->repoFormation = $repoFormation;
        $this->session = $session;
        $this->repoContact = $repoContact;
        $this->repoFormationAgent = $repoFormationAgent;
        $this->repoCatFormation = $repoCatFormation;
        $this->repoRelationFormationCategorie = $repoRelationFormationCategorie;
        $this->categorieFormationAgentService = $categorieFormationAgentService;
        $this->calendarEventRepository = $calendarEventRepository;
    }

    /**
     * Page d'accueil pour agent, qui sert de selection d'un secteur
     * 
     * @Route("/agent/accueil", name="agent_home")
     */
    public function agent_home(AgentSecteurService $agentSecteurService)
    {
        $this->session->remove('secteurId');

        $allSecteurs = $this->repoSecteur->findAllActive();
        return $this->render('user_category/agent/home_agent.html.twig', [
            'allSecteurs' => $allSecteurs,
            'repoAgentSecteur' => $this->repoAgentSecteur,
            'agent' => $this->getUser(),
            'agentSecteurService' => $agentSecteurService
        ]);
    }


    /**
     * Permet de générer une session qui contient l'id du secteur 
     * Après génération du clé, on redirige l'utilisateur vers le dashboard
     * 
     * @Route("/agent/secteur/{id}/session/generate", name="agent_generate_sessionSecteur_before_redirect_to_route_dahsboard")
     */
    public function agent_generate_sessionSecteur_before_redirect_to_route_dahsboard(Secteur $secteur)
    {
        $this->session->set('secteurId', $secteur->getId());
        return $this->redirectToRoute('agent_dashboard_secteur', ['id' => $secteur->getId()]);
    }

    /**
     * @Route("/agent/dashboard/secteur/{id}", name="agent_dashboard_secteur")
     */
    public function agent_dashboard_secteur( Request $request, PaginatorInterface $paginator, Secteur $secteur)
    {
      
        $agent = $this->getUser();
        $categorie = $this->categorieFormationAgentService->getCurrentAgentCategorie($agent, $secteur);
      
        $formations = $this->repoFormation->findFormationsAgentBySecteurAndCategorie($secteur, $agent, $categorie, true);
       
        if (count($formations) > 0) {
            $firstFormation = $formations[0];
        }else{
            $firstFormation = null;
        }
        
        // On vérifie d'abord si la session avec la clé 'secteurId' est générée
        $sessionSecteurId =  $this->session->get('secteurId');
        if (!$sessionSecteurId) {
            return $this->redirectToRoute('agent_home');
        }

        $contacts = $this->repoContact->findBy(['secteur' => $secteur]);
        $contacts = $paginator->paginate(
            $contacts,
            $request->query->getInt('page', 1),
            5
        );

        // Calendar upcoming events :
        $upcomingEvents = $this->calendarEventRepository->findUpcomingEvents($agent);
        $eventsOfTheDay = $this->calendarEventRepository->findEventsOfTheDay($agent);


        return $this->render('user_category/agent/dashboard_secteur.html.twig', [
            'secteur' => $secteur,
            'formations' => $formations,
            'firstFormation' => $firstFormation,
            'contacts' => $contacts,
            'CategorieFormation' => CategorieFormation::class,
            'nbrAllMyContacts' => count($this->repoContact->findAll()),
            'repoRelationFormationCategorie' => $this->repoRelationFormationCategorie,
            'upcomingEvents'=> $upcomingEvents,
            'eventsOfTheDay'=> $eventsOfTheDay
        ]);
    }
}