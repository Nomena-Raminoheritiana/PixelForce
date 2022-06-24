<?php

namespace App\Entity;

use App\Repository\CategorieFormationRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=CategorieFormationRepository::class)
 */
class CategorieFormation
{
    const STATUT = [
        1 => 'valide',
        -1 => 'supprimé'
    ];

    // const BIENVENUE = 1;
    // const OUTIL_PIXELFORCE = 2;
    // const LISTE_DE_CONTACT = 3;
    // const ADDITIONNEL = 4;

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
     * @ORM\Column(type="integer", nullable=true)
     */
    private $ordreCatFormation;

    /**
     * @ORM\Column(type="integer", nullable=true)
     * 
     * valeur par défaut = 1
     *  1 = valide
     * -1 = supprimé
     */
    private $statut;

    /**
     * @ORM\OneToMany(targetEntity=Formation::class, mappedBy="CategorieFormation")
     */
    private $formations;

    public function __construct()
    {
        $this->formations = new ArrayCollection();
        $this->statut = 1;
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

    public function getOrdreCatFormation(): ?int
    {
        return $this->ordreCatFormation;
    }

    public function setOrdreCatFormation(?int $ordreCatFormation): self
    {
        $this->ordreCatFormation = $ordreCatFormation;

        return $this;
    }

    public function getStatut(): ?int
    {
        return $this->statut;
    }

    public function setStatut(?int $statut): self
    {
        $this->statut = $statut;

        return $this;
    }

    /**
     * @return Collection<int, Formation>
     */
    public function getFormations(): Collection
    {
        return $this->formations;
    }

    public function addFormation(Formation $formation): self
    {
        if (!$this->formations->contains($formation)) {
            $this->formations[] = $formation;
            $formation->setCategorieFormation($this);
        }

        return $this;
    }

    public function removeFormation(Formation $formation): self
    {
        if ($this->formations->removeElement($formation)) {
            // set the owning side to null (unless already changed)
            if ($formation->getCategorieFormation() === $this) {
                $formation->setCategorieFormation(null);
            }
        }

        return $this;
    }

    public function getStatutType(): string
    {
        return self::STATUT[$this->statut];
    }

}
