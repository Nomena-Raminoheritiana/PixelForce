<?php

namespace App\Repository;

use App\Entity\CoachAgent;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\OptimisticLockException;
use Doctrine\ORM\ORMException;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\Security\Core\User\UserInterface;

/**
 * @method CoachAgent|null find($id, $lockMode = null, $lockVersion = null)
 * @method CoachAgent|null findOneBy(array $criteria, array $orderBy = null)
 * @method CoachAgent[]    findAll()
 * @method CoachAgent[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class CoachAgentRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, CoachAgent::class);
    }


    /**
     * @param $id
     * @return CoachAgent[]
     * @throws \Doctrine\ORM\NonUniqueResultException
     */
    public function findCoachOrAgent($id)
    {
        return $this->createQueryBuilder('c')
            ->where('c.coach = :id')
            ->orWhere('c.agent = :id')
            ->setParameter('id', $id)
            ->orderBy('c.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
            ;
    }

    public function getAgentByCoach(UserInterface $coach) {
        $coachAgents = $this->findBy(['coach' => $coach]);
        $agents = [];
        foreach($coachAgents as $coachAgent) {
            $agent = $coachAgent->getAgent();
            if($agent->getActive()){
                $agents[] = $agent;
            }
        }

        return $agents;
    }

    /**
     * @throws ORMException
     * @throws OptimisticLockException
     */
    public function add(CoachAgent $entity, bool $flush = true): void
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
    public function remove(CoachAgent $entity, bool $flush = true): void
    {
        $this->_em->remove($entity);
        if ($flush) {
            $this->_em->flush();
        }
    }

    // /**
    //  * @return CoachAgent[] Returns an array of CoachAgent objects
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
    public function findOneBySomeField($value): ?CoachAgent
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
