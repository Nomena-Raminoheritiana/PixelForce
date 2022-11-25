<?php
namespace App\Services;

use App\Entity\BasketItemAroma;
use App\Entity\OrderAroma;
use App\Entity\OrderImplantationAroma;
use App\Entity\OrderImplantationElmtAroma;
use DateTime;
use Doctrine\ORM\EntityManagerInterface;
use Exception;

class OrderServiceAroma
{
    private $basketService;
    private $entityManager;
    private $stripeService;

    public function __construct(BasketServiceAroma $basketService, EntityManagerInterface $entityManager, StripeService $stripeService)
    {
        $this->basketService = $basketService;
        $this->entityManager = $entityManager;
        $this->stripeService = $stripeService;
    }

    public function saveOrder(OrderAroma $order, string $stripeToken): ?OrderAroma{
        try{
            $groupKey = BasketItemAroma::getGroupKeyStatic($order->getAgent()->getId(), $order->getSecteur()->getId());
            $this->entityManager->beginTransaction();

            $basket = $this->basketService->refreshBasket($groupKey, true);
            if(count($basket) == 0) throw new Exception("Le panier est vide");

            $order->getAddress()->setUser($order->getUser());
            $order->setOrderDate(new DateTime());
            $order->setStatus(OrderAroma::CREATED);
            $this->entityManager->persist($order->getAddress());
            $this->entityManager->persist($order);

            $amount = 0;
            foreach($basket as $basketItem){
                //$basketItem = new BasketItemAroma(new ImplantationAroma(), 1);
                $orderImplantation = new OrderImplantationAroma();

                $orderImplantation->setImplantation($basketItem->getImplantation());
                $orderImplantation->setPrixImplantation($basketItem->getImplantation()->getAllTotal()->getTotal());
                $orderImplantation->setUgImplantation($basketItem->getImplantation()->getAllTotal()->getUg());
                $orderImplantation->setRemiseImplantation($basketItem->getImplantation()->getRemise());
                $orderImplantation->setReassortImplantation($basketItem->getImplantation()->isReassort());
                $orderImplantation->setQteElmtImplantation($basketItem->getImplantation()->getQteElmt());

                $orderImplantation->setQty($basketItem->getQuantity());
                $order->addOrderImplantation($orderImplantation);
                $this->entityManager->persist($orderImplantation);

                $amount += $orderImplantation->getCost();

                foreach($basketItem->getImplantation()->getFilles() as $elmt){
                    //$elmt = new ImplantationElmtAroma();
                    if(!$elmt->isValid()) continue;
                    $orderImplantationElmt = new OrderImplantationElmtAroma();
                    $orderImplantationElmt->setImplantationElmt($elmt);
                    $orderImplantationElmt->setPrixConseilleProduitImplantationElmt($elmt->getProduit()->getPrixConseille());
                    $orderImplantationElmt->setPrixProduitImplantationElmt($elmt->getProduit()->getPrix());
                    $orderImplantationElmt->setPrixProduitApresReductionImplantationElmt($elmt->getPrixFinal());
                    $orderImplantationElmt->setQteGratuitImplantationElmt($elmt->getQteGratuit());
                    $orderImplantation->addOrderImplantationElmt($orderImplantationElmt);
                    $this->entityManager->persist($orderImplantationElmt);
                }
            }
            $order->setAmount($amount); 
            $chargeId = $this->stripeService
                ->createCharge(
                    $stripeToken, 
                    $order->getAmount(), [
                        'description' => 'Paiement commande'
                    ]);
            $order->setChargeId($chargeId);        

            $this->entityManager->flush();

            $this->basketService->removeBasket($groupKey);

            $this->entityManager->commit();
            return $order;
        } 
        catch(\Exception $ex){
            if($this->entityManager->getConnection()->isTransactionActive()) {
                $this->entityManager->rollback();
            }
            throw $ex;
        }
        finally {
            $this->entityManager->clear();
        }
    }

    public function changeStatus(OrderAroma $order, int $status)
    {
        $order->setStatus($status);
        $this->entityManager->persist($order);
        $this->entityManager->flush();
    }
}
