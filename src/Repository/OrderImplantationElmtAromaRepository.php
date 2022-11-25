<?php

namespace App\Repository;

use App\Entity\OrderImplantationElmtAroma;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<OrderImplantationElmtAroma>
 *
 * @method OrderImplantationElmtAroma|null find($id, $lockMode = null, $lockVersion = null)
 * @method OrderImplantationElmtAroma|null findOneBy(array $criteria, array $orderBy = null)
 * @method OrderImplantationElmtAroma[]    findAll()
 * @method OrderImplantationElmtAroma[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class OrderImplantationElmtAromaRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, OrderImplantationElmtAroma::class);
    }

    public function add(OrderImplantationElmtAroma $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(OrderImplantationElmtAroma $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

//    /**
//     * @return OrderImplantationElmtAroma[] Returns an array of OrderImplantationElmtAroma objects
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

//    public function findOneBySomeField($value): ?OrderImplantationElmtAroma
//    {
//        return $this->createQueryBuilder('o')
//            ->andWhere('o.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
