<?php

namespace App\Services;

use App\Entity\InventaireMere;
use App\Entity\KitBaseSecu;
use App\Entity\Mouvement;
use App\Entity\Produit;
use App\Entity\User;
use App\Repository\InventaireFilleRepository;
use App\Repository\KitBaseElmtSecuRepository;
use App\Repository\MouvementRepository;
use DateTime;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\EntityManagerInterface;
use Exception;

class KitBaseSecuService 
{
    private $entityManager;
    private $kitBaseElmtSecuRepository;

    public function __construct(EntityManagerInterface $entityManager, KitBaseElmtSecuRepository $kitBaseElmtSecuRepository)
    {
        $this->entityManager = $entityManager;
        $this->kitBaseElmtSecuRepository = $kitBaseElmtSecuRepository;
    }

    public function saveKitBase(User $user, KitBaseSecu $kitBase) {
        try{
            $isSave = $kitBase->getId() === null;
            $kitBase->setStatus(1);
            $kitBase->setSecteur($user->getUniqueCoachSecteur());
            $this->entityManager->persist($kitBase);
            
            if(!$isSave){
                $filles = $this->kitBaseElmtSecuRepository->findValidByMere($kitBase->getId());
                foreach($filles as $fille){
                    $fille->setStatus(0);
                    $this->entityManager->persist($fille);
                }
            }

            $length = 0;
            foreach($kitBase->getElmts() as $fille){
                $fille->setStatus(1);
                $fille->setKitBase($kitBase);
                $this->entityManager->persist($fille);
                $length++; 
            }
            if($isSave && $length == 0) throw new Exception("Aucun produit sélectionné");
            $this->entityManager->flush();
        } finally {
            $this->entityManager->clear();
        }
    }

    public function supprimerKitBase(KitBaseSecu $kitBase)
    {
        try{
            
            $kitBase->setStatus(0);
            $this->entityManager->persist($kitBase);
            foreach($kitBase->getElmts() as $fille){
               $fille->setStatus(0);
               $this->entityManager->persist($fille);
            }
            $this->entityManager->flush();
        } finally {
            $this->entityManager->clear();
        }
    }
}