<?php


namespace App\Controller;

use App\Manager\EntityManager;
use App\Repository\CoachAgentRepository;
use App\Services\LiveVideo;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class VideoLiveController extends AbstractController
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

    public function __construct(LiveVideo $liveVideo, EntityManager $entityManager)
    {

        $this->entityManager = $entityManager;
        $this->liveVideo = $liveVideo;
    }


    /**
     * @param Request $request
     * @Route("/liveVideo/speedLive", name="live_videoRapide", options={"expose"=true})
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function liveRapide(Request $request)
    {
        $userA = base64_decode($request->request->get('userA'));
        $userB = base64_decode($request->request->get('userB'));
        $code = $request->request->get('code');
        // créer un chat s'il n'existe pas
        $this->liveVideo->createOrRemoveLive($userA, $userB, $code);

        return $this->json([
           'error' => false
        ]);

    }

    public function destruct()
    {

    }

    /**
     * @param Request $request
     * @return \Symfony\Component\HttpFoundation\JsonResponse
     * @Route("/liveVideo/join", name="live_joinLiveVideo", options={"expose"=true})
     */
    public function join(Request $request)
    {
       $lives = $this->liveVideo->getAllLive($this->getUser());


    }
}
