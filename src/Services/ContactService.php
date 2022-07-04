<?php


namespace App\Services;

use App\Entity\Contact;
use App\Entity\ContactInformation;

class ContactService
{
    /**
     * Permet de savoir si le nouveau contact est déjà dans la liste de contact
     * 
     * NB : On vérifie le contact par le prénom ou le nom complet
     *
     * @param [type] $newContact
     * @param [type] $myContacts
     * @return boolean
     */
    public function isNewContactInMyContacts($newContact, $myContacts)
    {
        $namesContact = [];

        /** @var Contact $contact */
        foreach ($myContacts as $contact) {
            $namesContact[] = $contact->getInformation()->getLastname();
        }

        if (in_array( $newContact['names'][0]['displayName'], $namesContact) || in_array( $newContact['names'][0]['givenName'], $namesContact)) {
            return true;
        }else{
            return false;
        }
    }


    /**
     * Permet de transformer un contact provenant de People API en Contact Entity
     *
     * @param Type|null $var
     * @return Contact
     */
    public function contactApiToContactEntity($contactApi, Contact $contactEntity, ContactInformation $informationEntity)
    {
        // NOM et PRENOM
        // On vérifie si le nom dans le contact n'est pas séparé par nom et prénom,
        // Si dans le cas contraire, on prend tout de suite le nom complet
        if (isset($contactApi['names'][0]['familyName'])) {
            $informationEntity->setLastname($contactApi['names'][0]['familyName']);
        }elseif (isset($contactApi['names'][0]['displayName'])){
            $informationEntity->setLastname($contactApi['names'][0]['displayName']);
        }
        if (isset($contactApi['names'][0]['givenName'])) {
            $informationEntity->setFirstname($contactApi['names'][0]['givenName']);
        }

        // EMAIL
        if (isset($contactApi['emailAddresses'][0]['value'])) {
            $informationEntity->setEmail($contactApi['emailAddresses'][0]['value']);
        }
        // PHONE
        if (isset($contactApi['phoneNumbers'][0]['value'])) {
            $informationEntity->setPhone($contactApi['phoneNumbers'][0]['value']);
        }
        
        // ADRESSE
        if (isset($contactApi['addresses'])) {
            $addresses = $contactApi['addresses'];
            
            if (isset($addresses[0]['streetAddress'])) {
                $informationEntity->setRue($addresses[0]['streetAddress']);
            }
            if (isset($addresses[0]['city'])) {
                $informationEntity->setAddress($addresses[0]['city']);
            }
            if (isset($addresses[0]['postalCode'])) {
                $informationEntity->setCodePostal($addresses[0]['postalCode']);
            }
            if (isset($addresses[0]['country'])) {
                $informationEntity->setVille($addresses[0]['country']);
            }
        }

        $contact =  $contactEntity->setInformation($informationEntity);
        return $contact;
    }
}
