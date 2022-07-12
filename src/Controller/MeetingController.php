<?php


namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\UserRepository;
use App\Repository\MeetingStateRepository;
use App\Repository\MeetingRepository;

use App\Repository\CalendarEventLabelRepository;


use App\Entity\Meeting;
use App\Form\MeetingType;
use App\Form\MeetingFilterType;

use Symfony\Component\HttpFoundation\Request;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Knp\Component\Pager\PaginatorInterface;
/**
 * @Route("/meeting")
 */
class MeetingController extends AbstractController
{
    private $entityManager;
    private $userRepository;
    private $meetingStateRepository;
    private $meetingRepository;

    private $calendarEventLabelRepository;


    public function __construct(EntityManagerInterface $entityManager,UserRepository $userRepository, MeetingRepository $meetingRepository ,MeetingStateRepository $meetingStateRepository , CalendarEventLabelRepository $calendarEventLabelRepository){
        $this->userRepository = $userRepository;
        $this->entityManager = $entityManager;
        $this->meetingStateRepository = $meetingStateRepository;
        $this->meetingRepository = $meetingRepository;

        $this->calendarEventLabelRepository = $calendarEventLabelRepository;


    }
    /**
     * @Route("/form/{id}", name="meeting_form")
     */
    public function meet($id, Request $request)
    {
        $userToMeet = $this->userRepository->find($id);
        $error = null;
        $meeting = new Meeting();
        $meeting->setStart(new \Datetime());
        $meeting->setEnd(new \Datetime());
        $form = $this->createForm(MeetingType::class, $meeting);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {

            try{
                $this->entityManager->beginTransaction();
                $this->entityManager->getConnection()->setAutoCommit(false);
                
                if($userToMeet == null) throw new \Exception('User to meet invalid');
                // Get "En attente" meeting state
                $defaultMeetingState = $this->meetingStateRepository->find(1);
                if($defaultMeetingState != null) $meeting->setMeetingState($defaultMeetingState);

                if($meeting->getEnd() < $meeting->getStart()) throw new \Exception("La date de fin doit être une date ultérieure à celle de la date de début.");
                $meeting->setUser($this->getUser());
                $meeting->setUserToMeet($userToMeet);

                $this->entityManager->persist($meeting);
                $this->entityManager->flush();

                
                $meetingCalendarEventLabel = $this->calendarEventLabelRepository->findOneBy(["value"=>"meeting"]);
                if($meetingCalendarEventLabel == null) throw new \Exception('Calendar event "meeting" is missing in the database.');

                // Insert calendarEvent for the current user
                $event = $meeting->toCalendarEvent();
                $event->setCalendarEventLabel($meetingCalendarEventLabel);
                $event->setUser($meeting->getUser());
                $this->entityManager->persist($event);
                $this->entityManager->flush();

                 // Insert calendarEvent for the userToMeet
                 $event = $meeting->toCalendarEvent();
                 $event->setCalendarEventLabel($meetingCalendarEventLabel);
                 $event->setUser($meeting->getUserToMeet());
                 $this->entityManager->persist($event);
                 $this->entityManager->flush();

                 // Get the secteur of the agent :
                 

                 $this->entityManager->commit();

                return $this->redirectToRoute('agent_contact_list');
            } catch(\Exception $ex){
                $error = $ex->getMessage();
                if($this->entityManager->getConnection()->isTransactionActive()) {
                    $this->entityManager->rollback();
                }
            }
        }

        return $this->render('meeting/meeting-form.html.twig', [
            'userToMeet' => $userToMeet,
            'form' => $form->createView(),
            'error' => $error
        ]);
    }

    /**
     * @Route("/fiche/{id}", name="meeting_fiche")
     */
    public function meeting_fiche($id)
    {
        $meeting = $this->meetingRepository->find($id);
        
        return $this->render('meeting/meeting-fiche.html.twig', [
            'meeting' => $meeting
        ]);
    }
     /**
     * @Route("/list", name="meeting_list")
     */
    public function meeting_list(Request $request, PaginatorInterface $paginator)
    {
        $error = null;
        $page = $request->query->get('page', 1);
        $limit = 5;
        $meeting = new Meeting();
        $user = $this->getUser();
        $meeting->setStart(new \Datetime());
        $meeting->setUser($user);
        $meeting->setUserToMeet($user);

        $form = $this->createForm(MeetingFilterType::class, $meeting, [
            'method' => 'GET',
        ]);
        $form->handleRequest($request);
        $options = [];
        $options['orderBy'] = $form->get('orderBy')->getData();
        $options['order'] = $form->get('order')->getData();
        $query = $this->meetingRepository->getSearchQuery($meeting, $options);
        $meetings = $paginator->paginate(
            $query,
            $page,
            $limit
        );
        // $meetings = $this->meetingRepository->findAll();
        
        return $this->render('meeting/meeting-list.html.twig', [
            'meetings' => $meetings,
            'form' => $form->createView(),
            'error' => $error,
            'user'=>$user
        ]);
    }

    /**
     * @Route("/api/cancel/{meetingId}", name="meeting_api_cancel", methods={"POST"})
     */
    public function cancelMeeting(Request $request, int $meetingId): JsonResponse
    {
        try{
            $meetingState = $this->meetingStateRepository->findOneBy(["name"=>"Annulé"]);
            $meeting = $this->meetingRepository->find($meetingId);
            $meeting->setMeetingState($meetingState);
            $this->entityManager->persist($meeting);
            $this->entityManager->flush();
            return new JsonResponse(array('id' => $meetingId));
        } catch(Exception $ex){
            return new JsonResponse(array('message' => $ex->getMessage()), 500);
        }
    }
    /**
     * @Route("/api/report/{meetingId}", name="meeting_api_report", methods={"POST"})
     */
    public function reportMeeting(Request $request, int $meetingId): JsonResponse
    {
        try{
            $meetingState = $this->meetingStateRepository->findOneBy(["name"=>"Annulé"]);
            $meeting = $this->meetingRepository->find($meetingId);
            $meeting->setMeetingState($meetingState);
            $this->entityManager->persist($meeting);
            $this->entityManager->flush();
            return new JsonResponse(array('id' => $meetingId));
        } catch(Exception $ex){
            return new JsonResponse(array('message' => $ex->getMessage()), 500);
        }
    }
    /**
     * @Route("/api/end/{meetingId}", name="meeting_api_end", methods={"POST"})
     */
    public function endMeeting(Request $request, int $meetingId): JsonResponse
    {
        try{
            $meetingState = $this->meetingStateRepository->findOneBy(["name"=>"Terminé"]);
            $meeting = $this->meetingRepository->find($meetingId);
            $meeting->setMeetingState($meetingState);
            $this->entityManager->persist($meeting);
            $this->entityManager->flush();
            return new JsonResponse(array('id' => $meetingId));
        } catch(Exception $ex){
            return new JsonResponse(array('message' => $ex->getMessage()), 500);
        }
    }
}