<?php

namespace App\Repository;

use App\Entity\KitBaseElmtSecu;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<KitBaseElmtSecu>
 *
 * @method KitBaseElmtSecu|null find($id, $lockMode = null, $lockVersion = null)
 * @method KitBaseElmtSecu|null findOneBy(array $criteria, array $orderBy = null)
 * @method KitBaseElmtSecu[]    findAll()
 * @method KitBaseElmtSecu[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class KitBaseElmtSecuRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, KitBaseElmtSecu::class);
    }

    public function add(KitBaseElmtSecu $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(KitBaseElmtSecu $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

//    /**
//     * @return KitBaseElmtSecu[] Returns an array of KitBaseElmtSecu objects
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

//    public function findOneBySomeField($value): ?KitBaseElmtSecu
//    {
//        return $this->createQueryBuilder('k')
//            ->andWhere('k.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
