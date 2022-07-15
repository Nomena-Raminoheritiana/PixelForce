<?php

namespace App\Repository;

use App\Entity\MeetingEvent;
use App\Entity\SearchEntity\MeetingEventSearch;
use App\Entity\User;
use DateInterval;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<MeetingEvent>
 *
 * @method MeetingEvent|null find($id, $lockMode = null, $lockVersion = null)
 * @method MeetingEvent|null findOneBy(array $criteria, array $orderBy = null)
 * @method MeetingEvent[]    findAll()
 * @method MeetingEvent[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class MeetingEventRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, MeetingEvent::class);
    }

    public function add(MeetingEvent $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(MeetingEvent $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }


//    /**
//     * @return MeetingEvent[] Returns an array of MeetingEvent objects
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

//    public function findOneBySomeField($value): ?MeetingEvent
//    {
//        return $this->createQueryBuilder('p')
//            ->andWhere('p.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
