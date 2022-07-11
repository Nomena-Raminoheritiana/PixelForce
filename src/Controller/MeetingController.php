<?php


namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\UserRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
/**
 * @Route("/meeting")
 */
class MeetingController extends AbstractController
{
    private $userRepository;
    public function __construct(UserRepository $userRepository){
        $this->userRepository = $userRepository;
    }
    /**
     * @Route("/form/{id}", name="meeting_form")
     */
    public function meet($id)
    {
        $userToMeet = $this->userRepository->find($id);
        // return new JsonResponse($userToMeet);
        return $this->render('meeting/meeting-form.html.twig', [
            'userToMeet' => $userToMeet
        ]);
    }
}