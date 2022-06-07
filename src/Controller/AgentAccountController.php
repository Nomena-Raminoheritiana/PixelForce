<?php


namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class AgentAccountController extends AbstractController
{
    /**
     * @Route("/agent/accueil", name="agent_accueil")
     */
    public function agent_accueil()
    {
        return $this->render('user_category/agent/home_agent.html.twig', []);
    }
}