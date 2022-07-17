<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use setasign\Fpdi\Fpdi;

/**
 * @Route("/inscription/pdftest")
 */
class PdfTestController extends AbstractController
{
    /**
     * @Route("/", name="pdf_test")
     */
    public function index()
    {
        $pdf = new Fpdi();
        $pageCount = $pdf->setSourceFile("example2.pdf");
        $pdf->AddPage();
        $tplId = $pdf->importPage(1);
        $pdf->useTemplate($tplId);

        $pdf->AddPage();
        $tplId = $pdf->importPage(2);
        $pdf->useTemplate($tplId);

        $pdf->AddPage();
        $tplId = $pdf->importPage(3);
        $pdf->useTemplate($tplId);
        $pdf->Image("signature.png", 0, 0, 50);
        
        $pdf->Output();   

        /* return $this->render('pdf_test/index.html.twig', [
            'controller_name' => 'PdfTestController',
        ]); */
    }
}
