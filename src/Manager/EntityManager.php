<?php

namespace App\Manager;

use Doctrine\ORM\EntityManagerInterface;

class EntityManager
{
    /**
     * @var \Doctrine\Persistence\ObjectManager
     */
    private $em;

    public function __construct(EntityManagerInterface $entityManagerDefault)
    {
        $this->em = $entityManagerDefault;
    }

    public function save($object)
    {
        $this->em->persist($object);
        $this->em->flush();
    }

    public function remove($object)
    {
        $this->em->remove($object);
        $this->em->flush();
    }

    public function saveMultiple(array $objects)
    {
        foreach ($objects as $object) {
            $this->em->persist($object);
        }
        $this->em->flush();
    }

    public function removeMultiple(array $objects)
    {
        foreach ($objects as $object) {
            $this->em->remove($object);
        }
        $this->em->flush();
    }

    public function __call($name, $arguments)
    {
        return call_user_func_array([$this->em, $name], $arguments);
    }
}
