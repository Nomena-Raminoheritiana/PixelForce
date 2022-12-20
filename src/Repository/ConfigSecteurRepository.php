<?php

namespace App\Repository;

use App\Entity\ConfigSecteur;
use App\Entity\Secteur;
use App\Util\Status;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<ConfigSecteur>
 *
 * @method ConfigSecteur|null find($id, $lockMode = null, $lockVersion = null)
 * @method ConfigSecteur|null findOneBy(array $criteria, array $orderBy = null)
 * @method ConfigSecteur[]    findAll()
 * @method ConfigSecteur[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ConfigSecteurRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ConfigSecteur::class);
    }

    public function add(ConfigSecteur $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(ConfigSecteur $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function findConfigByNum($num, ?Secteur $secteur = null, $nbr=1): ?ConfigSecteur
    {
        $secteurId = -1;
        $typeSecteurId = -1;
        if($secteur){
            $secteurId = $secteur->getId();
            $typeSecteurId = $secteur->getType()->getId();
        }
        $result = $this->createQueryBuilder('c')
            ->where('c.num = :num and c.statut = :statutValid and (c.secteur = :secteurId or c.secteur is NULL) and (c.typeSecteur = :typeSecteurId or c.typeSecteur is NULL) ')
            ->setParameter('num', $num)
            ->setParameter('statutValid', Status::VALID)
            ->setParameter('secteurId', $secteurId)
            ->setParameter('typeSecteurId', $typeSecteurId)
            ->addOrderBy('c.secteur', 'desc')
            ->addOrderBy('c.typeSecteur', 'desc')
            ->setMaxResults($nbr)
            ->getQuery()
            ->getResult()
        ;
        if($nbr > 1){
            return $result;
        }
        return count($result) > 0 ? $result[0] : null; 
        
    }

//    /**
//     * @return ConfigSecteur[] Returns an array of ConfigSecteur objects
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

//    public function findOneBySomeField($value): ?ConfigSecteur
//    {
//        return $this->createQueryBuilder('c')
//            ->andWhere('c.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
