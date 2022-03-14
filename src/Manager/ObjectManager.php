<?php


namespace App\Manager;


use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Component\Validator\ConstraintViolationList;
use Symfony\Component\Validator\Validator\ValidatorInterface;

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
    /**
     * @var ValidatorInterface
     */
    private $validator;

    public function __construct(ValidatorInterface $validator, EntityManager $entityManager, UserPasswordEncoderInterface $encoder)
    {
        $this->entityManager = $entityManager;
        $this->encoder = $encoder;
        $this->validator = $validator;
    }

    /**
     * Permet d'instancier n'importe quelle entité
     * @param String $className
     * @param array $arrayData exemple => ['email' => xxxx@xxx.com, 'password' => xxxx]
     * @param bool $verifier
     * @return mixed
     */
    public function createObject(String $className, Array $arrayData = [], bool $verifier = false)
    {
        $errors = null;
        $object = new $className();
        foreach($arrayData as $field => $value) {
            $method = 'set'.ucfirst($field);
            if($field === 'password' && $object instanceof User) {
               $value =  $this->encoder->encodePassword($object, $value);
            }
            $object->$method($value);
        }
        if($verifier) {
            /** @var ConstraintViolationList $errors */
            $errors = $this->validator->validate($object);
        }

        if($errors->count() > 0) {
            return $errors;
        }
        $this->entityManager->save($object);
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
