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

    public function countLiveToDelete(UserInterface $user)
    {
        return count($this->queryFindByUser($user)
                    ->select('count(l.id) as nombreActeurs')
                    ->andWhere('l.isInProcess=1')
                    ->groupBy('l.code')
                    ->getQuery()
                    ->getResult());
    }

    public function countLivePerimee(UserInterface $user)
    {
        return count($this->queryFindByUser($user)
                    ->select('count(l.id) as nombreLivePerimee')
                    ->andWhere('l.dateDebutLive < :now')
                    ->setParameter('now', new \DateTime())
                    ->groupBy('l.code')
                    ->getQuery()
                    ->getResult());

    }

    public function countLiveEnCours(UserInterface $user)
    {
        return count($this->createQueryBuilder('l')
            ->select('count(l.id) as nombreLiveEnCours')
            ->andWhere('l.isInProcess = 1')
            ->andWhere('l.userA != :user')
            ->andWhere('l.userB != :user')
            ->setParameter('user', $user->getId())
            ->groupBy('l.code')
            ->getQuery()
            ->getResult());
    }

    public function groupByCode(UserInterface $user, $options = [])
    {
        $a_supprimer='';
        $perimee='';
        $user_b_id='';
        $user_a_id='';
        if(isset($options['a_supprimer']) && $options['a_supprimer']) {
            $a_supprimer = 'and is_in_process=1';
        }
        if(isset($options['perimee']) && $options['perimee']) {
            $perimee = 'and date_debut_live <= NOW()';
        }

        if(isset($options['user_b_id']) && $options['user_b_id']) {
            $user_b_id = 'and user_b_id ='.$options['user_b_id'];
        }

        if(isset($options['user_a_id']) && $options['user_a_id']) {
            $user_a_id = 'and user_a_id ='.$options['user_a_id'];
        }
        $table = $this->getClassMetadata()->table["name"];
        return $this->_em->getConnection()->prepare('SELECT id,code,is_in_process,is_speed_live, DATE_FORMAT(date_debut_live, "%Y-%m-%dT%H:%i:%s") as date_debut_live,description,theme, code,count(id) as total, GROUP_CONCAT(DISTINCT (user_a_id)) as userA, GROUP_CONCAT(DISTINCT (user_b_id)) as userB FROM `'.$table.'` where code IN (select code from `live_chat_video` where user_a_id=? or user_b_id=? )'.' '.$user_a_id.' '.$user_b_id.' '.$a_supprimer.' '.$perimee.' group by code order by date_debut_live')
            ->execute([$user->getId(), $user->getId()])->fetchAll();
    }
    public function findByCoach(User $coach)
    {
        return $this->createQueryBuilder('l')
            ->select('l as live, GROUP_CONCAT(IDENTITY(l.userB)) as agents')
            ->andWhere('l.userA=:coach')
            ->andWhere('l.isSpeedLive is null')
            ->setParameter('coach', $coach)
            ->groupBy('l.code')
            ->getQuery()
            ->getResult();
    }

    public function countParticipants(LiveChatVideo $liveChatVideo) {
        $code = $liveChatVideo->getCode();
        return $this->createQueryBuilder('l')
            ->select('count(l.id) as nombreParticipants')
            ->where('l.code = :code')
            ->setParameter('code', $code)
            ->getQuery()
            ->getSingleResult();
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
