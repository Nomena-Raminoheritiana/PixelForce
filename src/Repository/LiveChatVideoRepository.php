<?php

namespace App\Repository;

use App\Entity\LiveChatVideo;
use App\Entity\User;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\OptimisticLockException;
use Doctrine\ORM\ORMException;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\Security\Core\User\UserInterface;

/**
 * @method LiveChatVideo|null find($id, $lockMode = null, $lockVersion = null)
 * @method LiveChatVideo|null findOneBy(array $criteria, array $orderBy = null)
 * @method LiveChatVideo[]    findAll()
 * @method LiveChatVideo[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class LiveChatVideoRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, LiveChatVideo::class);
    }

    public function queryFindByUser(UserInterface $user) {
       return $this->createQueryBuilder('l')
            ->where('l.userA = :user')
            ->orWhere('l.userB = :user')
            ->setParameter('user', $user->getId());
    }

    public function findByUserCode(UserInterface $user, $code) {
        return $this->queryFindByUser($user)
                ->andWhere('l.code = :code')
                ->setParameter('code', $code)
                ->getQuery()
                ->getResult();
    }

    public function findByUser(UserInterface $user)
    {
        return  $this->queryFindByUser($user)
                ->orderBy('l.dateDebutLive', 'ASC')
                ->getQuery()
                ->getResult();
    }

    public function groupByCode(UserInterface $user)
    {
        return $this->_em->getConnection()->prepare('select code, count(code) as nombreParticipant from live_chat_vide o where user_a_id=?')
            ->execute([$user->getId()])->fetchAll();
    }

    /**
     * @throws ORMException
     * @throws OptimisticLockException
     */
    public function add(LiveChatVideo $entity, bool $flush = true): void
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
    public function remove(LiveChatVideo $entity, bool $flush = true): void
    {
        $this->_em->remove($entity);
        if ($flush) {
            $this->_em->flush();
        }
    }

    // /**
    //  * @return LiveChatVideo[] Returns an array of LiveChatVideo objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('l')
            ->andWhere('l.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('l.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?LiveChatVideo
    {
        return $this->createQueryBuilder('l')
            ->andWhere('l.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
