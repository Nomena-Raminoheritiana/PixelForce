<?php

namespace App\Services;

use App\Entity\InventaireMere;
use App\Entity\Mouvement;
use App\Entity\Produit;
use App\Entity\User;
use App\Repository\InventaireFilleRepository;
use App\Repository\MouvementRepository;
use DateTime;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\EntityManagerInterface;
use Exception;

class StockService 
{
    private $entityManager;
    private $mouvementRepository;
    private $inventaireFilleRepository;

    public function __construct(EntityManagerInterface $entityManager, MouvementRepository $mouvementRepository, InventaireFilleRepository $inventaireFilleRepository)
    {
        $this->entityManager = $entityManager;
        $this->mouvementRepository = $mouvementRepository;
        $this->inventaireFilleRepository = $inventaireFilleRepository;
    }

    public function saveEntrees(ArrayCollection $entrees) {
        try{
            
            $length = 0;
            $dateMouvement = new DateTime();
            foreach($entrees as $entree){
                //if(!$entree->getRealCheck()) continue;
                $entree->setDateMouvement($dateMouvement);
                $entree->setSortie(0);
                $entree->setStatut(1);
                $this->entityManager->persist($entree);
                $length++; 
            }
            if($length == 0) throw new Exception("Aucun mouvement sélectionné");
            $this->entityManager->flush();
        } finally {
            $this->entityManager->clear();
        }
    }

    public function saveIntenvaire(User $user, InventaireMere $inventaire) {
        try{
            $isSave = $inventaire->getId() === null;
            $inventaire->setStatut(1);
            $inventaire->setSecteur($user->getUniqueCoachSecteur());
            $this->entityManager->persist($inventaire);
            
            if(!$isSave){
                $filles = $this->inventaireFilleRepository->findValidByMere($inventaire->getId());
                foreach($filles as $fille){
                    $fille->setStatut(0);
                    $this->entityManager->persist($fille);
                }
            }

            $length = 0;
            foreach($inventaire->getInventaireFilles() as $fille){
                //if(!$fille->getRealCheck()) continue;
                $fille->setStatut(1);
                $fille->setMere($inventaire);
                $this->entityManager->persist($fille);
                $length++; 
            }
            if($isSave && $length == 0) throw new Exception("Aucun détail sélectionné");
            $this->entityManager->flush();
        } finally {
            $this->entityManager->clear();
        }
    }

    public function faireSortie(Produit $produit, float $qte, $date = null): ?Mouvement
    {
        if(!$date) $date = new DateTime();
        $produit->checkQty($qte);
        $mouv = new Mouvement();
        $mouv->setDateMouvement($date);
        $mouv->setProduit($produit);
        $mouv->setSortie($qte);
        $mouv->setEntree(0);
        $mouv->setStatut(1);
        $this->entityManager->persist($mouv);
        return $mouv;
    }

    public function supprimerInventaire(InventaireMere $inventaire)
    {
        try{
            
            $inventaire->setStatut(0);
            $this->entityManager->persist($inventaire);
            foreach($inventaire->getInventaireFilles() as $fille){
               $fille->setStatut(0);
               $this->entityManager->persist($fille);
            }
            $this->entityManager->flush();
        } finally {
            $this->entityManager->clear();
        }
    }
}