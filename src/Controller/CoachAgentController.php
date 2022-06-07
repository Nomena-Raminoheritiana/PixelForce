<?php

namespace App\Controller;

use App\Entity\AgentSecteur;
use App\Entity\CoachAgent;
use App\Entity\SearchEntity\UserSearch;
use App\Entity\User;
use App\Entity\UserSecteur;
use App\Form\InscriptionAgentType;
use App\Form\MultipleSecteurType;
use App\Form\UserSearchType;
use App\Manager\EntityManager;
use App\Manager\UserManager;
use App\Repository\AgentSecteurRepository;
use App\Repository\CoachAgentRepository;
use App\Repository\CoachSecteurRepository;
use App\Repository\SecteurRepository;
use App\Repository\UserRepository;
use App\Repository\UserSecteurRepository;
use App\Services\AgentSecteurService;
use Knp\Component\Pager\PaginatorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class CoachAgentController extends AbstractController
{
    protected $coachAgentRepository;
    protected $repoUser;
    protected $userManager;
    protected $entityManager;
    protected $repoCoachSecteur;

    protected $repoAgentSecteur;

    public function __construct(CoachAgentRepository $coachAgentRepository, UserRepository $repoUser, UserManager $userManager, EntityManager $entityManager, CoachSecteurRepository $repoCoachSecteur, AgentSecteurRepository $repoAgentSecteur)
    {
        $this->coachAgentRepository = $coachAgentRepository;
        $this->repoUser = $repoUser;
        $this->userManager = $userManager;
        $this->entityManager = $entityManager;
        $this->repoCoachSecteur = $repoCoachSecteur;
        $this->repoAgentSecteur = $repoAgentSecteur;
    }

    /**
     * @Route("/coach/agent/list", name="coach_agent_list")
     */
    public function coach_agent_list(Request $request, PaginatorInterface $paginator)
    {
        /** @var User $coach */
        $coach = $this->getUser();

        $search = new UserSearch();
        $searchForm = $this->createForm(UserSearchType::class, $search)->remove('secteur');
        $searchForm->handleRequest($request);
        $agents = $paginator->paginate(
            $this->coachAgentRepository->findAgentByCoach($search, $coach),
            $request->query->getInt('page', 1),
            20
        );

        return $this->render('user_category/coach/agent/list_agents.html.twig', [
            'agents' => $agents,
            'searchForm' => $searchForm->createView()
        ]);
    }

    
    /**
     * @Route("/coach/agent/add", name="coach_agent_add")
     */
    public function coach_agent_add(Request $request, SecteurRepository $secteurRepository, AgentSecteurRepository $tset)
    {
        $user = new User();
        $coach = $this->getUser();

        $agentSecteur = new AgentSecteur();
        $coachAgent = new CoachAgent();
        $formUser = $this->createForm(InscriptionAgentType::class, $user)->remove('secteur');
        $formUser->handleRequest($request);

        if($formUser->isSubmitted() && $formUser->isValid()) {
            $this->userManager->setUserPasword($user, $request->request->get('inscription_agent')['password']['first'], '', false);
            $agentSecteur->setAgent($user);
            $secteur = $this->repoCoachSecteur->findBy(['coach' => $coach])[0]->getSecteur();
            $agentSecteur->setSecteur($secteur);
            $user->setRoles([ User::ROLE_AGENT ]);
            $coachAgent->setCoach($this->getUser());
            $coachAgent->setAgent($user);
            $this->entityManager->save($user);
            $this->entityManager->save($agentSecteur);
            $this->entityManager->save($coachAgent);

            $this->addFlash('success', 'Ajout de l\'utilisateur Agent efféctué avec succès');
            return $this->redirectToRoute('coach_agent_list');

        }

        return $this->render('user_category/coach/agent/add_agent.html.twig', [
            'formUser' => $formUser->createView()
        ]);

    }

    /**
     * @Route("/coach/agent/{id}/view", name="coach_agent_view")
     */
    public function coach_agent_view(User $agent,  AgentSecteurService $agentSecteurService)
    {
        $agentSecteurs = $this->repoAgentSecteur->findBy(['agent' => $agent]);
        $secteurs = $agentSecteurService->getSecteurs($agentSecteurs);
        $repoCoachSecteur = $this->getDoctrine()->getManager()->getRepository('App:CoachSecteur');

        return $this->render('user_category/coach/agent/view_agent.html.twig', [
            'agent' => $agent,
            'agentSecteurs' => $agentSecteurs,
            'secteurs' => $secteurs,
            'repoCoachSecteur' => $repoCoachSecteur,
        ]);
    }


    
    /**
     * Permet de valider le secteur en attente de l'agent
     * 
     * @Route("/coach/agent/secteur/{agentSecteur}/validate", name="coach_agent_secteur_validate")
     */
    public function coach_agent_secteur_validate(AgentSecteur $agentSecteur, Request $request): Response
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
     * @Route("/coach/agent/secteur/{agentSecteur}/invalidate", name="coach_agent_secteur_invalidate")
     */
    public function coach_agent_secteur_invalidate(AgentSecteur $agentSecteur, Request $request): Response
    {
        if ($request->getMethod() === "POST") {
            $agentSecteur->setStatut(0);
            $this->entityManager->save($agentSecteur);
            return $this->json([
                'invalidation' => 'successfully'
            ], 200); 
        }
    }
}
