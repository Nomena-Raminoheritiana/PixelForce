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
    public function createObject(String $className, Array $arrayData = [], bool $verifier = false, $champs = [], $onlyPersist=false)
    {
        $errors = null;
        $capturedError = false;
        $object = new $className();
        foreach($arrayData as $field => $value) {
            if(!empty($field)) {
                $method = 'set'.ucfirst($field);
                if($field === 'password' && $object instanceof User) {
                    $value =  $this->encoder->encodePassword($object, $value);
                }
                $object->$method($value);
            }
        }
        if($verifier) {
            /** @var ConstraintViolationList $errors */
            $errors = $this->validator->validate($object);

            foreach($champs as $champ) {
                for($i = 0; $i < $errors->count(); $i++) {
                    if($champ === $errors->get($i)->getPropertyPath()) {
                        $capturedError = true;
                    }
                }
            }
        }

        if($errors instanceof ConstraintViolationList && $errors->count() > 0 && $capturedError) {
            return $errors;
        }

        $this->entityManager->persist($object);
        if(!$onlyPersist) {
            $this->entityManager->flush();
        }

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

    /**
     * @param $classWithNameSpace
     * @param array $ids
     * @return array
     */
    public function getMultiple($classWithNameSpace, $ids = [])
    {
        $objects = [];
        foreach($ids as $id) {
            $object =  $this->get($classWithNameSpace, $id);
            if($object) {
                $objects[] = $object;
            }
        }
        return $objects;
    }

    /**
     * @param $class
     * @param null $id
     *
     * @return object|null
     */
    public function get($classWithNameSpace, $id)
    {
        if(!is_null($classWithNameSpace)) {
            $repository = $this->entityManager->getRepository($classWithNameSpace);
            return $repository->findOneBy(['id' => $id]);
        }
        return null;
    }
}
