<?php


namespace App\Controller;

use App\Entity\Contact;
use App\Entity\ContactInformation;
use App\Entity\SearchEntity\UserSearch;
use App\Entity\User;
use App\Form\ContactInformationType;
use App\Form\ContactType;
use App\Form\UserSearchType;
use App\Manager\ContactManager;
use App\Repository\ContactInformationRepository;
use App\Repository\ContactRepository;
use App\Repository\UserRepository;
use App\Services\ExcelService;
use Knp\Component\Pager\PaginatorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class AgentContactController extends AbstractController
{
    protected $repoUser;
    protected $repoContact;
    protected $repoContactInfo;

    public function __construct(UserRepository $repoUser, ContactRepository $repoContact, ContactInformationRepository $repoContactInfo)
    {
        $this->repoUser = $repoUser;
        $this->repoContact = $repoContact;
        $this->repoContactInfo = $repoContactInfo;
    }

    /**
     * @Route("/agent/contact/liste", name="agent_contact_list")
     */
    public function agent_contact_list(Request $request, PaginatorInterface $paginator)
    {
        $agent = $this->getUser();
        $search = new UserSearch();
        $searchForm = $this->createForm(UserSearchType::class, $search);
        $searchForm->handleRequest($request);
        
        $contacts = $paginator->paginate(
            $this->repoContact->findContactQuery($search, $agent),
            $request->query->getInt('page', 1),
            20
        );

        return $this->render('user_category/agent/contact/list_contacts.html.twig', [
            'contacts' => $contacts,
            'searchForm' => $searchForm->createView()
        ]);
    }

    /**
     * @Route("/agent/contact/exportExcel", name="agent_contact_export_excel")
     */
    public function agent_contact_export_excel(Request $request, ExcelService $excelService): Response
    {
        $contacts = $this->repoContact->findAll();
        $headers = ["NOM ET PRÉNOMS", "EMAIL", "TÉLÉPHONE", "ADRESSE", "TYPE DU LOGEMENT", "RUE", "NUMÉRO", "CODE POSTAL", "VILLE", "COMPOSITION DU FOYER", "NOMBRE DE PERSONNE", "COMMENTAIRE"];
        $fields = ["information.lastname", "information.email", "information.phone", "information.address", 
            "information.typeLogement.nom", "information.rue", "information.numero", "information.codePostal", 
            "information.ville", "information.compositionFoyer", "information.nbrPersonne", "information.commentaire"];
        $file = $excelService->export($contacts, $fields, $headers);
        $date = (new \DateTime())->format('Y-m-d');
        return $this->file($file, "contact-$date.csv");
    }

    /**
     * @Route("/agent/client/contact/add", name="agent_contact_info_add")
     */
    public function agent_contact_info_add(Request $request)
    {
        $contact = new Contact();
        $contactInfo = new ContactInformation();
        $formContact = $this->createForm(ContactInformationType::class, $contactInfo);
       
        $formContact->handleRequest($request);
        if ($formContact->isSubmitted() && $formContact->isValid()) {
            $contact->setInformation($contactInfo);
            $contact->setAgent($this->getUser());
            $contact->setStatus(0);
            $this->repoContact->add($contact);

            $this->addFlash('success', "Ajout du client avec succès");
            return $this->redirectToRoute('agent_contact_list');    
        }

        return $this->render('user_category/agent/contact/add_contact.html.twig', [
            'formContact' => $formContact->createView(),
            'button' => 'Enregistrer',
            'btn_class' =>  'success'
        ]);    
    }

    
    /**
     * @Route("/agent/client/contact/information/{id}/edit", name="agent_contact_info_edit")
     */
    public function agent_contact_info_edit(Request $request, ContactInformation $contactInformation)
    {
        $formContact = $this->createForm(ContactInformationType::class, $contactInformation);
       
        $formContact->handleRequest($request);
        if ($formContact->isSubmitted() && $formContact->isValid()) {

            $this->repoContactInfo->add($contactInformation);

            $this->addFlash('success', "Modification du client avec succès");
            return $this->redirectToRoute('agent_contact_list');    
        }

        return $this->render('user_category/agent/contact/add_contact.html.twig', [
            'formContact' => $formContact->createView(),
            'button' => 'Modifier',
            'btn_class' =>  'success'
        ]);    
    }



    /**
     * @Route("/agent/contact/{id}/delete", name="agent_contact_info_delete")
     */
    public function agent_contact_info_delete(Contact $contact, Request $request)
    {
        if ($this->isCsrfTokenValid('delete'. $contact->getId(), $request->get('_token'))) {
            $this->repoContact->remove($contact);

            $this->addFlash( 'danger', 'Contact supprimé');
        }
        return $this->redirectToRoute('agent_contact_list');    
    }
    
}