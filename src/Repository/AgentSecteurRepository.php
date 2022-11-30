<?php

namespace App\Repository;

use App\Entity\AgentSecteur;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\OptimisticLockException;
use Doctrine\ORM\ORMException;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method AgentSecteur|null find($id, $lockMode = null, $lockVersion = null)
 * @method AgentSecteur|null findOneBy(array $criteria, array $orderBy = null)
 * @method AgentSecteur[]    findAll()
 * @method AgentSecteur[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class AgentSecteurRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, AgentSecteur::class);
    }

    /**
     * @throws ORMException
     * @throws OptimisticLockException
     */
    public function add(AgentSecteur $entity, bool $flush = true): void
    {
        $this->_em->persist($entity);
        if ($flush) {
            $this->_em->flush();
        }
    }

    /**
     * @throws ORMException
     * @throws OptimisticLockException
     */
    public function remove(AgentSecteur $entity, bool $flush = true): void
    {
        $this->_em->remove($entity);
        if ($flush) {
            $this->_em->flush();
        }
    }

    public function findValidByAgent($agentId)
    {
        return $this->createQueryBuilder('a')
            ->join('a.agent', 'ag')
            ->andWhere('ag.id = :agentId')
            ->andWhere('a.statut = true')
            ->setParameter('agentId', $agentId)
            ->getQuery()
            ->getResult()
        ;
    }

    // /**
    //  * @return AgentSecteur[] Returns an array of AgentSecteur objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('a')
            ->andWhere('a.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('a.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?AgentSecteur
    {
        return $this->createQueryBuilder('a')
            ->andWhere('a.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
