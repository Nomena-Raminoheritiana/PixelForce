<?php


namespace App\Controller;

use App\Entity\CoachAgent;
use App\Entity\SearchEntity\UserSearch;
use App\Entity\User;
use App\Entity\AgentSecteur;
use App\Form\InscriptionAgentType;
use App\Form\ResetPasswordType;
use App\Form\SecteurType;
use App\Form\UserSearchType;
use App\Form\AgentSecteurType;
use App\Form\UserType;
use App\Manager\EntityManager;
use App\Manager\UserManager;
use App\Repository\CoachAgentRepository;
use App\Repository\SecteurRepository;
use App\Repository\UserRepository;
use App\Repository\AgentSecteurRepository;
use App\Services\AgentSecteurService;
use Knp\Component\Pager\PaginatorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Form\Extension\Core\Type\CollectionType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class AdminAgentController extends AbstractController
{
    protected $repoUser;
    protected $entityManager;
    protected $userManager;
    protected $repoCoachAgent;
    protected $repoAgentSecteur;
    protected $repoSecteur;
    protected $agentSecteurService;

    public function __construct(UserRepository $repoUser, EntityManager $entityManager, UserManager $userManager, CoachAgentRepository $repoCoachAgent, AgentSecteurRepository $repoAgentSecteur, SecteurRepository $repoSecteur, AgentSecteurService $agentSecteurService)
    {
        $this->repoUser = $repoUser;
        $this->entityManager = $entityManager;
        $this->userManager = $userManager;
        $this->repoCoachAgent = $repoCoachAgent;
        $this->repoAgentSecteur = $repoAgentSecteur;
        $this->repoSecteur = $repoSecteur;
        $this->agentSecteurService = $agentSecteurService;
    }

    /**
     * @Route("/admin/agent/liste", name="admin_agent_list")
     */
    public function admin_agent_list(Request $request, PaginatorInterface $paginator)
    {
        $repoAgentSecteur = $this->getDoctrine()->getManager()->getRepository('App:AgentSecteur');
        $search = new UserSearch();
        $searchForm = $this->createForm(UserSearchType::class, $search);
        $searchForm->handleRequest($request);
        
        $agents = $paginator->paginate(
            $this->repoUser->findCoachOrAgentQuery($search, 'AGENT'),
            $request->query->getInt('page', 1),
            20
        );

        return $this->render('user_category/admin/agent/list_agents.html.twig', [
            'agents' => $agents,
            'searchForm' => $searchForm->createView(),
            'repoAgentSecteur' => $repoAgentSecteur
        ]);
    }

    /**
     * @Route("/admin/agent/{id}//view", name="admin_agent_view")
     */
    public function admin_agent_view(User $agent)
    {
        $agentSecteurs = $this->repoAgentSecteur->findBy(['agent' => $agent]);
        return $this->render('user_category/admin/agent/view_agent.html.twig', [
            'agent' => $agent,
            'agentSecteurs' => $agentSecteurs
        ]);
    }


    /**
     * @Route("/admin/agent/{id}/edit", name="admin_agent_edit")
     */
    public function admin_agent_edit(Request $request, User $agent, SecteurRepository $secteurRepository)
    {
        $formUser = $this->createForm(InscriptionAgentType::class, $agent)
            ->remove('secteur')
            ->remove('username')
            ->remove('password')
        ;
        $formSecteur = $this->createForm(AgentSecteurType::class);
        
        $secteurs = $secteurRepository->findAll();
        $myAgentSecteurs = $this->repoAgentSecteur->findBy(['agent' => $agent]);

        $formUser->handleRequest($request);
        if ($formUser->isSubmitted() && $formUser->isValid()) {
            $this->entityManager->save($agent);
            $this->addFlash('success', "Modification du agent avec succès");
            return $this->redirectToRoute('admin_agent_list');    
        }

        return $this->render('user_category/admin/agent/edit_agent.html.twig', [
            'formUser' => $formUser->createView(),
            'formSecteur' => $formSecteur->createView(),
            'button' => 'Enregistrer',
            'secteurs' => $secteurs,
            'myAgentSecteurs' => $myAgentSecteurs,
            'agent' => $agent
        ]);    
    }

    /**
     * @Route("/admin/agent/{id}/password/generate", name="admin_agent_password_generate")
     */
    public function admin_agent_password_generate(Request $request, User $agent)
    {
        $formUserPassword = $this->createForm(ResetPasswordType::class);
        $formUserPassword->handleRequest($request);
        if ($formUserPassword->isSubmitted() && $formUserPassword->isValid()) {
            $agent->setActive(true);
            $this->userManager->setUserPasword($agent, $request->request->get('reset_password')['password']['first'], '', false);
            $this->addFlash('success', 'Utilisateur agent ajouté avec succès');
            return $this->redirectToRoute('admin_agent_list');    
        }


        return $this->render('user_category/admin/agent/generate_password_agent.html.twig', [
            'formUserPassword' => $formUserPassword->createView(),
            'button' => 'Enregistrer'
        ]);
    }


    /**
     * @Route("/admin/agent/{id}/delete", name="admin_agent_delete")
     */
    public function admin_agent_delete(User $agent, Request $request)
    {
        if ($this->isCsrfTokenValid('delete'. $agent->getId(), $request->get('_token'))) {
            $this->repoCoachAgent->removeCoachOrAgent($agent, $this->entityManager);

            $this->addFlash( 'danger', 'Agent supprimé');
        }
        return $this->redirectToRoute('admin_agent_list');    
    }

    /**
     * @Route("/admin/agent/secteur/{agentSecteur}/edit", name="admin_agent_secteur_edit")
     */
    public function admin_agent_secteur_edit(AgentSecteur $agentSecteur, Request $request)
    {
        $data = $_POST;
        $secteur = $this->repoSecteur->find($data["newSecteurId"]);
        
        // On gère le cas, où il y a une duplication du secteur
        $agent = $this->repoUser->find($data["userId"]);
        $myAllAgentSecteurs = $this->repoAgentSecteur->findBy(['agent' => $agent]);
        $isNewSectorInArray =  $this->agentSecteurService->isNewSectorInArray($secteur, $myAllAgentSecteurs);
        if ($isNewSectorInArray) {
            return $this->json([
                'edit' => 'error',
                'cause' => 'duplication_sector'
            ], 200); 
        }

        // Si il n'y a pas de doublon, on sauvegarde la modification
        if ($request->getMethod() === "POST") {
            $agentSecteur->setSecteur($secteur);
            $this->entityManager->save($agentSecteur);

            return $this->json([
                'edit' => 'successfully',
                'newSector' => $secteur->getNom()
            ], 200);    
        }
    }    

    /**
     * Permet de valider le secteur en attente de l'agent
     * 
     * @Route("/admin/agent/secteur/{agentSecteur}/validate", name="admin_agent_secteur_validate")
     */
    public function admin_agent_secteur_validate(AgentSecteur $agentSecteur, Request $request): Response
    {
        if ($request->getMethod() === "POST") {
            $agentSecteur->setStatut(1);
            $agentSecteur->setDateValidation(new \DateTime());
            $this->entityManager->save($agentSecteur);
            return $this->json([
                'validation' => 'successfully'
            ], 200); 
        }
        return $this->render('$0.html.twig', []);
    }

    /**
     * Permet de bloquer un secteur validé de l'agent
     * 
     * @Route("/admin/agent/secteur/{agentSecteur}/invalidate", name="admin_agent_secteur_invalidate")
     */
    public function admin_agent_secteur_invalidate(AgentSecteur $agentSecteur, Request $request): Response
    {
        if ($request->getMethod() === "POST") {
            $agentSecteur->setStatut(0);
            $this->entityManager->save($agentSecteur);
            return $this->json([
                'invalidation' => 'successfully'
            ], 200); 
        }
        return $this->render('$0.html.twig', []);
    }
}