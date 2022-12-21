<?php

namespace App\Entity;

use App\Repository\ConfigSecteurRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;

/**
 * @ORM\Entity(repositoryClass=ConfigSecteurRepository::class)
 */
class ConfigSecteur
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $nom;

    /**
     * @ORM\Column(type="float", nullable=true)
     */
    private $val;

    /**
     * @ORM\ManyToOne(targetEntity=Secteur::class)
     */
    private $secteur;

    /**
     * @ORM\ManyToOne(targetEntity=TypeSecteur::class)
     */
    private $typeSecteur;

    /**
     * @ORM\Column(type="integer")
     */
    private $statut;

    /**
     * @ORM\Column(type="integer")
     */
    private $num;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNom(): ?string
    {
        return $this->nom;
    }

    public function setNom(?string $nom): self
    {
        $this->nom = $nom;

        return $this;
    }

    public function getVal(): ?float
    {
        return $this->val;
    }

    public function setVal(?float $val): self
    {
        $this->val = $val;

        return $this;
    }

    public function getSecteur(): ?Secteur
    {
        return $this->secteur;
    }

    public function setSecteur(?Secteur $secteur): self
    {
        $this->secteur = $secteur;

        return $this;
    }

    public function getTypeSecteur(): ?TypeSecteur
    {
        return $this->typeSecteur;
    }

    public function setTypeSecteur(?TypeSecteur $typeSecteur): self
    {
        $this->typeSecteur = $typeSecteur;

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

    public function getNum(): ?int
    {
        return $this->num;
    }

    public function setNum(int $num): self
    {
        $this->num = $num;

        return $this;
    }
}
