<?php


namespace App\Services;

use App\Entity\Formation;
use App\Entity\User;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;
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

    public function __construct(MailerInterface $mailer)
    {
        $this->mailer = $mailer;
        $this->from =  $_ENV['MAILER_SEND_FROM'];
        $this->from_name = $_ENV['MAILER_SEND_FROM_NAME'];
    }

    public function sendMailInscriptionUser($email)
    {
        $this->sendMail([
            'subject' => 'Code de vérification',
            'from' => $this->from,
            'from_name' => $this->from_name,
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
            'from' => $this->from,
            'from_name' => $this->from_name,
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
            'from' => $sender->getEmail(),
            'from_name' => $sender->getNom(),
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

    public function sendMail($parameters)
    {
        $email = (new TemplatedEmail())
            ->from(new Address($parameters['from'], isset($parameters['from_name']) ? $parameters['from_name'] : ''))
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

        try{
            $this->mailer->send($email);
        } catch (TransportExceptionInterface $e) {
            // some error prevented the email sending; display an
            // error message or try to resend the message
             echo 'erreur : '.$e->getMessage();
        }


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
