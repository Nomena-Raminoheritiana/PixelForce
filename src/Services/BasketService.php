<?php
namespace App\Services;

use App\Entity\BasketItem;
use Exception;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
class BasketService
{
    private $session;

    public function __construct(SessionInterface $session)
    {
        $this->session = $session;
    }

    public function getBasket($groupKey){
        return $this->session->get("basket-".$groupKey, []);
    }

    public function hasItem($groupKey): ?bool
    {
        return count($this->getBasket($groupKey)) > 0;
    }

    public function setBasket($groupKey, $basket){
        $this->session->set("basket-".$groupKey, $basket);
    }

    
    public function add(BasketItem $basketItem){
        $basket = $this->getBasket($basketItem->getGroupKey());
        $index = $this->indexOf($basketItem->getGroupKey(), $basketItem->getProduit()->getId());
        if($index!=-1){
            $qty = $basket[$index]->getQuantity() + $basketItem->getQuantity();
            $basketItem->setQuantity($qty);
            $this->update($basketItem->getProduit()->getId(), $basketItem);
        } else{
            $this->checkBasketItem($basketItem);
            $basket[] = $basketItem;
            $this->setBasket($basketItem->getGroupKey(), $basket);
        }
    }

    public function indexOf($groupkey, $productId){
        $basket = $this->getBasket($groupkey);
        $index = -1;
        for($i=0; $i<count($basket) ; $i++){
            if($basket[$i]->getProduit()->getId()==$productId) {
                $index = $i;
                break;
            }
        }
        return $index;
    }
    public function getTotalCost($groupkey){
        $basket = $this->getBasket($groupkey);
        $cost = 0;
        for($i=0; $i<count($basket) ; $i++){
            $cost += $basket[$i]->getCost();
        }  
        return $cost;
    }

    public function checkBasketItem(BasketItem $basketItem){
        $basketItem->getProduit()->checkQty($basketItem->getQuantity());
    }

    public function update($productId, BasketItem $basketItem){
        $this->checkBasketItem($basketItem);
        $basket = $this->getBasket($basketItem->getGroupKey());
        $index = $this->indexOf($basketItem->getGroupKey(), $productId);
        if($index!=-1)  array_splice($basket, $index, 1);

        $basket[] = $basketItem;
        $this->setBasket($basketItem->getGroupKey(), $basket);
    }

    public function remove($groupKey, $productId){
        $basket = $this->getBasket($groupKey);
        $index = $this->indexOf($groupKey, $productId);
        if($index!=-1)  array_splice($basket, $index, 1);
        $this->setBasket($groupKey, $basket);
    }

    public function removeBasket($groupKey){
        $this->session->remove("basket-".$groupKey);
    }
}