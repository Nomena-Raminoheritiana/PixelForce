<?php

namespace App\Repository;

use App\Entity\OrderSecuAccomp;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<OrderSecuAccomp>
 *
 * @method OrderSecuAccomp|null find($id, $lockMode = null, $lockVersion = null)
 * @method OrderSecuAccomp|null findOneBy(array $criteria, array $orderBy = null)
 * @method OrderSecuAccomp[]    findAll()
 * @method OrderSecuAccomp[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class OrderSecuAccompRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, OrderSecuAccomp::class);
    }

    public function add(OrderSecuAccomp $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(OrderSecuAccomp $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

//    /**
//     * @return OrderSecuAccomp[] Returns an array of OrderSecuAccomp objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('o')
//            ->andWhere('o.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('o.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?OrderSecuAccomp
//    {
//        return $this->createQueryBuilder('o')
//            ->andWhere('o.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
