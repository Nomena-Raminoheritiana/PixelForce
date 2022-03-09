<?php


namespace App\Services;


use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Component\Mailer\Exception\TransportExceptionInterface;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Address;
use Symfony\Component\Mime\Email;

class MailerService
{
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
    /**
     * @var Mailer
     */
    private $mailer;

    public function __construct(MailerInterface $mailer)
    {
        $this->mailer = $mailer;
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

}
