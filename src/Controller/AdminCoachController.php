<?php


namespace App\Controller;

use App\Entity\SearchEntity\UserSearch;
use App\Form\UserSearchType;
use App\Repository\UserRepository;
use Knp\Component\Pager\PaginatorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class AdminCoachController extends AbstractController
{
    protected $repoUser;

    public function __construct(UserRepository $repoUser)
    {
        $this->repoUser = $repoUser;
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
}