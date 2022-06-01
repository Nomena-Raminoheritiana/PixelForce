<?php


namespace App\Controller;

use App\Entity\CoachAgent;
use App\Entity\SearchEntity\UserSearch;
use App\Entity\User;
use App\Form\ResetPasswordType;
use App\Form\UserSearchType;
use App\Form\UserType;
use App\Manager\EntityManager;
use App\Manager\UserManager;
use App\Repository\CoachAgentRepository;
use App\Repository\UserRepository;
use Knp\Component\Pager\PaginatorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class AdminAgentController extends AbstractController
{
    protected $repoUser;
    protected $entityManager;
    protected $userManager;
    protected $repoCoachAgent;

    public function __construct(UserRepository $repoUser, EntityManager $entityManager, UserManager $userManager, CoachAgentRepository $repoCoachAgent)
    {
        $this->repoUser = $repoUser;
        $this->entityManager = $entityManager;
        $this->userManager = $userManager;
        $this->repoCoachAgent = $repoCoachAgent;
    }

    /**
     * @Route("/admin/agent/liste", name="admin_agent_list")
     */
    public function admin_agent_list(Request $request, PaginatorInterface $paginator)
    {
        $search = new UserSearch();
        $searchForm = $this->createForm(UserSearchType::class, $search);
        $searchForm->handleRequest($request);
        
        $agents = $paginator->paginate(
            $this->repoUser->findUserByRoleQuery($search, 'AGENT'),
            $request->query->getInt('page', 1),
            20
        );

        return $this->render('user_category/admin/agent/list_agents.html.twig', [
            'agents' => $agents,
            'searchForm' => $searchForm->createView()
        ]);
    }

    /**
     * @Route("/admin/agent/{id}//view", name="admin_agent_view")
     */
    public function admin_agent_view(User $agent)
    {

        return $this->render('user_category/admin/agent/view_agent.html.twig', [
            'agent' => $agent
        ]);
    }


    /**
     * @Route("/admin/agent/{id}/edit", name="admin_agent_edit")
     */
    public function admin_agent_edit(Request $request, User $agent)
    {
        $formUser = $this->createForm(UserType::class, $agent)
            ->remove('photo')
            ->add('email')
        ;
       
        $formUser->handleRequest($request);
        if ($formUser->isSubmitted() && $formUser->isValid()) {
            $this->entityManager->save($agent);
            $this->addFlash('success', "Modification du agent avec succès");
            return $this->redirectToRoute('admin_agent_list');    
        }

        return $this->render('user_category/admin/agent/edit_agent.html.twig', [
            'formUser' => $formUser->createView(),
            'button' => 'Enregistrer'
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
    
}