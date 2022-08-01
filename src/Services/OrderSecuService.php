<?php
namespace App\Services;

use App\Entity\BasketItem;
use App\Entity\OrderSecu;
use App\Repository\CodePromoSecuRepository;
use App\Repository\TypeAbonnementSecuRepository;
use Exception;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
class OrderSecuService
{
    private $session;
    private $codePromoSecuRepository;
    const PREFIX = 'order-secu-';

    public function __construct(SessionInterface $session, CodePromoSecuRepository $codePromoSecuRepository)
    {
        $this->session = $session;
        $this->codePromoSecuRepository = $codePromoSecuRepository;
    }

    public function setOrderSecu(OrderSecu $order){
        $this->session->set(OrderSecuService::PREFIX.$order->getSessionKey(), $order);
    }

    public function getOrderSecu($sessionKey): ?OrderSecu 
    {
        return $this->session->get(OrderSecuService::PREFIX.$sessionKey);
    }

    public function getOrderSecuOrDefault($sessionKey): OrderSecu
    {
        $order = $this->getOrderSecu($sessionKey);
        return $order ? $order : new OrderSecu();
    }




    public function calculerPrixProduit(OrderSecu $order){
        $order->setPrixProduit($order->getTypeAbonnement()->getPrix());
        if($order->getCodePromo()){
            $codePromoSecu = $this->codePromoSecuRepository->findValid($order->getCodePromo());
            if($codePromoSecu) $order->setPrixProduit($codePromoSecu->getPrix());
        }
    }
}