<?php


namespace App\Controller;


use App\Entity\Media;
use App\Repository\FormationAgentRepository;
use App\Services\DirectoryManagement;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\BinaryFileResponse;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class MediaController extends AbstractController
{

    /**
     * @var DirectoryManagement
     */
    private $directoryManagement;
    /**
     * @var FormationAgentRepository
     */
    private $formationAgentRepository;

    public function __construct(DirectoryManagement $directoryManagement, FormationAgentRepository $formationAgentRepository)
    {
        $this->directoryManagement = $directoryManagement;
        $this->formationAgentRepository = $formationAgentRepository;
    }

    /**
     * @Route("/media/download/{id}", name="media_download")
     */
    public function media_formation_download(Media $media, Request $request)
    {
        $formation = $media->getFormation();
        $formationAgentRelation = $this->formationAgentRepository->findOneBy(['formation' => $formation, 'agent' => $this->getUser()]);
        if($formation->getFormationAgents()->contains($formationAgentRelation)) {
            $filePath = $media->getType() === 'document' ?
                $this->directoryManagement->getMediaFolder_formation_document() :
                $this->directoryManagement->getMediaFolder_formation_audio();
            $filePath = $filePath.DIRECTORY_SEPARATOR.$media->getSlug();

            return new BinaryFileResponse($filePath, 200, array(
                'Content-Type' => mime_content_type($filePath),
                'Content-Length' => filesize($filePath),
                'Content-Disposition' => 'attachment; filename=' . $media->getTitre(),
            ));
        }

        $this->addFlash('danger', 'Vous ne pouvez pas le droit pour télécharger le fichier');

        $referer = $request->headers->get('referer');

        return new RedirectResponse($referer);

    }

}