<?php

namespace App\Entity;

use App\Helpers\DateHelper;
use App\Repository\MessageRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;
use Gedmo\Mapping\Annotation as Gedmo;
use Gedmo\SoftDeleteable\Traits\SoftDeleteableEntity;

/**
 * @ORM\Entity(repositoryClass=MessageRepository::class)
 */
class Message
{
    use SoftDeleteableEntity;
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

    /**
     * @var \DateTime
     * @Gedmo\Timestampable(on="create")
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $createdAt;

    /**
     * @ORM\Column(type="array", nullable=true)
     */
    private $files = [];
    private $renduDateCreationMessage;


    public function __construct()
    {
    }

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

    public function getCreatedAt(): ?\DateTime
    {
        $this->setRenduDateCreationMessage();
        return $this->createdAt;
    }

    public function setCreatedAt(?\DateTime $createdAt): self
    {
        $this->createdAt = $createdAt;
        $this->setRenduDateCreationMessage();

        return $this;
    }

    public function getFiles(): ?array
    {
        return $this->files;
    }

    public function setFiles(?array $files): self
    {
        $this->files = $files;

        return $this;
    }

    /**
     * @return mixed
     */
    public function getRenduDateCreationMessage()
    {
        return $this->renduDateCreationMessage;
    }

    public function setRenduDateCreationMessage()
    {
        if(!$this->renduDateCreationMessage) {
            $dateHelpers = new DateHelper();
            $this->renduDateCreationMessage = $dateHelpers->format($this->createdAt->format('Y-m-d H:i:s'));
        }
        return $this;
    }


}
