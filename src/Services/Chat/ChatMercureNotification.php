<?php


namespace App\Services\Chat;


use App\Entity\CanalMessage;
use App\Entity\Message;
use App\Entity\MessageVu;
use App\Entity\User;
use Symfony\Component\Mercure\Update;
use Symfony\Component\Messenger\MessageBusInterface;

class ChatMercureNotification
{
    const CHAT_ADD_MESSAGE_TOPIC = "https://chat/add/message";
    const CHAT_ADD_CANAL_TOPIC = "https://chat/add/canal";
    const CHAT_ADD_VU_TOPIC = "https://chat/add/vu";
    const CHAT_ADD_USER_TOPIC = "https://chat/add/user";
    const CHAT_REMOVE_USER_TOPIC = "https://chat/remove/user";
    const CHAT_REMOVE_CANAL_TOPIC = "https://chat/add/canal";
    const CHAT_USER_TYPING_TOPIC = "https://chat/user/typing";
    /**
     * @var MessageBusInterface
     */
    private $bus;
    /**
     * @var ChatNormalizer
     */
    private $chatNormalizer;

    public function __construct(MessageBusInterface $bus, ChatNormalizer $chatNormalizer)
    {
        $this->bus = $bus;
        $this->chatNormalizer = $chatNormalizer;
    }

    public function notifyWhenNewMessage(Message $message)
    {
        // notifier tous les membres abonné au canal
        $canalMessage = $message->getCanalMessage();
        $users = $canalMessage->getUsers()->toArray();
        foreach($users as $user) {
            if($user->getId() != $message->getUser()->getId()) {
                $encodedIdUser = base64_encode($user->getId());
                $update = new Update(
                    self::CHAT_ADD_MESSAGE_TOPIC.$encodedIdUser,
                    json_encode($this->chatNormalizer->getMessageNormalized($message))
                );
                $this->bus->dispatch($update);
            }
        }

    }

    public function notifyWhenNewCanalMessage(CanalMessage $canal)
    {
        // notifier tous les membres abonné au canal
        $users = $canal->getUsers()->toArray();
        foreach($users as $user) {
            $encodedIdUser = base64_encode($user->getId());
            $update = new Update(
                self::CHAT_ADD_CANAL_TOPIC.$encodedIdUser,
                json_encode( json_encode($this->chatNormalizer->getCanalMessageNormalized($canal)))
            );
            $this->bus->dispatch($update);
        }
    }

    public function notifyWhenNewVu(MessageVu $messageVu)
    {
        // notifier tous les membres abonné au canal
        $canal = $messageVu->getMessage()->getCanalMessage();
        $users = $canal->getUsers()->toArray();
        foreach($users as $user) {
            $encodedIdUser = base64_encode($user->getId());
            $update = new Update(
                self::CHAT_ADD_VU_TOPIC.$encodedIdUser,
                json_encode($this->chatNormalizer->getMessageVuNormalized($messageVu))
            );
            $this->bus->dispatch($update);
        }
    }

    public function notifyWhenAddUser(CanalMessage $canalMessage, User $user)
    {
        $encodedIdUser = base64_encode($user->getId());
        $update = new Update(
            self::CHAT_ADD_USER_TOPIC.$encodedIdUser,
            json_encode($this->chatNormalizer->getCanalMessageNormalized($canalMessage))
        );
        $this->bus->dispatch($update);
    }

    public function notifyWhenRemoveUser(CanalMessage $canalMessage, User $user)
    {
        $encodedIdUser = base64_encode($user->getId());
        $update = new Update(
            self::CHAT_REMOVE_USER_TOPIC.$encodedIdUser,
            json_encode($this->chatNormalizer->getCanalMessageNormalized($canalMessage))
        );
        $this->bus->dispatch($update);
    }

    public function notifyWhenRemoveCanal(CanalMessage $canalMessage)
    {
        // notifier tous les membres abonné au canal
        $users = $canalMessage->getUsers()->toArray();
        foreach($users as $user) {
            $encodedIdUser = base64_encode($user->getId());
            $update = new Update(
                self::CHAT_REMOVE_CANAL_TOPIC.$encodedIdUser,
                json_encode($this->chatNormalizer->getCanalMessageNormalized($canalMessage))
            );
            $this->bus->dispatch($update);
        }
    }

    public function notifyWhenUserIsTyping(User $user, CanalMessage $canalMessage)
    {
        // notifier tous les membres abonné au canal
        $users = $canalMessage->getUsers()->toArray();
        foreach($users as $user) {
            $encodedIdUser = base64_encode($user->getId());
            $update = new Update(
                self::CHAT_USER_TYPING_TOPIC.$encodedIdUser,
                json_encode(array_merge($this->chatNormalizer->getCanalMessageNormalized($canalMessage),
                    [
                        'user' => [
                            'id' => $encodedIdUser,
                            'nom' => $user->getNom(),
                            'prenom' => $user->getPrenom()
                        ]
                    ]
                ))
            );
            $this->bus->dispatch($update);
        }
    }

}