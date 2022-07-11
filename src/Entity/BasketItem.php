<?php

namespace App\Entity;

use App\Repository\BasketItemRepository;
use Doctrine\ORM\Mapping as ORM;
use JsonSerializable;

/**
 * @ORM\Entity(repositoryClass=BasketItemRepository::class)
 */
class BasketItem implements JsonSerializable
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity="Produit", inversedBy="basketItems")
     * @ORM\JoinColumn(name="id_produit", referencedColumnName="id")
     */
    private $produit;

    /**
     * @ORM\Column(type="integer")
     */
    private $quantity;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $agentId;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $secteurId;


    public function getId(): ?int
    {
        return $this->id;
    }

    public function getQuantity(): ?int
    {
        return $this->quantity;
    }

    public function setQuantity(int $quantity): self
    {
        $this->quantity = $quantity;

        return $this;
    }

    public function getCost()
    {
        return $this->getProduit()->getPrix() * $this->getQuantity();
    }


    public function getProduit(): ?Produit
    {
        return $this->produit;
    }

    public function setProduit(Produit $produit): self
    {
        $this->produit = $produit;

        return $this;
    }

    public function __construct($produit, int $quantity){
        $this->produit = $produit;
        $this->quantity = $quantity;
    }

    public function jsonSerialize()
    {
        $vars = get_object_vars($this);
        return $vars;
    }

    public function getAgentId(): ?int
    {
        return $this->agentId;
    }

    public function setAgentId(?int $agentId): self
    {
        $this->agentId = $agentId;

        return $this;
    }

    public function getSecteurId(): ?int
    {
        return $this->secteurId;
    }

    public function setSecteurId(?int $secteurId): self
    {
        $this->secteurId = $secteurId;

        return $this;
    }

    public static function getGroupKeyStatic($agentId, $secteurId){
        return $agentId."-".$secteurId;
    }

    public function getGroupKey(){
        return BasketItem::getGroupKeyStatic($this->getAgentId(), $this->getSecteurId());
    }

}
