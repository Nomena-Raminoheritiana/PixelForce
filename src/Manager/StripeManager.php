<?php
namespace App\Manager;

use App\Entity\PlanAgentAccount;
use App\Entity\SubscriptionPlanAgentAccount;
use App\Entity\User;
use App\Repository\PlanAgentAccountRepository;
use App\Repository\SubscriptionPlanAgentAccountRepository;
use App\Services\StripeService;
use Doctrine\ORM\EntityManagerInterface;
use Google\Service\Reseller\SubscriptionPlan;

class StripeManager {
    private $em;
    private $stripeService;
    private $repoPlanAgentAccount;
    private $repoSubscriptionPlanAgentAccount;

    public function __construct(EntityManagerInterface $em, StripeService $stripeService, PlanAgentAccountRepository $repoPlanAgentAccount, SubscriptionPlanAgentAccountRepository $repoSubscriptionPlanAgentAccount)
    {
        $this->em = $em;
        $this->stripeService = $stripeService;
        $this->repoPlanAgentAccount = $repoPlanAgentAccount;
        $this->repoSubscriptionPlanAgentAccount = $repoSubscriptionPlanAgentAccount;
    }

 

    /**
     * Permet de repositionner vers le nouveau prix d'abonnement si l'abonnement actuel est déjà abondonné 
     * @return PlanAgentAccount 
     */
    public function getNewPrice($planAgentAccounts)
    {
        $newPlanAgentAccount = null;

        /** @var PlanAgentAccount $plan */
        foreach ($planAgentAccounts as $plan) {
            if ($plan->getStatusChange() !== StripeService::STATUS_CHANGE['CHANGING']) {
                $newPlanAgentAccount = $plan;
            }
        }
     
        return $newPlanAgentAccount;
    }

    /**
     * Permet de récupérer les datas obtenus après le paiement
     */
    public function persistPayment(User $user, $stripeParameter)
    {
        $data =  $this->stripeService->getDatasAfterPayment($stripeParameter['paymentIntent']);

        if ($data) {
            $resource = [
                'stripe_brand' => $data['charges']['data'][0]['payment_method_details']['card']['brand'],
                'stripe_last4' => $data['charges']['data'][0]['payment_method_details']['card']['last4'],
                'stripe_charges_id' => $data['charges']['data'][0]['id'],
                'stripe_status' => $data['charges']['data'][0]['status'],
                'stripe_client_secret' => $data['client_secret']
            ];
        }

        if ($resource !== null ) {
            $user->setStripeData($resource);

            if ($stripeParameter['agent_accountStatus'] === USER::ACCOUNT_STATUS['UNPAID']) {
                $user->setAccountStatus(User::ACCOUNT_STATUS['TRIAL']);
            }elseif($stripeParameter['agent_accountStatus'] === USER::ACCOUNT_STATUS['EXPIRED']  ){
                $user->setAccountStatus(User::ACCOUNT_STATUS['ACTIVE']);
            }

            $this->em->persist($user);
            $this->em->flush();
        }

    }

    public function persistCreationPlanAgentAccount($planParams)
    {
        $planAgentAccount = new PlanAgentAccount();
        $planAgentAccount->setStipeProductId($planParams['productId']);
        $planAgentAccount->setStripePriceId($planParams['priceId']);
        $planAgentAccount->setStripePriceName($planParams['priceName']);
        $planAgentAccount->setDescription($planParams['description']);
        $planAgentAccount->setAmount($planParams['amount']);
        $planAgentAccount->setPriceIntervalUnit($planParams['intervallUnit']);
        $planAgentAccount->setStatus($planParams['status']);

        $this->em->persist($planAgentAccount);
        $this->em->flush();
    }

    /**
     * Permet de faire la persistance lors d'un abonnement à un plan (PlanAgentAccount)
     */
    public function persistAgentSubscriptionPlan($stripePriceId, $paymentMethodId, $stripePriceName, $planSubscriptionId, User $user)
    {
        $data = $this->stripeService->getDatasAfterSubscriptionPlan($stripePriceId, $paymentMethodId, $stripePriceName, $user);
        $plan = $this->repoPlanAgentAccount->findOneBy(['id' => $planSubscriptionId]);
     

        if ($data) {
            $resource = [
                'stripe_subscription_id' => $data['id'],
                'stripe_customer_id' => $data['customer'],
                'stripe_price_id' => $data['items']['data'][0]['plan']['id'],
                'stripe_product_id' => $data['items']['data'][0]['plan']['product'],
                'stripe_amount' => $data['items']['data'][0]['plan']['amount'],
                'stripe_subscription_interval' => $data['items']['data'][0]['plan']['interval'],
                'stripe_subscription_status' => $data['status']
            ];
        }

        if ($resource !== null ) {
            $subscription = new SubscriptionPlanAgentAccount();

            $subscription->setUser($user);
            $subscription->setUserEmail($user->getEmail());
            $subscription->setStripePriceId($resource['stripe_price_id']);
            $subscription->setStripeSubscriptionId($resource['stripe_subscription_id']);
            $subscription->setStripeCustumerId($resource['stripe_customer_id']);
            $subscription->setStripeProductId($resource['stripe_product_id']);
            $subscription->setAmount($resource['stripe_amount']/100);
            $subscription->setStripeSubscriptionInterval($resource['stripe_subscription_interval']);
            $subscription->setStripeSubscriptionStatus($resource['stripe_subscription_status']);
            $subscription->setReference(uniqid('', false));
            $subscription->setPlanAgentAccount($plan);
            $subscription->setStripePriceName($stripePriceName);
            $subscription->setStripeData($resource);

            $user->setAccountStatus(User::ACCOUNT_STATUS['ACTIVE']);

            $this->em->persist($subscription);
            $this->em->persist($user);
            $this->em->flush();
        }
    }

