<?php


namespace App\EventSubscriber;

use App\Entity\MessageVu;
use App\Helpers\DateHelper;
use App\Services\Chat\ChatNormalizer;
use App\Services\Chat\ChatService;
use Doctrine\ORM\Events;
use Doctrine\Persistence\Event\LifecycleEventArgs;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\Mercure\Update;
use Symfony\Component\Messenger\MessageBusInterface;

class MessageVuSubscriber implements EventSubscriberInterface
{
    /**
     * @var ChatNormalizer
     */
    private $chatNormalizer;
    /**
     * @var MessageBusInterface
     */
    private $bus;

    public function __construct(MessageBusInterface $bus,
                                ChatNormalizer $chatNormalizer)
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
    public static function getSubscribedEvents()
    {
        return [
            Events::postFlush => 'notifierUsers'
        ];
    }

    public function notifierUsers(LifecycleEventArgs $event)
    {
        $messageVu = $event->getObject();
        if($messageVu instanceof MessageVu) {
            // notifier tous les membres abonné au canal
            $canal = $messageVu->getMessage()->getCanalMessage();
            $users = $canal->getUsers()->toArray();
            foreach($users as $user) {
                $encodedIdUser = base64_encode($user->getId());
                $update = new Update(
                    ChatService::CHAT_ADD_CANAL_TOPIC.$encodedIdUser,
                    json_encode($this->chatNormalizer->getMessageVuNormalized($messageVu))
                );
                $this->bus->dispatch($update);
            }
        }
    }
}