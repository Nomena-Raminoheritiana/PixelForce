<?php

namespace App\Entity;

use App\Repository\CalendarEventRepository;
use Doctrine\ORM\Mapping as ORM;
use JsonSerializable;
use Doctrine\Common\Collections\ArrayCollection;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
/**
 * @ORM\Entity(repositoryClass=CalendarEventRepository::class)
 * @UniqueEntity(fields="name", message="Meeting state name is already taken.")
 */
class MeetingState implements JsonSerializable
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;


    /**
     * @ORM\Column(type="string", length=255)
     */
    private $name;
    /**
     * @ORM\OneToMany(targetEntity="Meeting", mappedBy="meetingState")
     */
    private $meetings;
    public function __construct() {
        $this->meetings = new ArrayCollection();
    }
    public function getId(): ?int
    {
        return $this->id;
    }


    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }
    
    public function jsonSerialize()
    {
        $vars = get_object_vars($this);
        return $vars;
    }
}
