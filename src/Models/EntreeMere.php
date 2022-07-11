<?php

namespace App\Models;

use App\Entity\Mouvement;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;

class EntreeMere
{
    private $entrees;

    public function __construct()
    {
        $this->entrees = new ArrayCollection();
    }

    
    /**
     * @return Collection<int, Mouvement>
     */
    public function getEntrees(): Collection
    {
        return $this->entrees;
    }

    
    public function addEntree(Mouvement $entree): self
    {
        if (!$this->entrees->contains($entree)) {
            $this->entrees[] = $entree;
        }
        return $this;
    }

    public function initEntrees(int $count){
        for($i=0; $i<$count; $i++){
            $mouv = new Mouvement();
            $mouv->setCheck(1);
            $this->addEntree($mouv);
        }
    }
}
