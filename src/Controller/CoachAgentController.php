<?php

namespace App\Controller;

use App\Entity\SearchEntity\UserSearch;
use App\Entity\User;
use App\Form\UserSearchType;
use App\Repository\CoachAgentRepository;
use App\Repository\UserRepository;
use Knp\Component\Pager\PaginatorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class CoachAgentController extends AbstractController
{
    protected $coachAgentRepository;
    protected $repoUser;

    public function __construct(CoachAgentRepository $coachAgentRepository, UserRepository $repoUser)
    {
        $this->coachAgentRepository = $coachAgentRepository;
        $this->repoUser = $repoUser;
    }

    /**
     * @Route("/coach/agent/list", name="coach_agent_list")
     */
    public function coach_agent_list(Request $request, PaginatorInterface $paginator)
    {
        /** @var User $coach */
        $coach = $this->getUser();

        $search = new UserSearch();
        $searchForm = $this->createForm(UserSearchType::class, $search);
        $searchForm->handleRequest($request);
        
        $coachAgentRelations = $paginator->paginate(
            $this->coachAgentRepository->findAgentByCoach($search, $coach),
            $request->query->getInt('page', 1),
            20
        );

        return $this->render('user_category/coach/agent/list_agents.html.twig', [
            'coachAgentRelations' => $coachAgentRelations,
            'searchForm' => $searchForm->createView()
        ]);
    }

    /**
     * @Route("/coach/agent/{id}//view", name="coach_agent_view")
     */
    public function coach_agent_view(User $agent)
    {
        return $this->render('user_category/coach/agent/view_agent.html.twig', [
            'agent' => $agent
        ]);
    }


}
