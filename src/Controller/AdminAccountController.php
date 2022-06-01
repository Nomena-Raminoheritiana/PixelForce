<?php


namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class AdminAccountController extends AbstractController
{
    /**
     * @Route("/dashboard", name="admin_dashboard")
     */
    public function admin_dashboard()
    {
        return $this->render('user_category/admin/admin_dashboard.html.twig', []);
    }
}