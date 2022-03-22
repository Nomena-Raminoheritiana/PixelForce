<?php


namespace App\Services;


use App\Entity\LiveChatVideo;
use App\Manager\EntityManager;
use App\Manager\ObjectManager;
use App\Repository\LiveChatVideoRepository;
use App\Repository\UserRepository;

class LiveVideo
{
    /**
     * @var ObjectManager
     */
    private $objectManager;
    /**
     * @var LiveChatVideoRepository
     */
    private $liveChatVideoRepository;
    /**
     * @var UserRepository
     */
    private $userRepository;
    /**
     * @var EntityManager
     */
    private $entityManager;

    public function __construct(ObjectManager $objectManager, EntityManager $entityManager, LiveChatVideoRepository $liveChatVideoRepository, UserRepository $userRepository)
    {
        $this->objectManager = $objectManager;
        $this->liveChatVideoRepository = $liveChatVideoRepository;
        $this->userRepository = $userRepository;
        $this->entityManager = $entityManager;
    }

    /**
     * @param $userA
     * @param $userB
     * @param null $code
     * @param bool $is_speedLive
     * @param \DateTimeInterface|null $dateDebutLive
     * @param string $theme
     * @param string $description
     * @param bool $modification
     * @param string $byChamps ex: code, id
     * @return LiveChatVideo|mixed|null
     */
    public function create($userA, $userB, $code = null, $is_speedLive = false, \DateTimeInterface $dateDebutLive = null, $theme = '', $description = '')
    {
        $findParam = $is_speedLive ? ['isSpeedLive' => true] : [];
        $live = $this->liveChatVideoRepository->findOneBy(array_merge(['userA' => $userA, 'userB' => $userB], $findParam));
        // on supprime le live si un appel rapide ou direct existe déjà
        if($live && $is_speedLive) {
            $this->entityManager->remove($live);
        }
        $live = $this->objectManager->createObject(LiveChatVideo::class, array_merge([
            'userA' => $this->userRepository->findOneBy(['id' => $userA]),
            'userB'  => $this->userRepository->findOneBy(['id' => $userB]),
            'code' => $code,
            'dateDebutLive' => $dateDebutLive,
            'theme' => $theme,
            'description' => $description
        ], $findParam));
        return $live;
    }
}
