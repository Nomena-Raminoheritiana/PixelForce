<?php

namespace App\Entity;

use App\Repository\CalendarEventRepository;
use Doctrine\ORM\Mapping as ORM;
use JsonSerializable;
/**
 * @ORM\Entity(repositoryClass=CalendarEventRepository::class)
 */
class Meeting implements JsonSerializable
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
    private $title;

    /**
     * @ORM\Column(type="string", nullable=true)
     */
    private $note;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $start;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $end;

     /**
     * @ORM\ManyToOne(targetEntity="User", inversedBy="meetings")
     * @ORM\JoinColumn(name="user_id", referencedColumnName="id")
     */
    private $user;

     /**
     * @ORM\ManyToOne(targetEntity="User", inversedBy="meetingGuests")
     * @ORM\JoinColumn(name="user_to_meet_id", referencedColumnName="id")
     */
    private $userToMeet;

     /**
     * @ORM\ManyToOne(targetEntity="MeetingState", inversedBy="meetings")
     * @ORM\JoinColumn(name="meeting_state_id", referencedColumnName="id")
     */
    private $meetingState;

    public function getId(): ?int
    {
        return $this->id;
    }


    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(string $title): self
    {
        $this->title = $title;

        return $this;
    }
    public function getNote(): ?string
    {
        return $this->note;
    }

    public function setNote(string $note): self
    {
        $this->note = $note;

        return $this;
    }

    public function getStart(): ?\DateTimeInterface
    {
        return $this->start;
    }

    public function setStart(?\DateTimeInterface $start): self
    {
        $this->start = $start;

        return $this;
    }

    public function getEnd(): ?\DateTimeInterface
    {
        return $this->end;
    }

    public function setEnd(?\DateTimeInterface $end): self
    {
        $this->end = $end;

        return $this;
    }

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(User $user): self
    {
        $this->user = $user;

        return $this;
    }

    public function getUserToMeet(): ?User
    {
        return $this->userToMeet;
    }

    public function setUserToMeet(User $user): self
    {
        $this->userToMeet = $user;

        return $this;
    }

    public function getMeetingState(): ?MeetingState
    {
        return $this->meetingState;
    }

    public function setMeetingState(MeetingState $meetingState): self
    {
        $this->meetingState = $meetingState;

        return $this;
    }
    public function jsonSerialize()
    {
        $vars = get_object_vars($this);
        return $vars;
    }
    public function toCalendarEvent(): ?CalendarEvent
    {
        $event = new CalendarEvent();
        $event->setTitle($this->getTitle());
        $event->setStart($this->getStart());
        $event->setEnd($this->getEnd());
        $event->setAllDay(false);
        $event->setUrl("/meeting/fiche/".$this->getId());
        return $event;
    }
}
