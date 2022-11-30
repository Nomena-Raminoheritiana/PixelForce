<?php

namespace App\Repository;

use App\Entity\CalendarEvent;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<CalendarEvent>
 *
 * @method CalendarEvent|null find($id, $lockMode = null, $lockVersion = null)
 * @method CalendarEvent|null findOneBy(array $criteria, array $orderBy = null)
 * @method CalendarEvent[]    findAll()
 * @method CalendarEvent[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class CalendarEventRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, CalendarEvent::class);
    }

    public function add(CalendarEvent $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(CalendarEvent $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }
   /**
    * @return CalendarEvent[] Returns an array of CalendarEvent objects
    */
   public function findUpcomingEvents($user): array
   {
       return $this->createQueryBuilder('c')
            -> andWhere('c.user = :user')
           ->andWhere('c.start >= current_date()')
           ->andWhere('MONTH(c.start) = MONTH(current_date())')
           ->andWhere('DAY(c.start) != DAY(current_date())')
           ->setParameter('user', $user)
           ->orderBy('c.start', 'ASC')
           ->getQuery()
           ->getResult()
       ;
   }

   /**
    * @return CalendarEvent[] Returns an array of CalendarEvent objects
    */
    public function findEventsOfTheDay($user): array
    {
        return $this->createQueryBuilder('c')
             -> andWhere('c.user = :user')
            ->andWhere('MONTH(c.start) = MONTH(current_date())')
            ->andWhere('DAY(c.start) = DAY(current_date())')
            ->andWhere('YEAR(c.start) = YEAR(current_date())')
            ->setParameter('user', $user)
            ->orderBy('c.start', 'ASC')
            ->getQuery()
            ->getResult()
        ;
    }
//    /**
//     * @return CalendarEvent[] Returns an array of CalendarEvent objects
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

//    public function findOneBySomeField($value): ?CalendarEvent
//    {
//        return $this->createQueryBuilder('c')
//            ->andWhere('c.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
