<?php

namespace App\Entity;

use App\Repository\ImplantationAromaRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=ImplantationAromaRepository::class)
 */
class ImplantationAroma
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $nom;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $description;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $image;

    /**
     * @ORM\Column(type="integer")
     */
    private $statut;

    /**
     * @ORM\Column(type="boolean", nullable=true)
     */
    private $elementUnique;

    /**
     * @ORM\Column(type="integer")
     */
    private $qteElmt;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $qteElmtReassort;


    /**
     * @ORM\OneToMany(targetEntity=ImplantationElmtAroma::class, mappedBy="mere")
     */
    private $filles;
    
    /**
     * @ORM\Column(type="decimal", precision=5, scale=2, nullable=true)
     */
    private $remise;
    
    /**
     * @ORM\Column(type="decimal", precision=5, scale=2, nullable=true)
     */
    private $remiseReassort;
    
    private $remiseTotaleConsiderantGratuits;
    private $remiseTotaleConsiderantGratuitsReassort;

    private $montant;
    private $montantReassort;

    public function __construct()
    {
        $this->filles = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNom(): ?string
    {
        return $this->nom;
    }

    public function setNom(string $nom): self
    {
        $this->nom = $nom;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(?string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getImage(): ?string
    {
        return $this->image;
    }

    public function setImage(?string $image): self
    {
        $this->image = $image;

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

    public function isElementUnique(): ?bool
    {
        return $this->elementUnique;
    }

    public function setElementUnique(?bool $elementUnique): self
    {
        $this->elementUnique = $elementUnique;

        return $this;
    }

    public function getQteElmt(): ?int
    {
        return $this->qteElmt;
    }

    public function setQteElmt(int $qteElmt): self
    {
        $this->qteElmt = $qteElmt;

        return $this;
    }

    public function getQteElmtReassort(): ?int
    {
        return $this->qteElmtReassort;
    }

    public function setQteElmtReassort(?int $qteElmtReassort): self
    {
        $this->qteElmtReassort = $qteElmtReassort;

        return $this;
    }

    public function getMontant(): ?string
    {
        return $this->montant;
    }

    public function setMontant(?string $montant): self
    {
        $this->montant = $montant;

        return $this;
    }

    public function getMontantReassort(): ?string
    {
        return $this->montantReassort;
    }

    public function setMontantReassort(?string $montantReassort): self
    {
        $this->montantReassort = $montantReassort;

        return $this;
    }

    
    /**
     * @return Collection<int, ImplantationElmtAroma>
     */
    public function getFilles(): Collection
    {
        return $this->filles;
    }

    public function addFille(ImplantationElmtAroma $fille): self
    {
        if (!$this->filles->contains($fille)) {
            $this->filles[] = $fille;
            $fille->setMere($this);
        }

        return $this;
    }

    public function removeFille(ImplantationElmtAroma $fille): self
    {
        if ($this->filles->removeElement($fille)) {
            // set the owning side to null (unless already changed)
            if ($fille->getMere() === $this) {
                $fille->setMere(null);
            }
        }

        return $this;
    }

    /**
     * Get the value of remise
     */ 
    public function getRemise()
    {
        return $this->remise ? $this->remise : 0;
    }

    /**
     * Set the value of remise
     *
     * @return  self
     */ 
    public function setRemise($remise)
    {
        $this->remise = $remise;

        return $this;
    }

    /**
     * Get the value of remiseReassort
     */ 
    public function getRemiseReassort()
    {
        return $this->remiseReassort ? $this->remiseReassort : 0;
    }

    /**
     * Set the value of remiseReassort
     *
     * @return  self
     */ 
    public function setRemiseReassort($remiseReassort)
    {
        $this->remiseReassort = $remiseReassort;

        return $this;
    }

    

    /**
     * Get the value of remiseTotaleConsiderantGratuits
     */ 
    public function getRemiseTotaleConsiderantGratuits()
    {
        return $this->remiseTotaleConsiderantGratuits;
    }

    /**
     * Set the value of remiseTotaleConsiderantGratuits
     *
     * @return  self
     */ 
    public function setRemiseTotaleConsiderantGratuits($remiseTotaleConsiderantGratuits)
    {
        $this->remiseTotaleConsiderantGratuits = $remiseTotaleConsiderantGratuits;

        return $this;
    }

    /**
     * Get the value of remiseTotaleConsiderantGratuitsReassort
     */ 
    public function getRemiseTotaleConsiderantGratuitsReassort()
    {
        return $this->remiseTotaleConsiderantGratuitsReassort;
    }

    /**
     * Set the value of remiseTotaleConsiderantGratuitsReassort
     *
     * @return  self
     */ 
    public function setRemiseTotaleConsiderantGratuitsReassort($remiseTotaleConsiderantGratuitsReassort)
    {
        $this->remiseTotaleConsiderantGratuitsReassort = $remiseTotaleConsiderantGratuitsReassort;

        return $this;
    }

    public function initFilles(int $count){
        for($i=0; $i<$count; $i++){
            $fille = new ImplantationElmtAroma();
            $fille->setStatut(1);
            $this->addFille($fille);
        }
    }
}
