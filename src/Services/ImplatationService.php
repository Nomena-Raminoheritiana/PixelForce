<?php

namespace App\Services;

use App\Entity\ImplantationAroma;
use App\Entity\ImplantationMereAroma;
use App\Repository\ImplantationElmtAromaRepository;
use App\Util\Status;
use Doctrine\ORM\EntityManagerInterface;
use Exception;

class ImplatationService 
{
    private $entityManager;
    private $implantationElmtAromaRepository;

    public function __construct(EntityManagerInterface $entityManager, ImplantationElmtAromaRepository $implantationElmtAromaRepository)
    {
        $this->entityManager = $entityManager;
        $this->implantationElmtAromaRepository = $implantationElmtAromaRepository;
    }

    
    public function saveImplantation(ImplantationAroma $mere) {
        try{
            $this->entityManager->beginTransaction();
            $isSave = $mere->getId() === null;
            
            $superMere = $mere->getMere();
            if($isSave && !$superMere){
                $superMere = new ImplantationMereAroma();
                $superMere->setStatut(Status::VALID);
            }
            $superMere->addFille($mere);
            $this->entityManager->persist($superMere);

            $mere->setStatut(Status::VALID);
            $this->entityManager->persist($mere);
            
            if(!$isSave){
                $filles = $this->implantationElmtAromaRepository->findValidByMere($mere->getId());
                foreach($filles as $fille){
                    $fille->setStatut(0);
                    $this->entityManager->persist($fille);
                }
            }

            $length = 0;
            foreach($mere->getFilles() as $fille){
                $fille->setStatut(Status::VALID);
                $fille->setMere($mere);
                $this->entityManager->persist($fille);
                $length++; 
            }
            if($isSave && $length == 0) throw new Exception("Aucun détail sélectionné");
            $this->entityManager->flush();
            $this->entityManager->commit();
        } catch(\Exception $ex){
            if($this->entityManager->getConnection()->isTransactionActive()) {
                $this->entityManager->rollback();
            }
            throw $ex;
        } finally {
            $this->entityManager->clear();
        }
    }

    

    public function supprimerImplantation(ImplantationAroma $mere)
    {
        try{
            $this->entityManager->beginTransaction();
            $mere->setStatut(0);
            $this->entityManager->persist($mere);
            foreach($mere->getFilles() as $fille){
               $fille->setStatut(0);
               $this->entityManager->persist($fille);
            }
            $this->entityManager->flush();
            $this->entityManager->commit();
        } catch(\Exception $ex){
            if($this->entityManager->getConnection()->isTransactionActive()) {
                $this->entityManager->rollback();
            }
            throw $ex;
        } finally {
            $this->entityManager->clear();
        }
    }

    
}