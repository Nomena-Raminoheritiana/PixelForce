<?php

namespace App\Repository;

use App\Entity\CodePromoSecu;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<CodePromoSecu>
 *
 * @method CodePromoSecu|null find($id, $lockMode = null, $lockVersion = null)
 * @method CodePromoSecu|null findOneBy(array $criteria, array $orderBy = null)
 * @method CodePromoSecu[]    findAll()
 * @method CodePromoSecu[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class CodePromoSecuRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, CodePromoSecu::class);
    }

    public function add(CodePromoSecu $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(CodePromoSecu $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function findValid(string $code, int $secteurId): ?CodePromoSecu
    {
        return $this->createQueryBuilder('c')
            ->join('c.secteur', 's')
           ->where('c.code = :code and s.id = :secteurId and c.statut != 0')
           ->setParameter('code', $code)
           ->setParameter('secteurId', $secteurId)
           ->getQuery()
           ->getOneOrNullResult()
       ;
    }

//    /**
//     * @return CodePromoSecu[] Returns an array of CodePromoSecu objects
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

//    public function findOneBySomeField($value): ?CodePromoSecu
//    {
//        return $this->createQueryBuilder('c')
//            ->andWhere('c.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
