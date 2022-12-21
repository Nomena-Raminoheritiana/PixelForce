<?php

namespace App\Repository;

use App\Entity\ViewImplantationMereAromaTotalFull;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<ViewImplantationMereAromaTotalFull>
 *
 * @method ViewImplantationMereAromaTotalFull|null find($id, $lockMode = null, $lockVersion = null)
 * @method ViewImplantationMereAromaTotalFull|null findOneBy(array $criteria, array $orderBy = null)
 * @method ViewImplantationMereAromaTotalFull[]    findAll()
 * @method ViewImplantationMereAromaTotalFull[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ViewImplantationMereAromaTotalFullRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ViewImplantationMereAromaTotalFull::class);
    }

    public function add(ViewImplantationMereAromaTotalFull $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(ViewImplantationMereAromaTotalFull $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

//    /**
//     * @return ViewImplantationMereAromaTotalFull[] Returns an array of ViewImplantationMereAromaTotalFull objects
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

//    public function findOneBySomeField($value): ?ViewImplantationMereAromaTotalFull
//    {
//        return $this->createQueryBuilder('v')
//            ->andWhere('v.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
