<?php


namespace App\Controller;


use App\Entity\Formation;
use App\Manager\EntityManager;
use App\Repository\FormationAgentRepository;
use App\Repository\FormationRepository;
use Knp\Component\Pager\PaginatorInterface;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class AgentFormationController extends AbstractController
{
    /**
     * @var PaginatorInterface
     */
    private $paginator;
    /**
     * @var FormationRepository
     */
    private $formationRepository;
    /**
     * @var FormationAgentRepository
     */
    private $formationAgentRepository;
    /**
     * @var EntityManager
     */
    private $entityManager;

    public function __construct(EntityManager $entityManager, PaginatorInterface $paginator, FormationRepository $formationRepository, FormationAgentRepository $formationAgentRepository)
    {
        $this->paginator = $paginator;
        $this->formationRepository = $formationRepository;
        $this->formationAgentRepository = $formationAgentRepository;
        $this->entityManager = $entityManager;
    }

    /**
     * @Route("/agent/formation/list", name="agent_formation_list", options={"expose"=true})
     * @IsGranted("ROLE_AGENT")
     */
    public function agent_formation_list(Request $request)
    {
        // todo: miandry anle login agent izay ataon Tsiory mba haazaoana ilay session micontenir anle secteur
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
            'criteres' => $criteres,
            'formationAgentRepository' => $this->formationAgentRepository
        ]);
    }

    /**
     * @Route("/agent/formation/fiche/{id}", name="agent_formation_fiche", options={"expose"=true})
     * @IsGranted("ROLE_AGENT")
     * @IsGranted("agent_fiche", subject="formation")
     */
    public function coach_formation_fiche(Formation $formation, Request $request)
    {
       return $this->render('formation/video/agent_formation_fiche.html.twig', [
           'formation' => $formation,
           'formationAgentRepository' => $this->formationAgentRepository
       ]);
    }

    /**
     * @Route("/agent/formation/terminer/{id}", name="agent_formation_terminer", options={"expose"=true})
     * @IsGranted("ROLE_AGENT")
     * @IsGranted("agent_fiche", subject="formation")
     */
    public function coach_formation_terminer(Formation $formation, Request $request)
    {
       $formationAgentRelation = $this->formationAgentRepository->findOneBy(['formation' => $formation, 'agent' => $this->getUser()]);
       if($formationAgentRelation) {
           $formationAgentRelation->setStatut(Formation::STATUT_TERMINER);
           $this->entityManager->save($formationAgentRelation);
       }

       $this->addFlash('success', 'Vous venez de terminer la formation : '.$formation->getTitre());
       return $this->redirectToRoute('agent_formation_list');
    }

}