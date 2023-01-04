<?php

namespace App\Controller\Devis;

use App\Entity\DemandeDevis;
use App\Entity\Devis;
use App\Entity\DevisCompany;
use App\Entity\DevisCompanyDetail;
use App\Entity\User;
use App\Form\DevisCompanyType;
use App\Form\DevisFilterType;
use App\Form\DevisType;
use App\Manager\DevisManager;
use App\Manager\EntityManager;
use App\Repository\DevisCompanyRepository;
use App\Repository\SecteurRepository;
use App\Services\FileHandler;
use App\Services\MailerService;
use App\Services\SearchService;
use App\Util\GenericUtil;
use App\Util\Search\MyCriteriaParam;
use Knp\Component\Pager\PaginatorInterface;
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
    private $devisManager;

    public function __construct(EntityManager $entityManager, DevisCompanyRepository $repoDevisCompany, MailerService $mailerService, FileHandler $fileHandler, ParameterBagInterface $parameterBag, DevisManager $devisManager)
    {
        $this->entityManager = $entityManager;
        $this->repoDevisCompany = $repoDevisCompany;
        $this->mailerService = $mailerService;
        $this->fileHandler = $fileHandler;
        $this->parameterBag = $parameterBag;
        $this->devisManager = $devisManager;
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
    public function agent_company_devis_liste(Request $request, PaginatorInterface $paginator, SearchService $searchService, SecteurRepository $secteurRepository): Response
    {
        $secteurId = $request->getSession()->get('secteurId');
        $secteur = $secteurRepository->find($secteurId);

        $agent = $this->getUser();
        $page = $request->query->get('page', 1);
        $limit = 5;
        $criteria = [
            ['prop' => 'dateMin', 'col' => 'created_at', 'op' => '>='],
            ['prop' => 'dateMax', 'col' => 'created_at', 'op' => '<='],
            ['prop' => 'client', 'col' => "client_mail", 'op' => 'LIKE']
        ];

        $filter = [];

        $form = $this->createForm(DevisFilterType::class, $filter, [
            'method' => 'GET'
        ]);

        $form->handleRequest($request);
        $filter = $form->getData();

        $query = $this->entityManager
            ->createQueryBuilder()
            ->select('d')
            ->from(DevisCompany::class, 'd')
        ;  

        $where =  $searchService->getWhere($filter, new MyCriteriaParam($criteria, 'd'));   
        $query->where($where["where"]." and d.agent = :agent and d.secteur = :secteur ");
        $where["params"]["agent"] = $agent;
        $where["params"]["secteur"] = $secteur;
        $searchService->setAllParameters($query, $where["params"]);
        $searchService->addOrderBy($query, $filter, ['sort' => 'd.created_at', 'direction' => 'desc']);

        $allDevisCompanies = $paginator->paginate(
            $query,
            $page,
            $limit
        );

        // $allDevisCompanies = $this->repoDevisCompany->findBy(['agent' => $agent],['created_at' => 'DESC']);
        return $this->render('user_category/agent/dd/devis/list_company_devis.html.twig', [
            'allDevisCompanies' => $allDevisCompanies,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/company/devis/creation", name="agent_company_devis_create")
     */
    public function agent_company_devis_create(Request $request, DompdfWrapperInterface $wrapper, SecteurRepository $secteurRepository): Response
    {
        $secteurId = $request->getSession()->get('secteurId');
        $secteur = $secteurRepository->find($secteurId);

        /** @var User $agent */
        $agent = $this->getUser();
        $devisCompany = new DevisCompany();
        $formDevisComp = $this->createForm(DevisCompanyType::class, $devisCompany);
        $formDevisComp->handleRequest($request);

        if($formDevisComp->isSubmitted() && $formDevisComp->isValid()) {
            $directory = "digital/devis/entreprise/"."agentId-".$agent->getId()."_".date('Y-m-d-H-i-s');
            $logo = $formDevisComp->get('company_logo')->getData();
            $logoPopup = $request->get('my_logo_societe_input_hidden');
            $filesDirAbsolute = $this->parameterBag->get('kernel.project_dir').'/public/files/';
            $devisCompany->setSecteur($secteur);
            $devisCompany = $this->devisManager->persistDevisCompany($logo, $directory, $devisCompany, $agent, $logoPopup, $filesDirAbsolute);
            // Pour visualiser :
            // return $this->render('pdf/fiche_devis_entrepise.html.twig', [
            //     'filesDirAbsolute' => $filesDirAbsolute,
            //     'devisCompany' => $devisCompany,
            //     'filesDirectory' => $this->getParameter('files_directory_relative'),
            //     'iterationPercent' => intval(100 / $devisCompany->getPaymentCondition())
            // ]);


            $rest_amount_modulo = fmod($devisCompany->getDevisTotalTtc(), $devisCompany->getIterationPayment());
            $isFloat__rest_amount_modulo = $rest_amount_modulo > 0;
            $intval_amount = intval($devisCompany->getDevisTotalTtc() / $devisCompany->getIterationPayment());
            $round_rest_amount_modulo = round($rest_amount_modulo, 2);

            //Piece jointe
            $html = $this->renderView('pdf/fiche_devis_entrepise.html.twig', [
                'filesDirAbsolute' => $filesDirAbsolute,
                'devisCompany' => $devisCompany,
                'filesDirectory' => $this->getParameter('files_directory_relative'),
                'iterationPayment' => $devisCompany->getIterationPayment(),
                'isFloat__rest_amount_modulo' => $isFloat__rest_amount_modulo,
                'intval_amount' => $intval_amount,
                'round_rest_amount_modulo' => $round_rest_amount_modulo
            ]);
            $binary = $wrapper->getPdf($html, ['isRemoteEnabled' => true]);
            $pj_filepath = $this->fileHandler->saveBinary($binary, "agentId-".$agent->getId()."_".date('Y-m-d-H-i-s').'.pdf', $directory);
            $devisCompany->setPjFilename($pj_filepath);

            $this->entityManager->persist($devisCompany);
            $this->entityManager->flush();
            $this->addFlash('success', 'Devis créé');
            return $this->redirectToRoute('agent_company_devis_liste');
        }

        return $this->render('user_category/agent/dd/devis/create_company_devis.html.twig', [
            'formDevisComp' => $formDevisComp->createView(),
            'filesDirectory' => $this->getParameter('files_directory_relative')
        ]);
    }

        /**
     * @Route("/company/devis/{id}/edition", name="agent_company_devis_edit")
     */
    public function agent_company_devis_edit(DevisCompany $devisCompany, Request $request, DompdfWrapperInterface $wrapper): Response
    {
        /** @var User $agent */
        $agent = $this->getUser();
        $formDevisComp = $this->createForm(DevisCompanyType::class, $devisCompany);
        $formDevisComp->handleRequest($request);

        if($formDevisComp->isSubmitted() && $formDevisComp->isValid()) {
            $array = explode('/',  $devisCompany->getPjFilename());
            array_pop($array);
            $stringImplode = implode('/', $array);
            $devisCompanyDirectory = $stringImplode;

            $logo = $formDevisComp->get('company_logo')->getData();
            $logoPopup = $request->get('my_logo_societe_input_hidden');
            $filesDirAbsolute = $this->parameterBag->get('kernel.project_dir').'/public/files/';
            $devisCompany = $this->devisManager->persistDevisCompany($logo, $devisCompanyDirectory, $devisCompany, $agent, $logoPopup, $filesDirAbsolute, $devisCompany->getIterationPayment() );

            $rest_amount_modulo = fmod($devisCompany->getDevisTotalTtc(), $devisCompany->getIterationPayment());
            $isFloat__rest_amount_modulo = $rest_amount_modulo > 0;
            $intval_amount = intval($devisCompany->getDevisTotalTtc() / $devisCompany->getIterationPayment());
            $round_rest_amount_modulo = round($rest_amount_modulo, 2);

            //Piece jointe
            $html = $this->renderView('pdf/fiche_devis_entrepise.html.twig', [
                'filesDirAbsolute' => $filesDirAbsolute,
                'devisCompany' => $devisCompany,
                'filesDirectory' => $this->getParameter('files_directory_relative'),
                'iterationPayment' => $devisCompany->getIterationPayment(),
                'isFloat__rest_amount_modulo' => $isFloat__rest_amount_modulo,
                'intval_amount' => $intval_amount,
                'round_rest_amount_modulo' => $round_rest_amount_modulo
            ]);
            $binary = $wrapper->getPdf($html, ['isRemoteEnabled' => true]);
            $pj_filepath = $this->fileHandler->saveBinary($binary, "agentId-".$agent->getId()."_".date('Y-m-d-H-i-s').'.pdf', $devisCompanyDirectory);
            $devisCompany->setPjFilename($pj_filepath);

            $this->entityManager->persist($devisCompany);
            $this->entityManager->flush();
            $this->addFlash('success', 'Devis modifié');
            return $this->redirectToRoute('agent_company_devis_liste');
        }

        return $this->render('user_category/agent/dd/devis/create_company_devis.html.twig', [
            'formDevisComp' => $formDevisComp->createView(),
            'filesDirectory' => $this->getParameter('files_directory_relative'),
            'devisCompany' => $devisCompany
        ]);
    }

    /**
     * @Route("/company/devis/{id}/detail/et/fiche", name="agent_company_devis_fiche")
     */
    public function agent_company_devis_fiche(DevisCompany $devisCompany): Response
    {
        
        $rest_amount_modulo = fmod($devisCompany->getDevisTotalTtc(), $devisCompany->getIterationPayment());
        $isFloat__rest_amount_modulo = $rest_amount_modulo > 0;
        $intval_amount = intval($devisCompany->getDevisTotalTtc() / $devisCompany->getIterationPayment());
        $round_rest_amount_modulo = round($rest_amount_modulo, 2);

        return $this->render('user_category/agent/dd/devis/fiche_company_devis.html.twig', [
            'devisCompany' => $devisCompany,
            'DEVIS_STATUS_INT' => DevisCompany::DEVIS_STATUS_INT,
            'isFloat__rest_amount_modulo' => $isFloat__rest_amount_modulo,
            'intval_amount' => $intval_amount,
            'rest_amount_modulo' => $rest_amount_modulo,
            'round_rest_amount_modulo' => $round_rest_amount_modulo
        ]);
    }

    /**
     * @Route("/company/devis/{id}/mail/to/client/send", name="agent_company_devis_send_mail_to_client")
     */
    public function agent_company_devis_send_mail_to_client(MailerService $mailService, DevisCompany $devisCompany): Response
    {
        $clientEmail = $devisCompany->getClientMail();
        $pj_filepath = $devisCompany->getPjFilename();
        $mailService->SendDevisToCompany($clientEmail, $devisCompany, $pj_filepath);
        $this->addFlash('success', 'Email envoyé avec succès');
        return $this->redirectToRoute('agent_company_devis_fiche', ['id' =>  $devisCompany->getId()]);

    }


//          Route pour tester la génération d'un pdf
//    /**
//     * @Route("/company/devis/{id}/detail/pdf", name="agent_company_detail_pdf")
//     */
//    public function agent_view_pdf(DevisCompany $devisCompany, DompdfWrapperInterface $wrapper)
//    {
//        $filesDirAbsolute = $this->parameterBag->get('kernel.project_dir').'/public/files/';
//        //Piece jointe
//        $html =  $this->renderView('pdf/fiche_devis_entrepise.html.twig', [
//            'filesDirAbsolute' => $filesDirAbsolute,
//            'devisCompany' => $devisCompany,
//            'filesDirectory' => $this->getParameter('files_directory_relative'),
//            'iterationPercent' => intval(100 / $devisCompany->getPaymentCondition())
//        ]);
//        $response = $wrapper->getStreamResponse($html, "document.pdf");
//        $response->send();

        
//    }
//    /**
//     * @Route("/company/devis/{id}/detail/generate", name="agent_company_detail_pdf_generate")
//     */
//     public function agent_view_pdf_generate(DevisCompany $devisCompany, DompdfWrapperInterface $wrapper)
//     {
//         $filesDirAbsolute = $this->parameterBag->get('kernel.project_dir').'/public/files/';
//         // dd($devisCompany);
//         return $this->render('pdf/fiche_devis_entrepise.html.twig', [
//             'filesDirAbsolute' => $filesDirAbsolute,
//             'devisCompany' => $devisCompany,
//             'filesDirectory' => $this->getParameter('files_directory_relative'),
//             'iterationPercent' => intval(100 / $devisCompany->getPaymentCondition())
//         ]);
//     }

}
