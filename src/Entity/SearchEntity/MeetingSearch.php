<?php
namespace App\Entity\SearchEntity;

use App\Entity\Secteur;
use DateTime;

class MeetingSearch {

    /**
     * @var string|null
     */
    private $title;
    
    /**
     * @var string|null|DateTime
     */
    private $startDate;

    /**
     * @var string|null|DateTime
     */
    private $endDate;

    /**
     * @var string|null
     */
    private $status;

    /**
     * Get the value of title
     *
     * @return  string|null
     */ 
    public function getTitle()
    {
        return $this->title;
    }

    /**
     * Set the value of title
     *
     * @param  string|null  $title
     *
     * @return  self
     */ 
    public function setTitle($title)
    {
        $this->title = $title;

        return $this;
    }

    /**
     * Get the value of startDate
     *
     * @return  string|null|DateTime
     */ 
    public function getStartDate()
    {
        return $this->startDate;
    }

    /**
     * Set the value of startDate
     *
     * @param  string|null|DateTime  $startDate
     *
     * @return  self
     */ 
    public function setStartDate($startDate)
    {
        $this->startDate = $startDate;

        return $this;
    }

    /**
     * Get the value of endDate
     *
     * @return  string|null|DateTime
     */ 
    public function getEndDate()
    {
        return $this->endDate;
    }

    /**
     * Set the value of endDate
     *
     * @param  string|null|DateTime  $endDate
     *
     * @return  self
     */ 
    public function setEndDate($endDate)
    {
        $this->endDate = $endDate;

        return $this;
    }

    /**
     * Get the value of status
     *
     * @return  string|null
     */ 
    public function getStatus()
    {
        return $this->status;
    }

    /**
     * Set the value of status
     *
     * @param  string|null  $status
     *
     * @return  self
     */ 
    public function setStatus($status)
    {
        $this->status = $status;

        return $this;
    }
}
