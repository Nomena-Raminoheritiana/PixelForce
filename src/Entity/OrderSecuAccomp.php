<?php

namespace App\Entity;

use App\Repository\OrderSecuAccompRepository;
use Doctrine\ORM\Mapping as ORM;
use JsonSerializable;

/**
 * @ORM\Entity(repositoryClass=OrderSecuAccompRepository::class)
 */
class OrderSecuAccomp implements JsonSerializable
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity=ProduitSecuAccomp::class)
     * @ORM\JoinColumn(nullable=false)
     */
    private $produit;


    /**
     * @ORM\Column(type="integer")
     */
    private $qte;

    /**
     * @ORM\Column(type="float")
     */
    private $prix;

    /**
     * @ORM\ManyToOne(targetEntity=OrderSecu::class, inversedBy="accomps")
     * @ORM\JoinColumn(nullable=false)
     */
    private $orderSecu;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getProduit(): ?ProduitSecuAccomp
    {
        return $this->produit;
    }

    public function setProduit(?ProduitSecuAccomp $produit): self
    {
        $this->produit = $produit;

        return $this;
    }


    public function getQte(): ?int
    {
        return $this->qte;
    }

    public function setQte(int $qte): self
    {
        $this->qte = $qte;

        return $this;
    }

    public function getPrix(): ?float
    {
        return $this->prix;
    }

    public function setPrix(float $prix): self
    {
        $this->prix = $prix;

        return $this;
    }

    public function getOrderSecu(): ?OrderSecu
    {
        return $this->orderSecu;
    }

    public function setOrderSecu(?OrderSecu $orderSecu): self
    {
        $this->orderSecu = $orderSecu;

        return $this;
    }

    public function getMontant(){
        return $this->getProduit()->getPrix() * $this->getQte();
    }

    public function jsonSerialize()
    {
        $vars = get_object_vars($this);
        return $vars;
    }
}
