<?php

namespace App\Repository;

use App\Entity\CategorieFormationAgent;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<CategorieFormationAgent>
 *
 * @method CategorieFormationAgent|null find($id, $lockMode = null, $lockVersion = null)
 * @method CategorieFormationAgent|null findOneBy(array $criteria, array $orderBy = null)
 * @method CategorieFormationAgent[]    findAll()
 * @method CategorieFormationAgent[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class CategorieFormationAgentRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, CategorieFormationAgent::class);
    }

    public function add(CategorieFormationAgent $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(CategorieFormationAgent $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

//    /**
//     * @return CategorieFormationAgent[] Returns an array of CategorieFormationAgent objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('c')
//            ->andWhere('c.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('c.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?CategorieFormationAgent
//    {
//        return $this->createQueryBuilder('c')
//            ->andWhere('c.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
