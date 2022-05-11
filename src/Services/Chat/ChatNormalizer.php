<?php


namespace App\Services\Chat;


use App\Entity\CanalMessage;
use App\Entity\Message;
use App\Entity\MessageVu;
use App\Repository\UserRepository;
use App\Services\Normalizer;
use App\Services\User\UserNormalizer;
use Symfony\Component\Security\Core\Security;

class ChatNormalizer
{
    const CANAL_MESSAGE_PROPS = ['id', 'isGroup', 'nom', 'code', 'lastMessage', 'membres'];
    const MESSAGE_PROPS = ['id', 'textes', 'createdAt', 'deletedAt', 'user' => UserNormalizer::USER_PROPS];
    const MESSAGE_VU_PROPS = ['id', 'message' => self::MESSAGE_PROPS, 'user' => UserNormalizer::USER_PROPS];

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
        $users = $this->userRepository->getUserByCanal($canalMessage);
        $userNormalized = $this->userNormalizer->normalizeArrayUsers($users);
        $usersArray['membres'] = $userNormalized;
        if(!$canalMessage->getNom() && count($users) === 2) {
            foreach($users as $user) {
                if($user->getId() != $this->security->getUser()->getId()){
                    $canalMessage->setNom($user->getNom().' '.$user->getPrenom());
                }
            }
        }
        $data = $this->normalizer->getNormalizeData($canalMessage, self::CANAL_MESSAGE_PROPS);
        $data = array_merge($data, $usersArray);
        return $data;
    }

    public function getMessageVuNormalized(MessageVu $messageVu)
    {
        return $this->normalizer->getNormalizeData($messageVu,self::MESSAGE_VU_PROPS );
    }

    public function denormalizeCanalMessage($data)
    {
        return $this->normalizer->getDenormalizeData($data, CanalMessage::class);
    }
}