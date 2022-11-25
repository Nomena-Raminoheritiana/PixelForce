<?php

namespace App\Entity;

use App\Repository\OrderAromaRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=OrderAromaRepository::class)
 */
class OrderAroma
{
    public const CREATED = 1;
    public const VALIDATED = 2;
    public const REFUSED = 0;

    public const STATUS = [
        OrderAroma::CREATED => "Créée", 
        OrderAroma::VALIDATED => "Validée",
        OrderAroma::REFUSED => "Refusée"
    ];

    public const STATUS_DATA_FORM = [
        "Créée" => OrderAroma::CREATED, 
        "Validée" => OrderAroma::VALIDATED,
        "Refusée" => OrderAroma::REFUSED
    ];

    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity=User::class)
     * @ORM\JoinColumn(nullable=false)
     */
    private $user;

    /**
     * @ORM\Column(type="integer")
     */
    private $status;

    /**
     * @ORM\ManyToOne(targetEntity=User::class)
     * @ORM\JoinColumn(nullable=false)
     */
    private $agent;

    /**
     * @ORM\ManyToOne(targetEntity=Secteur::class)
     * @ORM\JoinColumn(nullable=false)
     */
    private $secteur;

    /**
     * @ORM\Column(type="datetime")
     */
    private $orderDate;

    /**
     * @ORM\Column(type="decimal", precision=12, scale=2)
     */
    private $amount;

    /**
     * @ORM\ManyToOne(targetEntity=OrderAddressAroma::class)
     * @ORM\JoinColumn(nullable=false)
     */
    private $address;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $note;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $chargeId;

    /**
     * @ORM\OneToMany(targetEntity=OrderImplantationAroma::class, mappedBy="orderParent")
     */
    private $orderImplantations;

    /**
     * @ORM\Column(type="decimal", precision=5, scale=2, nullable=true)
     */
    private $tva;

    /**
     * @ORM\Column(type="decimal", precision=12, scale=2, nullable=true)
     */
    private $montantTtc;

    public function __construct()
    {
        $this->orderImplantations = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(?User $user): self
    {
        $this->user = $user;

        return $this;
    }

    public function getStatus(): ?int
    {
        return $this->status;
    }

    public function setStatus(int $status): self
    {
        $this->status = $status;

        return $this;
    }

    public function getAgent(): ?User
    {
        return $this->agent;
    }

    public function setAgent(?User $agent): self
    {
        $this->agent = $agent;

        return $this;
    }

    public function getSecteur(): ?Secteur
    {
        return $this->secteur;
    }

    public function setSecteur(?Secteur $secteur): self
    {
        $this->secteur = $secteur;

        return $this;
    }

    public function getOrderDate(): ?\DateTimeInterface
    {
        return $this->orderDate;
    }

    public function setOrderDate(\DateTimeInterface $orderDate): self
    {
        $this->orderDate = $orderDate;

        return $this;
    }

    public function getAmount(): ?string
    {
        return $this->amount;
    }

    public function setAmount(string $amount): self
    {
        $this->amount = $amount;

        return $this;
    }

    public function getAddress(): ?OrderAddressAroma
    {
        return $this->address;
    }

    public function setAddress(?OrderAddressAroma $address): self
    {
        $this->address = $address;

        return $this;
    }

    public function getNote(): ?string
    {
        return $this->note;
    }

    public function setNote(?string $note): self
    {
        $this->note = $note;

        return $this;
    }

    public function getChargeId(): ?string
    {
        return $this->chargeId;
    }

    public function setChargeId(?string $chargeId): self
    {
        $this->chargeId = $chargeId;

        return $this;
    }

    /**
     * @return Collection<int, OrderImplantationAroma>
     */
    public function getOrderImplantations(): Collection
    {
        return $this->orderImplantations;
    }

    public function addOrderImplantation(OrderImplantationAroma $orderImplantation): self
    {
        if (!$this->orderImplantations->contains($orderImplantation)) {
            $this->orderImplantations[] = $orderImplantation;
            $orderImplantation->setOrderParent($this);
        }

        return $this;
    }

    public function removeOrderImplantation(OrderImplantationAroma $orderImplantation): self
    {
        if ($this->orderImplantations->removeElement($orderImplantation)) {
            // set the owning side to null (unless already changed)
            if ($orderImplantation->getOrderParent() === $this) {
                $orderImplantation->setOrderParent(null);
            }
        }

        return $this;
    }

    public function getStatusStr(): ?string 
    {
        return Order::STATUS[$this->getStatus()];
    }

    public function getTva(): ?string
    {
        return $this->tva;
    }

    public function setTva(?string $tva): self
    {
        $this->tva = $tva;

        return $this;
    }

    public function getMontantTtc(): ?string
    {
        return $this->montantTtc;
    }

    public function setMontantTtc(?string $montantTtc): self
    {
        $this->montantTtc = $montantTtc;

        return $this;
    }
}
