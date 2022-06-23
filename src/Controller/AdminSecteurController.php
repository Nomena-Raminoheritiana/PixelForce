<?php


namespace App\Controller;

use App\Entity\CoachSecteur;
use App\Entity\Secteur;
use App\Entity\User;
use App\Form\SecteurType;
use App\Manager\EntityManager;
use App\Manager\UserManager;
use App\Repository\CoachAgentRepository;
use App\Repository\CoachSecteurRepository;
use App\Repository\SecteurRepository;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityRepository;
use Knp\Component\Pager\PaginatorInterface;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class AdminSecteurController extends AbstractController
{
    protected $repoUser;
    protected $entityManager;
    protected $userManager;
    protected $repoCoachAgent;
    protected $repoSecteur;
    protected $repoCoachSecteur;

    public function __construct(
        UserRepository $repoUser,
        EntityManager $entityManager,
        UserManager $userManager,
        CoachAgentRepository $repoCoachAgent,
        SecteurRepository $repoSecteur,
        CoachSecteurRepository $repoCoachSecteur)
    {
        $this->repoUser = $repoUser;
        $this->entityManager = $entityManager;
        $this->userManager = $userManager;
        $this->repoCoachAgent = $repoCoachAgent;
        $this->repoSecteur = $repoSecteur;
        $this->repoCoachSecteur = $repoCoachSecteur;
    }

    /**
     * @Route("/admin/secteur/liste", name="admin_sector_list")
     */
    public function admin_sector_list(Request $request, PaginatorInterface $paginator)
    {        
        $sectors = $this->repoSecteur->findAll();

        return $this->render('user_category/admin/sector/list_sectors.html.twig', [
            'sectors' => $sectors,
            'repoCoachSecteur' => $this->repoCoachSecteur
        ]);
    }

    /**
     * @Route("/admin/secteur/add", name="admin_sector_add")
     */
    public function admin_sector_add(Request $request)
    {
        $sector = new Secteur();
        $coachSecteur = new CoachSecteur();
        $formSecteur = $this->createForm(SecteurType::class, $sector)
            // ->add('coach', EntityType::class, [
            //     'mapped' => false,
            //     'class' => User::class,
            //     'choice_label' => 'prenom',
            //     'query_builder' => function (EntityRepository $er) {
            //         return $er->createQueryBuilder('u')
            //             ->where('u.roles LIKE :role')
            //             ->setParameter('role', '%'. User::ROLE_COACH.'%');
            //         ;
            //     }
            // ])
        ;

        $formSecteur->handleRequest($request);
        if ($formSecteur->isSubmitted() && $formSecteur->isValid()) {
            $this->entityManager->save($sector);
            
            // $coachId = $request->request->get('secteur')['coach'];
            // $coach = $this->repoUser->find($coachId);
            // $coachSecteur->setCoach($coach);
            $coachSecteur->setSecteur($sector);
            $this->entityManager->save($coachSecteur);

            $this->addFlash('success', "Ajout d'un secteur avec succès");
            return $this->redirectToRoute('admin_sector_list');    
        }

        return $this->render('user_category/admin/sector/add_sector.html.twig', [
            'formSecteur' => $formSecteur->createView()
        ]);    
    }


    /**
     * @Route("/admin/secteur/{id}/edit", name="admin_sector_edit")
     */
    public function admin_sector_edit(Request $request, Secteur $sector)
    {
        $formSecteur = $this->createForm(SecteurType::class, $sector);

        $formSecteur->handleRequest($request);
        if ($formSecteur->isSubmitted() && $formSecteur->isValid()) {
            $this->entityManager->save($sector);
            $this->addFlash('success', "Modification secteur avec succès");
            return $this->redirectToRoute('admin_sector_list');    
        }

        return $this->render('user_category/admin/sector/edit_sector.html.twig', [
            'formSecteur' => $formSecteur->createView(),
            'sector' => $sector
        ]);    
    }

    /**
     * @Route("/admin/secteur/{id}/delete", name="admin_sector_delete")
     */
    public function admin_sector_delete(Secteur $sector, Request $request)
    {
        if ($this->isCsrfTokenValid('delete'. $sector->getId(), $request->get('_token'))) {
            $sector->setActive(-1);
            $this->entityManager->save($sector);

            $this->addFlash( 'danger', 'Secteur supprimé');
        }
        return $this->redirectToRoute('admin_sector_list');    
    }
}