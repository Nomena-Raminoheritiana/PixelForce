<?php


namespace App\EventSubscriber;


use App\Entity\CanalMessage;
use App\Entity\Message;
use App\Services\ChatService;
use Doctrine\ORM\Events;
use Doctrine\Persistence\Event\LifecycleEventArgs;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\Mercure\Update;
use Symfony\Component\Messenger\MessageBusInterface;

class CanalMessageSubscriber implements EventSubscriberInterface
{

    /**
     * @var MessageBusInterface
     */
    private $bus;

    public function __construct(MessageBusInterface $bus)
    {
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

    public function postFlushMessage(LifecycleEventArgs $event)
    {
        $canal = $event->getObject();
        if($canal instanceof CanalMessage && $canal->getIsGroup() === true) {
            // notifier tous les membres abonné au canal
            $users = $canal->getUsers()->toArray();
            foreach($users as $user) {
                $encodedIdUser = base64_encode($user->getId());
                $update = new Update(
                    ChatService::CHAT_ADD_CANAL_TOPIC.$encodedIdUser,
                    json_encode([
                        'canal' => [
                            'id' => $canal->getId(),
                            'code' => $canal->getCode(),
                            'nom' => $canal->getNom(),
                        ]
                    ])
                );
                $this->bus->dispatch($update);
            }
        }
    }
}