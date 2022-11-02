<?php

namespace App\Services;

use Doctrine\ORM\EntityManagerInterface;
use setasign\Fpdi\Fpdi;
use Twig\Environment as Twig_Environment;

class DemandeDevisService 
{
    private $entityManager;
    private $filesDirectory;
    private $stripeService;
    private $twig;
    
    

    public function __construct(
        $filesDirectory,
        EntityManagerInterface $entityManager, 
        StripeService $stripeService,
        Twig_Environment $twig 
        )
    {
        $this->entityManager = $entityManager;
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
