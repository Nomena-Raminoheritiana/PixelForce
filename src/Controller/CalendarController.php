<?php


namespace App\Controller;

use App\Entity\Commentaire;
use App\Entity\User;

use App\Manager\EntityManager;
use App\Services\CalendarService;
use App\Form\CalendlyType;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

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

    public function __construct(CalendarService $calendarService, EntityManager $entityManager)
    {
        $this->calendarService = $calendarService;
        $this->entityManager = $entityManager;
    }

    /**
     * @Route("/", name="calendar_index")
     */
    public function index(Request $request)
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

        return $this->render('calendar/calendar.html.twig', [
            'lienCalendly' => $lienCalendly,
            'form' => $form->createView(),
            'error' => $error
        ]);
    }

    
}