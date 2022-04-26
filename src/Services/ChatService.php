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
    }

    public function addMessage(CanalMessage $canalMessage, User $user, $textes)
    {
        /** @var Message $message */
        $message = $this->objectManager->createObject(Message::class, [
            'canalMessage' => $canalMessage,
            'user' => $user,
            'textes' => $textes
        ]);

        return $message;
    }

    public function createSingleCanal(User $userA, User $userB)
    {
        $code = $this->generateCode($userA->getId(), $userB->getId());
        /** @var CanalMessage $canal */
        $canal = $this->objectManager->createObject(CanalMessage::class, [
            'code' => $code,
            'isGroup' => false
        ],false, [], true);
        $canal->addUser($userA);
        $canal->addUser($userB);
        $this->entityManager->save($canal);
        return $canal;
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
        return $canal;
    }


    public function getMessagesByCanal(CanalMessage $canal) {
        return $canal->getMessages()->toArray();
    }


    public function getCanalsGroup(User $user)
    {
       return $this->canalMessageRepository->findBy(['users' => $user, 'isGroup' => true]);
    }

    public function generateCode(?int $userA = null, ?int $userB = null)
    {
       return $this->generateKey->generateCode($userA, $userB);
    }


    private function detectionUrlLink($content='') {
        $content = preg_replace('#(((https?://)|(w{3}\.))+[a-zA-Z0-9&;\#\.\?=_/-]+\.([a-z]{2,4})([a-zA-Z0-9&;\#\.\?=_/-]+))#i', '<a href="$0" target="_blank">$0</a>', $content);
        // Si on capte un lien tel que www.test.com, il faut rajouter le http://
        if(preg_match('#<a href="www\.(.+)" target="_blank">(.+)<\/a>#i', $content)) {
            $content = preg_replace('#<a href="www\.(.+)" target="_blank">(.+)<\/a>#i', '<a href="http://www.$1" target="_blank">www.$1</a>', $content);
            //preg_replace('#<a href="www\.(.+)">#i', '<a href="http://$0">$0</a>', $content);
        }

        $content = stripslashes($content);
        return $content;
    }
}