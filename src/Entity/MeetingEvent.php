<?php

namespace App\Entity;

use App\Repository\MeetingEventRepository;
use Doctrine\ORM\Mapping as ORM;
use JsonSerializable;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @ORM\Entity(repositoryClass=MeetingEventRepository::class)
 */
class MeetingEvent implements JsonSerializable
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

     /**
     * @ORM\ManyToOne(targetEntity="Meeting", inversedBy="meetingEvents")
     * @ORM\JoinColumn(name="meeting_id", referencedColumnName="id")
     */
    private $meeting;


     /**
     * @ORM\ManyToOne(targetEntity="CalendarEvent", inversedBy="meetingEvents")
     * @ORM\JoinColumn(name="calendar_event_id", referencedColumnName="id")
     */
    private $calendarEvent;

    public function getId(): ?int
    {
        return $this->id;
    }


    public function getMeeting(): ?string
    {
        return $this->meeting;
    }

    public function setMeeting(string $meeting): self
    {
        $this->meeting = $meeting;

        return $this;
    }
    public function getCalendarEvent(): ?string
    {
        return $this->calendarEvent;
    }

    public function setCalendarEvent(string $calendarEvent): self
    {
        $this->calendarEvent = $calendarEvent;

        return $this;
    }

    public function jsonSerialize()
    {
        $vars = get_object_vars($this);
        return $vars;
    }
}
