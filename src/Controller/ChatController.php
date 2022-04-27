<?php


namespace App\Controller;


use App\Entity\CanalMessage;
use App\Entity\Message;
use App\Manager\EntityManager;
use App\Repository\UserRepository;
use App\Services\ChatService;
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

    public function __construct(ChatService $chatService, UserRepository $userRepository, EntityManager $entityManager)
    {
        $this->chatService = $chatService;
        $this->userRepository = $userRepository;
        $this->entityManager = $entityManager;
    }

    /**
     * @Route("/chat/addMessage/{id}", name="chat_addMessage", options={"expose"=true})
     */
    public function addMessage(CanalMessage $canalMessage, Request $request)
    {
        if($request->isMethod('POST')) {
            $message = $this->chatService->addMessage($canalMessage, $this->getUser(), $request->request->get('textes'));
            return $this->json($message);
        }

        return $this->json([
            'message' => 'methode non pris en charge essayer avec la methode POST',
            'error' => true,
        ], 405);
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
           $canalMessage = $this->chatService->createSingleCanal($this->getUser(), $this->userRepository->findOneBy(['id' => $request->request->get('user') ]));
           return $this->json($canalMessage);
        }

        return $this->json([
            'message' => 'methode non pris en charge essayer avec la methode POST',
            'error' => true,
        ], 405);
    }

    /**
     * @Route("/chat/createSingleCanal", name="chat_createSingleCanal", options={"expose"=true})
     */
    public function createGroupCanal(Request $request)
    {
        if($request->isMethod('POST')) {
            $users_id = $request->request->get('users');
            $users = [];
            if(is_array($users_id) && count($users_id) > 0) {
                foreach($users as $id_user) {
                    $users[] = $this->userRepository->findOneBy(['id' => $id_user]);
                }
            }
            $canalMessage = $this->chatService->createGroupCanal($request->request->get('nom'), $users);
            return $this->json($canalMessage);
        }

        return $this->json([
            'message' => 'methode non pris en charge essayer avec la methode POST',
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

    public function getCanals()
    {
        $canalsNormalized = $this->chatService->getCanalsGroup($this->getUser());
        return $this->json($canalsNormalized);
    }
}