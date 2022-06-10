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
use App\Repository\SecteurRepository;
use App\Repository\UserRepository;
use App\Services\ExcelService;
use Dompdf\Dompdf;
use Dompdf\Options;
use Knp\Component\Pager\PaginatorInterface;
use Nucleos\DompdfBundle\Wrapper\DompdfWrapperInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Component\Routing\Annotation\Route;

class AgentContactController extends AbstractController
{
    protected $repoUser;
    protected $repoContact;
    protected $repoContactInfo;
    protected $session;
    protected $repoSecteur;
    
    public function __construct(UserRepository $repoUser, ContactRepository $repoContact, ContactInformationRepository $repoContactInfo, SessionInterface $session, SecteurRepository $repoSecteur)
    {
        $this->repoUser = $repoUser;
        $this->repoContact = $repoContact;
        $this->repoContactInfo = $repoContactInfo;
        $this->session = $session;
        $this->repoSecteur = $repoSecteur;
    }

    /**
     * @Route("/agent/contact/liste", name="agent_contact_list")
     */
    public function agent_contact_list(Request $request, PaginatorInterface $paginator)
    {
        $secteurId = $this->session->get('secteurId');
        $agent = $this->getUser();
        $search = new UserSearch();
        $searchForm = $this->createForm(UserSearchType::class, $search)
            ->remove('secteur')
            ->add('adresse', TextType::class, [
                'required' => false,
                'label' => false,
                'attr' => [
                    'placeholder' => 'Adresse'
                ]
            ])
        ;
        $searchForm->handleRequest($request);
        
        $contacts = $paginator->paginate(
            $this->repoContact->findContactBySecteur($search, $agent, $secteurId),
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
     * @Route("/agent/contact/exportPdf", name="agent_contact_export_pdf")
     */
    public function agent_contact_export_pdf(Request $request, DompdfWrapperInterface $wrapper)
    {
        $contacts = $this->repoContact->findAll();
        $html = $this->renderView('pdf/contacts.html.twig', [
            'title' => "Liste des contacts",
            'contacts' => $contacts
        ]);
        return $wrapper->getStreamResponse($html, 'document.pdf', ['isRemoteEnabled' => true]);
    }

    /**
     * @Route("/agent/client/contact/add", name="agent_contact_info_add")
     */
    public function agent_contact_info_add(Request $request, )
    {
        $contact = new Contact();
        $contactInfo = new ContactInformation();
        $formContact = $this->createForm(ContactInformationType::class, $contactInfo);
       
        $formContact->handleRequest($request);
        if ($formContact->isSubmitted() && $formContact->isValid()) {
            $secteurId = $this->session->get('secteurId');
            if ($secteurId === null) {
                $this->addFlash('danger', "Désolé, une erreur s'est survenue !");
                return $this->redirectToRoute('agent_home');
            }

            $secteur = $this->repoSecteur->find($secteurId);
            $contact->setInformation($contactInfo);
            $contact->setAgent($this->getUser());
            $contact->setStatus(0);
            $contact->setSecteur($secteur);
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
            'btn_class' =>  'success',
            'label' => 'Modification'
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