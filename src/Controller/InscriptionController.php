<?php


namespace App\Controller;


use App\Entity\CoachAgent;
use App\Entity\User;
use App\Form\ResetPasswordType;
use App\Form\UserType;
use App\Manager\EntityManager;
use App\Manager\ObjectManager;
use App\Manager\UserManager;
use App\Repository\UserRepository;
use App\Services\DirectoryManagement;
use App\Services\FileUploader;
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
    /**
     * @var FileUploader
     */
    private $fileUploader;
    /**
     * @var DirectoryManagement
     */
    private $directoryManagement;

    public function __construct(FileUploader $fileUploader, DirectoryManagement $directoryManagement, EntityManager $entityManager, UserRepository $userRepository, UserManager $userManager, MailerService $mailerService, ObjectManager $objectManager)
    {
        $this->entityManager = $entityManager;
        $this->userRepository = $userRepository;
        $this->userManager = $userManager;
        $this->mailerService = $mailerService;
        $this->objectManager = $objectManager;
        $this->fileUploader = $fileUploader;
        $this->directoryManagement = $directoryManagement;
    }

    /**
     * @Route("/inscription/sendMailInscription", name="inscription_send_mail")
     */
    public function sendUserMailInscription(Request $request)
    {
        if($emails = $request->request->get('emails')) {
            $listDuplicatedMail = [];

            foreach($emails as $email) {
                /** @var ConstraintViolationList $error */
                $error = null;
                $error = $this->userManager->inscrire(
                    $email,
                    $request->request->get('coach'),
                    [$request->request->get('roles')]
                    );
                if($error && !empty($email)) {
                    $listDuplicatedMail[] = $email;
                }
            }

            if(count($listDuplicatedMail) > 0) {
                $this->addFlash('danger', implode(', ',$listDuplicatedMail).' est/sont déjà insrit à la plateforme');
                return $this->redirectToRoute('user_addAgent');
            }
            if(count($emails) === 1 && empty($emails[0])) {
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
                // upload profil
                $fileName = $this->fileUploader->upload($request->files->get('user') ['photo'], $this->directoryManagement->getMediaFolder_User());
                $user->setPhoto($fileName);
                $this->entityManager->save($user);
                $user = $this->userManager->generateSixDigitKey($user->getEmail());
                $this->addFlash('success', 'Informations enregistrés avec succès');

                return $this->redirectToRoute('inscription_init_password', [
                    'id' => $user->getId(),
                    'forgottenPassToken' => $user->getForgottenPassToken()
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
        if($user->validateForgottenPassToken($request->query->get('forgottenPassToken'))) {
            $form = $this->createForm(ResetPasswordType::class);
            $form->handleRequest($request);
            if ($form->isSubmitted() && $form->isValid()) {
                $user->setActive(true);
                $this->userManager->setUserPasword($user, $request->request->get('reset_password')['password']['first'], '', false);
                $this->userManager->generateSixDigitKey($user->getEmail());
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
