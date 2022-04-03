<?php


namespace App\Controller;


use App\Entity\VideoFormation;
use App\Form\VideoFormationType;
use App\Manager\EntityManager;
use App\Manager\FormManager;
use App\Repository\VideoFormationRepository;
use App\Services\VimeoService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class VideoFormationController extends AbstractController
{

    /**
     * @var EntityManager
     */
    private $entityManager;
    /**
     * @var FormManager
     */
    private $formManager;
    /**
     * @var VimeoService
     */
    private $vimeoService;
    /**
     * @var VideoFormationRepository
     */
    private $videoFormationRepository;

    public function __construct(EntityManager $entityManager, FormManager $formManager, VimeoService $vimeoService, VideoFormationRepository $videoFormationRepository)
    {
        $this->entityManager = $entityManager;
        $this->formManager = $formManager;
        $this->vimeoService = $vimeoService;
        $this->videoFormationRepository = $videoFormationRepository;
    }

    /**
     * @Route("/formation/video", name="formationVideo_liste")
     */
    public function index()
    {
        $videosFormation = $this->videoFormationRepository->findBy(['user' => $this->getUser()]);
        $form = $this->formManager->getForm(VideoFormationType::class);
        return $this->render('formation/video/list.html.twig', [
            'form' => $form->createView(),
            'videosFormation' => $videosFormation
        ]);
    }

    /**
     * @param Request $request
     * @Route("/formation/video/upload", name="formationVideo_upload")
     */
    public function importVideo(Request $request)
    {
        $form = $response = $this->formManager->getForm(VideoFormationType::class, null, [], $request, function(VideoFormation $videoFormation, Request $request) {
           $uri = $this->vimeoService->importVideo(
               ($request->files->get('video_formation')['fichier'])->getRealPath(),
               $request->request->get('video_formation')['titre'],
               $request->request->get('video_formation')['description']
               );
           $videoFormation->setVideoId($this->vimeoService->getVideoId($uri));
           $videoFormation->setUri($uri);
           $this->entityManager->save($videoFormation);
           $this->addFlash('success', 'Téléchargement en cours ...');
           return $this->redirectToRoute('formationVideo_liste');
        });

        if($response instanceof Response) {
            return $response;
        }

        return $this->render('formation/video/list.html.twig', [
            'form' => $form->createView(),
            'showModalForm' => true
        ]);

    }

}