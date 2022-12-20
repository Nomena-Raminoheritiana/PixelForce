<?php
namespace App\Services;

use App\Entity\Devis;
use App\Entity\OrderDigital;
use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use Exception;

class OrderDigitalService
{
    private $entityManager;
    private $stripeService;
    

    public function __construct(EntityManagerInterface $entityManager, StripeService $stripeService)
    {
        $this->entityManager = $entityManager;
        $this->stripeService = $stripeService;
    }

    

    public function saveOrder(OrderDigital $order, Devis $devis, User $agent, User $client): ?OrderDigital{
        try{
            $this->entityManager->beginTransaction();

            $order->setAmount($devis->getPrice());
            $order->setAgent($agent);
            $order->setAgentEmail($agent->getEmail());
            $order->setClient($client);
            $order->setClientEmail($client->getEmail());
            $order->setDevis($devis);
            $order->setStatut(OrderDigital::CREATED);

            
            $this->entityManager->persist($order);
            $this->entityManager->persist($devis);

            $paymentIntent = $this->stripeService->paymentIntent($order->getAmount());
            $order->setStripeChargeId($paymentIntent->id);
            $this->entityManager->flush();
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

    public function payOrder(OrderDigital $order){
        try{
            $this->entityManager->beginTransaction();
            $paymentIntent = $this->stripeService->getPaymentIntent($order->getStripeChargeId());
            if($paymentIntent->status != "succeeded") throw new Exception("Erreur rencontrée lors du paiement");
            $order->setStatut(OrderDigital::PAIED);
            $order->getDevis()->setStatus(Devis::DEVIS_STATUS['PAID']);
            $order->getDevis()->setStatusInt(Devis::DEVIS_STATUS_INT['PAID']);
            $this->entityManager->persist($order);
            $this->entityManager->persist($order->getDevis());
            $this->entityManager->flush();
            $this->entityManager->commit();
            try{
            } catch(Exception $ex){}
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
    
}
