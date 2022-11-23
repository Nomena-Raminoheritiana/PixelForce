<?php

namespace App\Repository;

use App\Entity\ImplantationMereAroma;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<ImplantationMereAroma>
 *
 * @method ImplantationMereAroma|null find($id, $lockMode = null, $lockVersion = null)
 * @method ImplantationMereAroma|null findOneBy(array $criteria, array $orderBy = null)
 * @method ImplantationMereAroma[]    findAll()
 * @method ImplantationMereAroma[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ImplantationMereAromaRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ImplantationMereAroma::class);
    }

    public function add(ImplantationMereAroma $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(ImplantationMereAroma $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

//    /**
//     * @return ImplantationMereAroma[] Returns an array of ImplantationMereAroma objects
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

//    public function findOneBySomeField($value): ?ImplantationMereAroma
//    {
//        return $this->createQueryBuilder('i')
//            ->andWhere('i.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
