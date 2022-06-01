<?php

namespace App\Entity;

use App\Repository\SecteurRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=SecteurRepository::class)
 */
class Secteur
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
     * @ORM\Column(type="text", nullable=true)
     */
    private $description;

    /**
     * @ORM\OneToMany(targetEntity=UserSecteur::class, mappedBy="secteur")
     */
    private $userSecteurs;

    public function __construct()
    {
        $this->userSecteurs = new ArrayCollection();
    }

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

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(?string $description): self
    {
        $this->description = $description;

        return $this;
    }

    /**
     * @return Collection<int, UserSecteur>
     */
    public function getUserSecteurs(): Collection
    {
        return $this->userSecteurs;
    }

    public function addUserSecteur(UserSecteur $userSecteur): self
    {
        if (!$this->userSecteurs->contains($userSecteur)) {
            $this->userSecteurs[] = $userSecteur;
            $userSecteur->setSecteur($this);
        }

        return $this;
    }

    public function removeUserSecteur(UserSecteur $userSecteur): self
    {
        if ($this->userSecteurs->removeElement($userSecteur)) {
            // set the owning side to null (unless already changed)
            if ($userSecteur->getSecteur() === $this) {
                $userSecteur->setSecteur(null);
            }
        }

        return $this;
    }
}
