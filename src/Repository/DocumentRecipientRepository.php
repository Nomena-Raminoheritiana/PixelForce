<?php

namespace App\Repository;

use App\Entity\DocumentRecipient;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<DocumentRecipient>
 *
 * @method DocumentRecipient|null find($id, $lockMode = null, $lockVersion = null)
 * @method DocumentRecipient|null findOneBy(array $criteria, array $orderBy = null)
 * @method DocumentRecipient[]    findAll()
 * @method DocumentRecipient[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class DocumentRecipientRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, DocumentRecipient::class);
    }

    public function add(DocumentRecipient $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(DocumentRecipient $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function findRecipientByToken($token): ?DocumentRecipient
    {
        $result = $this->createQueryBuilder('r')
            ->where('( r.statut != 0 ) and lower(sha1(r.id)) = lower(:token)')
            ->setParameter('token', $token)
            ->getQuery()
            ->getOneOrNullResult()
        ;
        return $result;
                
    }

    public function findValidByDocument($documentId)
    {
        $result = $this->createQueryBuilder('r')
            ->join('r.document', 'd')
            ->where('( r.statut != 0 ) and d.id = :documentId')
            ->setParameter('documentId', $documentId)
            ->getQuery()
            ->getResult()
        ;
        return $result;
                
    }

//    /**
//     * @return DocumentRecipient[] Returns an array of DocumentRecipient objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('d')
//            ->andWhere('d.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('d.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?DocumentRecipient
//    {
//        return $this->createQueryBuilder('d')
//            ->andWhere('d.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
