<?php

namespace App\Services;

use App\Entity\AccountValidation;
use App\Entity\DocumentRecipient;
use App\Entity\ForgotPassword;
use App\Entity\User;
use App\Repository\AccountValidationRepository;
use App\Repository\DocumentRepository;
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

class DocumentService 
{
    private $entityManager;
    private $documentRepository;
    private $mailer;
    

    public function __construct(
        EntityManagerInterface $entityManager, 
        DocumentRepository $documentRepository, 
        Swift_Mailer $mailer,
        )
    {
        $this->entityManager = $entityManager;
        $this->documentRepository = $documentRepository;
        $this->mailer = $mailer;
    }

    public function sendDocument(DocumentRecipient $rec)
    {
        
        $rec->setPaid(false);
        $rec->setStatut(1);
        $rec->setDateSend(new DateTime());
        
        $this->entityManager->persist($rec);
        $this->entityManager->flush();

        $link = sha1($rec->getId());
        $message = (new Swift_Message())
            ->setFrom('noreply.pixenshop@yahoo.com', "PixelForce")
            ->setTo($rec->getEmail())
            ->setSubject("Signature d'un document")
            ->setBody("<p>Bonjour ".($rec->getPrenom() ? $rec->getPrenom() : "")." ".$rec->getNom().",</p><p>Veuillez suivre ce lien pour signer le document &lt;&lt; ".$rec->getDocument()->getNom()." &gt;&gt; : <a href='".$link."'>".$link."</a> </p>", "text/html");    
        $this->mailer->send($message); 
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
