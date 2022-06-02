<?php


namespace App\Services;

use App\Entity\AgentSecteur;

class AgentSecteurService
{
    
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
}