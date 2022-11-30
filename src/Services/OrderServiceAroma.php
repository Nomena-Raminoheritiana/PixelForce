<?php
namespace App\Services;

use App\Entity\BasketItemAroma;
use App\Entity\ImplantationAroma;
use App\Entity\OrderAroma;
use App\Entity\OrderImplantationAroma;
use App\Entity\OrderImplantationElmtAroma;
use App\Entity\User;
use App\Repository\OrderAromaRepository;
use App\Repository\OrderImplantationAromaRepository;
use DateTime;
use Doctrine\ORM\EntityManagerInterface;
use Exception;

class OrderServiceAroma
{
    private $basketService;
    private $entityManager;
    private $stripeService;
    private $orderImplantationAromaRepository;
    private $configSecteurService;

    public function __construct(BasketServiceAroma $basketService, EntityManagerInterface $entityManager, StripeService $stripeService, OrderImplantationAromaRepository $orderImplantationAromaRepository, ConfigSecteurService $configSecteurService)
    {
        $this->basketService = $basketService;
        $this->entityManager = $entityManager;
        $this->stripeService = $stripeService;
        $this->orderImplantationAromaRepository = $orderImplantationAromaRepository;
        $this->configSecteurService = $configSecteurService;
    }

    public function saveOrder(OrderAroma $order, string $stripeToken): ?OrderAroma{
        try{
            $groupKey = BasketItemAroma::getGroupKeyStatic($order->getAgent()->getId(), $order->getSecteur()->getId());
            $this->entityManager->beginTransaction();

            $basket = $this->basketService->refreshBasket($groupKey, true);
            if(count($basket) == 0) throw new Exception("Le panier est vide");

            $order->getAddress()->setUser($order->getUser());
            $order->setOrderDate(new DateTime());
            $order->setTva($this->configSecteurService->findTva($order->getSecteur()));
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
            // $order->setAmount($amount); 
            // $order->setMontantTtc($order->getAmount() * (1 + $order->getTva()/100));
            $order->setMontantTtc($amount); 
            $order->setAmount($amount / (1.0 + $order->getTva()/100));
            $chargeId = $this->stripeService
                ->createCharge(
                    $stripeToken, 
                    round($order->getMontantTtc(), 2), [
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

    public function checkUserEnableReassort(User $user, ImplantationAroma $implantation): ?bool 
    {
        $orderImplantationElmts = $this->orderImplantationAromaRepository->findSameParent($user->getId(), $implantation->getMere()->getId());
        return count($orderImplantationElmts) > 0;
    }
}
