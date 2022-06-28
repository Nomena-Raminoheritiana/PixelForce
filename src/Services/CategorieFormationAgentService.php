<?php

namespace App\Services;

use App\Entity\CategorieFormation;
use App\Entity\CategorieFormationAgent;
use App\Entity\Secteur;
use App\Entity\User;
use App\Repository\CategorieFormationAgentRepository;
use App\Repository\CategorieFormationRepository;
use App\Repository\FormationRepository;

class CategorieFormationAgentService
{
    protected $repoCategorieFormationAgent;
    protected $repoCategorieFomation;
    protected $repoFormation;

    public function __construct(CategorieFormationAgentRepository $repoCategorieFormationAgent, CategorieFormationRepository $repoCategorieFomation, FormationRepository $repoFormation)
    {
        $this->repoCategorieFormationAgent = $repoCategorieFormationAgent;
        $this->repoCategorieFomation = $repoCategorieFomation;
        $this->repoFormation = $repoFormation;
    }

    /**
     * Permet de vérifier si la catégorie est déjà existée
     *
     * @return boolean
     */
    public function isCategoryAlreadyExisting ($agentCategories, $categorie)
    {
        $categories = [];
        /** @var CategorieFormationAgent $agentCategorie*/
        foreach ($agentCategories as $agentCategorie) {
            $categories[] = $agentCategorie->getCategorieFormation();
        }

        if (in_array($categorie, $categories)) {
            return true;
        }else{
            return false;
        }
    }

    /**
     * Permet d'obtenir toutes les catégories de l'agents
     *
     */
    public function getAllAgentCategories(User $agent)
    {
        $allCategorieAgent = $this->repoCategorieFormationAgent->findBy(['agent' => $agent]);
        return $allCategorieAgent;
    }

    /**
     * Permet de récupérer toutes les catégories de l'agent
     */
    public function getCategories($agent)
    {
        $categories = [];
        $agentCategories = $this->getAllAgentCategories($agent);

        /** @var CategorieFormationAgent $agentCategorie */
        foreach ($agentCategories as $agentCategorie) {
            $categories[] = $agentCategorie->getCategorieFormation();
        }
        
        return $categories;
    }

    /**
     * Permet de capturer la catégorie de formation à traiter pour un agent 
     * (Pour afficher les formations dans le dashboard)
     *
     * @param [type] $agent
     * @param [type] $secteur
     */
    public function getCurrentAgentCategorie(User $agent, Secteur $secteur)
    {
        if (count($this->getCategories($agent)) > 0) {
            $categories = $this->getCategories($agent);
            /** @var CategorieFormation $oldCategory */
            $oldCategory = end($categories);
            $formations = $this->repoFormation->findFormationsAgentBySecteurAndCategorie($secteur, $agent, $oldCategory, true);

            // Lorsque il n'y a plus de formations dans l'ancien catégorie, on traite la catégorie suivante
            if (empty($formations)) {
                $currentCategory = $this->repoCategorieFomation->getNextCategory($oldCategory->getId());
            }else{
                $categorieFormationAgent = $this->repoCategorieFormationAgent->findBy(['agent' => $agent], ['id'=>'DESC'],1,0);
                $currentCategory = $categorieFormationAgent[0]->getCategorieFormation();
            }
        }else{
            $currentCategory = $this->repoCategorieFomation->findAll()[0];
        }
      
        return $currentCategory;
    }
}