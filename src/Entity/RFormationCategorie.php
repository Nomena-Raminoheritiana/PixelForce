<?php

namespace App\Entity;

use App\Repository\RFormationCategorieRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=RFormationCategorieRepository::class)
 */
class RFormationCategorie
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\OneToOne(targetEntity=Formation::class, inversedBy="rFormationCategorie", cascade={"persist", "remove"})
     * @ORM\JoinColumn(nullable=false)
     */
    private $formation;

    /**
     * @ORM\ManyToOne(targetEntity=CategorieFormation::class, inversedBy="rFormationCategories")
     * @ORM\JoinColumn(nullable=false)
     */
    private $categorie;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getFormation(): ?Formation
    {
        return $this->formation;
    }

    public function setFormation(Formation $formation): self
    {
        $this->formation = $formation;

        return $this;
    }

    public function getCategorie(): ?CategorieFormation
    {
        return $this->categorie;
    }

    public function setCategorie(?CategorieFormation $categorie): self
    {
        $this->categorie = $categorie;

        return $this;
    }

}
