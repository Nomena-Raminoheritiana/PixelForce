<?php

namespace App\Controller;

use App\Entity\User;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class IndexController extends AbstractController
{
    /**
     * @Route("/", name="app_index")
     */
    public function index(): Response
    {
        return $this->redirectToRoute('app_dashboard');
    }

    /**
     * @Route("/dashboard", name="app_dashboard")
     */
    public function dashboard()
    {
        if(in_array(User::ROLE_COACH, $this->getUser()->getRoles())) {
            return $this->redirectToRoute('coach_agent_list');
        }
        return $this->render('global/index/dashboard.html.twig', [
            'controller_name' => 'IndexController',
        ]);
    }
}
