<?php

namespace App\Entity;

use App\Repository\BasketItemAromaRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=BasketItemAromaRepository::class)
 */
class BasketItemAroma
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity=ImplantationAroma::class)
     * @ORM\JoinColumn(nullable=false)
     */
    private $implantation;

    /**
     * @ORM\Column(type="integer")
     */
    private $quantity;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $agentId;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $secteurId;

    public function __construct(ImplantationAroma $implantation, int $quantity){
        $this->implantation = $implantation;
        $this->quantity = $quantity;
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getImplantation(): ?ImplantationAroma
    {
        return $this->implantation;
    }

    public function setImplantation(?ImplantationAroma $implantation): self
    {
        $this->implantation = $implantation;

        return $this;
    }

    public function getQuantity(): ?int
    {
        return $this->quantity;
    }

    public function setQuantity(int $quantity): self
    {
        $this->quantity = $quantity;

        return $this;
    }

    public function getAgentId(): ?int
    {
        return $this->agentId;
    }

    public function setAgentId(?int $agentId): self
    {
        $this->agentId = $agentId;

        return $this;
    }

    public function getSecteurId(): ?int
    {
        return $this->secteurId;
    }

    public function setSecteurId(?int $secteurId): self
    {
        $this->secteurId = $secteurId;

        return $this;
    }

    public static function getGroupKeyStatic($agentId, $secteurId){
        return $agentId."-".$secteurId;
    }

    public function getGroupKey(){
        return BasketItemAroma::getGroupKeyStatic($this->getAgentId(), $this->getSecteurId());
    }

    public function jsonSerialize()
    {
        $vars = get_object_vars($this);
        return $vars;
    }

    public function getCost()
    {
        return $this->getImplantation()->getAllTotal()->getTotal() * $this->getQuantity();
    }
}
