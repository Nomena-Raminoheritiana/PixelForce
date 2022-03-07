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

    /**
     * Permet d'instancier n'importe quelle entité
     * @param String $className
     * @param array $arrayData exemple => ['email' => xxxx@xxx.com, 'password' => xxxx]
     * @return mixed
     */
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

    /**
     * Permet de créer plusieur instance d'un entité
     * @param String $className
     * @param array $arraysData
     * @return array
     */
    public function createMultipleObject(String $className, Array $arraysData =  [])
    {
        $objects = [];
        foreach($arraysData as $arrayData) {
            $objects[] = $this->createObject($arrayData);
        }
        return $objects;
    }
}