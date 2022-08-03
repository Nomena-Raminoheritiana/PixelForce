<?php

namespace App\Entity;

use App\Repository\PlanAgentAccountRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=PlanAgentAccountRepository::class)
 */
class PlanAgentAccount
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=50)
     */
    private $stipeProductId;

    /**
     * @ORM\Column(type="string", length=50)
     */
    private $stripePriceId;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $stripePriceName;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $description;

    /**
     * @ORM\Column(type="float")
     */
    private $amount;

    /**
     * @ORM\Column(type="string", length=50)
     */
    private $priceIntervalUnit;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $status;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getStipeProductId(): ?string
    {
        return $this->stipeProductId;
    }

    public function setStipeProductId(string $stipeProductId): self
    {
        $this->stipeProductId = $stipeProductId;

        return $this;
    }

    public function getStripePriceId(): ?string
    {
        return $this->stripePriceId;
    }

    public function setStripePriceId(string $stripePriceId): self
    {
        $this->stripePriceId = $stripePriceId;

        return $this;
    }

    public function getStripePriceName(): ?string
    {
        return $this->stripePriceName;
    }

    public function setStripePriceName(string $stripePriceName): self
    {
        $this->stripePriceName = $stripePriceName;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getAmount(): ?float
    {
        return $this->amount;
    }

    public function setAmount(float $amount): self
    {
        $this->amount = $amount;

        return $this;
    }

    public function getPriceIntervalUnit(): ?string
    {
        return $this->priceIntervalUnit;
    }

    public function setPriceIntervalUnit(string $priceIntervalUnit): self
    {
        $this->priceIntervalUnit = $priceIntervalUnit;

        return $this;
    }

    public function getStatus(): ?string
    {
        return $this->status;
    }

    public function setStatus(string $status): self
    {
        $this->status = $status;

        return $this;
    }
}
