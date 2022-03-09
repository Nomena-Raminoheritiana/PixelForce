<?php


namespace App\Manager;


use App\Repository\UserRepository;
use App\Services\GenerateKey;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Security\Csrf\TokenGenerator\TokenGeneratorInterface;

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
    /**
     * @var TokenGeneratorInterface
     */
    private $tokenGenerator;

    public function __construct(GenerateKey $generateKey, TokenGeneratorInterface $tokenGenerator, UserRepository $userRepository, EntityManager $entityManager)
    {
        $this->generateKey = $generateKey;
        $this->userRepository = $userRepository;
        $this->entityManager = $entityManager;
        $this->tokenGenerator = $tokenGenerator;
    }

    public function generateSixDigitKey($email)
    {
       $user = $this->userRepository->findOneBy(['email' => $email]);
       if($user) {
          $sixDigitNumericCode = $this->generateKey->generateSixDigitKey();
          $user->setSixDigitCode($sixDigitNumericCode);
          $user->setForgottenPassToken($this->tokenGenerator->generateToken());
          $this->entityManager->save($user);
          return $user;
       }
       return false;
    }

}
