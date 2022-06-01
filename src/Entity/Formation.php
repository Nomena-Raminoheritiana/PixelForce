<?php

namespace App\Entity;

use App\Repository\FormationRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=FormationRepository::class)
 */
class Formation
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
    private $titre;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $description;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $description_deblocage;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $contenu;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $lien_video;

    /**
     * @ORM\Column(type="boolean", nullable=true)
     */
    private $estDisponible;

    /**
     * @ORM\Column(type="boolean", nullable=true)
     */
    private $estDebloquee;

    /**
     * @ORM\ManyToOne(targetEntity=User::class, inversedBy="formations")
     */
    private $coach;

    /**
     * @ORM\OneToMany(targetEntity=Media::class, mappedBy="formation")
     */
    private $medias;

    /**
     * @ORM\OneToMany(targetEntity=FormationAgent::class, mappedBy="formation")
     */
    private $formationAgents;

    /**
     * @ORM\Column(type="boolean", nullable=true)
     */
    private $brouillon;

    public function __construct()
    {
        $this->medias = new ArrayCollection();
        $this->formationAgents = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitre(): ?string
    {
        return $this->titre;
    }

    public function setTitre(?string $titre): self
    {
        $this->titre = $titre;

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

    public function getDescriptionDeblocage(): ?string
    {
        return $this->description_deblocage;
    }

    public function setDescriptionDeblocage(?string $description_deblocage): self
    {
        $this->description_deblocage = $description_deblocage;

        return $this;
    }

    public function getContenu(): ?string
    {
        return $this->contenu;
    }

    public function setContenu(?string $contenu): self
    {
        $this->contenu = $contenu;

        return $this;
    }

    public function getLienVideo(): ?string
    {
        return $this->lien_video;
    }

    public function setLienVideo(?string $lien_video): self
    {
        $this->lien_video = $lien_video;

        return $this;
    }

    public function getEstDisponible(): ?bool
    {
        return $this->estDisponible;
    }

    public function setEstDisponible(?bool $estDisponible): self
    {
        $this->estDisponible = $estDisponible;

        return $this;
    }

    public function getEstDebloquee(): ?bool
    {
        return $this->estDebloquee;
    }

    public function setEstDebloquee(?bool $estDebloquee): self
    {
        $this->estDebloquee = $estDebloquee;

        return $this;
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

    /**
     * @return Collection<int, Media>
     */
    public function getMedias(): Collection
    {
        return $this->medias;
    }

    public function addMedia(Media $media): self
    {
        if (!$this->medias->contains($media)) {
            $this->medias[] = $media;
            $media->setFormation($this);
        }

        return $this;
    }

    public function removeMedia(Media $media): self
    {
        if ($this->medias->removeElement($media)) {
            // set the owning side to null (unless already changed)
            if ($media->getFormation() === $this) {
                $media->setFormation(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, FormationAgent>
     */
    public function getFormationAgents(): Collection
    {
        return $this->formationAgents;
    }

    public function addFormationAgent(FormationAgent $formationAgent): self
    {
        if (!$this->formationAgents->contains($formationAgent)) {
            $this->formationAgents[] = $formationAgent;
            $formationAgent->setFormation($this);
        }

        return $this;
    }

    public function removeFormationAgent(FormationAgent $formationAgent): self
    {
        if ($this->formationAgents->removeElement($formationAgent)) {
            // set the owning side to null (unless already changed)
            if ($formationAgent->getFormation() === $this) {
                $formationAgent->setFormation(null);
            }
        }

        return $this;
    }

    public function getBrouillon(): ?bool
    {
        return $this->brouillon;
    }

    public function setBrouillon(?bool $brouillon): self
    {
        $this->brouillon = $brouillon;

        return $this;
    }
}
