<?php

namespace App\Repository;

use App\Entity\VideoFormation;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\OptimisticLockException;
use Doctrine\ORM\ORMException;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\Security\Core\User\UserInterface;

/**
 * @method VideoFormation|null find($id, $lockMode = null, $lockVersion = null)
 * @method VideoFormation|null findOneBy(array $criteria, array $orderBy = null)
 * @method VideoFormation[]    findAll()
 * @method VideoFormation[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class VideoFormationRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, VideoFormation::class);
    }

    /**
     * @throws ORMException
     * @throws OptimisticLockException
     */
    public function add(VideoFormation $entity, bool $flush = true): void
    {
        $this->_em->persist($entity);
        if ($flush) {
            $this->_em->flush();
        }
    }

    public function getQueryByUser(UserInterface $user)
    {
        return $this->createQueryBuilder('v')
                    ->andWhere('v.user=:user')
                    ->setParameter('user', $user)
                    ->getQuery();
    }

    /**
     * @throws ORMException
     * @throws OptimisticLockException
     */
    public function remove(VideoFormation $entity, bool $flush = true): void
    {
        $this->_em->remove($entity);
        if ($flush) {
            $this->_em->flush();
        }
    }

    // /**
    //  * @return VideoFormation[] Returns an array of VideoFormation objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('v')
            ->andWhere('v.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('v.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?VideoFormation
    {
        return $this->createQueryBuilder('v')
            ->andWhere('v.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
