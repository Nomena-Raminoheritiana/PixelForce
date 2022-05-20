<?php


namespace App\Services\Chat;


use App\Entity\CanalMessage;
use App\Entity\Message;
use App\Repository\UserRepository;
use App\Services\Normalizer;
use App\Services\User\UserNormalizer;
use Symfony\Component\Security\Core\Security;

class ChatNormalizer
{
    const CANAL_MESSAGE_PROPS = ['id', 'isGroup', 'nom', 'code', 'lastMessage', 'membres', 'vus'];
    const MESSAGE_PROPS = ['id', 'textes', 'files', 'createdAt', 'deletedAt', 'renduDateCreationMessage', 'user' => UserNormalizer::USER_PROPS];

    /**
     * @var Normalizer
     */
    private $normalizer;
    /**
     * @var UserRepository
     */
    private $userRepository;
    /**
     * @var UserNormalizer
     */
    private $userNormalizer;
    /**
     * @var Security
     */
    private $security;

    private $canalMessageRegister = [];

    public function __construct(Normalizer $normalizer, UserRepository $userRepository, UserNormalizer $userNormalizer, Security $security)
    {
        $this->normalizer = $normalizer;
        $this->userRepository = $userRepository;
        $this->userNormalizer = $userNormalizer;
        $this->security = $security;
    }

    public function getMessageNormalized(Message $message)
    {
       $messageNormalized = $this->normalizer->getNormalizeData($message, self::MESSAGE_PROPS);
       $canalMessageNormalized = $this->getCanalMessageNormalized($message->getCanalMessage());
       $messageNormalized['canal'] = $canalMessageNormalized;
       return $messageNormalized;
    }

    public function getCanalMessageNormalized(CanalMessage $canalMessage)
    {
        if(!isset($this->canalMessageRegister[$canalMessage->getId()])) {
            $users = $this->userRepository->getUserByCanal($canalMessage);
            $userNormalized = $this->userNormalizer->normalizeArrayUsers($users);
            $usersArray['membres'] = $userNormalized;
            $usersArray['isSeen']  = in_array($this->security->getUser()->getId(), $canalMessage->getVus());
            if(!$canalMessage->getNom() && count($users) === 2) {
                foreach($users as $user) {
                    if($user->getId() != $this->security->getUser()->getId()){
                        $canalMessage->setNom($user->getNom().' '.$user->getPrenom());
                    }
                }
            }
            $data = $this->normalizer->getNormalizeData($canalMessage, self::CANAL_MESSAGE_PROPS);
            $this->canalMessageRegister[$canalMessage->getId()] = array_merge($data, $usersArray);

        }
        return $this->canalMessageRegister[$canalMessage->getId()];
    }

    public function denormalizeCanalMessage($data)
    {
        return $this->normalizer->getDenormalizeData($data, CanalMessage::class);
    }
}