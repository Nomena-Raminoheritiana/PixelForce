<?php


namespace App\Controller;


use App\Entity\Formation;
use App\Entity\Media;
use App\Form\FormationType;
use App\Manager\EntityManager;
use App\Services\DirectoryManagement;
use App\Services\FileUploader;
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

    public function __construct(FileUploader $fileUploader, DirectoryManagement $directoryManagement, EntityManager $entityManager)
   {
       $this->fileUploader = $fileUploader;
       $this->directoryManagement = $directoryManagement;
       $this->entityManager = $entityManager;
   }

    /**
     * @Route("/coach/formation/list", name="coach_formation_list", options={"expose"=true})
     * @IsGranted("ROLE_COACH")
     */
   public function coach_formation_list()
   {

       return $this->render('formation/video/coach_formation_list.html.twig');
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