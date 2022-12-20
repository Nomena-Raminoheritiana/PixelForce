<?php


namespace App\Services;

use App\Entity\Secteur;
use App\Repository\ConfigSecteurRepository;

class ConfigSecteurService
{
    const CONFIG_NUM_TVA = 1;
    protected $configSecteurRepository;

    public function __construct(ConfigSecteurRepository $configSecteurRepository)
    {
        $this->configSecteurRepository = $configSecteurRepository;
    }

    public function findTva(?Secteur $secteur = null){
        $config = $this->configSecteurRepository->findConfigByNum(ConfigSecteurService::CONFIG_NUM_TVA, $secteur);
        return $config ? ($config->getVal() ? $config->getVal() : 0) : 0;
    }
}