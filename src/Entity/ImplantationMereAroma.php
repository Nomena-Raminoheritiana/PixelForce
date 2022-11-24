<?php

namespace App\Entity;

use App\Repository\ImplantationMereAromaRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=ImplantationMereAromaRepository::class)
 */
class ImplantationMereAroma
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="integer")
     */
    private $statut;

    /**
     * @ORM\OneToMany(targetEntity=ImplantationAroma::class, mappedBy="mere")
     */
    private $filles;

    /**
     * @ORM\OneToOne(targetEntity=ViewImplantationMereAromaTotalFull::class, mappedBy="implantationMere", cascade={"persist", "remove"})
     */
    private $allTotal;

    public function __construct()
    {
        $this->filles = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
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

    /**
     * @return Collection<int, ImplantationAroma>
     */
    public function getFilles(): Collection
    {
        return $this->filles;
    }

    public function addFille(ImplantationAroma $fille): self
    {
        if (!$this->filles->contains($fille)) {
            $this->filles[] = $fille;
            $fille->setMere($this);
        }

        return $this;
    }

    public function removeFille(ImplantationAroma $fille): self
    {
        if ($this->filles->removeElement($fille)) {
            // set the owning side to null (unless already changed)
            if ($fille->getMere() === $this) {
                $fille->setMere(null);
            }
        }

        return $this;
    }

    public function initFilles(int $count, int $countFilles){
        for($i=0; $i<$count; $i++){
            $fille = new ImplantationAroma();
            $fille->initFilles($countFilles);
            $fille->setStatut(1);
            $this->addFille($fille);
        }
    }

    public function getAllTotal(): ?ViewImplantationMereAromaTotalFull
    {
        return $this->allTotal;
    }

    public function setAllTotal(ViewImplantationMereAromaTotalFull $allTotal): self
    {
        // set the owning side of the relation if necessary
        if ($allTotal->getImplantationMere() !== $this) {
            $allTotal->setImplantationMere($this);
        }

        $this->allTotal = $allTotal;

        return $this;
    }

    public function hasReassort(){
        return $this->getAllTotal()->getNbrReassort() > 0;
    }

    public function getFillesReassort(){
        $fillesReassort = new ArrayCollection();
        foreach ($this->getFilles() as $fille) {
            if($fille->isValid() && $fille->isReassort()) $fillesReassort->add($fille);
        }
        return $fillesReassort;
    }
}
