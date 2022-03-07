<?php


namespace App\Manager;


use Doctrine\ORM\EntityManagerInterface;

class ObjectManager
{
    /**
     * @var EntityManagerInterface
     */
    private $entityManager;

    public function __construct(EntityManagerInterface $entityManager)
    {
        $this->entityManager = $entityManager;
    }

    public function createObject(String $className, Array $arrayData = [])
    {
        $object = new $className();
        foreach($arrayData as $field => $value) {
            $method = 'set'.ucfirst($field);
            $object->$method($value);
        }
        $this->entityManager->persist($object);
        $this->entityManager->flush();
        return $object;
    }

    public function createMultipleObject(String $className, Array $arraysData =  [])
    {
        $users = [];
        foreach($arraysData as $arrayData) {
          $users[] = $this->createObject($arrayData);
        }
        return $users;
    }
}