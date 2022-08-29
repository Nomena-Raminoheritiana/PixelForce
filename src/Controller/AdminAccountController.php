<?php


namespace App\Controller;

use App\Repository\SecteurRepository;
use App\Services\Stat\StatAdminService;
use App\Services\Stat\StatAgentService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class AdminAccountController extends AbstractController
{
    /**
     * @Route("/admin/dashboard", name="admin_dashboard")
     */
    public function admin_dashboard(Request $request, StatAdminService $statAdminService, StatAgentService $statAgentService, SecteurRepository $secteurRepository)
    {
        $secteurs = $secteurRepository->getValidSecteurs();
        $secteur = null;
        
        //stat
        $secteurId = $request->get('secteurId', -1);
        if($secteurId > 0) $secteur = $secteurRepository->find($secteurId);
        $anneeActuelle = intval(date('Y'));
        $annee = $request->get('annee', $anneeActuelle);
        $statVente = $statAdminService->getStatVente();
        $nbrAgents = $statAdminService->getNbrAgents();
        $nbrCoachs = $statAdminService->getNbrCoachs();
        $nbrSecteurs = $statAdminService->getNbrSecteurs();
        $revenuAnnee = $statAgentService->getRevenuAnnee($annee, $secteurId);
        return $this->render('user_category/admin/admin_dashboard.html.twig', [
            'statVente' => $statVente,
            'revenuAnnee' => $revenuAnnee,
            'annee' => $annee,
            'anneeActuelle' => $anneeActuelle,
            'nbrCoachs' => $nbrCoachs,
            'nbrAgents' => $nbrAgents,
            'nbrSecteurs' => $nbrSecteurs,
            'secteurs' => $secteurs,
            'secteur' => $secteur
        ]);
    }
}