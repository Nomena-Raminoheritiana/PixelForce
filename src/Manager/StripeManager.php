<?php
namespace App\Manager;

use App\Entity\User;
use App\Services\StripeService;
use Doctrine\ORM\EntityManagerInterface;

class StripeManager {
    private $em;
    private $stripeService;

    public function __construct(EntityManagerInterface $em, StripeService $stripeService)
    {
        $this->em = $em;
        $this->stripeService = $stripeService;
    }

 

    /**
     * Permet d'enregistrer dans la base de données les datas obtenus après le paiement
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

            $this->em->persist($user);
            $this->em->flush();
        }

    }
}