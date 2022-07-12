<?php

namespace App\Services;

use App\Entity\AccountValidation;
use App\Entity\ForgotPassword;
use App\Entity\User;
use App\Repository\AccountValidationRepository;
use App\Repository\ForgotPasswordRepository;
use App\Repository\UserRepository;
use DateInterval;
use DateTime;
use Doctrine\ORM\EntityManagerInterface;
use Exception;
use Swift_Mailer;
use Swift_Message;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;

class AuthService 
{
    private $entityManager;
    private $userRepository;
    private $mailer;
    private $forgotPasswordRepository;
    private $passwordHasher;
    private $validator;
    private $accountValidationRepository;

    public function __construct(
        EntityManagerInterface $entityManager, 
        UserRepository $userRepository, 
        UserPasswordHasherInterface $passwordHasher, 
        Swift_Mailer $mailer,
        ValidatorInterface $validator,
        AccountValidationRepository $accountValidationRepository
        )
    {
        $this->entityManager = $entityManager;
        $this->userRepository = $userRepository;
        $this->passwordHasher = $passwordHasher;
        $this->mailer = $mailer;
        $this->validator = $validator;
        $this->accountValidationRepository = $accountValidationRepository;
    }

    public function checkNewAccount(User $user): User
    {
        $password = $this->passwordHasher->hashPassword($user, $user->getPlainPassword());
        $user->setPassword($password);
        $user->setCreatedAt(new DateTime());
        $user->setActive(true);
        $user->setRoles(["ROLE_CLIENT"]);

        $errors = $this->validator->validate($user);

        if(count($errors) > 0){
            throw new Exception($errors->get(0)->getMessage());
        }

        
        $code =  $this->generateRandomNDigits(8);   
        $dateExpiration = new DateTime();
        $dateExpiration->add(new DateInterval('PT1H'));
        
        $accountValidation = new AccountValidation();
        $accountValidation->setMail($user->getEmail());
        $accountValidation->setVerifCode(sha1($code));
        $accountValidation->setDateExpiration($dateExpiration);
        $accountValidation->setStatus(1);
        
        $this->entityManager->persist($accountValidation);
        $this->entityManager->flush();

        $message = (new Swift_Message())
            ->setFrom('noreply.pixenshop@yahoo.com', "PixelForce")
            ->setTo($user->getEmail())
            ->setSubject('Validation du nouveau compte')
            ->setBody("<p><b>Code de vérification:</b> ".$code."</p><p><b>Date d'expiration:</b> ".$dateExpiration->format('Y-m-d H:i:s')."</p>", "text/html");    
        $this->mailer->send($message); 
        return $user;
    }

    public function validateAccount(User $user, $verifCode)
    {

        $accountValidation = $this->accountValidationRepository->getValidAccountValidation($user->getEmail(), $verifCode);
        if($accountValidation == null) 
            throw new Exception("Code de vérification invalide");

        $errors = $this->validator->validate($user);
        if(count($errors) > 0){
            throw new Exception($errors->get(0)->getMessage());
        }    

        $accountValidation->setStatus(0);
        
        $this->entityManager->persist($user);
        $this->entityManager->persist($accountValidation);
        $this->entityManager->flush();
    }


    public function generateRandomNDigits(int $n){
        $code = "";
        for($i=0; $i<$n; $i++){
            $code .= rand(0, 9);
        }
        return $code;
    }

}
