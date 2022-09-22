<?php

namespace App\Entity;

use App\Repository\CoachAgentRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=CoachAgentRepository::class)
 */
class CoachAgent
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity=User::class, inversedBy="coachAgents")
     */
    private $coach;

    /**
     * @ORM\ManyToOne(targetEntity=User::class)
     */
    private $agent;

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

    public function getAgent(): ?User
    {
        return $this->agent;
    }

    public function setAgent(?User $agent): self
    {
        $this->agent = $agent;

        return $this;
    }
}
