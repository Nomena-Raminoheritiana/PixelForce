<?php

namespace App\Controller\Order;

use App\Entity\Order;
use App\Repository\OrderRepository;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\BinaryFileResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\ResponseHeaderBag;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/common/order")
 */
class OrderControllerCommon extends AbstractController
{
    private $entityManager;
    private $orderRepository;
    private $userRepository;
    private $session;

    public function __construct(EntityManagerInterface $entityManager, OrderRepository $orderRepository, UserRepository $userRepository, SessionInterface $session)
    {
        $this->entityManager = $entityManager;
        $this->orderRepository = $orderRepository;
        $this->userRepository = $userRepository;
        $this->session = $session;
    }

    /**
     * @Route("/downloadFacture/{id}", name="common_order_download_contrat")
     */
    public function downloadFacture(Order $order): Response
    {
        
        $filename = $order->getInvoicePath();
        $response = new BinaryFileResponse(
            $this->getParameter('files_directory_relative')."/".$filename
        );
        $response->headers->set('Content-Type', 'appication/pdf');
        $response->setContentDisposition(
            ResponseHeaderBag::DISPOSITION_ATTACHMENT
        );
        return $response;
    }
}