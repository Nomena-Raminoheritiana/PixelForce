<?php


namespace App\Form\FormEvents;

use App\Entity\AgentSecteur;
use App\Entity\User;
use App\Entity\UserSecteur;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\Form\Exception\OutOfBoundsException;
use Symfony\Component\Form\FormEvent;
use Symfony\Component\Form\FormEvents;

class SecteurChoiceListListener implements EventSubscriberInterface
{


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
        // TODO: Implement getSubscribedEvents() method.
        return [
            FormEvents::POST_SUBMIT   => 'onPostSubmit',
        ];
    }

    public function onPostSetData(FormEvent $event) {

    }


    public function onPostSubmit(FormEvent $event): void
    {

        /** @var User $user */
        $user = $event->getData();
        $form = $event->getForm();

        if (!$user) {
            return;
        }
        try {
            $secteurValue = $event->getForm()->get('secteur')->getData()['secteur'];

            $userSecteur = (new AgentSecteur())
                ->setAgent($user)
                ->setSecteur($secteurValue)
                ->setStatut(false)
            ;

            // $user->removeAllUserSecteur();
            // $user->addUserSecteur($userSecteur);

        } catch(OutOfBoundsException $exception)
        {
            return;
        }

    }
}