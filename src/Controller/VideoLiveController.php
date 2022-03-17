<?php


namespace App\Controller;


use App\Services\API\ApiZoom;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class VideoLiveController extends AbstractController
{
    public function __construct()
    {
    }

    /**
     * @param Request $request
     * @Route("/liveVideo/with/{encodedIdUser}", name="live_videoRapide")
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function liveRapide(Request $request)
    {
        if($this->getUser()->getId() === (int) $request->query->get('id')) {
            return $this->json([
                'idLive' => $request->query->get('idLive'),
            ]);
        }

        return $this->json([
           'error' => true
        ]);

    }
}
