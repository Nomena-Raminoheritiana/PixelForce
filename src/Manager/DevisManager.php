<?php


namespace App\Manager;

use App\Entity\DevisCompany;
use App\Entity\DevisCompanyDetail;
use App\Entity\User;
use App\Services\FileHandler;

class DevisManager
{
    private $entityManager;
    private $fileHandler;

    public function __construct(EntityManager $entityManager, FileHandler $fileHandler)
    {
        $this->entityManager = $entityManager;
        $this->fileHandler = $fileHandler;
    }

    public function persistDevisCompany($logo, $directory, DevisCompany $devisCompany, User $agent, string $logoPopup)
    {
        if($logoPopup && $logoPopup != ""){
            $devisCompany->setCompanyLogo($logoPopup);
        }
        else if ($logo !== null) {
            $logoC_filename = $this->fileHandler->upload($logo, $directory);
            $devisCompany->setCompanyLogo($logoC_filename);
        }
    
        $totalHt = 0;

        /** @var DevisCompanyDetail $devisCompanyDetail */
        foreach ($devisCompany->getDevisCompanyDetail() as $devisCompanyDetail) {                
            $montantHt = $devisCompanyDetail->getQuantite() * $devisCompanyDetail->getPuVente();
            $totalHt = $totalHt + $montantHt;

            $devisCompanyDetail->setDevisCompany($devisCompany);
            $devisCompanyDetail->setMontantHt($montantHt);
            $devisCompanyDetail->setTotalTtc($montantHt + ($montantHt * 20));
            $devisCompanyDetail->setTva(20);
            $this->entityManager->persist($devisCompanyDetail);
        }
        
        $totalTVA = ($totalHt * 20)/100;
        $totalTTC = $totalHt + $totalTVA;

        $refSequence = "PX-F-".(new \DateTime())->format('Y-m-d');
        $devisCompany->setDevisRefSeq($refSequence);
        $devisCompany->setAgent($agent);

        $devisCompany->setDevisTotalHt($totalHt);
        $devisCompany->setDevisTotalTtc($totalTTC);

        
        return $devisCompany;
    }
}