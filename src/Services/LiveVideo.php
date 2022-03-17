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

    public function createOrRemoveLive($userA, $userB, $code = null)
    {
        $live = $this->liveChatVideoRepository->findOneBy(['userA' => $userA, 'userB' => $userB]);
        if($live) {
            $this->entityManager->remove($live);
        }
        $live = $this->objectManager->createObject(LiveChatVideo::class, [
            'userA' => $userA,
            'userB'  => $userB
        ]);
        return $live;
    }

    public function getAllLive(?\Symfony\Component\Security\Core\User\UserInterface $user)
    {
        $lives = $this->liveChatVideoRepository->findBy(['userB' => $user]);

        return $lives;
    }

}