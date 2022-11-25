<?php
namespace App\Services;

use App\Entity\BasketItemAroma;
use App\Repository\ImplantationAromaRepository;
use Exception;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
class BasketServiceAroma
{
    private $session;
    private $implantationAromaRepository;

    public function __construct(SessionInterface $session, ImplantationAromaRepository $implantationAromaRepository)
    {
        $this->session = $session;
        $this->implantationAromaRepository = $implantationAromaRepository;
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

    public function add(BasketItemAroma $basketItem){
        $basket = $this->getBasket($basketItem->getGroupKey());
        $index = $this->indexOf($basketItem->getGroupKey(), $basketItem->getImplantation()->getId());
        if($index!=-1){
            $qty = $basket[$index]->getQuantity() + $basketItem->getQuantity();
            $basketItem->setQuantity($qty);   
        }  
        $this->update($basketItem->getImplantation()->getId(), $basketItem);
    }

    
    public function indexOf($groupkey, $productId){
        $basket = $this->getBasket($groupkey);
        $index = -1;
        for($i=0; $i<count($basket) ; $i++){
            if($basket[$i]->getImplantation()->getId()==$productId) {
                $index = $i;
                break;
            }
        }
        return $index;
    }

    public function getTotalCostBasket($basket){
        $cost = 0;
        for($i=0; $i<count($basket) ; $i++){
            $cost += $basket[$i]->getCost();
        }  
        return $cost;
    }

    public function getTotalCost($groupKey){
        $basket = $this->getBasket($groupKey);
        return $this->getTotalCostBasket($basket);
    }

    public function checkBasketItem(BasketItemAroma $basketItem){
        // $basketItem->getProduct()->checkQty($basketItem->getQuantity());
        return true;
    }

    public function refreshBasket($groupkey, bool $throwIfInvalid = false){
        $basket = $this->getBasket($groupkey);
        $toRemove = [];
        $toRemoveNames = [];
        for($i=0; $i<count($basket); $i++){
            $basketItem = $this->refreshBasketItem($basket[$i]);
            if(!$basketItem->getImplantation()->isValid()){
                $toRemove[] = $i;
                $toRemoveNames[] = $basketItem->getImplantation()->getNom();
            }
            $basket[$i] = $basketItem;
        }
        if(count($toRemove) > 0 && $throwIfInvalid) {
            $message = "Les produits ". join(', ', $toRemoveNames)." n'existent plus, veuillez les supprimer de votre panier";
            throw new Exception($message);
        }
        foreach($toRemove as $index) array_splice($basket, $index, 1);
        $this->setBasket($groupkey, $basket);
        return $basket;
    }

    public function refreshBasketItem(BasketItemAroma $basketItem): BasketItemAroma{
        $implantation = $this->implantationAromaRepository->find($basketItem->getImplantation()->getId());
        $basketItem->setImplantation($implantation);
        return $basketItem;
    }

    public function update($productId, BasketItemAroma $basketItem){
        $this->checkBasketItem($basketItem);
        $basket = $this->getBasket($basketItem->getGroupKey());
        $index = $this->indexOf($basketItem->getGroupKey(), $productId);
        if($index!=-1)  array_splice($basket, $index, 1);
        if($basketItem->getQuantity() > 0){
            $basket[] = $basketItem;
        }
        $this->setBasket($basketItem->getGroupKey(), $basket);
    }

    public function updateAll($agentId, $secteurId, $basketItems){
        for($i=0; $i<count($basketItems);$i++){
            $productId = $basketItems[$i]['productId'];
            $quantity = $basketItems[$i]['quantity'];
            $product = $this->implantationAromaRepository->find($productId);
            $basketItem = new BasketItemAroma($product, $quantity);
            $basketItem->setAgentId($agentId);
            $basketItem->setSecteurId($secteurId);
            $this->update($productId, $basketItem);
        }
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