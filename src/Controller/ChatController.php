<?php


namespace App\Controller;


use App\Entity\CanalMessage;
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

    public function __construct(ChatService $chatService, UserRepository $userRepository)
    {
        $this->chatService = $chatService;
        $this->userRepository = $userRepository;
    }

    /**
     * @Route("/chat/addMessage/{id}", name="chat_addMessage", options={"expose"=true})
     */
    public function addMessage(CanalMessage $canalMessage, Request $request)
    {
        if($request->isMethod('POST')) {
            $message = $this->chatService->addMessage($canalMessage, $this->getUser(), $request->request->get('textes'));
            return $this->json([
                'error' => false,
                'message' => [
                    'id' => $message->getId(),
                    'textes' => $message->getTextes(),
                    'createdAt' => $message->getCreatedAt()
                ],
                'canal' => [
                    'id' => $canalMessage->getId(),
                    'isGroup' => $canalMessage->getIsGroup(),
                    'nom' => $canalMessage->getNom(),
                    'code' => $canalMessage->getCode()
                ]
            ]);
        }

        return $this->json([
            'message' => 'methode non pris en charge essayer avec la methode POST',
            'error' => true,
        ], 405);
    }

    /**
     * @Route("/chat/createSingleCanal", name="chat_createSingleCanal", options={"expose"=true})
     */
    public function createSingleCanal(Request $request)
    {
        if($request->isMethod('POST')) {
           $canalMessage = $this->chatService->createSingleCanal($this->getUser(), $this->userRepository->findOneBy(['id' => $request->request->get('user') ]));
            return $this->json([
                'error' => false,
                'canal' => [
                    'id' => $canalMessage->getId(),
                    'isGroup' => $canalMessage->getIsGroup(),
                    'nom' => $canalMessage->getNom(),
                    'code' => $canalMessage->getCode()
                ]
            ]);
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
            return $this->json([
                'error' => false,
                'canal' => [
                    'id' => $canalMessage->getId(),
                    'isGroup' => $canalMessage->getIsGroup(),
                    'nom' => $canalMessage->getNom(),
                    'code' => $canalMessage->getCode()
                ]
            ]);
        }

        return $this->json([
            'message' => 'methode non pris en charge essayer avec la methode POST',
            'error' => true,
        ], 405);
    }

//    /**
//     * @Route("/chat/getMessages/canal/{id}", name="chat_createSingleCanal", options={"expose"=true})
//     */
//    public function getMessagesByCanal(CanalMessage $canalMessage)
//    {
//       $messages =  $this->chatService->getMessagesByCanal($canalMessage);
//
//    }
}