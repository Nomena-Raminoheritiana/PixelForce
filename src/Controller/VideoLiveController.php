<?php


namespace App\Controller;

use App\Manager\EntityManager;
use App\Repository\CoachAgentRepository;
use App\Repository\LiveChatVideoRepository;
use App\Services\LiveVideo;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Csrf\TokenGenerator\TokenGeneratorInterface;

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
        $this->liveVideo->create($userA, $userB, $code, true);

        return $this->json([
           'error' => false
        ]);

    }

    /**
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

       if($request->isXmlHttpRequest()) {
           return $this->json([
               'message' => 'live supprimé'
           ]);
       }
       $this->addFlash('success', 'Live supprimé');
       return $this->redirectToRoute('live_video_list');
    }

    /**
     * @param Request $request
     * @return \Symfony\Component\HttpFoundation\Response
     * @Route("/liveVideo/join", name="live_joinLiveVideo", options={"expose"=true})
     */
    public function join()
    {
       $lives = $this->liveChatVideoRepository->findBy(['userB' => $this->getUser(), 'isSpeedLive' => true]);

       if(!empty($lives)) {
           return $this->render('live/video/modal_joinLive.html.twig', [
               'lives' => $lives
           ]);
       }

       return $this->json([
           'message' => "Pas de live pour le moment"
       ]);

    }

    /**
     * @Route("/liveVideo/planifier", name="live_planifier")
     */
    public function planifier(Request $request, TokenGeneratorInterface $tokenGenerator)
    {
        $userA = $this->getUser();
        $users = $request->request->get('users');
        $lives = [];

        foreach($users as $userB) {
         $lives[] = $this->liveVideo->create(
             $userA,
             base64_decode($userB),
             $tokenGenerator->generateToken(),
             false,
             new \DateTime($request->request->get('dateDebutLive')),
             $request->request->get('theme'),
             $request->request->get('description')
         );
        }

        $this->addFlash('success', 'Planification du live terminer');
        return $this->render('live/video/newPlannification.html.twig', [
            'lives' => $lives
        ]);
    }

    /**
     * @Route("/liveVideo/", name="live_video_list")
     */
    public function list(){
        $coachAgents = $this->coachAgentRepository->findBy(['coach' => $this->getUser()]);
        $agents = [];
        foreach($coachAgents as $coachAgent) {
            $agents[] = $coachAgent->getAgent();
        }
        dd($this->liveChatVideoRepository->groupByCode($this->getUser()));
        return $this->render('live/video/liste.html.twig', [
           'lives' => $this->liveChatVideoRepository->findByUser($this->getUser()),
            'agents' => $agents
        ]);
    }
}
