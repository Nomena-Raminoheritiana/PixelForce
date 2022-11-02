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
use Twig\Environment as Twig_Environment;
use mikehaertl\pdftk\Pdf;

class DemandeDevisService 
{
    private $entityManager;
    private $mailer;
    private $filesDirectory;
    private $baseUrl;
    private $stripeService;
    private $twig;
    
    

    public function __construct(
        $filesDirectory,
        EntityManagerInterface $entityManager, 
        Swift_Mailer $mailer,
        StripeService $stripeService,
        Twig_Environment $twig 
        )
    {
        $this->entityManager = $entityManager;
        $this->mailer = $mailer;
        $this->filesDirectory = $filesDirectory;
        $this->stripeService = $stripeService;
        $this->twig = $twig;
    }

    

    public function signContrat($contrat, $signature){
        try{
            $pdf = new Fpdi();
            $pageCount = $pdf->setSourceFile($contrat);

            for($i=1; $i<=$pageCount; $i++){
                $pdf->AddPage();
                $tplId = $pdf->importPage($i);
                $pdf->useTemplate($tplId);
                if($i == 1){
                    $pdf->Image($signature, 0, 140, 120);
                }
            }
            
            $pdf->Output($contrat, 'F');
        } finally{
        }
    }

    
}
