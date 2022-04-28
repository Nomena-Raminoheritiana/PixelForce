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
        $code = $request->request->get('code');
        $userA = $this->getUser();
        if($users = $request->request->get('users')) {
            foreach($users as $userB) {
                $this->liveVideo->create($userA, base64_decode($userB), $code, true);
                $this->liveVideo->call($userB, $code);
            }
        } else {
            $userB = $request->request->get('userB');
            $this->liveVideo->create($userA, base64_decode($userB), $code, true);
            $this->liveVideo->call($userB, $code);
        }

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
    public function join(Request $request)
    {
       $lives = $this->liveChatVideoRepository->findBy(['userB' => $this->getUser(), 'isSpeedLive' => true]);
       $lives_planifier = $this->liveChatVideoRepository->findBy(['userB' => $this->getUser(), 'code' => $request->query->get('code')]);
       $lives = array_merge($lives, $lives_planifier);
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
     * @Route("/liveVideo/refuserCall/{code}", name="live_refuserCall", options={"expose"=true})
     * @param Request $reques
     * @return \Symfony\Component\HttpFoundation\JsonResponse
     */
    public function refuserCall($code)
    {
        $this->liveVideo->refuserCall($code, [
           'id' => base64_encode($this->getUser()->getId()),
           'nom' => $this->getUser()->getNom(),
           'prenom' => $this->getUser()->getPrenom(),
        ]);
        return $this->json(['erreur'=>false, 'message'=>'ok']);
    }

    /**
     *  @Route("/liveVideo/reCall/{encodedUser}", name="live_reCall", options={"expose"=true})
     * @param Request $reques
     * @return \Symfony\Component\HttpFoundation\JsonResponse
     */
    public function reCall($encodedUser, Request $request)
    {
        if($request->isMethod('POST')) {
            $this->liveVideo->call($encodedUser);
            return $this->json([
                'message' => 'ok'
            ]);
        }
       return $this->json([
           'message' => 'KO : erreur sur la méthode'
       ]);
    }

    /**
     * @Route("/liveVideo/planifier", name="live_planifier")
     */
    public function planifier(Request $request, TokenGeneratorInterface $tokenGenerator)
    {

        $users = $request->request->get('users');
        if($users) {
            $lives = $this->liveChatVideoRepository->findBy(['code' => $request->request->get('code')]);
            $this->entityManager->removeMultiple($lives);
            $userA = $this->getUser();
            $lives = [];
            $token = $tokenGenerator->generateToken();
            foreach($users as $userB) {
                $lives[] = $this->liveVideo->create(
                    $userA,
                    base64_decode($userB),
                    $token,
                    false,
                    new \DateTime($request->request->get('dateDebutLive')),
                    $request->request->get('theme'),
                    $request->request->get('description')
                );
            }
            $this->addFlash('success', 'Planification du live terminer');
        } else {
            $this->addFlash('danger', 'Vous devez entrer au moins un acteur');
        }

        return $this->redirectToRoute('live_video_list');
    }

    /**
     * @Route("/liveVideo/", name="live_video_list")
     */
    public function list(Request $request)
    {
        $agents = $this->coachAgentRepository->getAgentByCoach($this->getUser());
        $livesForDeletingAuto = $this->liveChatVideoRepository->findBy(['isInProcess' => true]);
        $this->liveVideo->remove($livesForDeletingAuto);
        $lives = $this->liveChatVideoRepository->groupByCode($this->getUser(), ['perimee' => $request->query->get('perimee'), 'a_supprimer' => $request->query->get('a_supprimer')]);

        return $this->render('live/video/liste.html.twig', [
           'lives' => $lives,
            'agents' => $agents,
            'total' => count($lives),
            'total_live_a_supprimer' => $this->liveChatVideoRepository->countLiveToDelete($this->getUser()),
            'total_live_en_cours' =>$this->liveChatVideoRepository->countLiveEnCours($this->getUser()),
            'total_live_perimee' => $this->liveChatVideoRepository->countLivePerimee($this->getUser())
        ]);
    }

    /**
     * @Route("/liveVideo/launch/{codeEncoded}", name="live_video_launch")
     */
    public function lancerReunion($codeEncoded, Request $request)
    {
        $code = base64_decode($codeEncoded);
        $lives = $this->liveChatVideoRepository->findBy(['code' => $code]);
        if(empty($lives)) {
            return new Response('', 404);
        }
        foreach($lives as $live) {
            $live->setIsInProcess(true);
            $this->entityManager->persist($live);
            $this->liveVideo->call(base64_encode($live->getUserB()->getId()), $live->getCode());
        }
        $this->entityManager->flush();

        return $this->render('live/video/launch.html.twig', [
            'code' => $code
        ]);

    }
}
