<?php

namespace App\Entity;

use App\Repository\ViewImplantationMereAromaTotalFullRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=ViewImplantationMereAromaTotalFullRepository::class)
 */
class ViewImplantationMereAromaTotalFull
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\OneToOne(targetEntity=ImplantationMereAroma::class, inversedBy="allTotal", cascade={"persist", "remove"})
     * @ORM\JoinColumn(nullable=false)
     */
    private $implantationMere;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $nbrReassort;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $nbrNormal;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $nbr;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getImplantationMere(): ?ImplantationMereAroma
    {
        return $this->implantationMere;
    }

    public function setImplantationMere(ImplantationMereAroma $implantationMere): self
    {
        $this->implantationMere = $implantationMere;

        return $this;
    }

    public function getNbrReassort(): ?int
    {
        return $this->nbrReassort;
    }

    public function setNbrReassort(?int $nbrReassort): self
    {
        $this->nbrReassort = $nbrReassort;

        return $this;
    }

    public function getNbrNormal(): ?int
    {
        return $this->nbrNormal;
    }

    public function setNbrNormal(?int $nbrNormal): self
    {
        $this->nbrNormal = $nbrNormal;

        return $this;
    }

    public function getNbr(): ?int
    {
        return $this->nbr;
    }

    public function setNbr(?int $nbr): self
    {
        $this->nbr = $nbr;

        return $this;
    }
}
