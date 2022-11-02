<?php

namespace App\Repository;

use App\Entity\KitBaseSecu;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<KitBaseSecu>
 *
 * @method KitBaseSecu|null find($id, $lockMode = null, $lockVersion = null)
 * @method KitBaseSecu|null findOneBy(array $criteria, array $orderBy = null)
 * @method KitBaseSecu[]    findAll()
 * @method KitBaseSecu[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class KitBaseSecuRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, KitBaseSecu::class);
    }

    public function add(KitBaseSecu $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(KitBaseSecu $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

//    /**
//     * @return KitBaseSecu[] Returns an array of KitBaseSecu objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('k')
//            ->andWhere('k.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('k.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?KitBaseSecu
//    {
//        return $this->createQueryBuilder('k')
//            ->andWhere('k.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
