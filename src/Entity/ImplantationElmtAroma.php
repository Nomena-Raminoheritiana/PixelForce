<?php

namespace App\Entity;

use App\Repository\ImplantationElmtAromaRepository;
use App\Util\Status;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=ImplantationElmtAromaRepository::class)
 */
class ImplantationElmtAroma
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity=ImplantationAroma::class, inversedBy="filles")
     * @ORM\JoinColumn(nullable=false)
     */
    private $mere;

    /**
     * @ORM\Column(type="integer")
     */
    private $statut;

    /**
     * @ORM\ManyToOne(targetEntity=ProduitAroma::class)
     * @ORM\JoinColumn(nullable=false)
     */
    private $produit;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $qteGratuit;

    private $prix;
    private $prixProduit;
    private $prixConseilleProduit;
    private $produitlib;
    private $montant;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getMere(): ?ImplantationAroma
    {
        return $this->mere;
    }

    public function setMere(?ImplantationAroma $mere): self
    {
        $this->mere = $mere;

        return $this;
    }

    public function getStatut(): ?int
    {
        return $this->statut;
    }

    public function setStatut(int $statut): self
    {
        $this->statut = $statut;

        return $this;
    }

    public function getProduit(): ?ProduitAroma
    {
        return $this->produit;
    }

    public function setProduit(?ProduitAroma $produit): self
    {
        $this->produit = $produit;

        return $this;
    }

    
    public function setPrix(?string $prix): self
    {
        $this->prix = $prix;

        return $this;
    }

    /**
     * Get the value of prix
     */ 
    public function getPrix()
    {
        return $this->prix;
    }

    
    public function getQteGratuit(): ?int
    {
        return $this->qteGratuit ? $this->qteGratuit : 0;
    }

    public function setQteGratuit(?int $qteGratuit): self
    {
        $this->qteGratuit = $qteGratuit;

        return $this;
    }


    

    /**
     * Get the value of prixProduit
     */ 
    public function getPrixProduit()
    {
        return $this->getProduit()?->getPrix();
    }

    /**
     * Set the value of prixProduit
     *
     * @return  self
     */ 
    public function setPrixProduit($prixProduit)
    {
        $this->prixProduit = $prixProduit;

        return $this;
    }

    /**
     * Get the value of prixConseilleProduit
     */ 
    public function getPrixConseilleProduit()
    {
        return $this->getProduit()?->getPrixConseille();
    }

    /**
     * Set the value of prixConseilleProduit
     *
     * @return  self
     */ 
    public function setPrixConseilleProduit($prixConseilleProduit)
    {
        $this->prixConseilleProduit = $prixConseilleProduit;

        return $this;
    }

    /**
     * Get the value of produitlib
     */ 
    public function getProduitlib()
    {
        return $this->getProduit()?->getNom();
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

    /**
     * Get the value of montant
     */ 
    public function getMontant()
    {
        return $this->montant;
    }

    /**
     * Set the value of montant
     *
     * @return  self
     */ 
    public function setMontant($montant)
    {
        $this->montant = $montant;

        return $this;
    }
    
    
    public function getPrixFinal(){
        return $this->getProduit()->getPrix() * (1. - $this->getMere()->getRemise()/100); 
    }

    public function isValid(){
        return $this->getStatut() === null || $this->getStatut() != Status::INVALID;
    }

    public function getMontantFinal(){
        return $this->getMere()->getQteElmt() * $this->getPrixFinal();
    }

}
