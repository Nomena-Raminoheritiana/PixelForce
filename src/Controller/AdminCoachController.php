<?php


namespace App\Controller;

use App\Entity\SearchEntity\UserSearch;
use App\Entity\User;
use App\Form\ResetPasswordType;
use App\Form\UserSearchType;
use App\Form\UserType;
use App\Manager\EntityManager;
use App\Manager\UserManager;
use App\Repository\UserRepository;
use Knp\Component\Pager\PaginatorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class AdminCoachController extends AbstractController
{
    protected $repoUser;
    protected $entityManager;
    protected $userManager;

    public function __construct(UserRepository $repoUser, EntityManager $entityManager, UserManager $userManager)
    {
        $this->repoUser = $repoUser;
        $this->entityManager = $entityManager;
        $this->userManager = $userManager;
    }

    /**
     * @Route("/admin/coach/liste", name="admin_coach_list")
     */
    public function admin_coach_list(Request $request, PaginatorInterface $paginator)
    {
        $search = new UserSearch();
        $searchForm = $this->createForm(UserSearchType::class, $search);
        $searchForm->handleRequest($request);
        
        $coachs = $paginator->paginate(
            $this->repoUser->findAllCoachQuery($search),
            $request->query->getInt('page', 1),
            20
        );

        return $this->render('user_category/admin/coach/list_coachs.html.twig', [
            'coachs' => $coachs,
            'searchForm' => $searchForm->createView()
        ]);
    }

    /**
     * @Route("/admin/coach/{id}//view", name="admin_coach_view")
     */
    public function admin_coach_view(User $coach)
    {
        return $this->render('user_category/admin/coach/view_coach.html.twig', [
            'coach' => $coach
        ]);
    }

    /**
     * @Route("/admin/coach/add", name="admin_coach_add")
     */
    public function admin_coach_add(Request $request)
    {
        $coach = new User();

        $formUser = $this->createForm(UserType::class, $coach)
            ->remove('photo')
            ->add('email')
        ;
       
        $formUser->handleRequest($request);
        if ($formUser->isSubmitted() && $formUser->isValid()) {
            $coach->setRoles(["ROLE_COACH"]);
            $coach->setPassword(base64_encode('_dfdkf12132_1321df'));
            
            $this->entityManager->save($coach);

            $this->addFlash('success', "Information enregistrée avec succès, procéder maintenant à la création de son mot de passe");
            return $this->redirectToRoute('admin_coach_password_generate', ['id' =>  $coach->getId()]);    
        }

        return $this->render('user_category/admin/coach/add_coach.html.twig', [
            'formUser' => $formUser->createView(),
            'button' => 'Enregistrer'
        ]);    
    }

    /**
     * @Route("/admin/coach/{id}/edit", name="admin_coach_edit")
     */
    public function admin_coach_edit(Request $request, User $coach)
    {
        $formUser = $this->createForm(UserType::class, $coach)
            ->remove('photo')
            ->add('email')
        ;
       
        $formUser->handleRequest($request);
        if ($formUser->isSubmitted() && $formUser->isValid()) {
            $this->entityManager->save($coach);
            $this->addFlash('success', "Modification du coach avec succès");
            return $this->redirectToRoute('admin_coach_list');    
        }

        return $this->render('user_category/admin/coach/add_coach.html.twig', [
            'formUser' => $formUser->createView()
        ]);    
    }

    /**
     * @Route("/admin/coach/{id}/password/generate", name="admin_coach_password_generate")
     */
    public function admin_coach_password_generate(Request $request, User $coach)
    {
        $formUserPassword = $this->createForm(ResetPasswordType::class);
        $formUserPassword->handleRequest($request);
        if ($formUserPassword->isSubmitted() && $formUserPassword->isValid()) {
            $coach->setActive(true);
            $this->userManager->setUserPasword($coach, $request->request->get('reset_password')['password']['first'], '', false);
            $this->addFlash('success', 'Utilisateur coach ajouté avec succès');
            return $this->redirectToRoute('admin_coach_list');    
        }


        return $this->render('user_category/admin/coach/generate_password_coach.html.twig', [
            'formUserPassword' => $formUserPassword->createView(),
            'button' => 'Enregistrer'
        ]);
    }


    /**
     * @Route("/admin/coach/{id}/delete", name="admin_coach_delete")
     */
    public function admin_coach_delete(User $coach, Request $request)
    {
        if ($this->isCsrfTokenValid('delete'. $coach->getId(), $request->get('_token'))) {
            $this->entityManager->delete($coach);
            $this->addFlash(
                'danger',
                'Coach supprimé'
             );
        }
        return $this->redirectToRoute('admin_coach_list');    
    }
    
}