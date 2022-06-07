<?php


namespace App\Controller;

use App\Entity\AgentSecteur;
use App\Repository\AgentSecteurRepository;
use App\Repository\SecteurRepository;
use App\Services\AgentSecteurService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class AgentAccountController extends AbstractController
{
    protected $repoSecteur;
    protected $repoAgentSecteur;

    public function __construct(SecteurRepository $repoSecteur, AgentSecteurRepository $repoAgentSecteur)
    {
        $this->repoSecteur = $repoSecteur;
        $this->repoAgentSecteur = $repoAgentSecteur;
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
}