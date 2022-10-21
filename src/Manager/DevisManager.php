<?php


namespace App\Manager;

use App\Entity\DevisCompany;
use App\Entity\DevisCompanyDetail;
use App\Entity\User;
use App\Services\FileHandler;
use Symfony\Component\HttpFoundation\File\UploadedFile;

class DevisManager
{
    private $entityManager;
    private $fileHandler;

    public function __construct(EntityManager $entityManager, FileHandler $fileHandler)
    {
        $this->entityManager = $entityManager;
        $this->fileHandler = $fileHandler;
    }

    public function persistDevisCompany($logo, $directory, DevisCompany $devisCompany, User $agent, string $logoPopup, $filesDirAbsolute, $iteration_payment)
    {
        if($logoPopup && $logoPopup != ""){
            $src = $this->fileHandler->encode_img_base64($filesDirAbsolute.$logoPopup);
            $devisCompany->setCompany_logo_encode_img_base64($src);
            $devisCompany->setCompanyLogo($logoPopup);
        }
        else if ($logo !== null) {
            $logoC_filename = $this->fileHandler->upload($logo, $directory);
            $src = $this->fileHandler->encode_img_base64($filesDirAbsolute.$logoC_filename);
            $devisCompany->setCompany_logo_encode_img_base64($src);
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

            $uploadedFIle = $devisCompanyDetail->getFileImage();
            if (!is_null($uploadedFIle)) {
                $image_filename = $this->fileHandler->upload($devisCompanyDetail->getFileImage(), $directory);
                $devisCompanyDetail->setImage($image_filename);

                $src = $this->fileHandler->encode_img_base64($filesDirAbsolute.$image_filename);
                $devisCompanyDetail->setImage_encode_img_base64($src);

            }
            $this->entityManager->persist($devisCompanyDetail);
        }
        
        $totalTVA = ($totalHt * 20)/100;
        $totalTTC = $totalHt + $totalTVA;

        $refSequence = "PX-F-".(new \DateTime())->format('Y-m-d');
        $devisCompany->setDevisRefSeq($refSequence);
        $devisCompany->setAgent($agent);
        $devisCompany->setIterationPayment($iteration_payment);

        $devisCompany->setDevisTotalHt($totalHt);
        $devisCompany->setDevisTotalTtc($totalTTC);

        
        return $devisCompany;
    }
}