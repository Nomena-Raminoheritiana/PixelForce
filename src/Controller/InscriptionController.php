<?php


namespace App\Controller;


use App\Entity\User;
use App\Form\ResetPasswordType;
use App\Form\UserType;
use App\Manager\EntityManager;
use App\Manager\ObjectManager;
use App\Manager\UserManager;
use App\Repository\UserRepository;
use App\Services\MailerService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Validator\ConstraintViolationList;
use Symfony\Component\Validator\Validator\ValidatorInterface;

class InscriptionController extends AbstractController
{
    /**
     * @var EntityManager
     */
    private $entityManager;
    /**
     * @var UserRepository
     */
    private $userRepository;
    /**
     * @var UserManager
     */
    private $userManager;
    /**
     * @var MailerService
     */
    private $mailerService;
    /**
     * @var ObjectManager
     */
    private $objectManager;

    public function __construct(EntityManager $entityManager, UserRepository $userRepository, UserManager $userManager, MailerService $mailerService, ObjectManager $objectManager)
    {
        $this->entityManager = $entityManager;
        $this->userRepository = $userRepository;
        $this->userManager = $userManager;
        $this->mailerService = $mailerService;
        $this->objectManager = $objectManager;
    }

    /**
     * @Route("/inscription/sendMailInscription", name="inscription_send_mail")
     */
    public function sendUserMailInscription(Request $request)
    {
        if($emails = $request->request->get('emails')) {
            $listDuplicatedMail = [];
            $emailEmpty = true;
            foreach($emails as $email) {
                /** @var ConstraintViolationList $error */
                $error = null;
                if(!empty($email)) {
                    $emailEmpty = false;
                    $error = $this->objectManager->createObject(User::class, [
                        'email' => $email,
                        'password' => base64_encode('_dfdkf12132_1321df')
                    ], true);

                    if(($error instanceof ConstraintViolationList && $error->count() === 0 )|| $error instanceof User) {
                        $this->mailerService->sendMail([
                            'subject' => 'Code de vérification',
                            'from' => $_ENV['MAILER_SEND_FROM'],
                            'from_name' => $_ENV['MAILER_SEND_FROM_NAME'],
                            'to' => [
                                $email
                            ],
                            'template' => 'inscription/lien_page_inscription.html.twig',
                            'template_vars' => [
                                'encodedMail' => base64_encode($email)
                            ]
                        ]);
                    } else {
                        array_push($listDuplicatedMail, $email);
                    }

                }
            }

            if(count($listDuplicatedMail) > 0) {
                $this->addFlash('danger', implode(', ',$listDuplicatedMail).' est/sont déjà insrit à la plateforme');
                return $this->redirectToRoute('user_addAgent');
            }

            if($emailEmpty) {
                $this->addFlash('danger', 'Veuillez entrer au moins un adresse email');
                return $this->redirectToRoute('user_addAgent');
            }

            $this->addFlash('success', 'Mail d\'inscription envoyé avec succès');
        }

        return $this->redirectToRoute('user_list');

    }

    /**
     * @Route("/inscription/index/{encodedMail}", name="inscription_index")
     */
    public function inscription(Request $request, $encodedMail)
    {
        $user = $this->userRepository->findOneBy(['email' => base64_decode($encodedMail)]);
        if($user) {
            $form = $this->createForm(UserType::class, $user);
            $form->handleRequest($request);

            if($form->isSubmitted() && $form->isValid()) {
                $this->entityManager->save($user);
                $user = $this->userManager->generateSixDigitKey($user->getEmail());
                $this->addFlash('success', 'Informations enregistrés avec succès');
                return $this->redirectToRoute('inscription_init_password', [
                    'id' => $user->getId(),
                    'sixDigitCode' => $user->getSixDigitCode()
                ]);

            }

            return $this->render('security/inscription/form.html.twig', [
                'form' => $form->createView()
            ]);
        }

        return new Response('',404);

    }

    /**
     * @Route("/inscription/initialisation/password/{id}", name="inscription_init_password")
     */
    public function initialisationPassword(Request $request, User $user)
    {
        if($user->validateSixDigitCode($request->request->get('sixDigitCode'))) {
            $user = $this->userManager->generateSixDigitKey($user->getEmail());
            $form = $this->createForm(ResetPasswordType::class, new User());
            $form->handleRequest($request);
            if ($form->isSubmitted() && $form->isValid()) {
                $this->userManager->setUserPasword($user, $request->request->get('reset_password')['password']['first'], '');
                $this->addFlash('success', 'Votre mot de passe est enregistré avec succès');
                $this->addFlash('info', 'Veuillez vous connecter');
                return $this->redirectToRoute('app_login');
            }

            return $this->render('security/inscription/init_password.html.twig', [
                'user' => $user,
                'form' => $form->createView()
            ]);
        }
        $this->addFlash('danger', 'La page que vous demandez n\'existe plus');
        return $this->redirectToRoute('app_login');

    }

}