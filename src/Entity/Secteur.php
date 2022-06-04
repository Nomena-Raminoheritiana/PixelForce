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
     * @ORM\OneToMany(targetEntity=AgentSecteur::class, mappedBy="secteur")
     */
    private $agentSecteurs;

    /**
     * @ORM\OneToMany(targetEntity=CoachSecteur::class, mappedBy="secteur")
     */
    private $coachSecteurs;


    /**
     * @var array
     */
    private $agents;

    /**
     * @ORM\OneToMany(targetEntity=Formation::class, mappedBy="secteur")
     */
    private $formations;

    public function __construct()
    {
        $this->agentSecteurs = new ArrayCollection();
        $this->coachSecteurs = new ArrayCollection();
        $this->formations = new ArrayCollection();
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
     * @return Collection<int, AgentSecteur>
     */
    public function getAgentSecteurs(): Collection
    {
        return $this->agentSecteurs;
    }

    public function addAgentSecteur(AgentSecteur $agentSecteur): self
    {
        if (!$this->agentSecteurs->contains($agentSecteur)) {
            $this->agentSecteurs[] = $agentSecteur;
            $agentSecteur->setSecteur($this);
        }

        return $this;
    }

    public function removeAgentSecteur(AgentSecteur $agentSecteur): self
    {
        if ($this->agentSecteurs->removeElement($agentSecteur)) {
            // set the owning side to null (unless already changed)
            if ($agentSecteur->getSecteur() === $this) {
                $agentSecteur->setSecteur(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, CoachSecteur>
     */
    public function getCoachSecteurs(): Collection
    {
        return $this->coachSecteurs;
    }

    public function addCoachSecteur(CoachSecteur $coachSecteur): self
    {
        if (!$this->coachSecteurs->contains($coachSecteur)) {
            $this->coachSecteurs[] = $coachSecteur;
            $coachSecteur->setSecteur($this);
        }

        return $this;
    }

    public function removeCoachSecteur(CoachSecteur $coachSecteur): self
    {
        if ($this->coachSecteurs->removeElement($coachSecteur)) {
            // set the owning side to null (unless already changed)
            if ($coachSecteur->getSecteur() === $this) {
                $coachSecteur->setSecteur(null);
            }
        }

        return $this;
    }


    public function getAgents()
    {
        /** @var  $agentSecteur AgentSecteur */
       $agentSecteurs = $this->agentSecteurs->toArray();
       foreach($agentSecteurs as $agentSecteur) {
           $this->agents[] = $agentSecteur->getAgent();
       }

       return $this->agents;
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
            $formation->setSecteur($this);
        }

        return $this;
    }

    public function removeFormation(Formation $formation): self
    {
        if ($this->formations->removeElement($formation)) {
            // set the owning side to null (unless already changed)
            if ($formation->getSecteur() === $this) {
                $formation->setSecteur(null);
            }
        }

        return $this;
    }
}
