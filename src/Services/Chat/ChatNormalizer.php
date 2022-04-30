<?php


namespace App\Services\Chat;


use App\Entity\CanalMessage;
use App\Entity\Message;
use App\Entity\MessageVu;
use App\Services\Normalizer;

class ChatNormalizer
{
    const USER_PROPS = ['id', 'nom', 'prenom', 'mail', 'roles', 'adresse'];
    const CANAL_MESSAGE_PROPS = ['id', 'isGroup', 'nom', 'code', 'users' => self::USER_PROPS];
    const MESSAGE_PROPS = ['id', 'textes', 'createdAt', 'deletedAt', 'canal' => self::CANAL_MESSAGE_PROPS, 'user' => self::USER_PROPS];
    const MESSAGE_VU_PROPS = ['id', 'message' => self::MESSAGE_PROPS, 'user' => self::USER_PROPS];

    /**
     * @var Normalizer
     */
    private $normalizer;

    public function __construct(Normalizer $normalizer)
    {
        $this->normalizer = $normalizer;
    }

    public function getMessageNormalized(Message $message)
    {
        return $this->normalizer->getNormalizeData($message, self::MESSAGE_PROPS);
    }

    public function getCanalMessageNormalized(CanalMessage $canalMessage)
    {
        return $this->normalizer->getNormalizeData($canalMessage, self::CANAL_MESSAGE_PROPS);
    }

    public function getMessageVuNormalized(MessageVu $messageVu)
    {
        return $this->normalizer->getNormalizeData($messageVu,self::MESSAGE_VU_PROPS );
    }
}