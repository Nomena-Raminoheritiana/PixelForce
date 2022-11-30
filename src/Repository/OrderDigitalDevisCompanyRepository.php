<?php

namespace App\Repository;

use App\Entity\OrderDigitalDevisCompany;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<OrderDigitalDevisCompany>
 *
 * @method OrderDigitalDevisCompany|null find($id, $lockMode = null, $lockVersion = null)
 * @method OrderDigitalDevisCompany|null findOneBy(array $criteria, array $orderBy = null)
 * @method OrderDigitalDevisCompany[]    findAll()
 * @method OrderDigitalDevisCompany[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class OrderDigitalDevisCompanyRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, OrderDigitalDevisCompany::class);
    }

    public function add(OrderDigitalDevisCompany $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(OrderDigitalDevisCompany $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

//    /**
//     * @return OrderDigitalDevisCompany[] Returns an array of OrderDigitalDevisCompany objects
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

//    public function findOneBySomeField($value): ?OrderDigitalDevisCompany
//    {
//        return $this->createQueryBuilder('o')
//            ->andWhere('o.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
