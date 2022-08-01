<?php

namespace App\Entity;

use App\Repository\OrderSecuRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use JsonSerializable;

/**
 * @ORM\Entity(repositoryClass=OrderSecuRepository::class)
 */
class OrderSecu implements JsonSerializable
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity=ProduitSecu::class)
     * @ORM\JoinColumn(nullable=false)
     */
    private $produit;

    /**
     * @ORM\ManyToOne(targetEntity=TypeAbonnementSecu::class)
     * @ORM\JoinColumn(nullable=false)
     */
    private $typeAbonnement;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $codePromo;

    /**
     * @ORM\Column(type="float")
     */
    private $prixProduit;

    /**
     * @ORM\Column(type="integer")
     */
    private $statut;

    /**
     * @ORM\ManyToOne(targetEntity=User::class)
     * @ORM\JoinColumn(nullable=false)
     */
    private $agent;

    /**
     * @ORM\ManyToOne(targetEntity=User::class)
     * @ORM\JoinColumn(nullable=false)
     */
    private $client;

    private $sessionKey;

    /**
     * @ORM\OneToMany(targetEntity=OrderSecuAccomp::class, mappedBy="orderSecu")
     */
    private $accomps;

    public function __construct()
    {
        $this->accomps = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getProduit(): ?ProduitSecu
    {
        return $this->produit;
    }

    public function setProduit(?ProduitSecu $produit): self
    {
        $this->produit = $produit;

        return $this;
    }

    public function getTypeAbonnement(): ?TypeAbonnementSecu
    {
        return $this->typeAbonnement;
    }

    public function setTypeAbonnement(?TypeAbonnementSecu $typeAbonnement): self
    {
        $this->typeAbonnement = $typeAbonnement;

        return $this;
    }

    public function getCodePromo(): ?string
    {
        return $this->codePromo;
    }

    public function setCodePromo(?string $codePromo): self
    {
        $this->codePromo = $codePromo;

        return $this;
    }

    public function getPrixProduit(): ?float
    {
        return $this->prixProduit;
    }

    public function setPrixProduit(float $prixProduit): self
    {
        $this->prixProduit = $prixProduit;

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

    public function getAgent(): ?User
    {
        return $this->agent;
    }

    public function setAgent(?User $agent): self
    {
        $this->agent = $agent;

        return $this;
    }

    public function getClient(): ?User
    {
        return $this->client;
    }

    public function setClient(?User $client): self
    {
        $this->client = $client;

        return $this;
    }

    /**
     * Get the value of sessionKey
     */ 
    public function getSessionKey()
    {
        return $this->sessionKey;
    }

    /**
     * Set the value of sessionKey
     *
     * @return  self
     */ 
    public function setSessionKey($sessionKey)
    {
        $this->sessionKey = $sessionKey;

        return $this;
    }

    /**
     * @return Collection<int, OrderSecuAccomp>
     */
    public function getAccomps(): Collection
    {
        return $this->accomps;
    }

    public function addAccomp(OrderSecuAccomp $accomp): self
    {
        if (!$this->accomps->contains($accomp)) {
            $this->accomps[] = $accomp;
            $accomp->setOrderSecu($this);
        }

        return $this;
    }

    public function removeAccomp(OrderSecuAccomp $accomp): self
    {
        if ($this->accomps->removeElement($accomp)) {
            // set the owning side to null (unless already changed)
            if ($accomp->getOrderSecu() === $this) {
                $accomp->setOrderSecu(null);
            }
        }

        return $this;
    }



    //session
    public function add(OrderSecuAccomp $accomp){
        $index = $this->indexOf($accomp->getProduit()->getId());
        if($index!=-1){
            $qty = $this->getAccomps()->get($index)->getQte() + $accomp->getQte();
            $accomp->setQte($qty);
            $this->update($accomp);
        } else{
            //$this->checkBasketItem($basketItem);
            $this->getAccomps()->add($accomp);
        }
    }

    public function indexOf($productId){
        $index = -1;
        for($i=0; $i<$this->getAccomps()->count() ; $i++){
            $accomp = $this->getAccomps()->get($i);
            if($accomp->getProduit()->getId()==$productId) {
                $index = $i;
                break;
            }
        }
        return $index;
    }
    
    // public function checkBasketItem(BasketItem $basketItem){
    //     $basketItem->getProduit()->checkQty($basketItem->getQuantity());
    // }

    public function update(OrderSecuAccomp $accomp){
        //$this->checkBasketItem($basketItem);
        $index = $this->indexOf($accomp->getProduit()->getId());
        if($index!=-1)  $this->getAccomps()->remove($index);

        $this->getAccomps()->add($accomp);
    }

    public function remove($productId){
        $index = $this->indexOf($productId);
        if($index!=-1)  $this->getAccomps()->remove($index);
    }

    public function getMontantAccomp(){
        $montant = 0;
        for($i=0; $i<$this->getAccomps()->count() ; $i++){
            $montant += $this->getAccomps()->get($i)->getMontant();
        }  
        return $montant;
    }

    public function jsonSerialize()
    {
        $vars = get_object_vars($this);
        return $vars;
    }
}
