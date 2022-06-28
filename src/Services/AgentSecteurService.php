<?php


namespace App\Services;

use App\Entity\AgentSecteur;

class AgentSecteurService
{
    
    /**
     * Permet de savoir si un secteur est déjà attribué à un agent
     * @return boolean
     */
    public function isNewSectorInArray($newSector, $myAllAgentSecteurs)
    {
        $arrayAgentSector = [];

        /** @var AgentSecteur $agentSecteur */
        foreach ($myAllAgentSecteurs as $agentSecteur) {
            $arrayAgentSector[] = $agentSecteur->getSecteur();
        }

        if (in_array($newSector, $arrayAgentSector)) {
            return true;
        }
        return false;
    }

    /**
     * Permet de récupérer tous les secteurs d'un agent
     *
     * @param array $agentSecteurs
     * @return array
     */
    public function getSecteurs(array $agentSecteurs)
    {
        $secteurs = [];
        /** @var AgentSecteur @agentSecteur */
        foreach ($agentSecteurs as $agentSecteur) {
            $secteurs[] = $agentSecteur->getSecteur();
        }

        return $secteurs;
    }


    // public function primaryIfSecteurIsActive(AgentSecteur $agentSecteur)
    // {
    //     if ($agentSecteur and $agentSecteur->getStatut() === true) {
    //         return 'primary';
    //     }
    //     return 'warning';
    // }
}