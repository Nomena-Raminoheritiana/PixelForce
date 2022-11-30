<?php

namespace App\Controller;

use App\Repository\CalendarEventLabelRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class AdminCalendarController extends AbstractController
{
    protected $calendarEventLabelRepository;

    public function __construct(CalendarEventLabelRepository $calendarEventLabelRepository)
    {
        $this->calendarEventLabelRepository = $calendarEventLabelRepository;
    }

  /**
   * @Route("/admin/calendar/index", name="admin_calendar_index")
   */
  public function admin_calendar_index(): Response
  {
      $calendarEventLabelList = $this->calendarEventLabelRepository->findAll();
    
      return $this->render('user_category/admin/calendar/calendar.html.twig', [
          'calendarEventLabelList'=>$calendarEventLabelList
      ]);
  }

}
