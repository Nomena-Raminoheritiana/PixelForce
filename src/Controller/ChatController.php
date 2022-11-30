<?php


namespace App\Controller;


use App\Entity\CanalMessage;
use App\Entity\Generique\Structure;
use App\Entity\Message;
use App\Entity\User;
use App\Manager\EntityManager;
use App\Manager\ObjectManager;
use App\Repository\CanalMessageRepository;
use App\Repository\UserRepository;
use App\Services\Chat\ChatCanalService;
use App\Services\Chat\ChatMercureNotification;
use App\Services\Chat\ChatNormalizer;
use App\Services\Chat\ChatService;
use App\Services\Chat\ChatUserCanal;
use App\Services\GenerateKey;
use App\Services\DirectoryManagement;
use App\Services\FileUploader;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\BinaryFileResponse;
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
    /**
     * @var GenerateKey
     */
    private $generateKey;
    /**
     * @var ChatNormalizer
     */
    private $chatNormalizer;
    /**
     * @var ChatMercureNotification
     */
    private $chatMercureNotification;

    /**
     * @var FileUploader
     */
    private $fileUploader;
    /**
     * @var DirectoryManagement
     */
    private $directoryManagement;

    public function __construct(ChatService $chatService,
                                ChatCanalService $chatCanalService,
                                DirectoryManagement $directoryManagement,
                                FileUploader $fileUploader,
                                ChatUserCanal $chatUserCanal,
                                CanalMessageRepository $canalMessageRepository,
                                ChatMercureNotification $chatMercureNotification,
                                UserRepository $userRepository,
                                ChatNormalizer $chatNormalizer,
                                EntityManager $entityManager,
                                GenerateKey $generateKey,
                                ObjectManager $objectManager)
    {
        $this->chatService = $chatService;
        $this->userRepository = $userRepository;
        $this->entityManager = $entityManager;
        $this->objectManager = $objectManager;
        $this->chatCanalService = $chatCanalService;
        $this->chatUserCanal = $chatUserCanal;
        $this->canalMessageRepository = $canalMessageRepository;
        $this->generateKey = $generateKey;
        $this->chatNormalizer = $chatNormalizer;
        $this->chatMercureNotification = $chatMercureNotification;
        $this->fileUploader = $fileUploader;
        $this->directoryManagement = $directoryManagement;
    }

    /**
     * @Route("/chat/addMessage/{code}", name="chat_addMessage", options={"expose"=true})
     */
    public function addMessage($code, Request $request)
    {
        if($request->isMethod('POST')) {
            $canalMessage = $this->canalMessageRepository->findOneBy(['code' => $code]);
            if(!$canalMessage) {
                $users = $this->generateKey->desistCode($code);
                if($users) {
                   $canalMessage = $this->chatCanalService->createSingleCanal($this->userRepository->find($users[0]), $this->userRepository->find($users[1]), false);
                }

            }
            $message = $this->chatService->addMessage($canalMessage, $this->getUser(), $request->request->get('textes'), $request->request->get('files'));
            return $this->json($message);
        }

        return $this->json([
            'message' => 'methode non pris en charge essayer avec la methode POST',
            'error' => true,
        ], 405);
    }

    /**
     * @Route("/chat/import/file", name="chat_importFile", options={"expose"=true})
     */
    public function importFile(Request $request)
    {
        $fileName = $this->fileUploader->upload($request->files->get('file'), $this->directoryManagement->getMediaChatFolder());
        if($fileName) {
            return $this->json([
                'error' => false,
                'fileUrl' => $this->generateUrl('chat_binaryFileResponse', [
                    'fileName' => $fileName,
                ])
            ]);
        }
        return $this->json([
            'error' => true,
        ]);
    }

    /**
     * @Route("/chat/file/{fileName}", name="chat_binaryFileResponse", options={"expose"=true})
     */
    public function binaryFileResponse($fileName)
    {
        $file = $this->directoryManagement->getMediaChatFolder().DIRECTORY_SEPARATOR.$fileName;
        if($fileName && file_exists($file)) {
           return new BinaryFileResponse($file);
        }

        return $this->json([
            'error' => true,
            'message' => 'file not found'
        ]);
    }

    /**
     * @Route("/chat/vu/message/{id}", name="chat_vuMessage", options={"expose"=true})
     */
    public function vu(CanalMessage $canal)
    {
        $canal->addVus($this->getUser()->getId());
        $this->entityManager->save($canal);
        $this->chatMercureNotification->notifyWhenNewVu($canal, $this->getUser());
        return $this->json([
            'error' => false
        ]);
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
            $nom_canal = $request->request->get('nom');
            if($nom_canal) {
                $users = [$this->getUser()];
                if(is_array($users_id) && count($users_id) > 0) {
                    foreach($users_id as $id_user) {
                        $users[] = $this->userRepository->findOneBy(['id' => $id_user]);

                    }
                }
                $canalMessage = $this->chatCanalService->createGroupCanal($nom_canal, $users);
                return $this->json($canalMessage);
            }
          return $this->json([
              'error' => true,
              'message' => 'Un canal doit avoir un nom'
          ]);
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
            if($request->query->get('includeMe')) {
                $users = array_merge([$this->getUser()],$users);
            }
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

    /**
     * @Route("/chat/getCanalSingleMessageByUser/{id}", name="getCanalSingleMessageByUser", options={"expose"=true})
     */
    public function getSingleCanalBy_idUser(User $user)
    {
        $normalizedCanals = $this->chatCanalService->createSingleCanal($user, $this->getUser());
        return $this->json($normalizedCanals);
    }

    /**
     * @Route("/chat/canal/{id}/userTyping", name="chat_notifyUserTyping", options={"expose"=true})
     */
    public function notifyUserTyping(CanalMessage $canalMessage)
    {
        $this->chatMercureNotification->notifyWhenUserIsTyping($this->getUser(), $canalMessage);
        return $this->json([
            'error' => false,
        ]);
    }
    /**
     * @Route("/chat/canal/{id}/userStopTyping", name="chat_notifyUserStopTyping", options={"expose"=true})
     */
    public function notifyUserStopTyping(CanalMessage $canalMessage)
    {
        $this->chatMercureNotification->notifyWhenUserIsTyping($this->getUser(), $canalMessage, true);
        return $this->json([
            'error' => false,
        ]);
    }
}