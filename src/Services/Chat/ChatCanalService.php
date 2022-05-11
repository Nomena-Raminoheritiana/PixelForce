<?php


namespace App\Services\Chat;


use App\Entity\CanalMessage;
use App\Entity\User;
use App\Helpers\Cryptographie;
use App\Helpers\DateHelper;
use App\Manager\EntityManager;
use App\Manager\ObjectManager;
use App\Repository\CanalMessageRepository;
use App\Repository\MessageRepository;
use App\Repository\UserRepository;
use App\Services\GenerateKey;
use App\Services\User\UserNormalizer;

class ChatCanalService
{
    /**
     * @var ObjectManager
     */
    private $objectManager;
    /**
     * @var CanalMessageRepository
     */
    private $canalMessageRepository;
    /**
     * @var EntityManager
     */
    private $entityManager;
    /**
     * @var ChatNormalizer
     */
    private $chatNormalizer;
    /**
     * @var GenerateKey
     */
    private $generateKey;
    /**
     * @var ChatMercureNotification
     */
    private $chatMercureNotification;

    public function __construct(ObjectManager $objectManager,
                                CanalMessageRepository $canalMessageRepository,
                                EntityManager $entityManager,
                                ChatNormalizer $chatNormalizer,
                                ChatMercureNotification $chatMercureNotification,
                                GenerateKey $generateKey)
    {

        $this->objectManager = $objectManager;
        $this->canalMessageRepository = $canalMessageRepository;
        $this->entityManager = $entityManager;
        $this->chatNormalizer = $chatNormalizer;
        $this->generateKey = $generateKey;
        $this->chatMercureNotification = $chatMercureNotification;
    }
    public function createSingleCanal(User $userA, User $userB, $normalize = true)
    {
        $code = $this->generateKey->generateCode($userA->getId(), $userB->getId());
        $canal = $this->canalMessageRepository->findOneBy(['code' => $code]);
        if(!$canal) {
            /** @var CanalMessage $canal */
            $canal = $this->objectManager->createObject(CanalMessage::class, [
                'code' => $code,
                'isGroup' => false
            ],false, [], true);

            foreach([$userA, $userB] as $user) {
                $canal->addUser($user);
            }
            $this->entityManager->save($canal);
        }

        return $normalize ? $this->chatNormalizer->getCanalMessageNormalized($canal) : $canal;
    }

    public function createGroupCanal($nom, $users = [])
    {
        $code = $this->generateKey->generateCode();
        /** @var CanalMessage $canal */
        $canal = $this->objectManager->createObject(CanalMessage::class, [
            'code' => $code,
            'isGroup' => true,
            'nom' => $nom
        ],false, [], true);

        foreach($users as $user) {
            $canal->addUser($user);
        }

        $this->entityManager->save($canal);

        $this->chatMercureNotification->notifyWhenNewCanalMessage($canal);

        return $this->chatNormalizer->getCanalMessageNormalized($canal);
    }

    public function getCanalsGroup(User $user)
    {
        $canals = $this->canalMessageRepository->getGroupsCanal($user);
        $canalsNormalized = [];
        foreach($canals as $canal) {
            $data = $this->chatNormalizer->getCanalMessageNormalized($canal);
            if(!$data['error']) {
                $canalsNormalized[] = $data;
            }
        }
        return $canalsNormalized;
    }

    public function getSingleCanal(User $user)
    {
        $canals = $this->canalMessageRepository->getSingleCanal($user);
        $canalsNormalized = [];
        foreach($canals as $canal) {
            $data = $this->chatNormalizer->getCanalMessageNormalized($canal);
            if(!$data['error']) {
                $canalsNormalized[] = $data;
            }
        }
        return $canalsNormalized;
    }

    public function removeCanal(CanalMessage $canalMessage)
    {
        $this->chatMercureNotification->notifyWhenRemoveCanal($canalMessage);
        $this->entityManager->delete($canalMessage);

        return [
            'error' => false,
            'message' => 'canal supprimé'
        ];
    }
}