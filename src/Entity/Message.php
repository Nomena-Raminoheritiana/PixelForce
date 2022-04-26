<?php

namespace App\Entity;

use App\Repository\MessageRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=MessageRepository::class)
 */
class Message
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $textes;

    /**
     * @ORM\ManyToOne(targetEntity=User::class, inversedBy="messages")
     */
    private $user;

    /**
     * @ORM\ManyToOne(targetEntity=CanalMessage::class, inversedBy="messages")
     */
    private $canalMessage;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTextes(): ?string
    {
        return $this->textes;
    }

    public function setTextes(?string $textes): self
    {
        $this->textes = $textes;

        return $this;
    }

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(?User $user): self
    {
        $this->user = $user;

        return $this;
    }

    public function getCanalMessage(): ?CanalMessage
    {
        return $this->canalMessage;
    }

    public function setCanalMessage(?CanalMessage $canalMessage): self
    {
        $this->canalMessage = $canalMessage;

        return $this;
    }
}
