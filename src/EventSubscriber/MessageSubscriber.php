<?php


namespace App\EventSubscriber;


use App\Entity\Message;
use App\Helpers\DateHelper;
use App\Services\ChatService;
use Doctrine\ORM\Events;
use Doctrine\Persistence\Event\LifecycleEventArgs;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\Mercure\Update;
use Symfony\Component\Messenger\MessageBusInterface;

class MessageSubscriber implements EventSubscriberInterface
{

    /**
     * @var DateHelper
     */
    private $dateHelper;
    /**
     * @var MessageBusInterface
     */
    private $bus;

    public function __construct(DateHelper $dateHelper,
                                MessageBusInterface $bus)
    {
        $this->dateHelper = $dateHelper;
        $this->bus = $bus;
    }

    /**
     * Returns an array of event names this subscriber wants to listen to.
     *
     * The array keys are event names and the value can be:
     *
     *  * The method name to call (priority defaults to 0)
     *  * An array composed of the method name to call and the priority
     *  * An array of arrays composed of the method names to call and respective
     *    priorities, or 0 if unset
     *
     * For instance:
     *
     *  * ['eventName' => 'methodName']
     *  * ['eventName' => ['methodName', $priority]]
     *  * ['eventName' => [['methodName1', $priority], ['methodName2']]]
     *
     * The code must not depend on runtime state as it will only be called at compile time.
     * All logic depending on runtime state must be put into the individual methods handling the events.
     *
     * @return array<string, string|array{0: string, 1: int}|list<array{0: string, 1?: int}>>
     */
    public static function getSubscribedEvents()
    {
        // return the subscribed events, their methods and priorities
        return [
           Events::postFlush => 'postFlushMessage'
        ];
    }

    /**
     * Methode pour notifier les utilisateurs d'un nouveau message
     * @param LifecycleEventArgs $eventArgs
     */
    public function postFlushMessage(LifecycleEventArgs  $eventArgs)
    {
        $message = $eventArgs->getObject();
        if($message instanceof Message) {
            // notifier tous les membres abonné au canal
            $canalMessage = $message->getCanalMessage();
            $users = $canalMessage->getUsers()->toArray();
            foreach($users as $user) {
                if($user->getId != $message->getUser()->getId()) {
                    $encodedIdUser = base64_encode($user->getId());
                    $update = new Update(
                        ChatService::CHAT_ADD_MESSAGE_TOPIC.$encodedIdUser,
                        json_encode([
                            'canal' => [
                                'id' => $canalMessage->getId(),
                                'code' => $canalMessage->getCode(),
                            ],
                            'message' => [
                                'id' => $message->getId(),
                                'textes' => $message->getTextes(),
                                'createdAt' => $this->dateHelper->format($message->getCreatedAt()->format("d M Y H:I:s"))
                            ]
                        ])
                    );
                    $this->bus->dispatch($update);
                }
            }
        }

    }
}