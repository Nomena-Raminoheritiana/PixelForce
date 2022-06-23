<?php

namespace App\DataFixtures;

use App\Entity\CategorieFormation;
use App\Entity\Secteur;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class CategorieFormationFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        $bienvenue = (new CategorieFormation())
            ->setNom('Bienvenue')
            ->setDescription('Formation de bienvenue pour chaque utilisateur sur Pixelforce')
            ->setOrdreCatFormation(1)
            ->setStatut(1);
        $outil = (new CategorieFormation())
            ->setNom('Outil Pixelforce')
            ->setDescription('Présentation des outils proposées sur Pixelforce')
            ->setOrdreCatFormation(2)
            ->setStatut(1);
        $prospection = (new CategorieFormation())
            ->setNom('Liste de contact')
            ->setDescription('Formation pour faire sa liste de contact et sa prospéction')
            ->setOrdreCatFormation(3)
            ->setStatut(1);
        $additionnel = (new CategorieFormation())
            ->setNom('Formation additionnel')
            ->setDescription('Formation divers')
            ->setOrdreCatFormation(4)
            ->setStatut(1);

        $manager->persist($bienvenue);
        $manager->persist($outil);
        $manager->persist($prospection);
        $manager->persist($additionnel);
        $manager->flush();
    }
}
