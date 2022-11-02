<?php


namespace App\Services\Chat;


use App\Entity\CanalMessage;
use App\Entity\User;
use App\Manager\EntityManager;

class ChatUserCanal
{
    /**
     * @var EntityManager
     */
    private $entityManager;
    /**
     * @var ChatNormalizer
     */
    private $chatNormalizer;
    /**
     * @var ChatMercureNotification
     */
    private $chatMercureNotification;

    public function __construct(EntityManager $entityManager,
                                ChatNormalizer $chatNormalizer,
                                ChatMercureNotification $chatMercureNotification)
    {
        $this->entityManager = $entityManager;
        $this->chatNormalizer = $chatNormalizer;
        $this->chatMercureNotification = $chatMercureNotification;
    }

    public function addUserFromCanal(User $user, CanalMessage $canalMessage)
    {
        $canalMessage->addUser($user);
        $this->entityManager->save($canalMessage);
        $this->chatMercureNotification->notifyWhenAddUser($canalMessage, $user);
        return $this->chatNormalizer->getCanalMessageNormalized($canalMessage);
    }

    public function removeUserFromCanal(User $user, CanalMessage $canalMessage)
    {
        $canalMessage->removeUser($user);
        $this->entityManager->save($canalMessage);
        if(count($canalMessage->getUsers()->toArray()) === 0) {
            $this->entityManager->delete($canalMessage);
            return [];
        }
        $this->chatMercureNotification->notifyWhenRemoveUser($canalMessage, $user);
        return $this->chatNormalizer->getCanalMessageNormalized($canalMessage);
    }

    public function addUsersFromCanal(Array $users, CanalMessage $canalMessage)
    {
        foreach($users as $user) {
            if($user instanceof User) {
                $this->addUserFromCanal($user, $canalMessage);
            }
        }
        return $this->chatNormalizer->getCanalMessageNormalized($canalMessage);
    }

    public function removeUsersFromCanal(Array $users, CanalMessage $canalMessage)
    {
        foreach($users as $user) {
            if($user instanceof User) {
                $return = $this->removeUserFromCanal($user, $canalMessage);
                if(count($return) === 0){
                    return [];
                }
            }
        }
        return $this->chatNormalizer->getCanalMessageNormalized($canalMessage);
    }
}