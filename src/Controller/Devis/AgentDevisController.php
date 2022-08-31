<?php

namespace App\Controller\Devis;

use App\Entity\DemandeDevis;
use App\Entity\Devis;
use App\Form\DevisType;
use App\Manager\EntityManager;
use App\Util\GenericUtil;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\BinaryFileResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\ResponseHeaderBag;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/agent")
 */
class AgentDevisController extends AbstractController
{
    private $entityManager;

    public function __construct(EntityManager $entityManager)
    {
        $this->entityManager = $entityManager;
    }

    /**
     * @Route("/{id}/devis/create", name="agent_client_devis_create")
     */
    public function agent_client_devis_create(Request $request, DemandeDevis $dd)
    {
        $agent = $this->getUser();
        $devis = new Devis();
        $formDevis = $this->createForm(DevisType::class, $devis);
        $formDevis->handleRequest($request);

        if($formDevis->isSubmitted() && $formDevis->isValid()) {

            $files = [];

            $data = $formDevis->get('files')->getData();

            for($i=0; $i<count($data); $i++){
                $filename = $this->fileHandler->upload($data[$i], "devis/digital/".date('Y-m-d-H-i-s'));
                $files[] = $filename;
            }
            $devis->setFiles($files);


            $devis->setDemandeDevis($dd);
            $devis->setStatus(Devis::DEVIS_STATUS['CREATED']);
            $devis->setStatusInt(Devis::DEVIS_STATUS_INT['CREATED']);
            $this->entityManager->persist($devis);
            $this->entityManager->flush();
            $this->addFlash(
               'success',
               'Devis créé'
            );
            return $this->redirectToRoute('agent_demandedevis_fiche', ['id' => $dd->getId()]);
        }


        return $this->render('user_category/agent/dd/demandedevis/devis_create.html.twig',[
            'formDevis' => $formDevis->createView(),
            'agent' => $agent,
            'dd' => $dd,
            'filesDirectory' => $this->getParameter('files_directory_relative')
        ]);
    }

    /**
     * @Route("/{dd}/devis/{devis}/fiche", name="agent_devis_fiche")
     */
    public function agent_devis_fiche(Request $request, DemandeDevis $dd, Devis $devis): Response
    {
        $agent = $this->getUser();
        $formDevis = $this->createForm(DevisType::class, $devis)
            ->remove('title')
            ->remove('files')
        ;
        $formDevis->handleRequest($request);

        if($formDevis->isSubmitted() && $formDevis->isValid()) {
            $this->entityManager->persist($devis);
            $this->entityManager->flush();
            $this->addFlash(
               'success',
               'Devis "'.$devis->getTitle().'" modifié'
            );
            return $this->redirectToRoute('agent_demandedevis_fiche', ['id' => $dd->getId()]);
        }

        return $this->render('user_category/agent/dd/devis/devis_details.html.twig',[
            'dd' => $dd,
            'devis' => $devis,
            'agent' => $agent,
            'filesDirectory' => $this->getParameter('files_directory_relative'),
            'formDevis' => $formDevis->createView(),
            'DEVIS_STATUS' => Devis::DEVIS_STATUS
        ]);
    }

    /**
     * @Route("/devis/{devis}/file/{index}", name="agent_devis_file_download")
     */
    public function agent_devis_file_download(Devis $devis, int $index): Response
    {
        $filepath = $devis->getFiles()[$index];
        $response = new BinaryFileResponse(
            $this->getParameter('files_directory_relative')."/".
            $devis->getFiles()[$index]
        );
        $response->setContentDisposition(
            ResponseHeaderBag::DISPOSITION_ATTACHMENT,
            GenericUtil::getFileName($filepath)
        );
        return $response;

    }
}
