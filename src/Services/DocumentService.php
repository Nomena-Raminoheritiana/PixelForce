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

class DocumentService 
{
    private $entityManager;
    private $documentRepository;
    private $mailer;
    private $filesDirectory;
    private $baseUrl;
    private $stripeService;
    private $twig;
    public const FIELDS_SEPA = [
        ['field' => 'nom_prenom_raison_sociale', 'debut' => 97, 'fin' => 97],
        ['field' => 'adresse_nom_rue', 'debut' => 98, 'fin' => 98],
        ['field' => 'ville', 'debut' => 99, 'fin' => 99],
        ['field' => 'pays', 'debut' => 100, 'fin' => 100],
        ['field' => 'code_postal', 'debut' => 105, 'fin' => 109],
        ['field' => 'lieu_signature', 'debut' => 102, 'fin' => 102],
        ['field' => 'date_signature', 'debut' => 103, 'fin' => 103],
        ['field' => 'creancier_n_client', 'debut' => 101, 'fin' => 101],
        ['field' => 'creancier_code_rum', 'debut' => 104, 'fin' => 104],
        ['field' => 'coordonnees_compte', 'debut' => 110, 'fin' => 136],
        ['field' => 'code_bic', 'debut' => 137, 'fin' => 147],
        ['field' => 'paiement', 'debut' => 148, 'fin' => 148],
    ];
    

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
            if($rec->getSignedFile() == null) throw new \Exception("Vous devez importer le document déjà rempli avant de signer le document.");
            $source = $this->filesDirectory.'/'.$rec->getSignedFile();
            
            // Flatten form datas of pdf :
            $this->flattenDocument($source, $source, null);

            $pdf = new Fpdi();
            $pageCount = $pdf->setSourceFile($source);

            for($i=1; $i<=$pageCount; $i++){
                $pdf->AddPage();
                $tplId = $pdf->importPage($i);
                $pdf->useTemplate($tplId);
                if($i == 4){
                    $pdf->Image($signature, 0, 180, 120);
                }
            }
            
            $pdf->Output($source, 'F');
            $rec->setDateSigned(new DateTime());
            $this->entityManager->flush(); 
        } finally{
            $this->entityManager->clear();
        }
    }

    public function flattenDocument($inputFilepath, $outputFilepath, $datas = null){
        // if inputFilepath = outputFilepath , the file will be replaced by the new one
        $pdf = new Pdf($inputFilepath);
        if($datas != null){
            $pdf->fillForm($datas);
        }
        $result = $pdf->allow('AllFeatures')      // Change permissions
            ->needAppearances()
            ->flatten()
            ->saveAs($outputFilepath);
        // Always check for errors
        if ($result === false) {
            $error = $pdf->getError();
            throw new \Exception($error);
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


    public function getData($filepath){
        $pdf = new Pdf( $this->filesDirectory.'/'.$filepath);
        $result = $pdf->getDataFields();
        if ($result === false) {
            $error = $pdf->getError();
            throw new \Exception($error);
        }

        return $result->__toArray();
        /* $parser = new \Smalot\PdfParser\Parser();
        $pdf = $parser->parseFile($this->filesDirectory.'/'.$filepath);
        $metaData = $pdf->getDetails();
        return $metaData; */
    }

    public function getDataSepa($tab){
        $result = [];
        for($i=0; $i<count(DocumentService::FIELDS_SEPA); $i++){
            $field = DocumentService::FIELDS_SEPA[$i];
            $val = '';
            for($j=$field['debut']; $j<=$field['fin']; $j++){
                if(isset($tab[$j]['FieldValue'])){
                    $val .= $tab[$j]['FieldValue'];
                }
            }
            $result[$field['field']] = $val;
        }
        return $result;
    }

    public function signContrat($contrat, $output, $signature){
        try{
            $source = $this->filesDirectory.'/'.$contrat;
            $outputPath = $this->filesDirectory.'/'.$output;

            // Flatten form datas of pdf :
            $this->flattenDocument($source, $outputPath, null);

            $pdf = new Fpdi();
            $pageCount = $pdf->setSourceFile($outputPath);

            for($i=1; $i<=$pageCount; $i++){
                $pdf->AddPage();
                $tplId = $pdf->importPage($i);
                $pdf->useTemplate($tplId);
                if($i == 4){
                    $pdf->Image($signature, 0, 180, 120);
                }
            }
            
            $pdf->Output($outputPath, 'F');
            return $output;
        } finally{
            $this->entityManager->clear();
        }
    }
}
