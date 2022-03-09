<?php


namespace App\Manager;


use App\Repository\UserRepository;
use App\Services\GenerateKey;
use Doctrine\ORM\EntityManagerInterface;

class UserManager
{
    /**
     * @var GenerateKey
     */
    private $generateKey;
    /**
     * @var UserRepository
     */
    private $userRepository;
    /**
     * @var EntityManagerInterface
     */
    private $entityManager;

    public function __construct(GenerateKey $generateKey, UserRepository $userRepository, EntityManager $entityManager)
    {
        $this->generateKey = $generateKey;
        $this->userRepository = $userRepository;
        $this->entityManager = $entityManager;
    }

    public function generateSixDigitKey($email)
    {
       $user = $this->userRepository->findOneBy(['email' => $email]);
       if($user) {
          $sixDigitNumericCode = $this->generateKey->generateSixDigitKey();
          $user->setSixDigitCode($sixDigitNumericCode);
          $this->entityManager->save($user);
          return $user;
       }
       return false;
    }

}
