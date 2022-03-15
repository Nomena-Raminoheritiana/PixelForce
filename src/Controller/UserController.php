<?php


namespace App\Controller;


use App\Repository\CoachAgentRepository;
use App\Repository\UserRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
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

    public function __construct(UserRepository $userRepository, CoachAgentRepository $coachAgentRepository)
    {
        $this->userRepository = $userRepository;
        $this->coachAgentRepository = $coachAgentRepository;
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
     */
    public function addAgent()
    {
        return $this->render('users/form_addAgent.html.twig');
    }
}
