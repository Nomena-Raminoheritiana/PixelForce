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
            'password' => 'nomena'
        ]);

    }
}
