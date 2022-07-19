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

class DocumentService 
{
    private $entityManager;
    private $documentRepository;
    private $mailer;
    private $filesDirectory;
    private $baseUrl;
    private $stripeService;
    private $twig;
    

    public function __construct(
        $filesDirectory,
        $baseUrl,
        EntityManagerInterface $entityManager, 
        DocumentRepository $documentRepository, 
        Swift_Mailer $mailer,
        StripeService $stripeService,
        Twig_Environment $twig 
        )
    {
        $this->entityManager = $entityManager;
        $this->documentRepository = $documentRepository;
        $this->mailer = $mailer;
        $this->filesDirectory = $filesDirectory;
        $this->baseUrl = $baseUrl;
        $this->stripeService = $stripeService;
        $this->twig = $twig;
    }

    public function sendDocument(DocumentRecipient $rec)
    {
        
        $rec->setPaid(false);
        $rec->setStatut(1);
        $rec->setDateSend(new DateTime());
        
        $this->entityManager->persist($rec);
        $this->entityManager->flush();

        $link = $this->baseUrl.'/dc/'.sha1($rec->getId());
        $message = new Swift_Message("Signature du document << ".$rec->getDocument()->getNom()." >>");
        $message = $message
            ->setFrom('noreply.pixenshop@yahoo.com', "PixelForce")
            ->setTo($rec->getEmail())
            //->setBody("<p>Bonjour ".($rec->getPrenom() ? $rec->getPrenom() : "")." ".$rec->getNom().",</p><p>Pixelforce vous invite à suivre ce lien vers l'ouverture du document <i>&lt;&lt; ".$rec->getDocument()->getNom()." &gt;&gt;</i> et pour lequel vous devez souscrire. </p> <p><a href='".$link."'>".$link.'</a></p><div style="display:flex; justify-content:center; align-items:center; gap: 50px; margin-top : 30px;"><img src="'.$message->embed(Swift_Image::fromPath('assets/img/pixelforce.PNG')).'" alt="Logo Pixelforce" style=" " /><img src="'.$message->embed(Swift_Image::fromPath('assets/img/securitas.png')).'" alt="Logo Securitas" style="width : 75px;" /></div>', "text/html");
            // ->attach(Swift_Attachment::fromPath('assets/img/securitas.png')->setDisposition('inline'));   
            ->setBody(
                $this->twig->render('emails/document.html.twig', [
                    'logoSecuritas' => $message->embed(Swift_Image::fromPath('assets/img/securitas.png')),
                    'link' => $link,
                    'conseiller' => $rec->getConseiller() 
                ]),
                "text/html"
            );
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
                if($i == 4){
                    $pdf->Image($signature, 0, 180, 120);
                }
            }
            
            $filename = 'docs/signed/doc-'.$rec->getId().'.pdf';
            $pdf->Output($this->filesDirectory.'/'.$filename, 'F');  
            $rec->setSignedFile($filename);
            $rec->setDateSigned(new DateTime());
            $this->entityManager->flush(); 
        } finally{
            $this->entityManager->clear();
        }
    }

    public function editDocument(DocumentRecipient $rec){
        $fields = array(
            'Adresse 2' => 'Adresse lesy ty a',
            // 'N� Client 9' => 'Hoaiza elah',
        );
        // $fields = [];
        $pdf = new \FPDM($this->filesDirectory.'/contracts/test_o.pdf');
        $filename = 'docs/signed/test-'.$rec->getId().'.pdf';
        $pdf->useCheckboxParser = true; // Checkbox parsing is ignored (default FPDM behaviour) unless enabled with this setting
        $pdf->Load($fields, false); // second parameter: false if field values are in ISO-8859-1, true if UTF-8
        $pdf->Merge();
        $pdf->Output();
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
