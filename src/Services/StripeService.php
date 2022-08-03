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

    const PRODUCT_ID = [
        'PLAN_COMPTE_AGENT' =>  'prod_planCompteAgent'
    ];

    /**
     * Clés disponibles
     * - ACTIVE
     */
    const PLAN_STATUS = [
        'ACTIVE' =>  'active'
    ];

    const INTERVAL_UNIT_TO_FRENCH = [
        self::INTERVAL_UNIT_DAY => 'Jour',
        self::INTERVAL_UNIT_WEEK => 'Semaine',
        self::INTERVAL_UNIT_MONTH => 'Mois',
        self::INTERVAL_UNIT_YEAR => 'An'
    ];
    
    const INTERVAL_UNIT_DAY = 'day';
    const INTERVAL_UNIT_WEEK = 'week';
    const INTERVAL_UNIT_MONTH = 'month';
    const INTERVAL_UNIT_YEAR = 'year';

    const INTERVAL_UNIT = [
        self::INTERVAL_UNIT_DAY => self::INTERVAL_UNIT_DAY,
        self::INTERVAL_UNIT_WEEK => self::INTERVAL_UNIT_WEEK,
        self::INTERVAL_UNIT_MONTH => self::INTERVAL_UNIT_MONTH,
        self::INTERVAL_UNIT_YEAR => self::INTERVAL_UNIT_YEAR
    ];

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


    public function intentSecret($amount)
    {
        $intent = $this->paymentIntent($amount);

        return $intent['client_secret'] ?? null;
    }

    /**
     * Permet de créer un produit
     *
     * @param string $name
     */
    public function createProduct(string $name)
    {
        $stripe = new \Stripe\StripeClient($this->secretKey);

        $product = $stripe->products->create([
            'name' => $name
        ]);

        return $product;
    }
    

    /**
     * Permet de récupérer un produit par son Id
     *
     * @param string $productId
     * @return object
     */
    public function getProduct(string $productId)
    {
        $stripe = new \Stripe\StripeClient($this->secretKey);

        try {
            $product = $stripe->products->retrieve(
                $productId
            );
        
            return $product;
        } catch (\Throwable $th) {
            $product  = (object) ['product' => null, 'id' => 'not_found'] ;
            return $product;
        }
    }

    public function allPricesByProduct($productId)
    {
        $stripe = new \Stripe\StripeClient($this->secretKey);

        $prices = $stripe->prices->all([
            'limit' => 3,
            'product' => $productId
        ]);

        return $prices;
    }

    /**
     * Permet de créer à la fois un Product et un Price 
     * Un produit qui est à titre de "Abonnement compte Agent"
     */
    public function create_Subscription_ProductAndPrice($amount, $interval_unit, $productName, $productDescription, $priceName, $planDescription)
    {
        $stripe = new \Stripe\StripeClient($this->secretKey);

        $stripeDatas = [];

        $existingProduct = $this->getProduct(self::PRODUCT_ID['PLAN_COMPTE_AGENT']);
        if ($existingProduct->id === 'not_found') {
            $product = $stripe->products->create([
                'id' => self::PRODUCT_ID['PLAN_COMPTE_AGENT'],
                'name' => $productName,
                'description' => $productDescription
            ]);
        } else {
            $product = $existingProduct;
        }

        $productId = $product['id'];
        
        $price = $stripe->prices->create([
            'unit_amount' => $amount * 100,
            'currency' => 'eur',
            'recurring' => [
                'interval' => $interval_unit
            ],
            'nickname' => $priceName,
            'product' => $productId
        ]);

        $stripeDatas['productId'] = $productId; 
        $stripeDatas['priceId'] = $price->id; 
        $stripeDatas['priceName'] = $price->nickname; 
        $stripeDatas['description'] = $planDescription; 
        $stripeDatas['amount'] = $price->unit_amount / 100; 
        $stripeDatas['intervallUnit'] = self::INTERVAL_UNIT_TO_FRENCH[$price->recurring->interval]; 
        $stripeDatas['status'] = self::PLAN_STATUS['ACTIVE']; 

        return $stripeDatas;
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