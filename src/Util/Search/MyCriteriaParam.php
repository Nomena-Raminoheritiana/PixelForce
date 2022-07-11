<?php 
namespace App\Util\Search;

use Symfony\Component\Form\Extension\Core\Type\FormType;

class MyCriteriaParam {
    private $criteria;
    private $defaultAlias; 
    private $sep;

    public function __construct(array $criteria, string $defaultAlias = null, string $sep = null)
    {
        $this->criteria = $criteria;
        $this->defaultAlias = $defaultAlias;
        $this->sep = $sep;
    }

    /**
     * Get the value of criteria
     */ 
    public function getCriteria(): ?array
    {
        return $this->criteria;
    }

    /**
     * Set the value of criteria
     *
     * @return  self
     */ 
    public function setCriteria($criteria)
    {
        $this->criteria = $criteria;

        return $this;
    }

    /**
     * Get the value of defaultAlias
     */ 
    public function getDefaultAlias(): ?string 
    {
        return $this->defaultAlias;
    }

    /**
     * Set the value of defaultAlias
     *
     * @return  self
     */ 
    public function setDefaultAlias($defaultAlias)
    {
        $this->defaultAlias = $defaultAlias;

        return $this;
    }

    /**
     * Get the value of sep
     */ 
    public function getSep(): ?string
    {
        return $this->sep;
    }

    /**
     * Set the value of sep
     *
     * @return  self
     */ 
    public function setSep($sep): self
    {
        $this->sep = $sep;

        return $this;
    }

    
}