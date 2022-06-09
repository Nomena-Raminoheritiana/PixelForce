<?php

namespace App\Repository;

use App\Entity\CanalMessage;
use App\Entity\SearchEntity\UserSearch;
use App\Entity\User;
use DateInterval;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\OptimisticLockException;
use Doctrine\ORM\ORMException;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\Security\Core\Exception\UnsupportedUserException;
use Symfony\Component\Security\Core\User\PasswordAuthenticatedUserInterface;
use Symfony\Component\Security\Core\User\PasswordUpgraderInterface;

/**
 * @method User|null find($id, $lockMode = null, $lockVersion = null)
 * @method User|null findOneBy(array $criteria, array $orderBy = null)
 * @method User[]    findAll()
 * @method User[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UserRepository extends ServiceEntityRepository implements PasswordUpgraderInterface
{
    protected $repoCoachSecteur;
    protected $repoAgentSecteur;

    public function __construct(ManagerRegistry $registry, CoachSecteurRepository $repoCoachSecteur, AgentSecteurRepository $repoAgentSecteur)
    {
        parent::__construct($registry, User::class);
        $this->repoCoachSecteur = $repoCoachSecteur;
        $this->repoAgentSecteur = $repoAgentSecteur;
    }

    /**
     * @throws ORMException
     * @throws OptimisticLockException
     */
    public function add(User $entity, bool $flush = true): void
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
    public function remove(User $entity, bool $flush = true): void
    {
        $this->_em->remove($entity);
        if ($flush) {
            $this->_em->flush();
        }
    }

    /**
     * Used to upgrade (rehash) the user's password automatically over time.
     */
    public function upgradePassword(PasswordAuthenticatedUserInterface $user, string $newHashedPassword): void
    {
        if (!$user instanceof User) {
            throw new UnsupportedUserException(sprintf('Instances of "%s" are not supported.', \get_class($user)));
        }

        $user->setPassword($newHashedPassword);
        $this->_em->persist($user);
        $this->_em->flush();
    }

    public function findDestinaire($finder)
    {
        $arrayFinder = explode(' ', $finder);
        $queryBuilder = $this->createQueryBuilder('u');
        foreach($arrayFinder as $realFinder) {
            $queryBuilder->orWhere('u.nom LIKE :finder')
                    ->orWhere('u.prenom LIKE :finder')
                    ->orWhere('u.email LIKE :finder')
                    ->setParameter('finder', '%'.$realFinder.'%');
        }
       return $queryBuilder->getQuery()
            ->getResult();
    }

    public function getUserByCanal(CanalMessage $canal)
    {
        $query = $this->createQueryBuilder('a')
            ->select('a')
            ->leftJoin('a.canalMessages', 'c')
            ->addSelect('c');

        $query = $query->add('where', $query->expr()->in('c', ':c'))
            ->setParameter('c', $canal)
            ->getQuery()
            ->getResult();

        return $query;
    }


    /**
     * Permet de filtrer les utilisateurs par son role
     *
     * @param UserSearch $search
     * @param string $role (COACH | AGENT)
     */
    public function findCoachOrAgentQuery(UserSearch $search, string $role)
    {
        $query = $this->createQueryBuilder('u');

        $query = $query
            ->where('u.roles LIKE :role')
            ->setParameter('role', "%$role%");
        ;   

        if ($search->getPrenom()) {
            $query = $query
                ->andwhere('u.prenom LIKE :prenom')
                ->orwhere('u.nom LIKE :prenom')
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
        if ($search->getDateInscriptionMin()) {
            $query = $query
                ->andwhere('u.created_at >= :dateInscriptionMin')
                ->setParameter('dateInscriptionMin', $search->getDateInscriptionMin());
        }
        if ($search->getDateInscriptionMax()) {
            // On ajoute +1day, car la requête ne prend que la date en dessous de la date recherchée
            $search->getDateInscriptionMax()->add(new DateInterval('P1D'));

            $query = $query
                ->andwhere('u.created_at <= :dateInscriptionMax')
                ->setParameter('dateInscriptionMax', $search->getDateInscriptionMax());
        }
        if ($search->getSecteur()) {
            if ($role === User::ROLE_COACH) {
                $query = $query
                    ->join('u.coachSecteurs', 'cs')
                    ->join('cs.secteur', 's')
                    ->andwhere('s.nom LIKE :nomSecteur')
                    ->setParameter('nomSecteur', '%'.$search->getSecteur()->getNom().'%');
            }else if($role === User::ROLE_AGENT){
                $query = $query
                    ->join('u.agentSecteurs', 'aSec')
                    ->join('aSec.secteur', 'tre')
                    ->andwhere('tre.nom LIKE :nomSecteur')
                    ->setParameter('nomSecteur', '%'.$search->getSecteur()->getNom().'%')
                ;
            }
        }

        return $query->getQuery()
            ->getResult()
        ;
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
        $secteur = $this->repoCoachSecteur->findBy(['coach' => $coach]);
        $secteur = isset($secteur[0]) ? $secteur[0]->getSecteur() : null;

        $query = $this->createQueryBuilder('a');

        if ($search->getPrenom()) {
            $query = $query
                ->andwhere('a.prenom LIKE :prenom')
                ->orwhere('a.nom LIKE :prenom')
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
        if ($search->getDateInscriptionMin()) {
            $query = $query
                ->andwhere('a.created_at >= :dateInscriptionMin')
                ->setParameter('dateInscriptionMin', $search->getDateInscriptionMin());
        }
        if ($search->getDateInscriptionMax()) {
            // On ajoute +1day, car la requête ne prend que la date en dessous de la date recherchée
            $search->getDateInscriptionMax()->add(new DateInterval('P1D'));

            $query = $query
                ->andwhere('a.created_at <= :dateInscriptionMax')
                ->setParameter('dateInscriptionMax', $search->getDateInscriptionMax());
        }

        $query = $query
            ->join('a.agentSecteurs', 'aSec')
            ->andwhere('aSec.secteur = :secteur')
            ->setParameter('secteur', $secteur)
            ->orderBy('a.id', 'DESC')
        ;   

        return $query->getQuery()
            ->getResult()
        ;
    }

    // /**
    //  * @return User[] Returns an array of User objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('u')
            ->andWhere('u.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('u.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?User
    {
        return $this->createQueryBuilder('u')
            ->andWhere('u.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
