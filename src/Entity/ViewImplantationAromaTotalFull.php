<?php

namespace App\Entity;

use App\Repository\ViewImplantationAromaTotalFullRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=ViewImplantationAromaTotalFullRepository::class)
 */
class ViewImplantationAromaTotalFull
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="decimal", precision=12, scale=2, nullable=true)
     */
    private $total;

    /**
     * @ORM\Column(type="decimal", precision=12, scale=2, nullable=true)
     */
    private $totalReassort;

    /**
     * @ORM\Column(type="decimal", precision=12, scale=2, nullable=true)
     */
    private $ug;

    /**
     * @ORM\Column(type="decimal", precision=12, scale=2, nullable=true)
     */
    private $ugReassort;

    /**
     * @ORM\OneToOne(targetEntity=ImplantationAroma::class, inversedBy="allTotal", cascade={"persist", "remove"})
     * @ORM\JoinColumn(nullable=false)
     */
    private $implantation;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTotal(): ?string
    {
        return $this->total;
    }

    public function setTotal(?string $total): self
    {
        $this->total = $total;

        return $this;
    }

    public function getTotalReassort(): ?string
    {
        return $this->totalReassort;
    }

    public function setTotalReassort(?string $totalReassort): self
    {
        $this->totalReassort = $totalReassort;

        return $this;
    }

    public function getUg(): ?string
    {
        return $this->ug;
    }

    public function setUg(?string $ug): self
    {
        $this->ug = $ug;

        return $this;
    }

    public function getUgReassort(): ?string
    {
        return $this->ugReassort;
    }

    public function setUgReassort(?string $ugReassort): self
    {
        $this->ugReassort = $ugReassort;

        return $this;
    }

    public function getImplantation(): ?ImplantationAroma
    {
        return $this->implantation;
    }

    public function setImplantation(ImplantationAroma $implantation): self
    {
        $this->implantation = $implantation;

        return $this;
    }
}
