<?php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

use App\Entity\MeetingState;
use Doctrine\Bundle\FixturesBundle\FixtureGroupInterface;

class MeetingStateFixtures extends Fixture implements FixtureGroupInterface
{
    public function load(ObjectManager $manager): void
    {
        // $product = new Product();
        // $manager->persist($product);


        $meetingState = [];
        $meetingState[0] = (new MeetingState())
                                        ->setName('En attente');

        $meetingState[1] = (new MeetingState())
                                        ->setName('Terminé');

        $meetingState[2] = (new MeetingState())
                                        ->setName('Annulé');
                                        
        $manager->persist($meetingState[0]);
        $manager->persist($meetingState[1]);
        $manager->persist($meetingState[2]);

        $manager->flush();
    }

    public static function getGroups(): array
     {
         return ['meeting_state'];
     }
} 
