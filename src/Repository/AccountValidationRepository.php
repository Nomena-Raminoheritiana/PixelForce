<?php

namespace App\Repository;

use App\Entity\AccountValidation;
use DateTime;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<AccountValidation>
 *
 * @method AccountValidation|null find($id, $lockMode = null, $lockVersion = null)
 * @method AccountValidation|null findOneBy(array $criteria, array $orderBy = null)
 * @method AccountValidation[]    findAll()
 * @method AccountValidation[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class AccountValidationRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, AccountValidation::class);
    }

    public function add(AccountValidation $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(AccountValidation $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function getValidAccountValidation($mail, $verifCode): ?AccountValidation
    {
        return $this->createQueryBuilder('a')
           ->andWhere('a.status = 1')
           ->andWhere('a.mail = :mail')
           ->andWhere('a.verifCode = :verifCode')
           ->andWhere('a.dateExpiration > :dateNow')
           ->setParameter('mail', $mail)
           ->setParameter('verifCode', sha1($verifCode))
           ->setParameter('dateNow', new DateTime())
           ->getQuery()
           ->getOneOrNullResult()
       ;
    }

//    /**
//     * @return AccountValidation[] Returns an array of AccountValidation objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('a')
//            ->andWhere('a.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('a.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?AccountValidation
//    {
//        return $this->createQueryBuilder('a')
//            ->andWhere('a.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
