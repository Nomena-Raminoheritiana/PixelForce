<?php

namespace App\Entity;

use App\Repository\UserRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
use Symfony\Component\Security\Core\User\PasswordAuthenticatedUserInterface;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Serializer\Annotation\Ignore;
use Symfony\Component\Validator\Constraints as Assert;


/**
 * @ORM\Entity(repositoryClass=UserRepository::class)
 * @ORM\Table(name="`user`")
 * @UniqueEntity({"email","username"},  message="La valeur existe déjà")
 */
class User implements UserInterface, PasswordAuthenticatedUserInterface
{

    const ROLE_AGENT = 'ROLE_AGENT';
    const ROLE_MADA = 'ROLE_MADA';
    const ROLE_COACH = 'ROLE_COACH';
    const ROLE_ADMINISTRATEUR = 'ROLE_ADMINISTRATEUR';
    const ROLE_CLIENT = 'ROLE_CLIENT';
    const ROLES = [
      self::ROLE_AGENT => self::ROLE_AGENT,
      self::ROLE_MADA => self::ROLE_MADA,
      self::ROLE_COACH => self::ROLE_AGENT,
      self::ROLE_ADMINISTRATEUR => self::ROLE_ADMINISTRATEUR,
      self::ROLE_CLIENT => self::ROLE_CLIENT,
    ];

    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     * @Groups({"chat"})
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=180, unique=true)
     * @Groups({"chat"})
     */
    private $email;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $username;

    /**
     * @ORM\Column(type="json")
     */
    private $roles = [];

    /**
     * @var string The hashed password
     * @ORM\Column(type="string")
     */
    private $password;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"chat"})
     */
    private $nom;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"chat"})
     */
    private $prenom;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $dateNaissance;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $adresse;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $numeroSecurite;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $rib;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"chat"})
     */
    private $photo;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $sixDigitCode;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $forgottenPassToken;

    /**
     * @ORM\OneToMany(targetEntity=CoachAgent::class, mappedBy="coach")
     */
    private $coachAgents;

    /**
     * @ORM\Column(type="boolean", nullable=true)
     */
    private $active;

    /**
     * @ORM\OneToMany(targetEntity=LiveChatVideo::class, mappedBy="userA")
     */
    private $liveChatVideosFromUserA;
    /**
     * @ORM\OneToMany(targetEntity=LiveChatVideo::class, mappedBy="userB")
     */
    private $liveChatVideosFromUserB;

    /**
     * @ORM\OneToMany(targetEntity=VideoFormation::class, mappedBy="user")
     */
    private $videoFormations;

    /**
     * @ORM\OneToMany(targetEntity=Commentaire::class, mappedBy="user")
     */
    private $commentaires;

    /**
     * @ORM\OneToMany(targetEntity=Message::class, mappedBy="user")
     */
    private $messages;

    /**
     * @ORM\ManyToMany(targetEntity=CanalMessage::class, mappedBy="users")
     */
    private $canalMessages;


    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $ApiToken;

    private $chatCode;

    /**
     * @ORM\Column(type="string", length=50, nullable=true)
     */
    private $telephone;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $created_at;

    /**
     * @ORM\OneToMany(targetEntity=Contact::class, mappedBy="agent", orphanRemoval=true)
     */
    private $contact;

    /**
     * @ORM\ManyToOne(targetEntity=Contact::class, inversedBy="client")
     */
    private $contact_client;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $codePostal;

    /**
     * @ORM\OneToMany(targetEntity=Formation::class, mappedBy="coach")
     */
    private $formations;

    /**
     * @ORM\OneToMany(targetEntity=FormationAgent::class, mappedBy="agent")
     */
    private $formationAgents;

    /**
     * @ORM\OneToMany(targetEntity=CoachSecteur::class, mappedBy="coach")
     */
    private $coachSecteurs;

    /**
     * @ORM\OneToMany(targetEntity=AgentSecteur::class, mappedBy="agent", fetch="EAGER")
     */
    private $agentSecteurs;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $lienCalendly;

    /**
     * @ORM\OneToMany(targetEntity="CalendarEvent", mappedBy="user")
     */
    private $calendarEvents;

    public function __construct()
    {
        $this->coachAgents = new ArrayCollection();
        $this->liveChatVideosFromUserA = new ArrayCollection();
        $this->liveChatVideosFromUserB = new ArrayCollection();
        $this->videoFormations = new ArrayCollection();
        $this->commentaires = new ArrayCollection();
        $this->messages = new ArrayCollection();
        $this->canalMessages = new ArrayCollection();
        $this->created_at = new \DateTime();
        $this->contact = new ArrayCollection();
        $this->formations = new ArrayCollection();
        $this->formationAgents = new ArrayCollection();
        $this->coachSecteurs = new ArrayCollection();
        $this->agentSecteurs = new ArrayCollection();
        $this->calendarEvents = new ArrayCollection();

    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): self
    {
        $this->email = $email;

        return $this;
    }

    /**
     * A visual identifier that represents this user.
     *
     * @see UserInterface
     */
    public function getUserIdentifier(): string
    {
        return (string) $this->email;
    }

    /**
     * @deprecated since Symfony 5.3, use getUserIdentifier instead
     */
    public function getUsername(): string
    {
        return (string) $this->username;
    }

    public function setUsername(?string $username): self
    {
        $this->username = $username;
        return $this;
    }

    /**
     * @see UserInterface
     */
    public function getRoles(): array
    {
        $roles = $this->roles;
        // guarantee every user at least has ROLE_USER
//        $roles[] = self::ROLE_AGENT;

        return array_unique($roles);
    }

    public function setRoles(array $roles): self
    {
        $this->roles = $roles;

        return $this;
    }

    public function getStringRole()
    {
        switch($this->roles[0]) {
            case self::ROLE_AGENT: return 'Agent'; break;
            case self::ROLE_COACH: return 'Coach'; break;
            case self::ROLE_ADMINISTRATEUR: return 'Administrateur'; break;
        }
    }

    /**
     * @see PasswordAuthenticatedUserInterface
     */
    public function getPassword(): string
    {
        return $this->password;
    }

    public function setPassword(string $password): self
    {
        $this->password = $password;

        return $this;
    }

    /**
     * Returning a salt is only needed, if you are not using a modern
     * hashing algorithm (e.g. bcrypt or sodium) in your security.yaml.
     *
     * @see UserInterface
     */
    public function getSalt(): ?string
    {
        return null;
    }

    /**
     * @see UserInterface
     */
    public function eraseCredentials()
    {
        // If you store any temporary, sensitive data on the user, clear it here
        // $this->plainPassword = null;
    }

    public function getNom(): ?string
    {
        return $this->nom;
    }

    public function setNom(?string $nom): self
    {
        $this->nom = $nom;

        return $this;
    }

    public function getPrenom(): ?string
    {
        return $this->prenom;
    }

    public function setPrenom(?string $prenom): self
    {
        $this->prenom = $prenom;

        return $this;
    }

    public function getDateNaissance(): ?\DateTimeInterface
    {
        return $this->dateNaissance;
    }

    public function setDateNaissance(?\DateTimeInterface $dateNaissance): self
    {
        $this->dateNaissance = $dateNaissance;

        return $this;
    }

    public function getAdresse(): ?string
    {
        return $this->adresse;
    }

    public function setAdresse(?string $adresse): self
    {
        $this->adresse = $adresse;

        return $this;
    }

    public function getNumeroSecurite(): ?string
    {
        return $this->numeroSecurite;
    }

    public function setNumeroSecurite(?string $numeroSecurite): self
    {
        $this->numeroSecurite = $numeroSecurite;

        return $this;
    }

    public function getRib(): ?string
    {
        return $this->rib;
    }

    public function setRib(?string $rib): self
    {
        $this->rib = $rib;

        return $this;
    }

    public function getPhoto(): ?string
    {
        return $this->photo;
    }

    public function setPhoto(?string $photo = null, $setNull = false): self
    {
        $this->photo = $photo ? $photo : $this->photo;
        if($setNull) {
            $this->photo = null;
        }

        return $this;
    }

    public function getSixDigitCode(): ?int
    {
        return $this->sixDigitCode;
    }

    public function setSixDigitCode(?int $sixDigitCode): self
    {
        $this->sixDigitCode = $sixDigitCode;

        return $this;
    }

    public function getForgottenPassToken(): ?string
    {
        return $this->forgottenPassToken;
    }

    public function setForgottenPassToken(?string $forgottenPassToken): self
    {
        $this->forgottenPassToken = $forgottenPassToken;

        return $this;
    }

    public function validateSixDigitCode($sixDigitCode):bool
    {
        if($this->sixDigitCode === (int) $sixDigitCode) {
            return true;
        }
        return false;
    }

    public function validateForgottenPassToken($forgotten_pass)
    {
        if($this->forgottenPassToken ===  $forgotten_pass) {
            return true;
        }
        return false;
    }

    /**
     * @return Collection<int, CoachAgent>
     */
    public function getCoachAgents(): Collection
    {
        return $this->coachAgents;
    }

    public function addCoachAgent(CoachAgent $coachAgent): self
    {
        if (!$this->coachAgents->contains($coachAgent)) {
            $this->coachAgents[] = $coachAgent;
            $coachAgent->setCoach($this);
        }

        return $this;
    }

    public function removeCoachAgent(CoachAgent $coachAgent): self
    {
        if ($this->coachAgents->removeElement($coachAgent)) {
            // set the owning side to null (unless already changed)
            if ($coachAgent->getCoach() === $this) {
                $coachAgent->setCoach(null);
            }
        }

        return $this;
    }

    public function getActive(): ?bool
    {
        return $this->active;
    }

    public function setActive(?bool $active): self
    {
        $this->active = $active;

        return $this;
    }

    /**
     * @return Collection<int, LiveChatVideo>
     */
    public function getLiveChatVideosFromA(): Collection
    {
        return $this->liveChatVideosFromUserA;
    }

    public function addLiveChatVideoFromA(LiveChatVideo $liveChatVideo): self
    {
        if (!$this->liveChatVideosFromUserA->contains($liveChatVideo)) {
            $this->liveChatVideosFromUserA[] = $liveChatVideo;
            $liveChatVideo->setUserA($this);
        }

        return $this;
    }

    public function removeLiveChatVideoFromA(LiveChatVideo $liveChatVideo): self
    {
        if ($this->liveChatVideosFromUserA->removeElement($liveChatVideo)) {
            // set the owning side to null (unless already changed)
            if ($liveChatVideo->getUserA() === $this) {
                $liveChatVideo->setUserA(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, LiveChatVideo>
     */
    public function getLiveChatVideosFromB(): Collection
    {
        return $this->liveChatVideosFromUserB;
    }

    public function addLiveChatVideoFromB(LiveChatVideo $liveChatVideo): self
    {
        if (!$this->liveChatVideosFromUserB->contains($liveChatVideo)) {
            $this->liveChatVideosFromUserB[] = $liveChatVideo;
            $liveChatVideo->setUserB($this);
        }

        return $this;
    }

    public function removeLiveChatVideoFromB(LiveChatVideo $liveChatVideo): self
    {
        if ($this->liveChatVideosFromUserB->removeElement($liveChatVideo)) {
            // set the owning side to null (unless already changed)
            if ($liveChatVideo->getUserB() === $this) {
                $liveChatVideo->setUserB(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, VideoFormation>
     */
    public function getVideoFormations(): Collection
    {
        return $this->videoFormations;
    }

    public function addVideoFormation(VideoFormation $videoFormation): self
    {
        if (!$this->videoFormations->contains($videoFormation)) {
            $this->videoFormations[] = $videoFormation;
            $videoFormation->setUser($this);
        }

        return $this;
    }

    public function removeVideoFormation(VideoFormation $videoFormation): self
    {
        if ($this->videoFormations->removeElement($videoFormation)) {
            // set the owning side to null (unless already changed)
            if ($videoFormation->getUser() === $this) {
                $videoFormation->setUser(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, Commentaire>
     */
    public function getCommentaires(): Collection
    {
        return $this->commentaires;
    }

    public function addCommentaire(Commentaire $commentaire): self
    {
        if (!$this->commentaires->contains($commentaire)) {
            $this->commentaires[] = $commentaire;
            $commentaire->setUser($this);
        }

        return $this;
    }

    public function removeCommentaire(Commentaire $commentaire): self
    {
        if ($this->commentaires->removeElement($commentaire)) {
            // set the owning side to null (unless already changed)
            if ($commentaire->getUser() === $this) {
                $commentaire->setUser(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, Message>
     */
    public function getMessages(): Collection
    {
        return $this->messages;
    }

    public function addMessage(Message $message): self
    {
        if (!$this->messages->contains($message)) {
            $this->messages[] = $message;
            $message->setUser($this);
        }

        return $this;
    }

    public function removeMessage(Message $message): self
    {
        if ($this->messages->removeElement($message)) {
            // set the owning side to null (unless already changed)
            if ($message->getUser() === $this) {
                $message->setUser(null);
            }
        }

        return $this;
    }

    public function clearMessages()
    {
        $this->messages->clear();
    }

    /**
     * @return Collection<int, CanalMessage>
     */
    public function getCanalMessages(): Collection
    {
        return $this->canalMessages;
    }

    public function addCanalMessage(CanalMessage $canalMessage): self
    {
        if (!$this->canalMessages->contains($canalMessage)) {
            $this->canalMessages[] = $canalMessage;
            $canalMessage->addUser($this);
        }

        return $this;
    }

    public function removeCanalMessage(CanalMessage $canalMessage): self
    {
        if ($this->canalMessages->removeElement($canalMessage)) {
            $canalMessage->removeUser($this);
        }

        return $this;
    }

    public function clearCanalMessages()
    {
        $this->canalMessages->clear();
    }

    public function getApiToken(): ?string
    {
        return $this->ApiToken;
    }

    public function setApiToken(?string $ApiToken): self
    {
        $this->ApiToken = $ApiToken;

        return $this;
    }

    /**
     * @return mixed
     */
    public function getChatCode()
    {
        return $this->chatCode ? $this->chatCode : $this->id;
    }

    /**
     * @param mixed $chatCode
     * @return User
     */
    public function setChatCode($chatCode)
    {
        $this->chatCode = $chatCode;
        return $this;
    }

    public function getTelephone(): ?string
    {
        return $this->telephone;
    }

    public function setTelephone(?string $telephone): self
    {
        $this->telephone = $telephone;

        return $this;
    }

    public function fullName()
    {
        return $this->nom .' '. $this->prenom;
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
     * @return Collection<int, Contact>
     */
    public function getContact(): Collection
    {
        return $this->contact;
    }

    public function addContact(Contact $contact): self
    {
        if (!$this->contact->contains($contact)) {
            $this->contact[] = $contact;
            $contact->setAgent($this);
        }

        return $this;
    }

    public function removeContact(Contact $contact): self
    {
        if ($this->contact->removeElement($contact)) {
            // set the owning side to null (unless already changed)
            if ($contact->getAgent() === $this) {
                $contact->setAgent(null);
            }
        }

        return $this;
    }

    public function getContactClient(): ?Contact
    {
        return $this->contact_client;
    }

    public function setContactClient(?Contact $contact_client): self
    {
        $this->contact_client = $contact_client;

        return $this;
    }

    public function removeAllAgentSecteur()
    {
        $this->agentSecteurs->clear();
    }

    public function getCodePostal(): ?string
    {
        return $this->codePostal;
    }

    public function setCodePostal(?string $codePostal): self
    {
        $this->codePostal = $codePostal;

        return $this;
    }

    /**
     * @return Collection<int, Formation>
     */
    public function getFormations(): Collection
    {
        return $this->formations;
    }

    public function addFormation(Formation $formation): self
    {
        if (!$this->formations->contains($formation)) {
            $this->formations[] = $formation;
            $formation->setCoach($this);
        }

        return $this;
    }

    public function removeFormation(Formation $formation): self
    {
        if ($this->formations->removeElement($formation)) {
            // set the owning side to null (unless already changed)
            if ($formation->getCoach() === $this) {
                $formation->setCoach(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, FormationAgent>
     */
    public function getFormationAgents(): Collection
    {
        return $this->formationAgents;
    }

    public function addFormationAgent(FormationAgent $formationAgent): self
    {
        if (!$this->formationAgents->contains($formationAgent)) {
            $this->formationAgents[] = $formationAgent;
            $formationAgent->setAgent($this);
        }

        return $this;
    }

    public function removeFormationAgent(FormationAgent $formationAgent): self
    {
        if ($this->formationAgents->removeElement($formationAgent)) {
            // set the owning side to null (unless already changed)
            if ($formationAgent->getAgent() === $this) {
                $formationAgent->setAgent(null);
            }
        }

        return $this;
    }

    public function getFormationStatut(Formation $formation)
    {
       $formationAgents =  $formation->getFormationAgents();
       foreach($formationAgents->toArray() as $formationAgent) {
           if($formationAgent->getAgent()->getId() === $this->getId()) {
               return $formationAgent->getStatut();
           }
       }
       return '';
    }

    /**
     * Permet de renvoyer un string contenant les secteurs d'un agent en les cocaténant par une virgule
     *
     * @param array $secteurs
     * @return string
     */
    public function allSecteursOfUser(array $secteurs)
    {
        $mySecteurs = [];
        /** @var AgentSecteur $secteur */
        foreach ($secteurs as $secteur) {
           $mySecteurs[] = $secteur->getSecteur()->getNom();
        }

        $joinSecteur = join(', ', $mySecteurs);
        return $joinSecteur;
    }

    /**
     * @return Collection<int, CoachSecteur>
     */
    public function getCoachSecteurs(): Collection
    {
        return $this->coachSecteurs;
    }

    public function addCoachSecteur(CoachSecteur $coachSecteur): self
    {
        if (!$this->coachSecteurs->contains($coachSecteur)) {
            $this->coachSecteurs[] = $coachSecteur;
            $coachSecteur->setCoach($this);
        }

        return $this;
    }

    public function removeCoachSecteur(CoachSecteur $coachSecteur): self
    {
        if ($this->coachSecteurs->removeElement($coachSecteur)) {
            // set the owning side to null (unless already changed)
            if ($coachSecteur->getCoach() === $this) {
                $coachSecteur->setCoach(null);
            }
        }

        return $this;
    }

    public function getSecteurByCoach()
    {
        if(in_array(self::ROLE_COACH, $this->roles) && $this->coachSecteurs->count() > 0) {
            return $this->coachSecteurs->toArray()[0]->getSecteur();
        }
        return null;
    }

    public function getSecteursIdsByAgent()
    {
        $agentSecteurs = $this->getAgentSecteurs();
        $secteurs_ids = [];
        foreach($agentSecteurs->toArray() as $agentSecteur) {
            $secteurs_ids[] = $agentSecteur->getSecteur()->getId();
        }
        return $secteurs_ids;
    }

    public function getSecteursByAgent()
    {
        $agentSecteurs = $this->getAgentSecteurs();
        $secteurs_ids = [];
        foreach($agentSecteurs->toArray() as $agentSecteur) {
            $secteurs_ids[] = $agentSecteur->getSecteur();
        }
        return $secteurs_ids;
    }

    /**
     * @return Collection<int, AgentSecteur>
     */
    public function getAgentSecteurs(): Collection
    {
        if(in_array(self::ROLE_AGENT, $this->roles)) {
            return $this->agentSecteurs;
        }
        $this->agentSecteurs->clear();
        return $this->agentSecteurs;
    }

    public function addAgentSecteur(AgentSecteur $agentSecteur): self
    {
        if (!$this->agentSecteurs->contains($agentSecteur)) {
            $this->agentSecteurs[] = $agentSecteur;
            $agentSecteur->setAgent($this);
        }

        return $this;
    }

    public function removeAgentSecteur(AgentSecteur $agentSecteur): self
    {
        if ($this->agentSecteurs->removeElement($agentSecteur)) {
            // set the owning side to null (unless already changed)
            if ($agentSecteur->getAgent() === $this) {
                $agentSecteur->setAgent(null);
            }
        }

        return $this;
    }

    public function getLienCalendly(): ?string
    {
        return $this->lienCalendly;
    }

    public function setLienCalendly(?string $lienCalendly): self
    {
        $this->lienCalendly = $lienCalendly;

        return $this;
    }
}
