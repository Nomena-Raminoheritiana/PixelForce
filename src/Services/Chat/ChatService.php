<?php


namespace App\Services\Chat;


use App\Entity\CanalMessage;
use App\Entity\Message;
use App\Entity\MessageVu;
use App\Entity\User;
use App\Helpers\Cryptographie;
use App\Helpers\DateHelper;
use App\Manager\EntityManager;
use App\Manager\ObjectManager;
use App\Repository\CanalMessageRepository;
use App\Repository\MessageRepository;
use App\Services\GenerateKey;
use ParagonIE\Halite\Symmetric\Crypto;
use ParagonIE\Halite\Symmetric\EncryptionKey;
use ParagonIE\HiddenString\HiddenString;
use Symfony\Component\Serializer\Serializer;

class ChatService
{
    const CHAT_ADD_MESSAGE_TOPIC = "https://chat/add/message";
    const CHAT_ADD_CANAL_TOPIC = "https://chat/add/canal";
    const CHAT_ADD_VU_TOPIC = "https://chat/add/vu";
    /**
     * @var MessageRepository
     */
    private $messageRepository;
    /**
     * @var CanalMessageRepository
     */
    private $canalMessageRepository;
    /**
     * @var ObjectManager
     */
    private $objectManager;
    /**
     * @var EntityManager
     */
    private $entityManager;
    /**
     * @var GenerateKey
     */
    private $generateKey;

    /**
     * @var DateHelper
     */
    private $dateHelper;
    /**
     * @var Serializer
     */
    private $serializer;
    /**
     * @var ChatNormalizer
     */
    private $chatNormalizer;
    /**
     * @var Cryptographie
     */
    private $cryptographie;

    public function __construct(MessageRepository $messageRepository,
                                CanalMessageRepository $canalMessageRepository,
                                ObjectManager $objectManager,
                                EntityManager $entityManager,
                                GenerateKey $generateKey,
                                DateHelper $dateHelper,
                                Cryptographie $cryptographie,
                                ChatNormalizer $chatNormalizer)
    {
        $this->messageRepository = $messageRepository;
        $this->canalMessageRepository = $canalMessageRepository;
        $this->objectManager = $objectManager;
        $this->entityManager = $entityManager;
        $this->generateKey = $generateKey;
        $this->dateHelper = $dateHelper;
        $this->chatNormalizer = $chatNormalizer;
        $this->cryptographie = $cryptographie;
    }

    public function addMessage(CanalMessage $canalMessage, User $user, $textes)
    {
        /** @var Message $message */
        $message = $this->objectManager->createObject(Message::class, [
            'canalMessage' => $canalMessage,
            'user' => $user,
            'textes'  => $this->cryptographie->encrypt($textes)
        ]);

        return $this->chatNormalizer->getMessageNormalized($message);

    }


    public function createSingleCanal(User $userA, User $userB)
    {
        $code = $this->generateCode($userA->getId(), $userB->getId());
        $canal = $this->canalMessageRepository->findOneBy(['code' => $code]);
        if(!$canal) {
            /** @var CanalMessage $canal */
            $canal = $this->objectManager->createObject(CanalMessage::class, [
                'code' => $code,
                'isGroup' => false
            ],false, [], true);

            foreach([$userA, $userB] as $user) {
                $canal->addUser($user);
            }
            $this->entityManager->save($canal);
        }

        return $this->chatNormalizer->getCanalMessageNormalized($canal);
    }

    public function createGroupCanal($nom, $users = [])
    {
        $code = $this->generateCode();
        /** @var CanalMessage $canal */
        $canal = $this->objectManager->createObject(CanalMessage::class, [
            'code' => $code,
            'isGroup' => true,
            'nom' => $nom
        ],false, [], true);

        foreach($users as $user) {
            $canal->addUser($user);
        }

        $this->entityManager->save($canal);

        return $this->chatNormalizer->getCanalMessageNormalized($canal);
    }


    public function getMessagesByCanal(CanalMessage $canal) {
        $messages = $canal->getMessages()->toArray();
        $messagesNormalized = [];
        foreach($messages as $message) {
            $data = $this->chatNormalizer->getMessageNormalized($message);
            if(!$data['error']) {
                $messagesNormalized[] = $data;
            }
        }
        return $messagesNormalized;
    }

    public function getMessagesByCode($code)
    {
       $canal = $this->canalMessageRepository->findOneBy(['code' => $code]);
       if($canal) {
           return $this->getMessagesByCanal($canal);
       }

       return ['error' => true, 'message' => 'le code n\'existe pas'];
    }


    public function getCanalsGroup(User $user)
    {
       $canals = $this->canalMessageRepository->findBy(['users' => $user, 'isGroup' => true]);
       $canalsNormalized = [];
       foreach($canals as $canal) {
            $data = $this->chatNormalizer->getCanalMessageNormalized($canal);
            if(!$data['error']) {
                $canalsNormalized[] = $data;
            }
       }
       return $canalsNormalized;
    }

    public function vu(Message $message, User $user)
    {
       $messageVu = $this->objectManager->createObject(MessageVu::class, [
            'message' => $message,
            'user' => $user
        ]);

       return $this->chatNormalizer->getMessageVuNormalized($messageVu);

    }

    public function generateCode(?int $userA = null, ?int $userB = null)
    {
       return $this->generateKey->generateCode($userA, $userB);
    }


}