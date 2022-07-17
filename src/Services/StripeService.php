<?php

namespace App\Services;

use Stripe\Charge;
use Stripe\Stripe;
use Symfony\Component\DependencyInjection\ParameterBag\ParameterBagInterface;

class StripeService 
{
    private $params;
    private $secretKey;
    public $publishablaKey;

    public function __construct(ParameterBagInterface $params)
    {
        $this->params = $params;
        Stripe::setApiKey($this->params->get('stripe_secret_key'));

        $this->secretKey = $_ENV['STRIPE_SECRET_KEY'];
        $this->publishablaKey = $_ENV['STRIPE_PUBLIC_KEY'];

    }

    public function createCharge($token, $amount, $params): ?string
    {
        $params = array_merge([], $params);
        $params['amount'] = $amount * 100;
        $params['currency'] = $this->params->get('stripe_currency');
        $params['source'] = $token;
        $charge = Charge::create($params);
        return $charge->id;
    }

    
    /**
     * @return object
     */
    public function paymentIntent($amount)
    {
        \Stripe\Stripe::setApiKey($this->secretKey); 
        

        $intentStripe = \Stripe\PaymentIntent::create([
            'amount' => $amount * 100,
            'currency' =>  'eur',
            'payment_method_types' =>  ['card']
        ]);

        return $intentStripe;
    }


    public function intentSecret($formationPrice)
    {
        $intent = $this->paymentIntent($formationPrice);

        return $intent['client_secret'] ?? null;
    }

    
    /**
     *
     * @param array $stripeParameter --- POST's result
     * @param Product $product
     */
    public function getDatasAfterPayment(array $stripeParameter)
    {
        \Stripe\Stripe::setApiKey($this->secretKey);

        // (1) => On récupère le IntentId        
        $stripeIntenId = $stripeParameter['id'];
        
        // (2) => On récupère le PaymentIntent via le IntentId        
        $payement_intent = null;
        if (isset($stripeIntenId)) {
            $payement_intent = \Stripe\PaymentIntent::retrieve($stripeIntenId);
        }

        // (3) => On gère les status du paiement        
        if ($stripeParameter['status'] === 'succeeded') {
            //TODO 
        } else {
            $payement_intent->cancel();
        }

        return $payement_intent;
    }
}