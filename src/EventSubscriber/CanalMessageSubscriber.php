<?php


namespace App\EventSubscriber;


use App\Entity\CanalMessage;
use App\Services\Chat\ChatNormalizer;
use App\Services\Chat\ChatService;
use Doctrine\Bundle\DoctrineBundle\EventSubscriber\EventSubscriberInterface;
use Doctrine\ORM\Events;
use Doctrine\Persistence\Event\LifecycleEventArgs;
use Symfony\Component\Mercure\Update;
use Symfony\Component\Messenger\MessageBusInterface;

class CanalMessageSubscriber implements EventSubscriberInterface
{

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
    public function getSubscribedEvents()
    {
        // return the subscribed events, their methods and priorities
        return [
            Events::postPersist
        ];
    }

    public function postPersist(LifecycleEventArgs $event)
    {
        $canal = $event->getObject();
        if($canal instanceof CanalMessage && $canal->getIsGroup() === true) {
            // notifier tous les membres abonné au canal
            $users = $canal->getUsers()->toArray();
            foreach($users as $user) {
                $encodedIdUser = base64_encode($user->getId());
                $update = new Update(
                    ChatService::CHAT_ADD_CANAL_TOPIC.$encodedIdUser,
                    json_encode( json_encode($this->chatNormalizer->getCanalMessageNormalized($canal)))
                );
                $this->bus->dispatch($update);
            }
        }
    }
}