<?php

namespace App\Entity;

use App\Repository\KitBaseElmtSecuRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=KitBaseElmtSecuRepository::class)
 */
class KitBaseElmtSecu
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity=KitBaseSecu::class, inversedBy="elmts")
     * @ORM\JoinColumn(nullable=false)
     */
    private $kitBase;

    /**
     * @ORM\Column(type="integer")
     */
    private $status;

    /**
     * @ORM\ManyToOne(targetEntity=ProduitSecuAccomp::class)
     * @ORM\JoinColumn(nullable=false)
     */
    private $produit;

    /**
     * @ORM\Column(type="integer")
     */
    private $qte;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getKitBase(): ?KitBaseSecu
    {
        return $this->kitBase;
    }

    public function setKitBase(?KitBaseSecu $kitBase): self
    {
        $this->kitBase = $kitBase;

        return $this;
    }

    public function getStatus(): ?int
    {
        return $this->status;
    }

    public function setStatus(int $status): self
    {
        $this->status = $status;

        return $this;
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
}
