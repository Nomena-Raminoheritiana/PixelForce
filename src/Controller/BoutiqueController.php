<?php

namespace App\Controller;

use App\Repository\AgentSecteurRepository;
use App\Repository\UserRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/boutique/{token}")
 */
class BoutiqueController extends AbstractController
{
    private $userRepository;
    public function __construct(UserRepository $userRepository)
    {
        $this->userRepository = $userRepository;
    }
    /**
     * @Route("/", name="boutique_home")
     */
    public function index($token, AgentSecteurRepository $agentSecteurRepository): Response
    {
        $agent = $this->userRepository->findAgentByToken($token);
        $agentSecteurs = $agentSecteurRepository->findValidByAgent($agent->getId());
        return $this->render('user_category/client/boutique/home.html.twig', [
            'agentSecteurs' => $agentSecteurs
        ]);
    }
}
