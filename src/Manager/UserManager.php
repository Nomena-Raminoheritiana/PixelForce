<?php


namespace App\Manager;


use App\Entity\CoachAgent;
use App\Entity\User;
use App\Repository\UserRepository;
use App\Services\GenerateKey;
use App\Services\MailerService;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Security\Csrf\TokenGenerator\TokenGeneratorInterface;
use Symfony\Component\Validator\ConstraintViolationList;

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
    /**
     * @var UserPasswordHasherInterface
     */
    private $passwordHasher;
    /**
     * @var ObjectManager
     */
    private $objectManager;
    /**
     * @var MailerService
     */
    private $mailerService;

    public function __construct(
        GenerateKey $generateKey,
        TokenGeneratorInterface $tokenGenerator,
        UserRepository $userRepository,
        EntityManager $entityManager,
        UserPasswordHasherInterface $passwordHasher,
        ObjectManager $objectManager,
        MailerService $mailerService
    )
    {
        $this->generateKey = $generateKey;
        $this->userRepository = $userRepository;
        $this->entityManager = $entityManager;
        $this->tokenGenerator = $tokenGenerator;
        $this->passwordHasher = $passwordHasher;
        $this->objectManager = $objectManager;
        $this->mailerService = $mailerService;
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

    public function clearAllForgottenPassCode(User $user)
    {
        $user->setSixDigitCode(null);
        $user->setForgottenPassToken(null);
        $this->entityManager->save($user);
    }

    public function setUserPasword(User $user,  $password,  $repeatedPass, $verifie = true)
    {
        if($password === $repeatedPass || $verifie === false) {
            $hashedPassword = $this->passwordHasher->hashPassword($user, $password);
            $user->setPassword($hashedPassword);
            $this->entityManager->save($user);
            return $user;
        }
        return null;
    }

    public function inscrire($email, $coach, $roles = [User::ROLE_CLIENT])
    {
        if(!empty($email)) {
            // création de l'agent
            $error = $this->objectManager->createObject(User::class, [
                'email' => $email,
                'password' => base64_encode('_dfdkf12132_1321df'),
                'active' => false,
                'roles' => $roles
            ], true, ['email']);

            if(($error instanceof ConstraintViolationList && $error->count() === 0 )|| $error instanceof User) {

                // création du lien entre agent et coach
                if($coach){
                    $this->objectManager->createObject(CoachAgent::class, [
                        'coach' => $this->userRepository->findOneBy(['id' => $coach]),
                        'agent' => $error
                    ]);
                }

                $this->mailerService->sendMail([
                    'subject' => 'Code de vérification',
                    'from' => $_ENV['MAILER_SEND_FROM'],
                    'from_name' => $_ENV['MAILER_SEND_FROM_NAME'],
                    'to' => [
                        $email
                    ],
                    'template' => 'inscription/lien_page_inscription.html.twig',
                    'template_vars' => [
                        'encodedMail' => base64_encode($email),
                    ]
                ]);
                return false;
            }
        }
        return true;
    }

}
