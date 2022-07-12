<?php

namespace App\Repository;

use App\Entity\Meeting;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Meeting>
 *
 * @method Meeting|null find($id, $lockMode = null, $lockVersion = null)
 * @method Meeting|null findOneBy(array $criteria, array $orderBy = null)
 * @method Meeting[]    findAll()
 * @method Meeting[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class MeetingRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Meeting::class);
    }

    public function add(Meeting $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(Meeting $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function getSearchQuery($meeting, $options = null){
        $qb = $this->createQueryBuilder('p');
        $parameters = [];
        if($meeting->getTitle()!=null) {
            $qb->andWhere('LOWER(p.title) LIKE LOWER(:title)');
            $parameters['title'] = '%'.$meeting->getTitle(). '%';
        }
        if($meeting->getStart()!=null) {
            $qb->andWhere('p.start >= :start');
            $parameters['start'] = $meeting->getStart();
        }
        if($meeting->getEnd()!=null) {
            $qb->andWhere('p.end <= :end');
            $parameters['end'] = $meeting->getEnd();
        }
        if($meeting->getMeetingState()!=null) {
            $qb->andWhere('p.meetingState = :meetingState');
            $parameters['meetingState'] = $meeting->getMeetingState();
        }
        if($meeting->getUser()!=null && $meeting->getUserToMeet()!=null) {
            $qb->andWhere('p.user = :user or p.userToMeet = :userToMeet');
            $parameters['user'] = $meeting->getUser();
            $parameters['userToMeet'] = $meeting->getUserToMeet();
        }
        if($options != null){
            if($options['orderBy']!=null && $options['order']!=null) {
                $qb->orderBy('p.'.$options['orderBy'], $options['order']);
            } 
        }

        $qb->setParameters($parameters);
        return $qb->getQuery();

    }

//    /**
//     * @return Meeting[] Returns an array of Meeting objects
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

//    public function findOneBySomeField($value): ?Meeting
//    {
//        return $this->createQueryBuilder('p')
//            ->andWhere('p.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
