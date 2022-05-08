<?php


namespace App\Controller;


use App\Entity\User;
use App\Repository\CoachAgentRepository;
use App\Repository\UserRepository;
use App\Services\User\UserNormalizer;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class UserController extends AbstractController
{
    /**
     * @var UserRepository
     */
    private $userRepository;
    /**
     * @var CoachAgentRepository
     */
    private $coachAgentRepository;
    /**
     * @var UserNormalizer
     */
    private $userNormalizer;

    public function __construct(UserRepository $userRepository, CoachAgentRepository $coachAgentRepository, UserNormalizer $userNormalizer)
    {
        $this->userRepository = $userRepository;
        $this->coachAgentRepository = $coachAgentRepository;
        $this->userNormalizer = $userNormalizer;
    }

    /**
     * Normalement on affiche les users correspondant au secteur d'activité de l'user en_cours
     * Les admins peuvent voir toute la liste des utilisateurs
     * Pour le moment, on affiche tout, car aucun secteur n'est présent
     *
     * @Route("/users/list", name="user_list")
     */
    public function list()
    {
        $relationCoachAgent = $this->coachAgentRepository->findBy(['coach'=> $this->getUser()]);

        return $this->render('users/list.html.twig', [
            'relationCoachAgent' => $relationCoachAgent
        ]);
    }

    /**
     * @Route("/user/addAgent", name="user_addAgent")
     * @Route("/user/addClient", name="user_addClient")
     */
    public function addAgent(Request $request)
    {
        switch($request->attributes->get('_route')){
            case 'user_addAgent': return $this->render('users/form_addAgent.html.twig', ['role' => User::ROLE_AGENT]); break;
            case 'user_addClient': return $this->render('users/form_addClient.html.twig', ['role' => User::ROLE_CLIENT]);break;
        }
        return new Response(null, 404);
    }

    /**
     * @Route("/user/findDest", name="user_findDest", options={"expose"=true})
     */
    public function findDestinataire(Request $request)
    {
        $finder = $request->query->get('finder');
        $users = $this->userRepository->findDestinaire($finder);
        $normalizedUser = $this->userNormalizer->normalizeArrayUsers($users);
        return $this->json($normalizedUser);
    }
}
