<?php


namespace App\Manager;

use App\Entity\Contact;
use App\Entity\ContactInformation;
use App\Entity\User;
use App\Repository\ContactInformationRepository;
use App\Repository\ContactRepository;
use App\Repository\SecteurRepository;
use App\Repository\UserRepository;
use App\Services\ContactService;
use App\Services\GenerateKey;
use App\Services\MailerService;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Security\Csrf\TokenGenerator\TokenGeneratorInterface;

class ContactManager
{
    protected $entityManager;
    protected $repoUser;
    protected $repoSector;
    protected $repoContact;
    protected $contactService;
    protected $repoContactInfo;

    public function __construct(EntityManager $entityManager, UserRepository $repoUser, SecteurRepository $repoSector, ContactRepository $repoContact, ContactService $contactService, ContactInformationRepository $repoContactInfo)
    {
        $this->entityManager = $entityManager;
        $this->repoUser = $repoUser;
        $this->repoSector = $repoSector;
        $this->repoContact = $repoContact;
        $this->contactService = $contactService;
        $this->repoContactInfo = $repoContactInfo;
    }

    /**
     * Permet de persister les contacts 
     *
     * NB : $contacts est un tableau contenant la liste des contacts revoyés par People API (Google API)
     */
    public function persistContactInformation($contacts, $agentId, $sectorId)
    {
        $agent = $this->repoUser->find($agentId);
        $secteur = $this->repoSector->find($sectorId);
        $myContacts = $this->repoContact->findBy(['agent' => $agent, 'secteur' => $secteur]);
        
        foreach ($contacts as $contact) {
            $isNewContactInMyContact = $this->contactService->isNewContactInMyContacts($contact, $myContacts);

            // On vérifie si le contact est déjà existé
            if (!$isNewContactInMyContact) {
                $contactEntity = new Contact();
                // /** @var ContactInformation $information */
                $information = $contactEntity->getInformation();
                $information = new ContactInformation();
                $contactEntity = $this->contactService->contactApiToContactEntity($contact, $contactEntity, $information);
    
                $contactEntity->setAgent($agent);
                $contactEntity->setSecteur($secteur);
    
                $this->entityManager->save($contactEntity);
            }else{
                if (isset($contact['names'][0]['familyName'])) {
                    $contactInfo = $this->repoContactInfo->findOneBy(['firstname' => $contact['names'][0]['familyName']]);
                }elseif (isset($contact['names'][0]['displayName'])){
                    /** @var ContactInformation $contactInfo */
                    $contactInfo = null;
                    if (isset($contact['phoneNumbers'][0]['value'])) {
                        $contactInfo = $this->repoContactInfo->findOneBy(['phone' => $contact['phoneNumbers'][0]['value']]);
                    } elseif (isset($contact['emailAddresses'][0]['value'])) {
                        $contactInfo = $this->repoContactInfo->findOneBy(['email' => $contact['emailAddresses'][0]['value']]);
                    }
                }
                
                $contactEntity = $contactInfo->getContact();
                $contactEntity = $this->contactService->contactApiToContactEntity($contact, $contactEntity, $contactInfo);
                $this->entityManager->save($contactEntity);
            }

        }
    }

  

}