    /**
     * Return un Price (Stripe)
     *
     * @param [type] $amount
     * @param string $interval_unit
     * @param [type] $priceName
     * @param string $productId
     * @param [type] $oldPriceId
     */
    public function persistMigrateAbonnement($amount, string $interval_unit, $priceName, $priceDescription, string $productId, $oldPriceId, PlanAgentAccount $oldPlanAgentAccount)
    {
        // 1 => On determine le type de changement d'abonnement (Upgrade/Downgrade)
        $oldPrice = $this->stripeService->getPrice($oldPriceId);
        $oldPriceAmount = $oldPrice['unit_amount'] / 100;
        $newPriceAmount = intval($amount);
        $type_change = $oldPriceAmount > $newPriceAmount ? "Downgrade" : "Upgrade";

        // 2 => On gère les metadatas du nouveau Price
        $newPriceMetadata = [
            'cause_creation' => "Modification abonnement",
            'type_change' => $type_change,
            'old_price_id' => $oldPriceId,
            'old_price_amount' => $oldPriceAmount . ' €'
        ];
        
        // 3 => On crée un nouveau Prix
        $newPrice = $this->stripeService->createPrice($amount, $interval_unit, $priceName, $productId, $newPriceMetadata);

        // 4 => On gère les metadatas de l'ancien Price
        $oldPriceMetadata = [
            'status_change' => StripeService::STATUS_CHANGE['CHANGING'],
            'type_change' => $type_change,
            'new_price_id' => $newPrice['id'],
            'new_price_amount' => intval($newPrice['unit_amount']) / 100 . ' €'
        ];

        $this->stripeService->updatePrice($oldPriceId, $oldPriceMetadata);

        // 5 => Persit in database
        $planAgentAccount = new PlanAgentAccount();
        $planAgentAccount->setStipeProductId($productId);
        $planAgentAccount->setStripePriceId($newPrice['id']);
        $planAgentAccount->setStripePriceName($priceName);
        $planAgentAccount->setDescription($priceDescription);
        $planAgentAccount->setAmount($amount);
        $planAgentAccount->setPriceIntervalUnit(StripeService::INTERVAL_UNIT_TO_FRENCH[$interval_unit]);
        $planAgentAccount->setStatus(StripeService::PLAN_STATUS['ACTIVE']);
        $planAgentAccount->setPriceMetadata($newPriceMetadata);
        $planAgentAccount->setOldStripePriceId($oldPrice['id']);

        $this->em->persist($planAgentAccount);
        $this->em->flush();

        $oldPlanAgentAccount->setStatusChange(StripeService::STATUS_CHANGE['CHANGING']);
        $oldPlanAgentAccount->setPriceMetadata($oldPriceMetadata);
        $this->em->persist($oldPlanAgentAccount);
        $this->em->flush();


        // 6 => On migre les abonnés vers le nouvel abonnement 
        $allSubscriptionsInOldPrice = $this->repoSubscriptionPlanAgentAccount->findBy(['stripePriceId' => $oldPriceId]);
        if (count($allSubscriptionsInOldPrice) > 0) {
            /** @var SubscriptionPlanAgentAccount $subscription  */
            foreach ($allSubscriptionsInOldPrice as $subscription) {
                $this->stripeService->updateSubscriptionByPrice($subscription->getStripeSubscriptionId(), $newPrice['id'], $oldPriceId);          
                $subscription->setStripePriceId($newPrice['id']);
                $subscription->setAmount(intval($newPrice['unit_amount']) / 100);
                $subscription->setTypeChange($type_change);
                $subscription->setOldPriceAmount($oldPriceAmount);
                $subscription->setOldStripePriceId($oldPriceId);
                $this->em->persist($subscription);
                $this->em->flush();
            }
        }

        return $planAgentAccount;
    }
}