<?php

namespace App\Entity;

use App\Repository\CoachSecteurRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=CoachSecteurRepository::class)
 */
class CoachSecteur
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity=User::class, inversedBy="coachSecteurs")
     */
    private $coach;

    /**
     * @ORM\ManyToOne(targetEntity=Secteur::class, inversedBy="coachSecteurs")
     */
    private $secteur;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getCoach(): ?User
    {
        return $this->coach;
    }

    public function setCoach(?User $coach): self
    {
        $this->coach = $coach;

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
}
