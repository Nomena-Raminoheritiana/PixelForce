<?php

namespace App\Controller\Devis;

use App\Entity\DemandeDevis;
use App\Entity\Devis;
use App\Entity\DevisCompany;
use App\Entity\DevisCompanyDetail;
use App\Entity\User;
use App\Form\DevisCompanyType;
use App\Form\DevisType;
use App\Manager\EntityManager;
use App\Repository\DevisCompanyRepository;
use App\Services\FileHandler;
use App\Services\MailerService;
use App\Util\GenericUtil;
use DateTime;
use Nucleos\DompdfBundle\Wrapper\DompdfWrapperInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\DependencyInjection\ParameterBag\ParameterBagInterface;
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
    private $repoDevisCompany;
    private $mailerService;
    private $fileHandler;
    private $parameterBag;

    public function __construct(EntityManager $entityManager, DevisCompanyRepository $repoDevisCompany, MailerService $mailerService, FileHandler $fileHandler, ParameterBagInterface $parameterBag)
    {
        $this->entityManager = $entityManager;
        $this->repoDevisCompany = $repoDevisCompany;
        $this->mailerService = $mailerService;
        $this->fileHandler = $fileHandler;
        $this->parameterBag = $parameterBag;
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
            'DEVIS_STATUS_INT' => Devis::DEVIS_STATUS_INT
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

    /**
     * @Route("/company/devis/liste", name="agent_company_devis_liste")
     */
    public function agent_company_devis_liste(): Response
    {
        $agent = $this->getUser();
        $allDevisCompanies = $this->repoDevisCompany->findBy(['agent' => $agent]);
        return $this->render('user_category/agent/dd/devis/list_company_devis.html.twig', [
            'allDevisCompanies' => $allDevisCompanies
        ]);
    }

    /**
     * @Route("/company/devis/creation", name="agent_company_devis_create")
     */
    public function agent_company_devis_create(Request $request, DompdfWrapperInterface $wrapper): Response
    {
        /** @var User $agent */
        $agent = $this->getUser();
        $devisCompany = new DevisCompany();
        $formDevisComp = $this->createForm(DevisCompanyType::class, $devisCompany);
        $formDevisComp->handleRequest($request);

        if($formDevisComp->isSubmitted() && $formDevisComp->isValid()) {
            $clientEmail = $formDevisComp->get('client_mail')->getData();
            $directory = "digital/devis/entreprise/"."agentId-".$agent->getId()."_".date('Y-m-d-H-i-s');
           
            //Logo Société
            $logo = $formDevisComp->get('company_logo')->getData();
            
            if ($logo !== null) {
                $logoC_filename = $this->fileHandler->upload($logo, $directory);
                $devisCompany->setCompanyLogo($logoC_filename);
            }
        

            $totalHt = 0;

            /** @var DevisCompanyDetail $devisCompanyDetail */
            foreach ($devisCompany->getDevisCompanyDetail() as $devisCompanyDetail) {                
                $montantHt = $devisCompanyDetail->getQuantite() * $devisCompanyDetail->getPuVente();
                $totalHt = $totalHt + $montantHt;

                $devisCompanyDetail->setDevisCompany($devisCompany);
                $devisCompanyDetail->setMontantHt($montantHt);
                $devisCompanyDetail->setTotalTtc($montantHt + ($montantHt * 20));
                $this->entityManager->persist($devisCompanyDetail);
            }
            
            $totalTVA = ($totalHt * 20)/100;
            $totalTTC = $totalHt + $totalTVA;

            $refSequence = "PX-F-".(new \DateTime())->format('Y-m-d');
            $devisCompany->setDevisRefSeq($refSequence);
            $devisCompany->setAgent($agent);

            $devisCompany->setDevisTotalHt($totalHt);
            $devisCompany->setDevisTotalTtc($totalTTC);


            //Piece jointe
            $html = $this->renderView('pdf/fiche_devis_entrepise.html.twig', [
                'filesDirAbsolute' => $this->parameterBag->get('kernel.project_dir').'/public/files/',
                'devisCompany' => $devisCompany,
                'filesDirectory' => $this->getParameter('files_directory_relative')
            ]);
    
            $binary = $wrapper->getPdf($html, ['isHtml5ParserEnabled' => true, 'isRemoteEnabled' => true]);
            $pj_filepath = $this->fileHandler->saveBinary($binary, "agentId-".$agent->getId()."_".date('Y-m-d-H-i-s').'.pdf', $directory);
            $devisCompany->setPjFilename($pj_filepath);

            
            $this->entityManager->persist($devisCompany);
            $this->entityManager->flush();

            $this->mailerService->SendDevisToCompany($clientEmail, $devisCompany, $pj_filepath);

            $this->addFlash(
               'success',
               'Devis créé'
            );
            return $this->redirectToRoute('agent_company_devis_liste');
        }

        return $this->render('user_category/agent/dd/devis/create_company_devis.html.twig', [
            'formDevisComp' => $formDevisComp->createView(),
        ]);
    }

    /**
     * @Route("/company/devis/{id}/detail/et/fiche", name="agent_company_devis_fiche")
     */
    public function agent_company_devis_fiche(DevisCompany $devisCompany): Response
    {
        return $this->render('user_category/agent/dd/devis/fiche_company_devis.html.twig', [
            'devisCompany' => $devisCompany
        ]);
    }

}
