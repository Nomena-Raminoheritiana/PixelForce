<?php


namespace App\Controller;


use App\Services\DirectoryManagement;
use App\Services\VimeoService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class MediaUrlController extends AbstractController
{

    /**
     * @var DirectoryManagement
     */
    private $directoryManagement;

    public function __construct(DirectoryManagement $directoryManagement)
    {
        $this->directoryManagement = $directoryManagement;
    }

    /**
     * @Route("/media/route", name="media_url")
     */
    public function urlMedia(Request $request)
    {

    }

}
