<?php

namespace App\Repository;

use App\Entity\ProduitSecuFavori;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<ProduitSecuFavori>
 *
 * @method ProduitSecuFavori|null find($id, $lockMode = null, $lockVersion = null)
 * @method ProduitSecuFavori|null findOneBy(array $criteria, array $orderBy = null)
 * @method ProduitSecuFavori[]    findAll()
 * @method ProduitSecuFavori[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ProduitSecuFavoriRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ProduitSecuFavori::class);
    }

    public function add(ProduitSecuFavori $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(ProduitSecuFavori $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function findProduitFavori($produitId, $clientId): ?ProduitSecuFavori
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
//     * @return ProduitSecuFavori[] Returns an array of ProduitSecuFavori objects
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

//    public function findOneBySomeField($value): ?ProduitSecuFavori
//    {
//        return $this->createQueryBuilder('p')
//            ->andWhere('p.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
