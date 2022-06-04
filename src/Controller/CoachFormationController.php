<?php


namespace App\Controller;


use App\Entity\Formation;
use App\Entity\Media;
use App\Form\FormationType;
use App\Manager\EntityManager;
use App\Repository\FormationAgentRepository;
use App\Repository\FormationRepository;
use App\Repository\MediaRepository;
use App\Repository\UserRepository;
use App\Services\DirectoryManagement;
use App\Services\FileUploader;
use App\Services\FormationService;
use Knp\Component\Pager\PaginatorInterface;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Filesystem\Filesystem;
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
    /**
     * @var MediaRepository
     */
    private $mediaRepository;
    /**
     * @var UserRepository
     */
    private $userRepository;
    /**
     * @var FormationAgentRepository
     */
    private $formationAgentRepository;

    public function __construct(FormationRepository $formationRepository,
                                MediaRepository $mediaRepository,
                                UserRepository $userRepository,
                                FormationAgentRepository $formationAgentRepository,
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
       $this->mediaRepository = $mediaRepository;
       $this->userRepository = $userRepository;
       $this->formationAgentRepository = $formationAgentRepository;
   }

    /**
     * @Route("/coach/formation/list", name="coach_formation_list", options={"expose"=true})
     * @IsGranted("ROLE_COACH")
     */
   public function coach_formation_list(Request $request)
   {
       $secteur = $this->getUser()->getSecteurByCoach();
       if($criteres = $request->query->get('q')) {
           $formations = $this->formationRepository->searchForCoach($criteres, $secteur);
       } else {
           $formations = $secteur ? $this->formationRepository->findBySecteur($secteur) : [];
       }
       $formations = $this->paginator->paginate(
           $formations,
           $request->query->getInt('page', 1),
           5
       );

       $agent = $this->userRepository->findOneBy(['id' => $request->query->get('agent')]);
       $agent = $agent && in_array($secteur->getId(), $agent->getSecteursIdsByAgent()) ? $agent : null;
       return $this->render('formation/video/coach_formation_list.html.twig', [
           'formations' => $formations,
           'criteres' => $criteres,
           'agent' => $agent
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
           $this->entityManager->save($formation);
           $this->addMedia($request, $formation);
           $this->addFlash('success', 'Formation ajouté avec succès');
       }

       $medias = $formation->getMedias();

       return $this->render('formation/video/coach_formation_fiche.html.twig', [
           'form' => $form->createView(),
           'medias' => $medias,
           'formation' => $formation
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
            $formation->setSecteur($this->getUser()->getSecteurByCoach());
            $formation->setCoach($this->getUser());
            $formation->setVideoId($request->request->get('video_id'));
            $this->entityManager->save($formation);
            $this->addMedia($request, $formation);
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

    /**
     * @Route("/coach/formation/delete/media", name="coach_formation_deleteMedia", options={"expose"=true})
     */
    public function coach_formation_deleteMedia(Request $request)
    {
        if($deleted_medias = $request->request->get('deleted_media')) {
            foreach($deleted_medias as $deleted_media) {
                $media = $this->mediaRepository->findOneBy(['id' => $deleted_media]);
                $directory = $media->getType() == 'document' ?
                    $this->directoryManagement->getMediaFolder_formation_document() :
                    $this->directoryManagement->getMediaFolder_formation_audio();
                $file = $directory.DIRECTORY_SEPARATOR.$media->getSlug();
                if(file_exists($file)) {
                    $filesystem = new Filesystem();
                    $filesystem->remove($file);
                }
                $this->entityManager->remove($media);
            }
            $this->entityManager->flush();
            return $this->json([
               'error' => false
            ]);
        }
        return $this->json([
            'error' => true,
            'message' => 'Pas de media a supprimer'
        ]);
    }

    /**
     * @Route("/coach/formation/bloquer", name="coach_formation_bloquer" )
     * @Route("/coach/formation/debloquer", name="coach_formation_debloquer" )
     * @Route("/coach/formation/debloquer", name="coach_formation_createRelation" )
     */
    public function coach_formation_bloquer(Request $request)
    {
        if($request->query->get('formation') && $request->query->get('agent')) {
           $formation = $this->formationRepository->findOneBy(['id' => $request->query->get('formation')]);
           $agent = $this->userRepository->findOneBy(['id' => $request->query->get('agent')]);
           $formationAgentRelation = $this->formationAgentRepository->findOneBy(['formation' => $formation, 'agent' => $agent]);
           if($formationAgentRelation) {
               $formationAgentRelation->setStatut($request->attributes->get('_route') === 'coach_formation_bloquer' ?
                   Formation::STATUT_BLOQUEE:
                   Formation::STATUT_DISPONIBLE
               );
               $this->entityManager->save($formationAgentRelation);
           } else {
             $formationAgentRelation = $this->formationService->affecterAgent($formation, $agent, true);
             $formationAgentRelation->setStatut(Formation::STATUT_DISPONIBLE);
             $this->entityManager->save($formationAgentRelation);
           }
        }

        return $this->redirectToRoute('coach_formation_list', [
            'agent' => isset($agent) ? $agent->getId() : null
        ]);

    }


    private function addMedia(Request $request, $formation)
    {
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
    }
}