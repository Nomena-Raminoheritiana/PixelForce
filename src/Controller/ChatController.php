<?php


namespace App\Controller;


use App\Entity\CanalMessage;
use App\Entity\Message;
use App\Entity\User;
use App\Manager\EntityManager;
use App\Manager\ObjectManager;
use App\Repository\CanalMessageRepository;
use App\Repository\UserRepository;
use App\Services\Chat\ChatCanalService;
use App\Services\Chat\ChatService;
use App\Services\Chat\ChatUserCanal;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class ChatController extends AbstractController
{
    /**
     * @var ChatService
     */
    private $chatService;
    /**
     * @var UserRepository
     */
    private $userRepository;
    /**
     * @var EntityManager
     */
    private $entityManager;
    /**
     * @var ObjectManager
     */
    private $objectManager;
    /**
     * @var ChatCanalService
     */
    private $chatCanalService;
    /**
     * @var ChatUserCanal
     */
    private $chatUserCanal;
    /**
     * @var CanalMessageRepository
     */
    private $canalMessageRepository;

    public function __construct(ChatService $chatService,
                                ChatCanalService $chatCanalService,
                                ChatUserCanal $chatUserCanal,
                                CanalMessageRepository $canalMessageRepository,
                                UserRepository $userRepository,
                                EntityManager $entityManager,
                                ObjectManager $objectManager)
    {
        $this->chatService = $chatService;
        $this->userRepository = $userRepository;
        $this->entityManager = $entityManager;
        $this->objectManager = $objectManager;
        $this->chatCanalService = $chatCanalService;
        $this->chatUserCanal = $chatUserCanal;
        $this->canalMessageRepository = $canalMessageRepository;
    }

    /**
     * @Route("/chat/addMessage/{code}", name="chat_addMessage", options={"expose"=true})
     */
    public function addMessage($code, Request $request)
    {
        if($request->isMethod('POST')) {
            $canalMessage = $this->canalMessageRepository->findOneBy(['code' => $code]);
            $message = $this->chatService->addMessage($canalMessage, $this->getUser(), $request->request->get('textes'));
            return $this->json($message);
        }

        return $this->json([
            'message' => 'methode non pris en charge essayer avec la methode POST',
            'error' => true,
        ], 405);
    }

    /**
     * @Route("/chat/vu/message/{id}", name="chat_vuMessage", options={"expose"=true})
     */
    public function vu(Message $message)
    {
        $vu = $this->chatService->vu($message, $this->getUser());
        return $this->json($vu);
    }

    /**
     * @Route("/chat/deleteMessage/{message}", name="chat_deleteMessage", options={"expose"=true})
     */
    public function deleteMessage(Message $message)
    {
        $this->entityManager->delete($message);
        return $this->json(['error' => false]);
    }

    /**
     * @Route("/chat/createSingleCanal", name="chat_createSingleCanal", options={"expose"=true})
     */
    public function createSingleCanal(Request $request)
    {
        if($request->isMethod('POST')) {
           $canalMessage = $this->chatCanalService->createSingleCanal($this->getUser(), $this->userRepository->findOneBy(['id' => $request->request->get('user') ]));
           return $this->json($canalMessage);
        }

        return $this->json([
            'message' => 'methode non pris en charge essayer avec la methode POST',
            'error' => true,
        ], 405);
    }

    /**
     * @Route("/chat/createGroupCanal", name="chat_createGroupCanal", options={"expose"=true})
     */
    public function createGroupCanal(Request $request)
    {
        if($request->isMethod('POST')) {
            $users_id = $request->request->get('users');
            $users = [$this->getUser()];
            if(is_array($users_id) && count($users_id) > 0) {
                foreach($users as $id_user) {
                    $users[] = $this->userRepository->findOneBy(['id' => $id_user]);
                }
            }
            $canalMessage = $this->chatCanalService->createGroupCanal($request->request->get('nom'), $users);
            return $this->json($canalMessage);
        }

        return $this->json([
            'message' => 'methode non pris en charge essayer avec la methode POST',
            'error' => true,
        ], 405);
    }

    /**
     * @Route("/chat/groupCanal/{id}/addUser", name="chat_groupCanal_addUser", options={"expose"=true})
     */
    public function addUser(CanalMessage $canalMessage, Request $request)
    {
        if($request->isMethod('POST')) {
            $users = $request->request->get('users');
            $users = $this->objectManager->getMultiple(User::class, $users);
            $canalNormalized = $this->chatUserCanal->addUsersFromCanal($users, $canalMessage);
            return $this->json($canalNormalized);
        }

        return $this->json([
            'message' => 'methode non pris en charge essayer avec la methode POST',
            'error' => true,
        ], 405);
    }

    /**
     * @Route("/chat/groupCanal/{id}/removeUser", name="chat_groupCanal_removeUser", options={"expose"=true})
     */
    public function removeUser(CanalMessage $canalMessage, Request $request)
    {
        if($request->isMethod('DELETE')) {
            $users = $request->query->get('user');
            $users = is_array($users) ? $users : [$users];
            $users = $this->objectManager->getMultiple(User::class, $users);
            $canalNormalized = $this->chatUserCanal->removeUsersFromCanal($users, $canalMessage);
            return $this->json($canalNormalized);
        }

        return $this->json([
            'message' => 'methode non pris en charge essayer avec la methode DELETE',
            'error' => true,
        ], 405);
    }

    /**
     * @Route("/chat/getMessages/canal/{canalMessage}", name="chat_getMessage_byCanal", options={"expose"=true})
     */
    public function getMessagesByCanal(CanalMessage $canalMessage)
    {
       $messages =  $this->chatService->getMessagesByCanal($canalMessage);

       return $this->json($messages);

    }

    /**
     * @Route("/chat/getMessages/code/{code}", name="chat_getMessage_byCode", options={"expose"=true})
     */
    public function getMessagesByCode($code)
    {
        $messages = $this->chatService->getMessagesByCode($code);
        return $this->json($messages);
    }

    /**
     * @Route("/chat/getCanalGroupMessage", name="chat_getCanalMessage", options={"expose"=true})
     */
    public function getCanalGroups()
    {
        $canalsNormalized = $this->chatCanalService->getCanalsGroup($this->getUser());
        return $this->json($canalsNormalized);
    }

    /**
     * @Route("/chat/getCanalSingleMessage", name="chat_getCanalSingleMessage", options={"expose"=true})
     */
    public function getSingleCanal()
    {
       $normalizedCanals = $this->chatCanalService->getSingleCanal($this->getUser());
       return $this->json($normalizedCanals);
    }
}