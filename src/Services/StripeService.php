<?php

namespace App\Services;

use App\Util\Search\Constants;
use App\Util\GenericUtil;
use App\Util\Search\MyCriteriaParam;
use Doctrine\ORM\QueryBuilder;
use Stripe\Charge;
use Stripe\Stripe;
use Symfony\Component\DependencyInjection\ParameterBag\ParameterBagInterface;

class StripeService 
{
    private $params;

    public function __construct(ParameterBagInterface $params)
    {
        $this->params = $params;
        Stripe::setApiKey($this->params->get('stripe_secret_key'));
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
}