<?php

namespace App\Controller;

use App\Repository\AgentSecteurRepository;
use App\Repository\UserRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
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
    public function __construct(UserRepository $userRepository, SessionInterface $session)
    {
        $this->userRepository = $userRepository;
        $this->session = $session;
    }
    /**
     * @Route("/", name="boutique_home")
     */
    public function index($token, AgentSecteurRepository $agentSecteurRepository): Response
    {
        $this->session->set('agentToken', $token);
        $agent = $this->userRepository->findAgentByToken($token);
        $agentSecteurs = $agentSecteurRepository->findValidByAgent($agent->getId());
        return $this->render('user_category/client/boutique/home.html.twig', [
            'agentSecteurs' => $agentSecteurs,
            'agent' => $agent 
        ]);
    }
}
