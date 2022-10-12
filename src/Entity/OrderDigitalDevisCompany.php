<?php

namespace App\Entity;

use App\Repository\OrderDigitalDevisCompanyRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=OrderDigitalDevisCompanyRepository::class)
 */
class OrderDigitalDevisCompany
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="float")
     */
    private $total_amount_ht;

    /**
     * @ORM\Column(type="float")
     */
    private $total_amount_ttc;

    /**
     * @ORM\Column(type="integer")
     */
    private $payment_condition;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $client_name;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $client_mail;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $client_phone;

    /**
     * @ORM\Column(type="datetime")
     */
    private $createdAt;

    /**
     * @ORM\Column(type="array", nullable=true)
     */
    private $stripeData = [];

    /**
     * @ORM\OneToOne(targetEntity=DevisCompany::class, inversedBy="orderDigitalDevisCompany", cascade={"persist", "remove"})
     * @ORM\JoinColumn(nullable=false)
     */
    private $devisCompany;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $stripeChargeId;

    public function __construct()
    {
        $this->createdAt = new \Datetime();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTotalAmountHt(): ?float
    {
        return $this->total_amount_ht;
    }

    public function setTotalAmountHt(float $total_amount_ht): self
    {
        $this->total_amount_ht = $total_amount_ht;

        return $this;
    }

    public function getTotalAmountTtc(): ?float
    {
        return $this->total_amount_ttc;
    }

    public function setTotalAmountTtc(float $total_amount_ttc): self
    {
        $this->total_amount_ttc = $total_amount_ttc;

        return $this;
    }

    public function getPaymentCondition(): ?int
    {
        return $this->payment_condition;
    }

    public function setPaymentCondition(int $payment_condition): self
    {
        $this->payment_condition = $payment_condition;

        return $this;
    }

    public function getClientName(): ?string
    {
        return $this->client_name;
    }

    public function setClientName(string $client_name): self
    {
        $this->client_name = $client_name;

        return $this;
    }

    public function getClientMail(): ?string
    {
        return $this->client_mail;
    }

    public function setClientMail(string $client_mail): self
    {
        $this->client_mail = $client_mail;

        return $this;
    }

    public function getClientPhone(): ?string
    {
        return $this->client_phone;
    }

    public function setClientPhone(string $client_phone): self
    {
        $this->client_phone = $client_phone;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeInterface
    {
        return $this->createdAt;
    }

    public function setCreatedAt(\DateTimeInterface $createdAt): self
    {
        $this->createdAt = $createdAt;

        return $this;
    }

    public function getStripeData(): ?array
    {
        return $this->stripeData;
    }

    public function setStripeData(?array $stripeData): self
    {
        $this->stripeData = $stripeData;

        return $this;
    }

    public function getDevisCompany(): ?DevisCompany
    {
        return $this->devisCompany;
    }

    public function setDevisCompany(DevisCompany $devisCompany): self
    {
        $this->devisCompany = $devisCompany;

        return $this;
    }

    public function getStripeChargeId(): ?string
    {
        return $this->stripeChargeId;
    }

    public function setStripeChargeId(string $stripeChargeId): self
    {
        $this->stripeChargeId = $stripeChargeId;

        return $this;
    }
}
