<?php
namespace App\Services;

use Twig\Environment as Twig_Environment;
use Swift_Mailer;
use Swift_Message;
use Swift_Attachment;
use Swift_Image;
use Symfony\Component\DependencyInjection\ParameterBag\ParameterBagInterface;

class MailService{
    private $mailerSendFrom;
    private $mailerSendFromName;
    private $mailer;
    private $twig;
    private $parameterBag;

    public function __construct($mailerSendFrom, $mailerSendFromName, Swift_Mailer $mailer, Twig_Environment $twig, ParameterBagInterface $parameterBag)
    {
        $this->mailerSendFrom = $mailerSendFrom;
        $this->mailerSendFromName = $mailerSendFromName;
        $this->mailer = $mailer;
        $this->twig = $twig;
        $this->parameterBag = $parameterBag;
    }

    public function sendMail(array $mail, array $attachmentsPath = [])
    {
        $message = new Swift_Message($mail['subject']);
        $message = $message
            ->setFrom($this->mailerSendFrom, $this->mailerSendFromName)
            ->setTo($mail['to'])
            ->setBody($mail['body'], "text/html");
        foreach($attachmentsPath as $path){
            $message->attach(Swift_Attachment::fromPath($path));
        }    
        $this->mailer->send($message); 
    }

    public function renderTwig($filePath, $options = []){
        return $this->twig->render($filePath, $options);
    }

    public function SendDevisToCompany($recipient, $devisCompany, $pj_pathname)
    {

        $mail = [
            'subject' => 'Devis',
            'to' => $recipient,
            'body' => $this->renderTwig('emails/devis/devis_entreprise.html.twig', ['devisCompany' => $devisCompany])
        ];

        $attachmentsPath = [$this->parameterBag->get('kernel.project_dir')."/public/files/".$pj_pathname];

        $this->sendMail($mail, $attachmentsPath);

    }
}