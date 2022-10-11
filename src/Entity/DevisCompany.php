<?php

namespace App\Entity;

use App\Repository\DevisCompanyRepository;
use DateTime;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @ORM\Entity(repositoryClass=DevisCompanyRepository::class)
 */
class DevisCompany
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="text")
     */
    private $company_info;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $company_logo;

    private $company_logo_encode_img_base64;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $client_mail;

    /**
     * @ORM\Column(type="text")
     */
    private $client_info;

    /**
     * @ORM\Column(type="datetime")
     */
    private $created_at;

    /**
     * @ORM\OneToMany(targetEntity=DevisCompanyDetail::class, mappedBy="devisCompany")
     */
    private $devis_company_detail;

    /**
     * @ORM\ManyToOne(targetEntity=User::class, inversedBy="devisCompanies")
     */
    private $agent;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $pj_filename;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $devis_ref_seq;

    /**
     * @Assert\Range(
     *       min= 1,
     *       max= 100,
     *       minMessage = "Vous devez entrer un valeur supérieur à {{ min }}",
     *       maxMessage = "Vous devez entrer un valeur inférieur à {{ max }}"
     * )
     * @ORM\Column(type="integer")
     */
    private $payment_condition;

    /**
     * @ORM\Column(type="float")
     */
    private $devis_total_ht;

    /**
     * @ORM\Column(type="float")
     */
    private $devis_total_ttc;

//    /**
//     * @ORM\Column(type="string", length=255)
//     */
//    private $client_firstname;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $client_lastname;

    /**
     * @ORM\Column(type="datetime")
     */
    private $client_rdv;



    public function __construct()
    {
        $this->created_at = new DateTime();
        $this->devis_company_detail = new ArrayCollection();
        $this->payment_condition = 100;
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getCompanyInfo(): ?string
    {
        return $this->company_info;
    }

    public function setCompanyInfo(string $company_info): self
    {
        $this->company_info = $company_info;

        return $this;
    }

    public function getCompanyLogo(): ?string
    {
        return $this->company_logo;
    }

    public function setCompanyLogo(?string $company_logo): self
    {
        $this->company_logo = $company_logo;

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

    public function getClientInfo(): ?string
    {
        return $this->client_info;
    }

    public function setClientInfo(string $client_info): self
    {
        $this->client_info = $client_info;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeInterface
    {
        return $this->created_at;
    }

    public function setCreatedAt(\DateTimeInterface $created_at): self
    {
        $this->created_at = $created_at;

        return $this;
    }

    /**
     * @return Collection<int, DevisCompanyDetail>
     */
    public function getDevisCompanyDetail(): Collection
    {
        return $this->devis_company_detail;
    }

    public function addDevisCompanyDetail(DevisCompanyDetail $devisCompanyDetail): self
    {
        if (!$this->devis_company_detail->contains($devisCompanyDetail)) {
            $this->devis_company_detail[] = $devisCompanyDetail;
            $devisCompanyDetail->setDevisCompany($this);
        }

        return $this;
    }

    public function removeDevisCompanyDetail(DevisCompanyDetail $devisCompanyDetail): self
    {
        if ($this->devis_company_detail->removeElement($devisCompanyDetail)) {
            // set the owning side to null (unless already changed)
            if ($devisCompanyDetail->getDevisCompany() === $this) {
                $devisCompanyDetail->setDevisCompany(null);
            }
        }

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

    public function getPjFilename(): ?string
    {
        return $this->pj_filename;
    }

    public function setPjFilename(string $pj_filename): self
    {
        $this->pj_filename = $pj_filename;

        return $this;
    }

    public function getDevisRefSeq(): ?string
    {
        return $this->devis_ref_seq;
    }

    public function setDevisRefSeq(string $devis_ref_seq): self
    {
        $this->devis_ref_seq = $devis_ref_seq;

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

    public function getDevisTotalHt(): ?float
    {
        return $this->devis_total_ht;
    }

    public function setDevisTotalHt(float $devis_total_ht): self
    {
        $this->devis_total_ht = $devis_total_ht;

        return $this;
    }

    public function getDevisTotalTtc(): ?float
    {
        return $this->devis_total_ttc;
    }

    public function setDevisTotalTtc(float $devis_total_ttc): self
    {
        $this->devis_total_ttc = $devis_total_ttc;

        return $this;
    }

//    public function getClientFirstname(): ?string
//    {
//        return $this->client_firstname;
//    }
//
//    public function setClientFirstname(string $client_firstname): self
//    {
//        $this->client_firstname = $client_firstname;
//
//        return $this;
//    }

    public function getClientLastname(): ?string
    {
        return $this->client_lastname;
    }

    public function setClientLastname(string $client_lastname): self
    {
        $this->client_lastname = $client_lastname;

        return $this;
    }

    public function getClientRdv(): ?\DateTimeInterface
    {
        return $this->client_rdv;
    }

    public function setClientRdv(\DateTimeInterface $client_rdv): self
    {
        $this->client_rdv = $client_rdv;

        return $this;
    }


    /**
     * Get the value of company_logo_encode_img_base64
     */ 
    public function getCompany_logo_encode_img_base64()
    {
        return $this->company_logo_encode_img_base64;
    }

    /**
     * Set the value of company_logo_encode_img_base64
     *
     * @return  self
     */ 
    public function setCompany_logo_encode_img_base64($company_logo_encode_img_base64)
    {
        $this->company_logo_encode_img_base64 = $company_logo_encode_img_base64;

        return $this;
    }
}
