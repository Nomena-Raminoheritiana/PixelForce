<?php


namespace App\Messenger\Message;


class ImportVideoFormation
{
    private $path;
    private $titre;
    private $description;
    private $userId;

    public function __construct($path = null, $titre = null, $description = null, $userId = null)
    {
        $this->path = $path;
        $this->titre = $titre;
        $this->description = $description;
        $this->userId = $userId;
    }

    /**
     * @return null
     */
    public function getPath()
    {
        return $this->path;
    }


    /**
     * @return null
     */
    public function getTitre()
    {
        return $this->titre;
    }

    /**
     * @return null
     */
    public function getDescription()
    {
        return $this->description;
    }


    /**
     * @return null
     */
    public function getUserId()
    {
        return $this->userId;
    }


}