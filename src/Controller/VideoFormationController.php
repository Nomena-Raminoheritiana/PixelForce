<?php


namespace App\Controller;


use App\Entity\VideoFormation;
use App\Form\VideoFormationType;
use App\Manager\EntityManager;
use App\Manager\FormManager;
use App\Messenger\Message\ImportVideoFormation;
use App\Repository\VideoFormationRepository;
use App\Services\VimeoService;
use Knp\Component\Pager\PaginatorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Messenger\MessageBusInterface;
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
    /**
     * @var PaginatorInterface
     */
    private $paginator;

    public function __construct(PaginatorInterface $paginator, EntityManager $entityManager, FormManager $formManager, VimeoService $vimeoService, VideoFormationRepository $videoFormationRepository)
    {
        $this->entityManager = $entityManager;
        $this->formManager = $formManager;
        $this->vimeoService = $vimeoService;
        $this->videoFormationRepository = $videoFormationRepository;
        $this->paginator = $paginator;
    }

    /**
     * @Route("/formation/video", name="formationVideo_liste")
     */
    public function index(Request $request)
    {
        $videosFormation = $this->videoFormationRepository->getQueryAll();
        $videosFormation = $this->paginator->paginate(
            $videosFormation,
            $request->query->getInt('page', 1),
            5
        );
        $form = $this->formManager->getForm(VideoFormationType::class);
        return $this->render('formation/video/list.html.twig', [
            'form' => $form->createView(),
            'videosFormation' => $videosFormation,
            'videoFormationActif' => $videosFormation->count() > 0 ?
                ($request->query->get('formation')
                    ? $this->videoFormationRepository->findOneBy(['id' => base64_decode($request->query->get('formation'))])
                    : $videosFormation[0]
                ): null
        ]);
    }

    /**
     * @param Request $request
     * @Route("/formation/video/upload", name="formationVideo_upload")
     */
    public function importVideo(Request $request, MessageBusInterface $messageBus)
    {
        $form = $response = $this->formManager->getForm(VideoFormationType::class, null, [], $request, function(VideoFormation $videoFormation, Request $request) use ($messageBus) {
           // lancement en background du système d'upload
            $messageBus->dispatch(new ImportVideoFormation(
               ($request->files->get('video_formation')['fichier'])->getRealPath(),
               $videoFormation->getTitre(),
               $videoFormation->getDescription(),
               $this->getUser()->getUserIdentifier()
               )
           );
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