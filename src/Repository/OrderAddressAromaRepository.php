<?php

namespace App\Repository;

use App\Entity\OrderAddressAroma;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<OrderAddressAroma>
 *
 * @method OrderAddressAroma|null find($id, $lockMode = null, $lockVersion = null)
 * @method OrderAddressAroma|null findOneBy(array $criteria, array $orderBy = null)
 * @method OrderAddressAroma[]    findAll()
 * @method OrderAddressAroma[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class OrderAddressAromaRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, OrderAddressAroma::class);
    }

    public function add(OrderAddressAroma $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(OrderAddressAroma $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

//    /**
//     * @return OrderAddressAroma[] Returns an array of OrderAddressAroma objects
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

//    public function findOneBySomeField($value): ?OrderAddressAroma
//    {
//        return $this->createQueryBuilder('o')
//            ->andWhere('o.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
