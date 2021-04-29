<?php

namespace App\Repository;

use App\Entity\Beta;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Beta|null find($id, $lockMode = null, $lockVersion = null)
 * @method Beta|null findOneBy(array $criteria, array $orderBy = null)
 * @method Beta[]    findAll()
 * @method Beta[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class BetaRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Beta::class);
    }

    // /**
    //  * @return Beta[] Returns an array of Beta objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('b')
            ->andWhere('b.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('b.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Beta
    {
        return $this->createQueryBuilder('b')
            ->andWhere('b.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
