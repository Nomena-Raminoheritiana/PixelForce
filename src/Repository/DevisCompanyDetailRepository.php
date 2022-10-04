<?php

namespace App\Repository;

use App\Entity\DevisCompanyDetail;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<DevisCompanyDetail>
 *
 * @method DevisCompanyDetail|null find($id, $lockMode = null, $lockVersion = null)
 * @method DevisCompanyDetail|null findOneBy(array $criteria, array $orderBy = null)
 * @method DevisCompanyDetail[]    findAll()
 * @method DevisCompanyDetail[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class DevisCompanyDetailRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, DevisCompanyDetail::class);
    }

    public function add(DevisCompanyDetail $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(DevisCompanyDetail $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

//    /**
//     * @return DevisCompanyDetail[] Returns an array of DevisCompanyDetail objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('d')
//            ->andWhere('d.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('d.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?DevisCompanyDetail
//    {
//        return $this->createQueryBuilder('d')
//            ->andWhere('d.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
