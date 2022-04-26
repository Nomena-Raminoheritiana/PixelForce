<?php


namespace App\Services;


use App\Repository\MessageRepository;

class ChatService
{
    /**
     * @var MessageRepository
     */
    private $messageRepository;
    /**
     * @var GroupMessageRepository
     */
    private $groupMessageRepository;

    public function __construct(MessageRepository $messageRepository)
    {
        $this->messageRepository = $messageRepository;
        $this->groupMessageRepository = $groupMessageRepository;
    }

    public function addMessage()
    {

    }

    public function getMessages($code) {

    }
}