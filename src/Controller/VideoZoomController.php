<?php


namespace App\Controller;

use App\Manager\EntityManager;
use App\Repository\CoachAgentRepository;
use App\Repository\LiveChatVideoRepository;
use App\Services\LiveVideo;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class VideoZoomController extends AbstractController
{
    /**
     * @var CoachAgentRepository
     */
    private $coachAgentRepository;
    /**
     * @var EntityManager
     */
    private $entityManager;
    /**
     * @var LiveVideo
     */
    private $liveVideo;
    /**
     * @var LiveChatVideoRepository
     */
    private $liveChatVideoRepository;

    public function __construct(LiveVideo $liveVideo, EntityManager $entityManager, LiveChatVideoRepository $liveChatVideoRepository, CoachAgentRepository $coachAgentRepository)
    {

        $this->entityManager = $entityManager;
        $this->liveVideo = $liveVideo;
        $this->liveChatVideoRepository = $liveChatVideoRepository;
        $this->coachAgentRepository = $coachAgentRepository;
    }

    /**
     * Générique pour les coachs et les agents, utilisé pour supprimer automatiquement un appel direct
     * @param Request $request
     * @return \Symfony\Component\HttpFoundation\Response
     * @Route("/liveVideo/destruct", name="live_destruct", options={"expose"=true})
     */
    public function destruct(Request $request)
    {
       $lives = $this->liveChatVideoRepository->findByUserCode($this->getUser(), $request->query->get('code'));
       if(!empty($lives)) {
           $this->entityManager->removeMultiple($lives);
       }

       return $this->json([
           'message' => 'live supprimé'
       ]);
    }
}
