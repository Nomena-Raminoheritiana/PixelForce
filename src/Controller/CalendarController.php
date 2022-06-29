<?php


namespace App\Controller;

use App\Entity\Commentaire;
use App\Entity\User;
use App\Entity\CalendarEvent;
use App\Entity\CalendarEventLabel;


use App\Manager\EntityManager;
use App\Services\CalendarService;
use App\Form\CalendlyType;

use App\Repository\CalendarEventLabelRepository;
use App\Repository\CalendarEventRepository;
use App\Repository\UserRepository;



use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;

/**
 * @Route("/calendar")
 */
class CalendarController extends AbstractController
{


    /**
     * @var CalendarService
     */
    private $calendarService;
    /**
     * @var EntityManager
     */
    private $entityManager;
    /**
     * @var CalendarEventLabelRepository
     */
    private $calendarEventLabelRepository;
    /**
     * @var CalendarEventRepository
     */
    private $calendarEventRepository;
    /**
     * @var UserRepository
     */
    private $userRepository;

    public function __construct(CalendarService $calendarService, EntityManager $entityManager, UserRepository $userRepository,CalendarEventLabelRepository $calendarEventLabelRepository, CalendarEventRepository $calendarEventRepository)
    {
        $this->calendarService = $calendarService;
        $this->entityManager = $entityManager;
        $this->calendarEventLabelRepository = $calendarEventLabelRepository;
        $this->calendarEventRepository = $calendarEventRepository;
        $this->userRepository = $userRepository;


    }

    /**
     * @Route("/", name="calendar_index")
     */
    public function index(Request $request)
    {
        $error = null;
        $user = $this->getUser();

        $lienCalendly = $user->getLienCalendly();

        $form = $this->createForm(CalendlyType::class);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $data = $form->getData();
            $user->setLienCalendly($data['lienCalendly']);

            $this->entityManager->persist($user);
            $this->entityManager->flush();
            return $this->redirectToRoute('calendar_index');
        }

        $calendarEventLabelList = $this->calendarEventLabelRepository->findAll();

        return $this->render('calendar/calendar.html.twig', [
            'lienCalendly' => $lienCalendly,
            'form' => $form->createView(),
            'error' => $error,
            'userId' => $user->getId(),

            'calendarEventLabelList'=>$calendarEventLabelList
        ]);
    }

    /**
     * @Route("/config", name="calendar_config")
     */
    public function config(Request $request)
    {
        $error = null;
        $user = $this->getUser();
        // $user->setLienCalendly("https://calendly.com/kevin-andrianasolo-lala");

        $lienCalendly = $user->getLienCalendly();

        $form = $this->createForm(CalendlyType::class);
        $form->handleRequest($request);
        
        if ($form->isSubmitted() && $form->isValid()) {
            $data = $form->getData();
            $user->setLienCalendly($data['lienCalendly']);

            $this->entityManager->persist($user);
            $this->entityManager->flush();
            return $this->redirectToRoute('calendar_index');
        }
        if($lienCalendly!=null) $form->get('lienCalendly')->setData($lienCalendly);
        return $this->render('calendar/calendar-config.html.twig', [
            'lienCalendly' => $lienCalendly,
            'form' => $form->createView(),
            'error' => $error
        ]);
    }

    /**
     * @Route("/api/events/{id}", name="calendar_api_events")
     */
    public function getEvents($id)
    {
        $user = $this->userRepository->find($id);
        $events = $this->calendarEventRepository->findBy(["user"=>$user]);

        return new JsonResponse($events);
    }

    /**
     * @Route("/api/add_event", name="calendar_api_add_event", methods={"POST"})
     */
    public function addEvent(Request $request)
    {
        $parameters = json_decode($request->getContent(), true);

        $user = $this->userRepository->find($parameters['userId']);
        $label = $this->calendarEventLabelRepository->find($parameters['calendarEventLabelId']);


        $event = (new CalendarEvent())
            ->setCalendarEventLabel($label)
            ->setUser($user)
            ->setTitle($parameters['title'])
            ->setUrl($parameters['url'])
            ->setAllDay($parameters['allDay'])
            ->setStart(new \Datetime($parameters['start']))
            ->setEnd(new \Datetime($parameters['end']));

        $this->entityManager->persist($event);
        $this->entityManager->flush();

        return new JsonResponse($event);
    }

    /**
     * @Route("/api/update_event", name="calendar_api_update_event", methods={"POST"})
     */
    public function updateEvent(Request $request)
    {
        $error = null;
        $parameters = json_decode($request->getContent(), true);

        $user = $this->userRepository->find($parameters['userId']);
        $label = $this->calendarEventLabelRepository->find($parameters['calendarEventLabelId']);

        $event = $this->calendarEventRepository->find($parameters['id']);

        if($event!=null){
            $event 
                ->setCalendarEventLabel($label)
                ->setUser($user)
                ->setTitle($parameters['title'])
                ->setUrl($parameters['url'])
                ->setAllDay($parameters['allDay'])
                ->setStart(new \Datetime($parameters['start']))
                ->setEnd(new \Datetime($parameters['end']));

            $this->entityManager->persist($event);
            $this->entityManager->flush();
        }
        

        return new JsonResponse($event);
    }

    /**
     * @Route("/api/delete_event/{id}", name="calendar_api_delete_event", methods={"DELETE"})
     */
    public function deleteEvent($id)
    {
        $error = null;
        $event = $this->calendarEventRepository->find($id);
        if($event!=null){
            $this->entityManager->remove($event);
            $this->entityManager->flush();
        }
        return new JsonResponse($event);
    }
    
    
}