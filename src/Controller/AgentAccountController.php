<?php


namespace App\Controller;

use App\Entity\AgentSecteur;
use App\Entity\Secteur;
use App\Repository\AgentSecteurRepository;
use App\Repository\FormationRepository;
use App\Repository\SecteurRepository;
use App\Services\AgentSecteurService;
use Knp\Component\Pager\PaginatorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Component\Routing\Annotation\Route;

class AgentAccountController extends AbstractController
{
    protected $repoSecteur;
    protected $repoAgentSecteur;
    protected $repoFormation;

    public function __construct(SecteurRepository $repoSecteur, AgentSecteurRepository $repoAgentSecteur, FormationRepository $repoFormation)
    {
        $this->repoSecteur = $repoSecteur;
        $this->repoAgentSecteur = $repoAgentSecteur;
        $this->repoFormation = $repoFormation;
    }

    /**
     * Page d'accueil pour agent, qui sert de selection d'un secteur
     * 
     * @Route("/agent/accueil", name="agent_accueil")
     */
    public function agent_accueil(AgentSecteurService $agentSecteurService, SessionInterface $session)
    {
        $session->remove('secteurId');

        $allSecteurs = $this->repoSecteur->findAll();
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
    public function agent_generate_sessionSecteur_before_redirect_to_route_dahsboard(Secteur $secteur, SessionInterface $session)
    {
        $session->set('secteurId', $secteur->getId());
        return $this->redirectToRoute('agent_dashboard_secteur', ['id' => $secteur->getId()]);
    }

    /**
     * @Route("/agent/dashboard/secteur/{id}", name="agent_dashboard_secteur")
     */
    public function agent_dashboard_secteur(SessionInterface $session, Request $request, PaginatorInterface $paginator, Secteur $secteur)
    {
        // On vérifie d'abord si la session avec la clé 'secteurId' est générée
        $sessionSecteurId =  $session->get('secteurId');
        if (!$sessionSecteurId) {
            return $this->redirectToRoute('agent_accueil');
        }

        $formations = $this->repoFormation->AgentfindBySecteur($secteur);
        $formations = $paginator->paginate(
            $formations,
            $request->query->getInt('page', 1),
            5
        );
        
        return $this->render('user_category/agent/dashboard_secteur.html.twig', [
            'secteur' => $secteur,
            'formations' => $formations
        ]);
    }
}