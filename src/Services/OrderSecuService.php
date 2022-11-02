<?php
namespace App\Services;

use App\Entity\BasketItem;
use App\Entity\OrderSecu;
use App\Entity\Secteur;
use App\Entity\User;
use App\Repository\CodePromoSecuRepository;
use App\Repository\OrderSecuRepository;
use App\Repository\TypeAbonnementSecuRepository;
use DateTime;
use Doctrine\ORM\EntityManagerInterface;
use Exception;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
class OrderSecuService
{
    private $session;
    private $codePromoSecuRepository;
    private $orderSecuRepository;
    private $entityManager;
    private $stripeService;
    const PREFIX = 'order-secu-';

    public function __construct(SessionInterface $session, CodePromoSecuRepository $codePromoSecuRepository, EntityManagerInterface $entityManager, StripeService $stripeService, OrderSecuRepository $orderSecuRepository)
    {
        $this->session = $session;
        $this->codePromoSecuRepository = $codePromoSecuRepository;
        $this->entityManager = $entityManager;
        $this->stripeService = $stripeService;
        $this->orderSecuRepository = $orderSecuRepository;
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

    public function removeOrderSecu($sessionKey){
        $this->session->remove(OrderSecuService::PREFIX.$sessionKey);
    }


    public function calculerPrixProduit(OrderSecu $order, $secteurId){
        $order->setPrixProduit($order->getKitbase()->getPrix());
        if($order->getCodePromo()){
            $codePromoSecu = $this->codePromoSecuRepository->findValid($order->getCodePromo(), $secteurId);
            if($codePromoSecu) $order->setPrixProduit($codePromoSecu->getPrix());
        }
    }

    public function saveOrder(string $stripeToken, OrderSecu $orderSecu): ?OrderSecu{
        try{
            $this->entityManager->beginTransaction();

            $orderSecu->refresh($this->entityManager);
            $orderSecu->getKitbase()->checkValid();
            $orderSecu->setDateCommande(new DateTime());
            $orderSecu->setStatut(OrderSecu::VALIDATED);
            $orderSecu->setAccompMontant(0);
            $orderSecu->setTvaPourcentage($orderSecu->getTva()->getValeur());
            //$orderSecu->setInstallationFrais($orderSecu->getFraisInstallation());

            $this->entityManager->persist($orderSecu);

            $montantAccomp = 0;
            foreach($orderSecu->getAccompsSession() as $accomp){
                $accomp->refresh($this->entityManager);
                $accomp->getProduit()->checkValid();

                $accomp->setPrix($accomp->getProduit()->getPrix());
                $orderSecu->addAccomp($accomp);
                $this->entityManager->persist($accomp);

                $montantAccomp += $accomp->getProduit()->getPrix() * $accomp->getQte();
            }
            $orderSecu->setAccompMontant($montantAccomp); 
            
            $chargeId = $this->stripeService
                ->createCharge(
                    $stripeToken, 
                    $orderSecu->getTotalTtc(), [
                        'description' => 'Paiement commande'
                    ]);

            $orderSecu->setChargeId($chargeId);  
            $this->entityManager->flush();
            $this->entityManager->commit();
            return $orderSecu;
        } catch(\Exception $ex){
            if($this->entityManager->getConnection()->isTransactionActive()) {
                $this->entityManager->rollback();
            }
            throw $ex;
        } finally {
            $this->entityManager->clear();
        }
    }

    public function changeStatus(int $orderId, int $status)
    {
        $order = $this->orderSecuRepository->find($orderId);
        if(!$order)  {
            throw new Exception("La commande n°".$orderId." n'existe pas");
        }
        $order->setStatut($status);
        $this->entityManager->flush();
    }
}