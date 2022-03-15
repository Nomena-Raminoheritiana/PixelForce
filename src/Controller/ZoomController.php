<?php


namespace App\Controller;


use App\Services\API\ApiZoom;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;

class ZoomController extends AbstractController
{
    public function __construct(ApiZoom $apiZoom)
    {
    }

    public function createReunion(Request $request)
    {

    }
}
