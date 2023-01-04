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
use Nucleos\DompdfBundle\Wrapper\DompdfWrapperInterface;

class OrderServiceAroma
{
    private $basketService;
    private $entityManager;
    private $stripeService;
    private $orderImplantationAromaRepository;
    private $configSecteurService;
    private $mailerService;
    private $fileHandler;
    private $wrapper;

    public function __construct(BasketServiceAroma $basketService, EntityManagerInterface $entityManager, StripeService $stripeService, OrderImplantationAromaRepository $orderImplantationAromaRepository, ConfigSecteurService $configSecteurService, DompdfWrapperInterface $wrapper, FileHandler $fileHandler, MailerService $mailerService)
    {
        $this->basketService = $basketService;
        $this->entityManager = $entityManager;
        $this->stripeService = $stripeService;
        $this->orderImplantationAromaRepository = $orderImplantationAromaRepository;
        $this->configSecteurService = $configSecteurService;
        $this->mailerService = $mailerService;
        $this->fileHandler = $fileHandler;
        $this->wrapper = $wrapper;
    }

    public function saveOrder(OrderAroma $order): ?OrderAroma{
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
           
            $paymentIntent = $this->stripeService->paymentIntent(round($order->getMontantTtc(), 2));
            $order->setChargeId($paymentIntent->id); 

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

    public function payOrder(OrderAroma $order){
        $paymentIntent = $this->stripeService->getPaymentIntent($order->getChargeId());
        if($paymentIntent->status != "succeeded") throw new Exception("Erreur rencontrée lors du paiement");
        $order->setStatus(OrderAroma::PAIED);
        $this->entityManager->persist($order);
        $this->entityManager->flush();
        try{
            $this->saveInvoice($order);
            $this->mailerService->sendFactureAroma($order);
        } catch(Exception $ex){}
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

    public function saveInvoice(OrderAroma $order){
        $facturePdf = $this->mailerService->renderTwig('pdf/facture_aroma.html.twig', [
            'order' => $order
        ]);
        $binary = $this->wrapper->getPdf($facturePdf, ['isRemoteEnabled' => true, 'isHtml5ParserEnabled'=>true, 'defaultFont'=> 'Arial']);
        $directory = "factures/aroma";
        $pj_filepath = $this->fileHandler->saveBinary($binary, "Facture Pixelforce-Commande n°".$order->getId()." du ".date('Y-m-d-H-i-s').'.pdf', $directory);
        $order->setInvoicePath($pj_filepath);
        $this->entityManager->flush();
    }
}
