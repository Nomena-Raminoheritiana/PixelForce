<?php


namespace App\Controller;

use App\Entity\CoachSecteur;
use App\Entity\SearchEntity\UserSearch;
use App\Entity\Secteur;
use App\Entity\User;
use App\Form\AgentSecteurType;
use App\Form\CoachSecteurType;
use App\Form\ResetPasswordType;
use App\Form\SecteurType;
use App\Form\UserSearchType;
use App\Form\UserSecteurType;
use App\Form\UserType;
use App\Manager\EntityManager;
use App\Manager\UserManager;
use App\Repository\CoachAgentRepository;
use App\Repository\CoachSecteurRepository;
use App\Repository\SecteurRepository;
use App\Repository\UserRepository;
use App\Services\AgentSecteurService;
use Knp\Component\Pager\PaginatorInterface;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class AdminCoachController extends AbstractController
{
    protected $repoUser;
    protected $entityManager;
    protected $userManager;

    protected $repoCoachAgent;

    protected $repoSecteur;

    protected $repoCoachSecteur;

    public function __construct(UserRepository $repoUser, EntityManager $entityManager, UserManager $userManager, CoachAgentRepository $repoCoachAgent, SecteurRepository $repoSecteur, CoachSecteurRepository $repoCoachSecteur)
    {
        $this->repoUser = $repoUser;
        $this->entityManager = $entityManager;
        $this->userManager = $userManager;
        $this->repoCoachAgent = $repoCoachAgent;
        $this->repoSecteur = $repoSecteur;
        $this->repoCoachSecteur = $repoCoachSecteur;
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
            $this->repoUser->findCoachOrAgentQuery($search, User::ROLE_COACH),
            $request->query->getInt('page', 1),
            20
        );

        return $this->render('user_category/admin/coach/list_coachs.html.twig', [
            'coachs' => $coachs,
            'searchForm' => $searchForm->createView(),
            'repoCoachSecteur' => $this->repoCoachSecteur
        ]);
    }

    /**
     * @Route("/admin/coach/{id}/view", name="admin_coach_view")
     */
    public function admin_coach_view(User $coach, AgentSecteurService $agentSecteurService)
    {
        $coachtSecteurs = $this->repoCoachSecteur->findBy(['coach' => $coach]);
        $secteurs = $agentSecteurService->getSecteurs($coachtSecteurs);

        return $this->render('user_category/admin/coach/view_coach.html.twig', [
            'coach' => $coach,
            'secteurs' => $secteurs,
            'coachtSecteurs' => $coachtSecteurs
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

            $this->addFlash('primary', "Information enregistrée avec succès, choisissez son secteur");
            return $this->redirectToRoute('admin_coach_secteur_relate', ['id' =>  $coach->getId()]);    
        }

        return $this->render('user_category/admin/coach/add_coach.html.twig', [
            'formUser' => $formUser->createView(),
            'button' => 'Suivant'
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
       
        $coachSecteur = $this->repoCoachSecteur->findBy(['coach' => $coach]);
        if ($coachSecteur) {
            $coachSecteur = $coachSecteur[0];
        }
       
        $formSecteur = $this->createForm(CoachSecteurType::class);

        $formUser->handleRequest($request);
        if ($formUser->isSubmitted() && $formUser->isValid()) {
            $this->entityManager->save($coach);
            $this->addFlash('success', "Modification du coach avec succès");
            return $this->redirectToRoute('admin_coach_list');    
        }

        return $this->render('user_category/admin/coach/edit_coach.html.twig', [
            'formUser' => $formUser->createView(),
            'coach' => $coach,
            'coachSecteur' => $coachSecteur,
            'formSecteur' => $formSecteur->createView()
        ]);    
    }

    /**
     * @Route("/admin/coach/{id}/secteur/relate", name="admin_coach_secteur_relate")
     */
    public function admin_coach_secteur_relate(Request $request, User $coach)
    {
        $coachSecteur = new CoachSecteur();
        $formCoachSecteur = $this->createFormBuilder($coachSecteur)
            ->add('secteur', EntityType::class, [
                'label'=> false,
                'class'=> Secteur::class,
                'choice_label' => 'nom'
            ])
            ->getForm()
        ;
        $formCoachSecteur->handleRequest($request);

        $button = 'Suivant';
        if ($request->query->get('edition') === 'attribution_only') {
            $button = 'Enregistrer';
        }
        
        if ($formCoachSecteur->isSubmitted() && $formCoachSecteur->isValid()) {
            $secteurId = $request->request->get('form')['secteur'];
            $coach->setActive(true);
            $coachSecteur->setCoach($coach);
            $coachSecteur->setSecteur($this->repoSecteur->find($secteurId));
            $this->entityManager->save($coachSecteur);

            if ($request->query->get('edition') === 'attribution_only') {
                $this->addFlash('success', 'Secteur attribué avec succès');
                return $this->redirectToRoute('admin_coach_list');    
            }

            $this->addFlash('primary', "Secteur choisi avec succès, procéder maintenant à la création de son mot de passe");
            return $this->redirectToRoute('admin_coach_password_generate', ['id' => $coach->getId()]);    
        }
        return $this->render('user_category/admin/coach/relate_secteur.html.twig', [
            'formCoachSecteur' => $formCoachSecteur->createView(),
            'coach' => $coach,
            'button' => $button
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
            $this->repoCoachAgent->removeCoachOrAgent($coach, $this->entityManager);

            $this->addFlash('danger', 'Coach supprimé');
        }
        return $this->redirectToRoute('admin_coach_list');    
    }
    
    
    /**
     * @Route("/admin/coach/secteur/{coachSecteur}/edit", name="admin_coach_secteur_edit")
     */
    public function admin_coach_secteur_edit(CoachSecteur $coachSecteur, Request $request)
    {
        $data = $_POST;

        $secteur = $this->repoSecteur->find($data["newSecteurId"]);
        
        // Si il n'y a pas de doublon, on sauvegarde la modification
        if ($request->getMethod() === "POST") {
            $coachSecteur->setSecteur($secteur);
            $this->entityManager->save($coachSecteur);

            return $this->json([
                'edit' => 'successfully',
                'newSector' => $secteur->getNom()
            ], 200);    
        }
    }    
}