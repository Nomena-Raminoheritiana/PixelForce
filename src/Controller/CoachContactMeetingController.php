<?php


namespace App\Controller;

use App\Entity\Contact;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\UserRepository;
use App\Repository\MeetingStateRepository;
use App\Repository\MeetingRepository;
use App\Repository\AgentSecteurRepository;
use App\Repository\CoachSecteurRepository;
use App\Repository\SecteurRepository;



use App\Repository\CalendarEventLabelRepository;


use App\Entity\Meeting;
use App\Entity\SearchEntity\MeetingSearch;
use App\Form\MeetingType;
use App\Form\MeetingFilterType;
use App\Form\MeetingSearchType;
use App\Repository\ContactRepository;
use Symfony\Component\HttpFoundation\Request;
use Doctrine\ORM\EntityManagerInterface;
use Exception;
use Symfony\Component\HttpFoundation\JsonResponse;
use Knp\Component\Pager\PaginatorInterface;

class CoachContactMeetingController extends AbstractController
{
    private $entityManager;
    private $meetingStateRepository;
    private $meetingRepository;

    public function __construct(EntityManagerInterface $entityManager, MeetingRepository $meetingRepository ,MeetingStateRepository $meetingStateRepository)
    {
        $this->entityManager = $entityManager;
        $this->meetingStateRepository = $meetingStateRepository;
        $this->meetingRepository = $meetingRepository;
    }

    /**
     * @Route("/coach/contact/meeting/{id}/fiche", name="coach_contact_meeting_fiche")
     */
    public function coach_contact_meeting_fiche($id)
    {
        $meeting = $this->meetingRepository->find($id);
        
        return $this->render('user_category/coach/meeting/meeting-fiche.html.twig', [
            'meeting' => $meeting
        ]);
    }

     /**
     * @Route("/coach/contact/meeting/list", name="coach_contact_meeting_list")
     */
    public function coach_contact_meeting_list(Request $request, PaginatorInterface $paginator)
    {
        $coach = $this->getUser();
        $search = new MeetingSearch();
        $searchForm = $this->createForm(MeetingSearchType::class, $search);
        $meetings = $paginator->paginate(
            $this->meetingRepository->findMeetingByUser($search, $coach),
            $request->query->getInt('page', 1),
            20
        );
        
        return $this->render('user_category/coach/meeting/meeting-list.html.twig', [
            'meetings' => $meetings,
            'searchForm' => $searchForm
        ]);
    }
}