<?php


namespace App\Services;

use App\Entity\DocumentRecipient;
use App\Entity\Formation;
use App\Entity\User;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Component\DependencyInjection\ParameterBag\ParameterBagInterface;
use Symfony\Component\Mailer\Exception\TransportExceptionInterface;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Address;
use Symfony\Component\Mime\Email;

class MailerService
{

    /**
     * @var Mailer
     */
    private $mailer;
    private $from;
    private $from_name;
    private $parameterBag;

    public function __construct(MailerInterface $mailer, ParameterBagInterface $parameterBag)
    {
        $this->mailer = $mailer;
        $this->from =  $_ENV['MAILER_SEND_FROM'];
        $this->from_name = $_ENV['MAILER_SEND_FROM_NAME'];
        $this->parameterBag = $parameterBag;
    }

    public function sendMailInscriptionUser($email)
    {
        $this->sendMail([
            'subject' => 'Code de vérification',
            'to' => [
                $email
            ],
            'template' => 'inscription/lien_page_inscription.html.twig',
            'template_vars' => [
                'encodedMail' => base64_encode($email),
            ]
        ]);
    }

    public function sendMailRegenerationCode(User $user)
    {
        $this->sendMail([
            'subject' => 'Code de vérification',
            'to' => [
                $user->getEmail()
            ],
            'template' => 'security/sixDigitKey.html.twig',
            'template_vars' => [
                'sixDigitKey' => $user->getSixDigitCode()
            ]
        ]);
    }

    public function sendMailAfterDoneFormation(User $sender, User $recipient, Formation $formation)
    {
        $this->sendMail([
            'subject' => 'Formation terminée',
            //'from' => $sender->getEmail(),
            //'from_name' => $sender->getNom(),
            'to' => [
                $recipient->getEmail()
            ],
            'template' => 'formation/formation_done.html.twig',
            'template_vars' => [
                'formation' => $formation,
                'agent' => $sender
            ]
        ]);
    }

    public function sendVerifCodeToClient($recipient, $code, $dateExpiration)
    {
        $this->sendMail([
            'subject' => 'Validation du nouveau compte',
            'to' => [
                $recipient->getEmail()
            ],
            'template' => 'inscription/code_verification_client.html.twig',
            'template_vars' => [
                'code' => $code,
                'dateExpiration' => $dateExpiration
            ]
        ]);       
    }

    public function SendDevisToCompany($recipient, $devisCompany, $pj_pathname)
    {
        $email = (new TemplatedEmail())
        ->from(new Address($this->from, $this->from_name))
        ->to($recipient)
        ->subject('Devis')
        ->htmlTemplate('emails/devis/devis_entreprise.html.twig')
        ->context([
            'devisCompany' => $devisCompany
        ])
        ->attachFromPath($this->parameterBag->get('kernel.project_dir')."/public/files/".$pj_pathname, null);
        $this->mailer->send($email);
    }


    public function sendDocument(DocumentRecipient $rec, $link, $recipient)
    {
        $email = (new TemplatedEmail())
            ->from(new Address($this->from, $this->from_name))
            ->to($recipient->getEmail())
            ->subject("Signature du document << ".$rec->getDocument()->getNom()." >>")
            ->htmlTemplate('emails/document.html.twig')
            ->context([
                'link' => $link,
                'conseiller' => $rec->getConseiller()
            ])
            ->embedFromPath($this->parameterBag->get('kernel.project_dir').'/public/assets/img/securitas.png', 'logoSecuritas', 'image/png');
        $this->mailer->send($email);
    }


    public function sendMail($parameters)
    {
        $email = (new TemplatedEmail())
            //->from(new Address($parameters['from'], isset($parameters['from_name']) ? $parameters['from_name'] : ''))
            ->from(new Address($this->from, $this->from_name))
            ->subject($parameters['subject'])
        ;

        // email des recepteurs
        foreach($parameters['to'] as $to) {
           $email = $email->addTo($to);
        }

        // eamil en copie
        if(isset($parameters['cc'])){
            foreach($parameters['cc'] as $cc) {
                $email = $email->addcc($cc);
            }
        }


        // template
        $email = $email->htmlTemplate('emails/'.$parameters['template']);

        // passez les variables
        $email = $email->context(isset($parameters['template_vars']) ? $parameters['template_vars'] : []);

        // piece_jointe
        // $email = $email->attachFromPath(  $this->parameterBag->get('kernel.project_dir')."/public/files/piece-jointe/livret_d_accueil_formation_officielle_entreprendre_en_2022.pdf", null)  


        //try{
            $this->mailer->send($email);
        //} catch (TransportExceptionInterface $e) {
            // some error prevented the email sending; display an
            // error message or try to resend the message
        //     echo 'erreur : '.$e->getMessage();
        //}


    }

    //    private $exempleParametre = [
//        'from' => 'xx@gmail.com',
//        'from_name' => 'nomena',
//        'to' => [
//            'qdsf@dsf',
//            'qdsk@qsdf'
//        ],
//        'cc' => [
//            'qsmldkfj@qdsf'
//        ],
//        'template' => 'qkdjfmdsjf.html.twig',
//        'template_vars' => [
//            'variable1' => 'valeur'
//        ]
//
//    ];


}
