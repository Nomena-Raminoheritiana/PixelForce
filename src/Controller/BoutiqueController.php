<?php

namespace App\Controller;

use App\Entity\Secteur;
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
    public function secteur($token, Secteur $secteur)
    {
        var_dump('ok');
    }
}
