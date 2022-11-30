<?php

namespace App\Entity;

use App\Repository\InventaireFilleRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=InventaireFilleRepository::class)
 */
class InventaireFille
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity=InventaireMere::class, inversedBy="inventaireFilles")
     * @ORM\JoinColumn(nullable=false)
     */
    private $mere;

    /**
     * @ORM\ManyToOne(targetEntity=Produit::class)
     * @ORM\JoinColumn(nullable=false)
     */
    private $produit;

    /**
     * @ORM\Column(type="float")
     */
    private $qte;

    private $check;
    private $realCheck;
    private $produitlib;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $statut;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getMere(): ?InventaireMere
    {
        return $this->mere;
    }

    public function setMere(?InventaireMere $mere): self
    {
        $this->mere = $mere;

        return $this;
    }

    public function getProduit(): ?Produit
    {
        return $this->produit;
    }

    public function setProduit(?Produit $produit): self
    {
        $this->produit = $produit;

        return $this;
    }

    public function getQte(): ?float
    {
        return $this->qte;
    }

    public function setQte(float $qte): self
    {
        $this->qte = $qte;

        return $this;
    }

    /**
     * Get the value of check
     */ 
    public function getCheck(): ?int
    {
        return $this->check;
    }

    /**
     * Set the value of check
     *
     * @return  self
     */ 
    public function setCheck(?int $check)
    {
        $this->check = $check;

        return $this;
    }

    /**
     * Get the value of realCheck
     */ 
    public function getRealCheck(): ?bool
    {
        return $this->realCheck;
    }

    /**
     * Set the value of realCheck
     *
     * @return  self
     */ 
    public function setRealCheck(?bool $realCheck)
    {
        $this->realCheck = $realCheck;

        return $this;
    }

    public function getStatut(): ?int
    {
        return $this->statut;
    }

    public function setStatut(?int $statut): self
    {
        $this->statut = $statut;

        return $this;
    }

    

    /**
     * Get the value of produitlib
     */ 
    public function getProduitlib()
    {

        return $this->getProduit() ? $this->getProduit()->getNom() : null;
    }

    /**
     * Set the value of produitlib
     *
     * @return  self
     */ 
    public function setProduitlib($produitlib)
    {
        $this->produitlib = $produitlib;

        return $this;
    }
}
