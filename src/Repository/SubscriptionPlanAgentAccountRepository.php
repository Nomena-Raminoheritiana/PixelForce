<?php

namespace App\Repository;

use App\Entity\SubscriptionPlanAgentAccount;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<SubscriptionPlanAgentAccount>
 *
 * @method SubscriptionPlanAgentAccount|null find($id, $lockMode = null, $lockVersion = null)
 * @method SubscriptionPlanAgentAccount|null findOneBy(array $criteria, array $orderBy = null)
 * @method SubscriptionPlanAgentAccount[]    findAll()
 * @method SubscriptionPlanAgentAccount[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class SubscriptionPlanAgentAccountRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, SubscriptionPlanAgentAccount::class);
    }

    public function add(SubscriptionPlanAgentAccount $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(SubscriptionPlanAgentAccount $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

//    /**
//     * @return SubscriptionPlanAgentAccount[] Returns an array of SubscriptionPlanAgentAccount objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('s')
//            ->andWhere('s.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('s.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?SubscriptionPlanAgentAccount
//    {
//        return $this->createQueryBuilder('s')
//            ->andWhere('s.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
