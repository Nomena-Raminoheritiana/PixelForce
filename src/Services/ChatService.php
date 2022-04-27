<?php


namespace App\Services;


use App\Entity\CanalMessage;
use App\Entity\Message;
use App\Entity\User;
use App\Helpers\DateHelper;
use App\Manager\EntityManager;
use App\Manager\ObjectManager;
use App\Repository\CanalMessageRepository;
use App\Repository\MessageRepository;
use Symfony\Component\Mercure\HubInterface;
use Symfony\Component\Serializer\Exception\ExceptionInterface;
use Symfony\Component\Serializer\Normalizer\AbstractNormalizer;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;

class ChatService
{
    const CHAT_ADD_MESSAGE_TOPIC = "https://chat/add/message";
    const CHAT_ADD_CANAL_TOPIC = "https://chat/add/canal";
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

    public function __construct(MessageRepository $messageRepository,
                                CanalMessageRepository $canalMessageRepository,
                                ObjectManager $objectManager,
                                EntityManager $entityManager,
                                GenerateKey $generateKey,
                                DateHelper $dateHelper)
    {
        $this->messageRepository = $messageRepository;
        $this->canalMessageRepository = $canalMessageRepository;
        $this->objectManager = $objectManager;
        $this->entityManager = $entityManager;
        $this->generateKey = $generateKey;
        $this->dateHelper = $dateHelper;
        $this->serializer = new Serializer([new ObjectNormalizer()]);
    }

    public function addMessage(CanalMessage $canalMessage, User $user, $textes)
    {
        /** @var Message $message */
        $message = $this->objectManager->createObject(Message::class, [
            'canalMessage' => $canalMessage,
            'user' => $user,
            'textes' => $textes
        ]);

        return $this->getNormalizeData($message, ['id', 'textes', 'createdAt', 'canal' => [ 'id', 'isGroup', 'nom', 'code' ], 'user' => ['id', 'nom','prenom','mail','roles','adresse']]);

    }

    public function createSingleCanal(User $userA, User $userB)
    {
        $code = $this->generateCode($userA->getId(), $userB->getId());
        /** @var CanalMessage $canal */
        $canal = $this->objectManager->createObject(CanalMessage::class, [
            'code' => $code,
            'isGroup' => false
        ],false, [], true);

        foreach([$userA, $userB] as $user) {
            $canal->addUser($user);
        }
        $this->entityManager->save($canal);

       return $this->getNormalizeData($canal, ['id', 'isGroup', 'nom', 'code', 'users' => ['id', 'nom', 'prenom', 'mail', 'roles', 'adresse']]);
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
        return $this->getNormalizeData($canal, ['id', 'isGroup', 'nom', 'code', 'users' => ['id', 'nom', 'prenom', 'mail', 'roles', 'adresse']]);
    }


    public function getMessagesByCanal(CanalMessage $canal) {
        $messages = $canal->getMessages()->toArray();
        $messagesNormalized = [];
        foreach($messages as $message) {
            $data = $this->getNormalizeData($message, ['id', 'textes', 'createdAt', 'canal' => [ 'id', 'isGroup', 'nom', 'code' ], 'user' => ['id', 'nom','prenom','mail','roles','adresse']]);
            if(!$data['error']) {
                $messagesNormalized[] = $data;
            }
        }
        return $messagesNormalized;
    }

    public function getMessagesByCode($code)
    {
       $canal = $this->canalMessageRepository->findOneBy(['code' => $code]);
       return $this->getMessagesByCanal($canal);
    }


    public function getCanalsGroup(User $user)
    {
       $canals = $this->canalMessageRepository->findBy(['users' => $user, 'isGroup' => true]);
       $canalsNormalized = [];
       foreach($canals as $canal) {
           $data = $this->getNormalizeData($canal, ['id', 'isGroup', 'nom', 'code', 'users' => ['id', 'nom', 'prenom', 'mail', 'roles', 'adresse']]);
            if(!$data['error']) {
                $canalsNormalized[] = $data;
            }
       }
       return $canalsNormalized;
    }

    public function vu(Message $message, User $user)
    {
        
    }

    public function generateCode(?int $userA = null, ?int $userB = null)
    {
       return $this->generateKey->generateCode($userA, $userB);
    }

    private function getNormalizeData($object, $attributes)
    {
        try {
            $normalizedData = $this->serializer->normalize($object, null, [
                AbstractNormalizer::ATTRIBUTES => $attributes
            ]);
            return array_merge($normalizedData, ['error' => false]);

        } catch (ExceptionInterface $e) {
            return [
                'error' => true,
                'message' => $e->getMessage(),
                'traces' => $e->getTrace(),
                'code' => $e->getCode()
            ];
        }
    }
}