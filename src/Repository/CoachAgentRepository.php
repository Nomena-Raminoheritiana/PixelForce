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
    protected $repoCoachSecteur;
    protected $repoUserSecteur;

    public function __construct(ManagerRegistry $registry, CoachSecteurRepository $repoCoachSecteur, UserSecteurRepository $repoUserSecteur)
    {
        parent::__construct($registry, CoachAgent::class);
        $this->repoCoachSecteur = $repoCoachSecteur;
        $this->repoUserSecteur = $repoUserSecteur;
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

        // (2) => On véririe le role de l'utilisateur, et supprime ensuite les relations correspondantes (coach_secteur ou user_secteur)
        if ($user->getRoles()[0] === User::ROLE_COACH) {
            $coachSecteurs = $this->repoCoachSecteur->findBy(['coach' => $user]);
            foreach ($coachSecteurs as $coachSecteur) {
                $this->repoCoachSecteur->remove($coachSecteur);
            }
        }else if($user->getRoles()[0] === User::ROLE_AGENT) {
            $agentSecteurs = $this->repoUserSecteur->findBy(['user' => $user]);
            foreach ($agentSecteurs as $agentSecteur) {
                $this->repoUserSecteur->remove($agentSecteur);
            }
        }

        // (3) => Et enfin on supprime l'utilisateur en question
        $entityManager->delete($user);
    }




        /**
     * Permet de filtrer tous les agents du coach
     *
     * @param UserSearch $search
     * @param string $role
     * @return array
     */
    public function findAgentByCoach(UserSearch $search, $coach)
    {
        $secteur = $this->repoCoachSecteur->findBy(['coach' => $coach])[0]->getSecteur();
        $agentSecteurs = $this->repoUserSecteur->findBy(['secteur' => $secteur]);
        $results = [];
        
        $query = $this->createQueryBuilder('ca');

        $query = $query
            ->where('ca.coach = :coach')
            ->setParameter('coach', $coach)
            ->join('ca.agent', 'a')
        ;   

        if ($search->getPrenom()) {
            $query = $query
                ->andwhere('a.prenom LIKE :prenom')
                ->setParameter('prenom', '%'.$search->getPrenom().'%');
        }
        if ($search->getEmail()) {
            $query = $query
                ->andwhere('a.email LIKE :email')
                ->setParameter('email', '%'.$search->getEmail().'%');
        }
        if ($search->getTelephone()) {
            $query = $query
                ->andwhere('a.telephone LIKE :telephone')
                ->setParameter('telephone', '%'.$search->getTelephone().'%');
        }

        $coachAgents = $query->getQuery()->getResult();
        
        // On stock push les utilisateurs (Agent), dans le tableau $results
        foreach ($coachAgents as $coachAgent) {
            $results[] = $coachAgent->getAgent();
        }
        foreach ($agentSecteurs as $agentSecteur) {
            $results[] = $agentSecteur->getUser();
        }        
        $results = array_unique($results, SORT_REGULAR);
        return $results;
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
