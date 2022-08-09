<?php

namespace App\Entity;

use App\Repository\KitBaseSecuRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=KitBaseSecuRepository::class)
 */
class KitBaseSecu
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=3000, nullable=true)
     */
    private $description;

    /**
     * @ORM\Column(type="integer")
     */
    private $status;

    /**
     * @ORM\Column(type="decimal", precision=10, scale=2)
     */
    private $prix;

    /**
     * @ORM\OneToOne(targetEntity=Secteur::class, inversedBy="kitBaseSecu", cascade={"persist", "remove"})
     * @ORM\JoinColumn(nullable=false)
     */
    private $secteur;

    /**
     * @ORM\OneToMany(targetEntity=KitBaseElmtSecu::class, mappedBy="kitBase")
     */
    private $elmts;

    public function __construct()
    {
        $this->elmts = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
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

    public function getStatus(): ?int
    {
        return $this->status;
    }

    public function setStatus(int $status): self
    {
        $this->status = $status;

        return $this;
    }

    public function getPrix(): ?string
    {
        return $this->prix;
    }

    public function setPrix(string $prix): self
    {
        $this->prix = $prix;

        return $this;
    }

    public function getSecteur(): ?Secteur
    {
        return $this->secteur;
    }

    public function setSecteur(Secteur $secteur): self
    {
        $this->secteur = $secteur;

        return $this;
    }

    /**
     * @return Collection<int, KitBaseElmtSecu>
     */
    public function getElmts(): Collection
    {
        return $this->elmts;
    }

    public function addElmt(KitBaseElmtSecu $elmt): self
    {
        if (!$this->elmts->contains($elmt)) {
            $this->elmts[] = $elmt;
            $elmt->setKitBase($this);
        }

        return $this;
    }

    public function removeElmt(KitBaseElmtSecu $elmt): self
    {
        if ($this->elmts->removeElement($elmt)) {
            // set the owning side to null (unless already changed)
            if ($elmt->getKitBase() === $this) {
                $elmt->setKitBase(null);
            }
        }

        return $this;
    }
}
