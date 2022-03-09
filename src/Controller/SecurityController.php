<?php

namespace App\Controller;

use App\Entity\User;
use App\Manager\UserManager;
use App\Repository\UserRepository;
use App\Services\GenerateKey;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;

class SecurityController extends AbstractController
{
    /**
     * @var UserRepository
     */
    private $userRepository;

    public function __construct(UserRepository $userRepository)
    {
        $this->userRepository = $userRepository;
    }

    /**
     * @Route("/login", name="app_login")
     */
    public function login(AuthenticationUtils $authenticationUtils): Response
    {
        // if ($this->getUser()) {
        //     return $this->redirectToRoute('target_path');
        // }

        // get the login error if there is one
        $error = $authenticationUtils->getLastAuthenticationError();
        // last username entered by the user
        $lastUsername = $authenticationUtils->getLastUsername();

        return $this->render('security/login.html.twig', ['last_username' => $lastUsername, 'error' => $error]);
    }

    /**
     * @Route("/logout", name="app_logout")
     */
    public function logout(): void
    {
        throw new \LogicException('This method can be blank - it will be intercepted by the logout key on your firewall.');
    }

    /**
     * @Route("/forgetPassword", name="app_forgetPassword")
     *
     * @param Request $request
     * @return Response
     */
    public function forgetPassword(Request $request)
    {
        if($email = $request->request->get('email')) {
           return $this->redirectToRoute('app_regenerCode', [
               'email' => $email,
           ]);
        }
        return $this->render('security/forgetPassword.html.twig', [
            'error' => $request->query->get('error')
        ]);
    }

    /**
     * @Route("/forgetPassword/regenerCode", name="app_regenerCode")
     */
    public function regenerCode(Request $request, UserManager $userManager)
    {
        if($email = $request->query->get('email')) {
            $user =  $userManager->generateSixDigitKey($email);
            if($user) {
                $this->addFlash('success', 'Un code vous a été envoyé');
                return $this->redirectToRoute('app_forgetPassword_getCode', [
                    'id' => $user->getId(),
                ]);
            }
        }

        return $this->redirectToRoute('app_forgetPassword', [
            'error' => true
        ]);

    }


    /**
     * @route("/forgetPassword/getCode/{id}", name="app_forgetPassword_getCode")
     * @param User $user
     * @param Request $request
     */
    public function forgetPasswordGetCode(User $user, Request $request)
    {
        return $this->render('security/forgetPassword_getCode.html.twig', [
            'user' => $user
        ]);
    }

}
