<?php

namespace App\Repository;

use App\Entity\CategorieSecu;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<CategorieSecu>
 *
 * @method CategorieSecu|null find($id, $lockMode = null, $lockVersion = null)
 * @method CategorieSecu|null findOneBy(array $criteria, array $orderBy = null)
 * @method CategorieSecu[]    findAll()
 * @method CategorieSecu[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class CategorieSecuRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, CategorieSecu::class);
    }

    public function add(CategorieSecu $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(CategorieSecu $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function getFindAllQuery(){
        return $this->createQueryBuilder('c')->getQuery();
    }

    public function getValidCategories() {
        return $this->createQueryBuilder('c')
            ->andWhere('c.statut != 0')
            ->getQuery()
            ->getResult(); 
    }
//    /**
//     * @return CategorieSecu[] Returns an array of CategorieSecu objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('c')
//            ->andWhere('c.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('c.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?CategorieSecu
//    {
//        return $this->createQueryBuilder('c')
//            ->andWhere('c.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
