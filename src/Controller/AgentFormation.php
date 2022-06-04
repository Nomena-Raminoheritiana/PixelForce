<?php


namespace App\Controller;


use App\Repository\FormationRepository;
use Knp\Component\Pager\PaginatorInterface;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class AgentFormation extends AbstractController
{
    /**
     * @var PaginatorInterface
     */
    private $paginator;
    /**
     * @var FormationRepository
     */
    private $formationRepository;

    public function __construct(PaginatorInterface $paginator, FormationRepository $formationRepository)
    {
        $this->paginator = $paginator;
        $this->formationRepository = $formationRepository;
    }

    /**
     * @Route("/agent/formation/list", name="agent_formation_list", options={"expose"=true})
     * @IsGranted("ROLE_AGENT")
     */
    public function agent_formation_list(Request $request)
    {
        $secteur = $this->getUser()->getAgentSecteurs()->get(0)->getSecteur();
        if($criteres = $request->query->get('q')) {
            $formations = $this->formationRepository->searchForAgent($criteres, $secteur);
        } else {
            $formations = $secteur ? $this->formationRepository->AgentfindBySecteur($secteur) : [];
        }
        $formations = $this->paginator->paginate(
            $formations,
            $request->query->getInt('page', 1),
            5
        );

        return $this->render('formation/video/agent_formation_list.html.twig', [
            'formations' => $formations,
            'criteres' => $criteres
        ]);
    }

}