<?php


namespace App\Controller;


use App\Entity\VideoFormation;
use App\Form\VideoFormationType;
use App\Manager\EntityManager;
use App\Manager\FormManager;
use App\Services\VimeoService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
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

    public function __construct(EntityManager $entityManager, FormManager $formManager)
    {
        $this->entityManager = $entityManager;
        $this->formManager = $formManager;
    }

    /**
     * @Route("/formation/video", name="formationVideo_liste")
     */
    public function index()
    {
        $form = $this->formManager->getForm(VideoFormationType::class);
        return $this->render('formation/video/list.html.twig', [
            'form' => $form->createView()
        ]);
    }

    /**
     * @param Request $request
     * @Route("/formation/video/upload", name="formationVideo_upload")
     */
    public function importVideo(Request $request, VimeoService $vimeoService)
    {
        $form = $this->formManager->getForm(VideoFormationType::class, null, [], $request, function($data, Request $request) use ($vimeoService) {
           $uri = $vimeoService->importVideo($request->files->get('video_formation')['fichier']);
//           dump($vimeoService->verifierEtat($uri));
           dd($uri);
        });

        dd($form);
    }

}