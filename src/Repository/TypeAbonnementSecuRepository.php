<?php

namespace App\Repository;

use App\Entity\TypeAbonnementSecu;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<TypeAbonnementSecu>
 *
 * @method TypeAbonnementSecu|null find($id, $lockMode = null, $lockVersion = null)
 * @method TypeAbonnementSecu|null findOneBy(array $criteria, array $orderBy = null)
 * @method TypeAbonnementSecu[]    findAll()
 * @method TypeAbonnementSecu[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class TypeAbonnementSecuRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, TypeAbonnementSecu::class);
    }

    public function add(TypeAbonnementSecu $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(TypeAbonnementSecu $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

//    /**
//     * @return TypeAbonnementSecu[] Returns an array of TypeAbonnementSecu objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('t')
//            ->andWhere('t.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('t.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?TypeAbonnementSecu
//    {
//        return $this->createQueryBuilder('t')
//            ->andWhere('t.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
