<?php

namespace App\Repository;

use App\Entity\CanalMessage;
use App\Entity\User;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\OptimisticLockException;
use Doctrine\ORM\ORMException;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method CanalMessage|null find($id, $lockMode = null, $lockVersion = null)
 * @method CanalMessage|null findOneBy(array $criteria, array $orderBy = null)
 * @method CanalMessage[]    findAll()
 * @method CanalMessage[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class CanalMessageRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, CanalMessage::class);
    }

    /**
     * @throws ORMException
     * @throws OptimisticLockException
     */
    public function add(CanalMessage $entity, bool $flush = true): void
    {
        $this->_em->persist($entity);
        if ($flush) {
            $this->_em->flush();
        }
    }

    /**
     * @throws ORMException
     * @throws OptimisticLockException
     */
    public function remove(CanalMessage $entity, bool $flush = true): void
    {
        $this->_em->remove($entity);
        if ($flush) {
            $this->_em->flush();
        }
    }

    public function getSingleCanal(User $user)
    {
        $query = $this->createQueryBuilder('a')
            ->select('a')
            ->leftJoin('a.users', 'c')
            ->addSelect('c');

        $query = $query->add('where', $query->expr()->in('c', ':c'))
            ->setParameter('c', $user)
            ->andWhere('a.isGroup=0')
            ->orderBy('a.updatedAt', 'DESC')
            ->getQuery()
            ->getResult();

        return $query;
    }

    public function getGroupsCanal(User $user)
    {
        $query = $this->createQueryBuilder('a')
            ->select('a')
            ->leftJoin('a.users', 'c')
            ->addSelect('c');

        $query = $query->add('where', $query->expr()->in('c', ':c'))
            ->setParameter('c', $user)
            ->andWhere('a.isGroup=1')
            ->orderBy('a.updatedAt', 'DESC')
            ->getQuery()
            ->getResult();

        return $query;
    }

    // /**
    //  * @return CanalMessage[] Returns an array of CanalMessage objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('c.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?CanalMessage
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
