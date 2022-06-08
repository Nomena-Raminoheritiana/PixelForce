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
     * @Route("/agent/accueil", name="agent_accueil")
     */
    public function agent_accueil(AgentSecteurService $agentSecteurService)
    {
        $allSecteurs = $this->repoSecteur->findAll();

        return $this->render('user_category/agent/home_agent.html.twig', [
            'allSecteurs' => $allSecteurs,
            'repoAgentSecteur' => $this->repoAgentSecteur,
            'agent' => $this->getUser(),
            'agentSecteurService' => $agentSecteurService
        ]);
    }

    /**
     * @Route("/agent/dashboard/secteur/{id}", name="agent_dashboard_secteur")
     */
    public function agent_dashboard_secteur(SessionInterface $session, Request $request, PaginatorInterface $paginator, Secteur $secteur)
    {
        $session->set('secteurId', $secteur->getId());

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