<?php

namespace App\Repository;

use App\Entity\RFormationCategorie;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<RFormationCategorie>
 *
 * @method RFormationCategorie|null find($id, $lockMode = null, $lockVersion = null)
 * @method RFormationCategorie|null findOneBy(array $criteria, array $orderBy = null)
 * @method RFormationCategorie[]    findAll()
 * @method RFormationCategorie[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class RFormationCategorieRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, RFormationCategorie::class);
    }

    public function add(RFormationCategorie $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(RFormationCategorie $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

//    /**
//     * @return RFormationCategorie[] Returns an array of RFormationCategorie objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('r')
//            ->andWhere('r.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('r.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?RFormationCategorie
//    {
//        return $this->createQueryBuilder('r')
//            ->andWhere('r.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
