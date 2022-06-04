<?php


namespace App\Controller;


use App\Entity\Formation;
use App\Entity\Media;
use App\Form\FormationType;
use App\Manager\EntityManager;
use App\Repository\FormationRepository;
use App\Services\DirectoryManagement;
use App\Services\FileUploader;
use App\Services\FormationService;
use Knp\Component\Pager\PaginatorInterface;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class CoachFormationController extends AbstractController
{
    /**
     * @var FileUploader
     */
    private $fileUploader;
    /**
     * @var DirectoryManagement
     */
    private $directoryManagement;
    /**
     * @var EntityManager
     */
    private $entityManager;
    /**
     * @var PaginatorInterface
     */
    private $paginator;
    /**
     * @var FormationRepository
     */
    private $formationRepository;
    /**
     * @var FormationService
     */
    private $formationService;

    public function __construct(FormationRepository $formationRepository,
                                FileUploader $fileUploader,
                                FormationService $formationService,
                                DirectoryManagement $directoryManagement,
                                EntityManager $entityManager,
                                PaginatorInterface $paginator)
   {
       $this->fileUploader = $fileUploader;
       $this->directoryManagement = $directoryManagement;
       $this->entityManager = $entityManager;
       $this->paginator = $paginator;
       $this->formationRepository = $formationRepository;
       $this->formationService = $formationService;
   }

    /**
     * @Route("/coach/formation/list", name="coach_formation_list", options={"expose"=true})
     * @IsGranted("ROLE_COACH")
     */
   public function coach_formation_list(Request $request)
   {
       if($criteres = $request->query->get('q')) {
           $formations = $this->formationRepository->searchForCoach($criteres);
       } else {
           $formations = $this->formationRepository->createQueryBuilder('f')->getQuery();
       }
       $formations = $this->paginator->paginate(
           $formations,
           $request->query->getInt('page', 1),
           5
       );

       return $this->render('formation/video/coach_formation_list.html.twig', [
           'formations' => $formations,
           'criteres' => $criteres
       ]);
   }

    /**
     * @Route("/coach/formation/fiche/{id}", name="coach_formation_fiche", options={"expose"=true})
     */
   public function coach_formation_fiche(Formation $formation, Request $request)
   {
       $form = $this->createForm(FormationType::class, $formation);
       $form->handleRequest($request);
       if($form->isSubmitted() && $form->isValid()) {
           $this->addFlash('success', 'Formation ajouté avec succès');
       }

       return $this->render('formation/video/coach_formation_fiche.html.twig', [
           'form' => $form->createView()
       ]);
   }

    /**
     * @Route("/coach/formation/add", name="coach_formation_add", options={"expose"=true})
     */
   public function coach_formation_add(Request $request)
   {
        $formation = new Formation();
        $form = $this->createForm(FormationType::class, $formation);
        $form->handleRequest($request);
        if($form->isSubmitted() && $form->isValid()) {
            $formation->setCoach($this->getUser());
            $formation->setVideoId($request->request->get('video_id'));
            $this->entityManager->save($formation);
            if($medias = json_decode($request->request->get('mediasData'))){
                foreach($medias as $media) {
                    $mediaObject = (new Media())
                        ->setFormation($formation)
                        ->setMimeType($media->mimeType)
                        ->setType($media->type)
                        ->setTitre($media->name)
                        ->setSlug($media->slug);
                    $this->entityManager->persist($mediaObject);
                }
                $this->entityManager->flush();
            }
            $coachSecteurRelation = $this->getUser()->getCoachSecteurs();
            if($coachSecteurRelation->count() > 0) {
                $this->formationService->affecterToutAgent($formation, $coachSecteurRelation->toArray()[0]->getSecteur());
            }
            
            $this->addFlash('success', 'Formation ajouté avec succès');
        }

        return $this->render('formation/video/coach_formation_add.html.twig', [
            'form' => $form->createView()
        ]);
   }

    /**
     * @Route("/coach/formation/upload/document", name="coach_formation_uploadDocument", options={"expose"=true})
     */
   public function coach_formation_uploadDocument(Request $request)
   {
        if($documents = $request->files->get('documents')) {
            $fileNames = [];
            foreach($documents as $document) {
              $fileNames[] = $this->fileUploader->upload($document, $this->directoryManagement->getMediaFolder_formation_document());
            }
            return $this->json([
               'files' => $fileNames,
                'error' => false
            ]);
        }

        return $this->json([
           'error' => true,
           'message' => 'Aucun fichier trouvé dans la requête'
        ]);
   }

    /**
     * @Route("/coach/formation/upload/audio", name="coach_formation_uploadAudio", options={"expose"=true})
     */
    public function coach_formation_uploadAudio(Request $request)
    {
        if($audios = $request->files->get('audios')) {
            $fileNames = [];
            foreach($audios as $audio) {
                $fileNames[] = $this->fileUploader->upload($audio, $this->directoryManagement->getMediaFolder_formation_audio());
            }
            return $this->json([
                'files' => $fileNames,
                'error' => false
            ]);
        }

        return $this->json([
            'error' => true,
            'message' => 'Aucun fichier trouvé dans la requête'
        ]);
    }
}