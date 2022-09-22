<?php

namespace App\Repository;

use App\Entity\CategorieDD;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<CategorieDD>
 *
 * @method CategorieDD|null find($id, $lockMode = null, $lockVersion = null)
 * @method CategorieDD|null findOneBy(array $criteria, array $orderBy = null)
 * @method CategorieDD[]    findAll()
 * @method CategorieDD[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class CategorieDDRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, CategorieDD::class);
    }

    public function add(CategorieDD $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(CategorieDD $entity, bool $flush = false): void
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
//     * @return CategorieDD[] Returns an array of CategorieDD objects
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

//    public function findOneBySomeField($value): ?CategorieDD
//    {
//        return $this->createQueryBuilder('c')
//            ->andWhere('c.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
