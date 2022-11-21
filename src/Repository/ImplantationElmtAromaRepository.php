<?php

namespace App\Repository;

use App\Entity\ImplantationElmtAroma;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<ImplantationElmtAroma>
 *
 * @method ImplantationElmtAroma|null find($id, $lockMode = null, $lockVersion = null)
 * @method ImplantationElmtAroma|null findOneBy(array $criteria, array $orderBy = null)
 * @method ImplantationElmtAroma[]    findAll()
 * @method ImplantationElmtAroma[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ImplantationElmtAromaRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ImplantationElmtAroma::class);
    }

    public function add(ImplantationElmtAroma $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(ImplantationElmtAroma $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

//    /**
//     * @return ImplantationElmtAroma[] Returns an array of ImplantationElmtAroma objects
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

//    public function findOneBySomeField($value): ?ImplantationElmtAroma
//    {
//        return $this->createQueryBuilder('i')
//            ->andWhere('i.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
