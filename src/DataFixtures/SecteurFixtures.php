<?php

namespace App\DataFixtures;

use App\Entity\Secteur;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class SecteurFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        $security = (new Secteur())
            ->setNom('securité')
            ->setDescription('description secteur Sécurité');
        $digital = (new Secteur())
            ->setNom('digital')
            ->setDescription('description secteur Digital');
        $immobilier = (new Secteur())
            ->setNom('immobilier')
            ->setDescription('description secteur Immobilier');

        $manager->persist($security);
        $manager->persist($digital);
        $manager->persist($immobilier);
        $manager->flush();
    }
}
