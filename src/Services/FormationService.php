<?php


namespace App\Services;


use App\Entity\Formation;
use App\Entity\FormationAgent;
use App\Entity\Secteur;
use App\Entity\User;
use App\Manager\EntityManager;
use App\Manager\ObjectManager;
use App\Repository\AgentSecteurRepository;

class FormationService
{
    /**
     * @var ObjectManager
     */
    private $objectManager;
    /**
     * @var EntityManager
     */
    private $entityManager;

    public function __construct(ObjectManager $objectManager, EntityManager $entityManager)
    {
        $this->objectManager = $objectManager;
        $this->entityManager = $entityManager;
    }

    public function affecterAgent(Formation $formation, User $agent, $onlyPersist = false)
    {
       return $this->objectManager->createObject(FormationAgent::class, [
            'agent' => $agent,
            'formation' => $formation,
            'statut' => $formation->getDebloqueAgent() ? Formation::STATUT_DISPONIBLE : Formation::STATUT_BLOQUEE,
        ], false, [], $onlyPersist);
    }

    public function affecterToutAgent(Formation $formation, Secteur $secteur)
    {
        $agents = $secteur->getAgents();
        foreach($agents as $agent) {
            $this->affecterAgent($formation, $agent, true);
        }
        $this->entityManager->flush();
    }

    public function affecterToutFormation(User $agent, Secteur $secteur)
    {
        $formations = $secteur->getFormations();
        foreach($formations as $formation) {
            $this->affecterAgent($formation, $agent, true);
        }
        $this->entityManager->flush();
    }

    public function deleteMedia()
    {

    }
}