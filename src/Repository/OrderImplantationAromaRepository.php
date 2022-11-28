<?php

namespace App\Repository;

use App\Entity\OrderAroma;
use App\Entity\OrderImplantationAroma;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<OrderImplantationAroma>
 *
 * @method OrderImplantationAroma|null find($id, $lockMode = null, $lockVersion = null)
 * @method OrderImplantationAroma|null findOneBy(array $criteria, array $orderBy = null)
 * @method OrderImplantationAroma[]    findAll()
 * @method OrderImplantationAroma[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class OrderImplantationAromaRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, OrderImplantationAroma::class);
    }

    public function add(OrderImplantationAroma $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(OrderImplantationAroma $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function findSameParent($userId, $implantationMereId){
        return $this->createQueryBuilder('o')
            ->join('o.orderParent', 'op')
            ->join('o.implantation', 'i')
           ->andWhere('op.status = :statusValid')
           ->andWhere('op.user = :userId')
           ->andWhere('i.mere = :mereId')
           ->setParameter('statusValid', OrderAroma::VALIDATED)
           ->setParameter('userId', $userId)
           ->setParameter('mereId', $implantationMereId)
           ->getQuery()
           ->getResult()
       ;
    }

//    /**
//     * @return OrderImplantationAroma[] Returns an array of OrderImplantationAroma objects
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

//    public function findOneBySomeField($value): ?OrderImplantationAroma
//    {
//        return $this->createQueryBuilder('o')
//            ->andWhere('o.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
