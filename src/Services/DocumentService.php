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
use Swift_Attachment;
use Swift_Image;

use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;

class DocumentService 
{
    private $entityManager;
    private $documentRepository;
    private $mailer;
    private $filesDirectory;
    private $baseUrl;
    private $stripeService;
    

    public function __construct(
        $filesDirectory,
        $baseUrl,
        EntityManagerInterface $entityManager, 
        DocumentRepository $documentRepository, 
        Swift_Mailer $mailer,
        StripeService $stripeService
        )
    {
        $this->entityManager = $entityManager;
        $this->documentRepository = $documentRepository;
        $this->mailer = $mailer;
        $this->filesDirectory = $filesDirectory;
        $this->baseUrl = $baseUrl;
        $this->stripeService = $stripeService;
    }

    public function sendDocument(DocumentRecipient $rec)
    {
        
        $rec->setPaid(false);
        $rec->setStatut(1);
        $rec->setDateSend(new DateTime());
        
        $this->entityManager->persist($rec);
        $this->entityManager->flush();

        $link = $this->baseUrl.'/dc/'.sha1($rec->getId());
        $message = new Swift_Message("Signature d'un document");
        $message = $message
            ->setFrom('noreply.pixenshop@yahoo.com', "PixelForce")
            ->setTo($rec->getEmail())
            ->setBody("<p>Bonjour ".($rec->getPrenom() ? $rec->getPrenom() : "")." ".$rec->getNom().",</p><p>Pixelforce vous invite à suivre ce lien vers l'ouverture du document <i>&lt;&lt; ".$rec->getDocument()->getNom()." &gt;&gt;</i> et pour lequel vous devez souscrire. </p> <p><a href='".$link."'>".$link.'</a></p><img src="'.$message->embed(Swift_Image::fromPath('assets/img/securitas.png')).'" alt="Logo Securitas" style="margin-top : 30px; width : 75px;" />', "text/html");
            // ->attach(Swift_Attachment::fromPath('assets/img/securitas.png')->setDisposition('inline'));   
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

    public function pay(string $stripeToken, DocumentRecipient $rec){
        try{
            $chargeId = $this->stripeService
                ->createCharge(
                    $stripeToken, 
                    $rec->getDocument()->getAmount(), [
                        'description' => 'Paiement apres signature document'
                    ]);

            $rec->setPaid(true);        
            $this->entityManager->flush();
        } finally {
            $this->entityManager->clear();
        }
    }

}
