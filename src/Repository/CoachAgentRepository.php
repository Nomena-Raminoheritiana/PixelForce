<?php

namespace App\Repository;

use App\Entity\CoachAgent;
use App\Entity\SearchEntity\UserSearch;
use App\Entity\User;
use App\Manager\EntityManager;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\OptimisticLockException;
use Doctrine\ORM\ORMException;
use Doctrine\ORM\Query;
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


    // findRelationCoachWithAgent

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

    /**
     * Permet de supprimer un coach ou un agent
     *
     * NB: On doit suivre cette procédure pour eviter l'erreur de "Violation de relation"
     */
    public function removeCoachOrAgent(User $user, EntityManager $entityManager)
    {
        // (1) => On supprime d'abord toutes les relations entre coach et agent
        $coachAgents = $this->findCoachOrAgent($user->getId());
        foreach ($coachAgents as $coachAgent) {
            $this->remove($coachAgent);
        }
        
        // (2) => Et ensuit on supprime l'utilisateur en question
        $entityManager->delete($user);
    }




        /**
     * Permet de filtrer tous les agents du coach
     *
     * @param UserSearch $search
     * @param string $role
     * @return Query
     */
    public function findAgentByCoach(UserSearch $search, $coach)
    {
        $query = $this->createQueryBuilder('c');

        $query = $query
            ->where('c.coach = :coach')
            ->setParameter('coach', $coach)
            ->join('c.agent', 'u')
        ;   

        if ($search->getPrenom()) {
            $query = $query
                ->andwhere('u.prenom LIKE :prenom')
                ->setParameter('prenom', '%'.$search->getPrenom().'%');
        }
        if ($search->getEmail()) {
            $query = $query
                ->andwhere('u.email LIKE :email')
                ->setParameter('email', '%'.$search->getEmail().'%');
        }
        if ($search->getTelephone()) {
            $query = $query
                ->andwhere('u.telephone LIKE :telephone')
                ->setParameter('telephone', '%'.$search->getTelephone().'%');
        }

        return $query->getQuery()
            ->getResult()
        ;
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
