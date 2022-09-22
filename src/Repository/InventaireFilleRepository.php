<?php

namespace App\Repository;

use App\Entity\InventaireFille;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<InventaireFille>
 *
 * @method InventaireFille|null find($id, $lockMode = null, $lockVersion = null)
 * @method InventaireFille|null findOneBy(array $criteria, array $orderBy = null)
 * @method InventaireFille[]    findAll()
 * @method InventaireFille[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class InventaireFilleRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, InventaireFille::class);
    }

    public function add(InventaireFille $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(InventaireFille $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function findValidByMere($mereId)
   {
       $result = $this->createQueryBuilder('i')
           ->join('i.mere', 'm')
           ->where('m.id = :mereId and ( i.statut is NULL or i.statut != 0 ) ')
           ->setParameter('mereId', $mereId)
           ->getQuery()
           ->getResult()
       ;
       return new ArrayCollection($result);
   }

//    /**
//     * @return InventaireFille[] Returns an array of InventaireFille objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('i')
//            ->andWhere('i.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('i.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?InventaireFille
//    {
//        return $this->createQueryBuilder('i')
//            ->andWhere('i.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
