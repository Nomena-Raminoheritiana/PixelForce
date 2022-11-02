<?php

namespace App\Repository;

use App\Entity\TypeInstallationSecu;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<TypeInstallationSecu>
 *
 * @method TypeInstallationSecu|null find($id, $lockMode = null, $lockVersion = null)
 * @method TypeInstallationSecu|null findOneBy(array $criteria, array $orderBy = null)
 * @method TypeInstallationSecu[]    findAll()
 * @method TypeInstallationSecu[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class TypeInstallationSecuRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, TypeInstallationSecu::class);
    }

    public function add(TypeInstallationSecu $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(TypeInstallationSecu $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

//    /**
//     * @return TypeInstallationSecu[] Returns an array of TypeInstallationSecu objects
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

//    public function findOneBySomeField($value): ?TypeInstallationSecu
//    {
//        return $this->createQueryBuilder('t')
//            ->andWhere('t.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
