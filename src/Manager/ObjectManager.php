<?php


namespace App\Manager;


use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class ObjectManager
{
    /**
     * @var EntityManagerInterface
     */
    private $entityManager;
    /**
     * @var UserPasswordEncoderInterface
     */
    private $encoder;

    public function __construct(EntityManagerInterface $entityManager, UserPasswordEncoderInterface $encoder)
    {
        $this->entityManager = $entityManager;
        $this->encoder = $encoder;
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
            if($field === 'password' && $object instanceof User) {
               $value =  $this->encoder->encodePassword($object, $value);
            }
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