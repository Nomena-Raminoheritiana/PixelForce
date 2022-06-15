<?php


namespace App\Services;


use App\Entity\LiveChatVideo;
use App\Manager\EntityManager;
use App\Manager\ObjectManager;
use App\Repository\LiveChatVideoRepository;
use App\Repository\UserRepository;
use Symfony\Component\Mercure\HubInterface;
use Symfony\Component\Mercure\Update;

class LiveVideo
{
    const CALL_TOPIC="https://liveVideo/call/";
    const REFUS_CALL_TOPIC="https://liveVideo/call/refus/";

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
    /**
     * @var HubInterface
     */
    private $mercureHub;

    public function __construct(HubInterface $mercureHub,
                                ObjectManager $objectManager,
                                EntityManager $entityManager,
                                LiveChatVideoRepository $liveChatVideoRepository,
                                UserRepository $userRepository)
    {
        $this->objectManager = $objectManager;
        $this->liveChatVideoRepository = $liveChatVideoRepository;
        $this->userRepository = $userRepository;
        $this->entityManager = $entityManager;
        $this->mercureHub = $mercureHub;
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
    public function create($userA, $userB, $code = null, $is_speedLive = false, \DateTimeInterface $dateDebutLive = null, $theme = '', $description = '', $secteur = null)
    {
        $findParam = $is_speedLive ? ['isSpeedLive' => true] : [];
        $live = $this->liveChatVideoRepository->findOneBy(array_merge(['userA' => $userA, 'userB' => $userB], $findParam));
        // on supprime le live si un appel rapide ou direct existe déjà
        if($live && $is_speedLive) {
            $this->entityManager->delete($live);
        }
        $live = $this->objectManager->createObject(LiveChatVideo::class, array_merge([
            'userA' => $this->userRepository->findOneBy(['id' => $userA]),
            'userB'  => $this->userRepository->findOneBy(['id' => $userB]),
            'code' => $code,
            'dateDebutLive' => $dateDebutLive,
            'theme' => $theme,
            'description' => $description,
            'secteur' => $secteur,
        ], $findParam));
        return $live;
    }

    public function remove(Array $lives)
    {
        $lives_restant = [];
        /** @var LiveChatVideo $live */
        foreach($lives as $live) {
            // si la différence entre la date d'aujourd'hui et la date prévu de la réunion est supérieur à 1journnée, on la suprrime
            $dateNow = new \DateTime();
            if(($dateNow->diff($live->getDateDebutLive()))->days >= 1 || $live->getIsSpeedLive() ) {
                $this->entityManager->remove($live);
            } else {
                $lives_restant[] = $live;
            }
        }

        $this->entityManager->flush();
        return $lives_restant;
    }

    public function call($encodedIdUser, $code = null)
    {
        $update = new Update(
            self::CALL_TOPIC.$encodedIdUser,
            json_encode(['code' => $code])
        );

        $this->mercureHub->publish($update);
    }

    // notifier le créateur du live de la refus
    public function refuserCall($code, $user = [])
    {
        // on va prendre l'user sui a créé le live
        $liveChat = $this->liveChatVideoRepository->findOneBy(['code' => $code]);
        if($liveChat) {
            $userCreateur = $liveChat->getUserA();
            $update = new Update(
                self::REFUS_CALL_TOPIC.base64_encode($userCreateur->getId()),
                json_encode(['code' => $code, 'user' => $user])
            );

            $this->mercureHub->publish($update);
        }

    }
}
