<?php


namespace App\Messenger\Manager;


use App\Entity\VideoFormation;
use App\Manager\EntityManager;
use App\Manager\ObjectManager;
use App\Messenger\Message\ImportVideoFormation;
use App\Repository\UserRepository;
use App\Services\VimeoService;

class ImportVideoFormationHandler
{
    /**
     * @var VimeoService
     */
    private $vimeoService;
    /**
     * @var EntityManager
     */
    private $entityManager;
    /**
     * @var ObjectManager
     */
    private $objectManager;
    /**
     * @var UserRepository
     */
    private $userRepository;

    public function __construct(VimeoService $vimeoService,
                                EntityManager $entityManager,
                                ObjectManager $objectManager,
                                UserRepository $userRepository)
    {
        $this->vimeoService = $vimeoService;
        $this->entityManager = $entityManager;
        $this->objectManager = $objectManager;
        $this->userRepository = $userRepository;
    }

    public function __invoke(ImportVideoFormation $importVideoFormation)
    {
        $uri = $this->vimeoService->importVideo(
            $importVideoFormation->getPath(),
            $importVideoFormation->getTitre(),
            $importVideoFormation->getDescription()
        );
        $videoFormation = $this->objectManager->createObject(VideoFormation::class, [
            'user' => $this->userRepository->findOneBy(['id' => $importVideoFormation->getUserId()]),
            'videoId' => $this->vimeoService->getVideoId($uri),
            'uri' => $uri,
            'description' => $importVideoFormation->getDescription(),
            'titre' => $importVideoFormation->getTitre()
        ]);
        $this->entityManager->save($videoFormation);
    }

}