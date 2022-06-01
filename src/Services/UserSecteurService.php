<?php


namespace App\Services;

use App\Entity\UserSecteur;

class UserSecteurService
{
    
    public function isNewSectorInArray($newSector, $myAllUserSecteurs)
    {
        $arrayUserSector = [];

        /** @var UserSecteur $userSecteur */
        foreach ($myAllUserSecteurs as $userSecteur) {
            $arrayUserSector[] = $userSecteur->getSecteur();
        }

        if (in_array($newSector, $arrayUserSector)) {
            return true;
        }
        return false;
    }
}