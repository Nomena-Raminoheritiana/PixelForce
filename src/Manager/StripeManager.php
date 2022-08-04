<?php
namespace App\Manager;

use App\Entity\PlanAgentAccount;
use App\Entity\SubscriptionPlanAgentAccount;
use App\Entity\User;
use App\Repository\PlanAgentAccountRepository;
use App\Services\StripeService;
use Doctrine\ORM\EntityManagerInterface;
use Google\Service\Reseller\SubscriptionPlan;

class StripeManager {
    private $em;
    private $stripeService;
    private $repoPlanAgentAccount;

    public function __construct(EntityManagerInterface $em, StripeService $stripeService, PlanAgentAccountRepository $repoPlanAgentAccount)
    {
        $this->em = $em;
        $this->stripeService = $stripeService;
        $this->repoPlanAgentAccount = $repoPlanAgentAccount;
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
}