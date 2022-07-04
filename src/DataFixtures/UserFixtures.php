<?php

namespace App\DataFixtures;

use App\Entity\AgentSecteur;
use App\Entity\CoachSecteur;
use App\Entity\User;
use App\Repository\SecteurRepository;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class UserFixtures extends Fixture
{
    /**
     * @var \App\Manager\ObjectManager
     */
    private $objectManager;
    protected $secteurRepoSitory;

    public function __construct(\App\Manager\ObjectManager $objectManager, SecteurRepository $secteurRepoSitory)
    {
        $this->objectManager = $objectManager;
        $this->secteurRepoSitory = $secteurRepoSitory;
    }

    public function load(ObjectManager $manager): void
    {


        $this->objectManager->createObject(User::class, [
            'email' => 'admin@gmail.com',
            'roles' => [User::ROLE_ADMINISTRATEUR],
            'password' => 'adminadmin',
            'nom' => 'admin',
            'prenom' => 'admin',
            'dateNaissance' => new \DateTime()
        ]);

        $this->objectManager->createObject(User::class, [
            'email' => 'coach@gmail.com',
            'roles' => [User::ROLE_COACH],
            'password' => 'nomena',
            'nom' => 'Coach nom',
            'username' => 'coach',
            'prenom' => 'Coach prenom',
            'dateNaissance' => new \DateTime('03/08/1999'),
            'adresse' => 'lot IVE 192H Ambodimita'
        ]);



        // Création coach
        $secteurs = $this->secteurRepoSitory->findAll();
        foreach ($secteurs as $secteur) {
            $user = User::class;
            
            $user = $this->objectManager->createObject($user, [
                'email' => 'coach0'.$secteur->getId().'@gmail.com',
                'roles' => [User::ROLE_COACH],
                'password' => 'coach0'.$secteur->getId().'coach0'.$secteur->getId(),
                'username' => 'coach0'.$secteur->getId(),
                'nom' => 'coach0'.$secteur->getId(),
                'prenom' => 'coach0'.$secteur->getId(),
                'dateNaissance' => new \DateTime(),
                'adresse' => 'lot coach0'.$secteur->getId()
            ]);
            
            $this->objectManager->createObject(CoachSecteur::class, [
                'coach' => $user,
                'secteur' =>  $this->secteurRepoSitory->find($secteur->getId())
            ]);
        }




         // Création Agent
         $secteurs = $this->secteurRepoSitory->findAll();
         $secteurIds = [];
         foreach ($secteurs as $secteur) {
             $secteurIds[] = $secteur->getId();
         }
 
         for ($i=1; $i < 12; $i++) { 
             $user = User::class;
             $user = $this->objectManager->createObject($user, [
                 'email' => 'agent0'.$i.'@gmail.com',
                 'roles' => [User::ROLE_AGENT],
                 'password' => 'agent0'.$i.'agent0'.$i,
                 'nom' => 'agent0'.$i,
                 'prenom' => 'agent0'.$i,
                 'dateNaissance' => new \DateTime(),
                 'adresse' => 'lot agent0'.$i,
                 'active' => 1
             ]);
            
             $rand_key = array_rand($secteurIds, 1);           
             $this->objectManager->createObject(AgentSecteur::class, [
                 'agent' => $user,
                 'secteur' =>  $this->secteurRepoSitory->find($secteurIds[$rand_key])
             ]);
         }
    }
}
