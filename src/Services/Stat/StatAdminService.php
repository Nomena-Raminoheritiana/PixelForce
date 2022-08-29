<?php
namespace App\Services\Stat;

use App\Entity\TypeSecteur;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\ORM\Query\ResultSetMapping;
use Exception;
class StatAdminService
{
    private $entityManager;

    public function __construct(EntityManagerInterface $entityManager)
    {
        $this->entityManager = $entityManager;
    }

    public function getStatVente(){
        $conn = $this->entityManager->getConnection();
        $sql = 'SELECT * FROM stat_vente_admin';
        $stmt = $conn->prepare($sql);
        $resultSet = $stmt->executeQuery();
        $result = (array)$resultSet->fetchAllAssociative();
        if(count($result) == 0) return null;
        return $result[0];
    }

    public function getNbrCoachs(){
        $conn = $this->entityManager->getConnection();

        $sql = '
            SELECT count(id) as nbr FROM active_coach 
            ';
        $stmt = $conn->prepare($sql);
        $resultSet = $stmt->executeQuery();
        $result = $resultSet->fetchNumeric();
        return $result[0];
    }

    public function getNbrAgents(){
        $conn = $this->entityManager->getConnection();

        $sql = '
            SELECT count(id) as nbr FROM active_agent 
            ';
        $stmt = $conn->prepare($sql);
        $resultSet = $stmt->executeQuery();
        $result = $resultSet->fetchNumeric();
        return $result[0];
    }

    public function getNbrSecteurs(){
        $conn = $this->entityManager->getConnection();

        $sql = '
            SELECT count(id) as nbr FROM secteur_active 
            ';
        $stmt = $conn->prepare($sql);
        $resultSet = $stmt->executeQuery();
        $result = $resultSet->fetchNumeric();
        return $result[0];
    }
}