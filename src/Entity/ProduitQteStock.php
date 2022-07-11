<?php

namespace App\Entity;

use App\Entity\Produit;
use App\Repository\ProduitQteStockRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=ProduitQteStockRepository::class, readOnly=true)
 */
class ProduitQteStock
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\OneToOne(targetEntity=Produit::class, inversedBy="produitQteStock", cascade={"persist", "remove"})
     * @ORM\JoinColumn(nullable=false)
     */
    private $produit;

    /**
     * @ORM\Column(type="float")
     */
    private $qteStock;

    public function getId(): ?int
    {
        return $this->id;
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

    public function getQteStock(): ?float
    {
        return $this->qteStock;
    }

    public function setQteStock(float $qteStock): self
    {
        $this->qteStock = $qteStock;

        return $this;
    }
}
