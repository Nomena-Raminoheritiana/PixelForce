<?php

namespace App\DataFixtures;

use App\Entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class UserFixtures extends Fixture
{
    /**
     * @var \App\Manager\ObjectManager
     */
    private $objectManager;

    public function __construct(\App\Manager\ObjectManager $objectManager)
    {
        $this->objectManager = $objectManager;
    }

    public function load(ObjectManager $manager): void
    {
        $this->objectManager->createObject(User::class, [
            'email' => 'n.raminoheritiana@gmail.com',
            'roles' => [User::ROLE_ADMINISTRATEUR],
            'password' => 'nomena',
            'nom' => 'RAMINOHERITIANA',
            'prenom' => 'Nomena',
            'dateNaissance' => new \DateTime('03/08/1999')
        ]);

        $this->objectManager->createObject(User::class, [
            'email' => 'coach@gmail.com',
            'roles' => [User::ROLE_COACH],
            'password' => 'nomena',
            'nom' => 'RAMINOHERITIANA',
            'prenom' => 'Nomena',
            'dateNaissance' => new \DateTime('03/08/1999'),
            'adresse' => 'lot IVE 192H Ambodimita'
        ]);

    }
}
