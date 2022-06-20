<?php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

use App\Entity\CalendarEvent;
use App\Entity\CalendarEventLabel;
use App\Repository\UserRepository;
use App\Repository\CalendarEventLabelRepository;


use Doctrine\Bundle\FixturesBundle\FixtureGroupInterface;
class CalendarEventFixtures extends Fixture  implements FixtureGroupInterface
{
    protected $calendarEventLabelRepository;
    protected $userRepository;
    protected $objectManager;

    public function __construct(\App\Manager\ObjectManager $objectManager, UserRepository $userRepository, CalendarEventLabelRepository $calendarEventLabelRepository)
    {
        $this->calendarEventLabelRepository = $calendarEventLabelRepository;
        $this->userRepository = $userRepository;
        $this->objectManager = $objectManager;


    }
    public function load(ObjectManager $manager): void
    {

        $agent_id = 4;
        $agentUser = $this->userRepository->find($agent_id);

        $businessLabel = $this->calendarEventLabelRepository->find(1);
        $personnalLabel = $this->calendarEventLabelRepository->find(2);
        $familyLabel = $this->calendarEventLabelRepository->find(3);
        $travelLabel = $this->calendarEventLabelRepository->find(4);
        $otherLabel = $this->calendarEventLabelRepository->find(5);

        $this->objectManager->createObject(CalendarEvent::class, [
            "url"=>"",
            "title"=> 'Meeting with the client',
            "start"=> new \DateTime(),
            "end"=> new \DateTime(),
            "allDay"=> false,
            "user"=> $agentUser,
            "calendarEventLabel"=>$businessLabel

        ]);

        $this->objectManager->createObject(CalendarEvent::class, [
            "url"=>"",
            "title"=> 'Buy a Ferrari',
            "start"=> new \DateTime(),
            "end"=> (new \DateTime())->add(new \DateInterval("P1D")),
            "allDay"=> true,
            "user"=> $agentUser,
            "calendarEventLabel"=>$personnalLabel
        ]);

        $this->objectManager->createObject(CalendarEvent::class, [
            "url"=>"",
            "title"=> 'Go to supermarket',
            "start"=> (new \DateTime())->add(new \DateInterval("P4D")),
            "end"=> (new \DateTime())->add(new \DateInterval("P4D")),
            "allDay"=> false,
            "user"=> $agentUser,
            "calendarEventLabel"=>$otherLabel
        ]);

        $manager->flush();
    }
    public static function getGroups(): array
     {
         return ['calendar_event'];
     }
}
