<?php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

use App\Entity\CalendarEvent;
use App\Entity\CalendarEventLabel;
use Doctrine\Bundle\FixturesBundle\FixtureGroupInterface;

class CalendarEventLabelFixtures extends Fixture implements FixtureGroupInterface
{
    public function load(ObjectManager $manager): void
    {
        // $product = new Product();
        // $manager->persist($product);


        $calendarEventLabelArray = [];
        $calendarEventLabelArray[0] = (new CalendarEventLabel())
                                        ->setName('Business')
                                        ->setValue('business')
                                        ->setColor('#7367f0');

        $calendarEventLabelArray[1] = (new CalendarEventLabel())
                                        ->setName('Personnel')
                                        ->setValue('personal')
                                        ->setColor('#ea5455');

        $calendarEventLabelArray[2] = (new CalendarEventLabel())
                                        ->setName('Famille')
                                        ->setValue('family')
                                        ->setColor('#ff9f43');

        $calendarEventLabelArray[3] = (new CalendarEventLabel())
                                        ->setName('Vacances')
                                        ->setValue('holiday')
                                        ->setColor('#28c76f');

        $calendarEventLabelArray[4] = (new CalendarEventLabel())
                                        ->setName('Autre')
                                        ->setValue('etc')
                                        ->setColor('#00cfe8');

                                        
        $manager->persist($calendarEventLabelArray[0]);
        $manager->persist($calendarEventLabelArray[1]);
        $manager->persist($calendarEventLabelArray[2]);
        $manager->persist($calendarEventLabelArray[3]);
        $manager->persist($calendarEventLabelArray[4]);

        $manager->flush();
    }

    public static function getGroups(): array
     {
         return ['calendar_event_label'];
     }
} 
