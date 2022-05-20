<?php


namespace App\Services\Chat;


use App\Entity\CanalMessage;
use App\Entity\Message;
use App\Entity\User;
use App\Helpers\Cryptographie;
use App\Manager\EntityManager;
use App\Manager\ObjectManager;
use App\Repository\CanalMessageRepository;

class ChatService
{


    /**
     * @var ObjectManager
     */
    private $objectManager;
    /**
     * @var Cryptographie
     */
    private $cryptographie;
    /**
     * @var ChatNormalizer
     */
    private $chatNormalizer;
    /**
     * @var CanalMessageRepository
     */
    private $canalMessageRepository;
    /**
     * @var ChatMercureNotification
     */
    private $chatMercureNotification;
    /**
     * @var EntityManager
     */
    private $entityManager;

    public function __construct(
        CanalMessageRepository $canalMessageRepository,
        ObjectManager $objectManager,
        Cryptographie $cryptographie,
        ChatNormalizer $chatNormalizer,
        ChatMercureNotification $chatMercureNotification,
        EntityManager $entityManager
    )
    {

        $this->objectManager = $objectManager;
        $this->cryptographie = $cryptographie;
        $this->chatNormalizer = $chatNormalizer;
        $this->canalMessageRepository = $canalMessageRepository;
        $this->chatMercureNotification = $chatMercureNotification;
        $this->entityManager = $entityManager;
    }

    public function addMessage(CanalMessage $canalMessage, User $user, $textes, $files = null)
    {
        /** @var Message $message */
        $message = $this->objectManager->createObject(Message::class, [
            'canalMessage' => $canalMessage,
            'user' => $user,
            'textes'  => $this->cryptographie->encrypt($textes),
            'files' => $files ?? []
        ]);

        $canalMessage->setUpdatedAt(new \DateTimeImmutable());
        $canalMessage->setVus([$user->getId()]);
        $this->entityManager->save($canalMessage);
        $this->chatMercureNotification->notifyWhenNewMessage($message);

        return $this->chatNormalizer->getMessageNormalized($message);

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


//    public function vu(Message $message, User $user)
//    {
//       $messageVu = $this->objectManager->createObject(MessageVu::class, [
//            'message' => $message,
//            'user' => $user
//        ]);
//
//       $this->chatMercureNotification->notifyWhenNewVu($messageVu);
//
//       return $this->chatNormalizer->getMessageVuNormalized($messageVu);
//
//    }
}
