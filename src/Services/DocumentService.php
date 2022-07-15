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
use setasign\Fpdi\Fpdi;
use Swift_Mailer;
use Swift_Message;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;

class DocumentService 
{
    private $entityManager;
    private $documentRepository;
    private $mailer;
    private $filesDirectory;
    private $baseUrl;
    

    public function __construct(
        $filesDirectory,
        $baseUrl,
        EntityManagerInterface $entityManager, 
        DocumentRepository $documentRepository, 
        Swift_Mailer $mailer,
        )
    {
        $this->entityManager = $entityManager;
        $this->documentRepository = $documentRepository;
        $this->mailer = $mailer;
        $this->filesDirectory = $filesDirectory;
        $this->baseUrl = $baseUrl;
    }

    public function sendDocument(DocumentRecipient $rec)
    {
        
        $rec->setPaid(false);
        $rec->setStatut(1);
        $rec->setDateSend(new DateTime());
        
        $this->entityManager->persist($rec);
        $this->entityManager->flush();

        $link = $this->baseUrl.'/dc/'.sha1($rec->getId());
        $message = (new Swift_Message())
            ->setFrom('noreply.pixenshop@yahoo.com', "PixelForce")
            ->setTo($rec->getEmail())
            ->setSubject("Signature d'un document")
            ->setBody("<p>Bonjour ".($rec->getPrenom() ? $rec->getPrenom() : "")." ".$rec->getNom().",</p><p>Veuillez suivre ce lien pour signer le document &lt;&lt; ".$rec->getDocument()->getNom()." &gt;&gt; : <a href='".$link."'>".$link."</a> </p>", "text/html");    
        $this->mailer->send($message); 
    }

    public function signDocument(DocumentRecipient $rec, $signature){
        try{
            $pdf = new Fpdi();
            $pageCount = $pdf->setSourceFile($this->filesDirectory.'/'.$rec->getDocument()->getFile());

            for($i=1; $i<=$pageCount; $i++){
                $pdf->AddPage();
                $tplId = $pdf->importPage($i);
                $pdf->useTemplate($tplId);
            }
            $pdf->Image($signature, 110, 240, 120);
            $filename = 'docs/signed/doc-'.$rec->getId().'.pdf';
            $pdf->Output($this->filesDirectory.'/'.$filename, 'F');  
            $rec->setSignedFile($filename);
            $rec->setDateSigned(new DateTime());
            $this->entityManager->flush(); 
        } finally{
            $this->entityManager->clear();
        }
    }

}
