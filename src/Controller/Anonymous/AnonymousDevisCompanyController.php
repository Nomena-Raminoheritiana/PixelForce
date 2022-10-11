<?php


namespace App\Controller\Anonymous;

use App\Entity\DevisCompany;
use App\Manager\EntityManager;
use App\Services\DemandeDevisService;
use App\Services\FileHandler;
use Nucleos\DompdfBundle\Wrapper\DompdfWrapperInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\DependencyInjection\ParameterBag\ParameterBagInterface;
use Symfony\Component\Form\Extension\Core\Type\FormType;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use Symfony\Component\Form\FormFactoryInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/anonymous")
 */
class AnonymousDevisCompanyController extends AbstractController
{
    private $entityManager;
    private $fileHandler;
    private $demandeDevisService;
    private $parameterBag;

    public function __construct(EntityManager $entityManager, FileHandler $fileHandler, DemandeDevisService $demandeDevisService, ParameterBagInterface $parameterBag)
    {
        $this->entityManager = $entityManager;
        $this->fileHandler = $fileHandler;
        $this->demandeDevisService = $demandeDevisService;
        $this->parameterBag = $parameterBag;
    }

    /**
     * @Route("/devis/{id}/company/fiche", name="anonymous_devis_company_fiche")
     */
    public function anonymous_devis_company_fiche(DevisCompany $devisCompany)
    {

        $filesDirectory = $this->getParameter('files_directory_relative');

        return $this->render('user_category/anonymous/devis/fiche_devis_company.html.twig', [
            'devisCompany' => $devisCompany,
            'filesDirectory' => $filesDirectory,
            'DEVIS_STATUS_INT' =>  DevisCompany::DEVIS_STATUS_INT
        ]);
    }

    /**
     * @Route("/devis/{id}/reject", name="anonymous_devis_company_reject")
     */
    public function anonymous_devis_company_reject(DevisCompany $devisCompany)
    {
        $devisCompany->setStatus(DevisCompany::DEVIS_STATUS_INT['REJECTED']);
        $this->entityManager->persist($devisCompany);
        $this->entityManager->flush();
        $this->addFlash(
           'danger',
           'Devis rejeté'
        );
        return $this->redirectToRoute('anonymous_devis_company_fiche', ['id' => $devisCompany->getId()]);
    }

    /**
     * @Route("/devis/{id}/company/signature", name="anonymous_devis_company_signature")
     */
    public function anonymous_devis_company_signature(DevisCompany $devisCompany, Request $request,  FormFactoryInterface $formFactoryInterface, DompdfWrapperInterface $wrapper)
    {
        $array = explode('/',  $devisCompany->getPjFilename());
        array_pop($array);
        $stringImplode = implode('/', $array);
        $devisCompanyDirectory = $stringImplode;
        $filesDirAbsolute = $this->parameterBag->get('kernel.project_dir').'/public/files/';
        $filesDirectory  =  $this->getParameter('files_directory_relative');
        
        $form = $formFactoryInterface
        ->createNamedBuilder("sign-contrat-form", FormType::class)
        ->add('signature', HiddenType::class, [
            "label" => "Signature",
            'mapped' => false,
            "required" => true
        ])
        ->getForm();

        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
           
            $signature = $form->get('signature')->getData();
            $photo = $this->fileHandler->saveBase64($signature, $filesDirectory.$devisCompanyDirectory.'/'.'signature.png');
            
            $html = $this->renderView('pdf/fiche_devis_entrepise.html.twig', [
                'filesDirAbsolute' => $filesDirAbsolute,
                'devisCompany' => $devisCompany,
                'filesDirectory' => $filesDirectory,
                'iterationPercent' => intval(100 / $devisCompany->getPaymentCondition()) 
            ]);
    
            $binary = $wrapper->getPdf($html, ['isRemoteEnabled' => true]);
            $filepath = $this->fileHandler->saveBinary($binary, 'devis_avec_signature.pdf', $devisCompanyDirectory);
            $this->demandeDevisService->signContrat($filesDirectory.$filepath, $photo);
            $devisCompany->setPjFilename($filepath);
            $devisCompany->setStatus(DevisCompany::DEVIS_STATUS_INT['SIGNED']);
            
            $this->entityManager->persist($devisCompany);
            $this->entityManager->flush();
            $this->addFlash(
                'success',
                'Devis signé'
             );
            return $this->redirectToRoute('anonymous_devis_company_fiche', ['id' => $devisCompany->getId()]);
        }
        return $this->render('user_category/anonymous/devis/signature_devis_company.html.twig', [
            'form' => $form->createView()
        ]);
    }


}