<?php

namespace App\Repository;

use App\Entity\ViewImplantationAromaTotalFull;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<ViewImplantationAromaTotalFull>
 *
 * @method ViewImplantationAromaTotalFull|null find($id, $lockMode = null, $lockVersion = null)
 * @method ViewImplantationAromaTotalFull|null findOneBy(array $criteria, array $orderBy = null)
 * @method ViewImplantationAromaTotalFull[]    findAll()
 * @method ViewImplantationAromaTotalFull[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ViewImplantationAromaTotalFullRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ViewImplantationAromaTotalFull::class);
    }

    public function add(ViewImplantationAromaTotalFull $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(ViewImplantationAromaTotalFull $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

//    /**
//     * @return ViewImplantationAromaTotalFull[] Returns an array of ViewImplantationAromaTotalFull objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('v')
//            ->andWhere('v.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('v.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?ViewImplantationAromaTotalFull
//    {
//        return $this->createQueryBuilder('v')
//            ->andWhere('v.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
