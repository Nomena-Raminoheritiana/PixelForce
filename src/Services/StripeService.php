<?php

namespace App\Services;

use App\Entity\User;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Stripe\Charge;
use Stripe\Stripe;
use Symfony\Component\DependencyInjection\ParameterBag\ParameterBagInterface;
use Symfony\Component\HttpFoundation\Session\SessionInterface;

class StripeService 
{
    const PRODUCT_ID = [
        'PLAN_COMPTE_AGENT' =>  'prod_planCompteAgent'
    ];

    /**
     * Clés disponibles
     * - ONE_SECTOR
     * - MANY_SECTOR
     */
    const ACCOUNT_SUBSCRIPTION_TYPE = [
        'ONE_SECTOR' =>  'Un secteur',
        'MANY_SECTOR' =>  'Plusieurs secteurs'
    ];

    /**
     * Clés disponibles
     * - ACTIVE
     */
    const PLAN_STATUS = [
        'ACTIVE' =>  'active'
    ];

    const STATUS_CHANGE = [
        'CHANGING' => 'En Changement',
        'ACTIVE' => 'Active'
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

    private $params;
    private $secretKey;
    public $publishablaKey;
    private $session;
    private $repoUser;
    private $em;

    public function __construct(ParameterBagInterface $params, SessionInterface $session, UserRepository $repoUser, EntityManagerInterface $em)
    {
        $this->params = $params;
        Stripe::setApiKey($this->params->get('stripe_secret_key'));

        $this->secretKey = $_ENV['STRIPE_SECRET_KEY'];
        $this->publishablaKey = $_ENV['STRIPE_PUBLIC_KEY'];
        $this->session = $session;
        $this->repoUser = $repoUser;
        $this->em = $em;
    }

    public function getIntervalUnitToEnglish($FrenchIntervalUnit)
    {
        $interval_unit_to_english = [];
        foreach (self::INTERVAL_UNIT_TO_FRENCH as $key => $value) {
            $interval_unit_to_english[$value] = $key;
        }

        return $interval_unit_to_english[$FrenchIntervalUnit];
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

    public function getPaymentMethods($paymentMethodId)
    {
        $stripe = new \Stripe\StripeClient($this->secretKey);

        $payment_method = $stripe->paymentMethods->retrieve(
            $paymentMethodId
        );

        return $payment_method;
    }
    
    /**
     * Permet de créer un client dans Stripe (souvent relié par un abonnement)
     */
    public function createCustomer($email, $name, $desciption)
    {
        $stripe = new \Stripe\StripeClient($this->secretKey);

        $customer = $stripe->customers->create([
            'description' => $desciption,
            'email' => $email,
            'name' => $name
        ]);

        return $customer;
    }
    
    public function updateCustomer(string $customerId, $paymentMethodId)
    {
        $stripe = new \Stripe\StripeClient($this->secretKey);

        $stripe->customers->update(
            $customerId, 
            [
                'invoice_settings' => [
                    'default_payment_method' => $paymentMethodId
                ]
            ]
        );
    }

    public function getCustomer(string $customerId)
    {
        $stripe = new \Stripe\StripeClient($this->secretKey);

        $customer = $stripe->customers->retrieve(
            $customerId,
            [ ]
        );
        return $customer;
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
     * Permet de créer un abonnement sans fin, mais peut être annulé
     *
     * @param [type] $customerId
     * @param [type] $priceId
     * @return void
     */
    public function createSubscription($customerId, $priceId)
    {
        $stripe = new \Stripe\StripeClient($this->secretKey);

        $subscription = $stripe->subscriptions->create([
            'customer' => $customerId,
            'items' => [
                [
                    'price' => $priceId,
                    'quantity' => 1,
                ],
            ]
        ]);

        return $subscription;
    
    }

    public function createPrice($amount, $interval_unit, $priceName, string $productId, array $metadata = [])
    {
        $stripe = new \Stripe\StripeClient($this->secretKey);

        $price = $stripe->prices->create([
            'unit_amount' => $amount * 100,
            'currency' => 'eur',
            'recurring' => [
                'interval' => $interval_unit
            ],
            'nickname' => $priceName,
            'product' => $productId
        ]);

        
        if (count($metadata) > 0) {
            $this->updatePrice($price['id'], $metadata);
        }

        return $price;
    }

    public function getPrice(string $priceId)
    {
        $stripe = new \Stripe\StripeClient($this->secretKey);

        $price = $stripe->prices->retrieve(
            $priceId,
            []
        );

        return $price;
    }

    public function updatePrice($priceId, object|array $metadata)
    {
        $stripe = new \Stripe\StripeClient($this->secretKey);

        return $stripe->prices->update(
            $priceId,
            [
                'metadata' => $metadata
            ]
        );
    }


    /**
     * Permet de créer à la fois un Product et un Price (Qui conduit à un plan d'abonnement)
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

    
    public function getDatasAfterSubscriptionPlan($priceId, $paymentMethodId, $stripePriceName, User $user)
    {
        $paymentMethod = $this->getPaymentMethods($paymentMethodId);

        if ($user->getStripeCustomerId() == null) {
            $customer = $this->createCustomer($user->getEmail(), $user->getPrenom(), "Client abonnement $stripePriceName");
            $paymentMethod->attach([ 'customer' => $customer['id'] ]);;
            $this->updateCustomer($customer['id'], $paymentMethodId);
                    
            $user->setStripeCustomerId($customer['id']);
            $this->em->persist($user);
            $this->em->flush();
        }else{
            $bddCustomerId = $user->getStripeCustomerId();
            $customer = $this->getCustomer($bddCustomerId);
        }
 
        $subscription = $this->createSubscription($customer['id'], $priceId);
                
        return $subscription;
    }

    public function getSecretKey(){
        return $this->secretKey;
    }


    /**
     * Explication Prorata : https://stripe.com/docs/billing/subscriptions/prorations
     */
    public function updateSubscriptionByPrice($subscriptionId, $newPriceId, $oldPriceId)
    {
        \Stripe\Stripe::setApiKey($this->secretKey);

        $subscription = \Stripe\Subscription::retrieve($subscriptionId);
        \Stripe\Subscription::update(
            $subscriptionId, 
            [
                'payment_behavior' => 'pending_if_incomplete', // Attendre que la période de l'ancien abonnement se termine pour appliquer le nouveau changement
                'proration_behavior' => 'none', //désactiver le calcule du prorata
                // [
                //     'metadata' => [
                //         'description' => 'Migration vers un autre abonnement',
                //         'old_price_id' => $oldPriceId,
                //         'new_price_id' => $newPriceId
                //     ]
                // ],
                'items' => [
                    [
                        'id' => $subscription->items->data[0]->id,
                        'price' => $newPriceId,
                    ],
                ]
            ]
        );
    }

    /**
     * Permet de récupérer une facture à venir pour prévisualiser les modifications apportées à un abonnement
     *
     * @param string $subscriptionId
     * @param string $customerId
     * @param string $newPriceId
     */
    public function getProrationInfo(string $subscriptionId, string $customerId, string $newPriceId)
    {
        \Stripe\Stripe::setApiKey($this->secretKey);

        // Set proration date to this moment:
        // Explication Prorata : https://stripe.com/docs/billing/subscriptions/prorations
        $proration_date = time();

        $subscription = \Stripe\Subscription::retrieve($subscriptionId);

        // See what the next invoice would look like with a price switch
        // and proration set:
        $items = [
            [
                'id' => $subscription->items->data[0]->id,
                'price' => $newPriceId, # Switch to new price
            ],
        ];

        $invoice = \Stripe\Invoice::upcoming([
            'customer' => $customerId,
            'subscription' => $subscriptionId,
            'subscription_items' => $items,
            'subscription_proration_date' => $proration_date,
        ]);
    }
}