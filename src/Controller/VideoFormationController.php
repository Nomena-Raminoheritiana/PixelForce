<?php


namespace App\Controller;


use App\Entity\VideoFormation;
use App\Form\VideoFormationType;
use App\Manager\EntityManager;
use App\Manager\FormManager;
use App\Manager\ObjectManager;
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
    /**
     * @var ObjectManager
     */
    private $objectManager;

    public function __construct(ObjectManager $objectManager, PaginatorInterface $paginator, EntityManager $entityManager, FormManager $formManager, VimeoService $vimeoService, VideoFormationRepository $videoFormationRepository)
    {
        $this->entityManager = $entityManager;
        $this->formManager = $formManager;
        $this->vimeoService = $vimeoService;
        $this->videoFormationRepository = $videoFormationRepository;
        $this->paginator = $paginator;
        $this->objectManager = $objectManager;
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
     * @Route("/formation/video/add", name="formationVideo_add", options={"expose"=true})
     */
    public function add(Request $request)
    {
        try {
            $videoId = $request->request->get('videoId');
            $uri = $request->request->get('uri');
            $titre = $request->request->get('titre');
            $description = $request->request->get('description');
            $this->objectManager->createObject(VideoFormation::class, [
                'videoId' => $videoId,
                'uri' => '/videos/'.$videoId,
                'titre' => $titre,
                'description' => $description,
                'user' => $this->getUser()
            ]);

            $this->addFlash('success', 'Votre video a été uploadé avec succès');

            return $this->json([
                'error' => false,
                'videoId' => $videoId
            ]);
        } catch(\Exception $exception){
            return $this->json([
                'error' => true,
                'message' => $exception->getMessage()
            ]);
        }


    }
    // Tsy mipasse eto am symfony intsony n upload, tonga d direct ary am vimeo
//    /**
//     * @param Request $request
//     * @Route("/formation/video/upload", name="formationVideo_upload")
//     */
//    public function importVideo(Request $request, MessageBusInterface $messageBus)
//    {
//        $form = $response = $this->formManager->getForm(VideoFormationType::class, null, [], $request, function(VideoFormation $videoFormation, Request $request) use ($messageBus) {
//            // lancement en background du système d'upload
//            $messageBus->dispatch(new ImportVideoFormation(
//               ($request->files->get('video_formation')['fichier'])->getRealPath(),
//               $videoFormation->getTitre(),
//               $videoFormation->getDescription(),
//               $this->getUser()->getUserIdentifier()
//               )
//           );
//           $this->addFlash('success', 'Téléchargement terminer ...');
//           return $this->redirectToRoute('formationVideo_liste');
//        });
//
//        if($response instanceof Response) {
//            return $response;
//        }
//
//        return $this->render('formation/video/list.html.twig', [
//            'form' => $form->createView(),
//            'showModalForm' => true
//        ]);
//
//    }

}