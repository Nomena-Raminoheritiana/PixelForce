<?php

namespace App\Repository;

use App\Entity\ProduitSecuAccomp;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<ProduitSecuAccomp>
 *
 * @method ProduitSecuAccomp|null find($id, $lockMode = null, $lockVersion = null)
 * @method ProduitSecuAccomp|null findOneBy(array $criteria, array $orderBy = null)
 * @method ProduitSecuAccomp[]    findAll()
 * @method ProduitSecuAccomp[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ProduitSecuAccompRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ProduitSecuAccomp::class);
    }

    public function add(ProduitSecuAccomp $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(ProduitSecuAccomp $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

//    /**
//     * @return ProduitSecuAccomp[] Returns an array of ProduitSecuAccomp objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('p')
//            ->andWhere('p.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('p.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?ProduitSecuAccomp
//    {
//        return $this->createQueryBuilder('p')
//            ->andWhere('p.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
