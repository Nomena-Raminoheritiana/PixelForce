<?php

namespace App\Repository;

use App\Entity\ProduitFavori;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<ProduitFavori>
 *
 * @method ProduitFavori|null find($id, $lockMode = null, $lockVersion = null)
 * @method ProduitFavori|null findOneBy(array $criteria, array $orderBy = null)
 * @method ProduitFavori[]    findAll()
 * @method ProduitFavori[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ProduitFavoriRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ProduitFavori::class);
    }

    public function add(ProduitFavori $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(ProduitFavori $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

   
   public function findProduitFavori($produitId, $clientId): ?ProduitFavori
   {
       return $this->createQueryBuilder('pf')
           ->where(' (pf.statut != 0 or pf.statut is NULL) and (p.statut != 0 or p.statut is NULL) and c.id = :clientId and p.id = :produitId')
           ->join('pf.produit', 'p')
           ->join('pf.client', 'c')
           ->setParameter('clientId', $clientId)
           ->setParameter('produitId', $produitId)
           ->getQuery()
           ->getOneOrNullResult()
       ;
   }

//    /**
//     * @return ProduitFavori[] Returns an array of ProduitFavori objects
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

//    public function findOneBySomeField($value): ?ProduitFavori
//    {
//        return $this->createQueryBuilder('p')
//            ->andWhere('p.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
