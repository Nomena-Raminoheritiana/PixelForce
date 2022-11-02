<?php


namespace App\Controller\Anonymous;

use App\Entity\DevisCompany;
use App\Entity\DevisCompanyDetail;
use App\Entity\OrderDigitalDevisCompany;
use App\Manager\EntityManager;
use App\Services\DemandeDevisService;
use App\Services\FileHandler;
use App\Services\StripeService;
use Nucleos\DompdfBundle\Wrapper\DompdfWrapperInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\DependencyInjection\ParameterBag\ParameterBagInterface;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\FormType;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormFactoryInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Validator\Constraints\NotBlank;

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
     * @Route("/devis/{id}/company/fiche", name="anonymous_devis_company_fiche", options={"expose"=true})
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
                "required" => true,
                "attr" => [
                    "class" => "d-none"
                ]
            ])
            ->add('client_name', TextType::class, ['label' => 'Nom et prénom ou Entreprise'])
            ->add('client_mail', EmailType::class, ['label' => 'Adresse email'])
            ->add('client_phone', TextType::class, ['label' => 'Téléphone'])
            ->getForm();

        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $anonymousClientName = $form->get('client_name')->getData();
            $anonymousClientMail = $form->get('client_mail')->getData();
            $anonymousClientPhone = $form->get('client_phone')->getData();

            $signature = $form->get('signature')->getData();
            $photo = $this->fileHandler->saveBase64($signature, $filesDirectory.$devisCompanyDirectory.'/'.'signature.png');
            $src = $this->fileHandler->encode_img_base64($photo);
            
            if (!is_null($devisCompany->getCompanyLogo())) {
                $src_logoCompany = $this->fileHandler->encode_img_base64($filesDirAbsolute.$devisCompany->getCompanyLogo());
                $devisCompany->setCompany_logo_encode_img_base64($src_logoCompany);
            }


            // To base64 
             /** @var DevisCompanyDetail $devisCompanyDetail */
            foreach ($devisCompany->getDevisCompanyDetail() as $devisCompanyDetail) {                
                $image = $devisCompanyDetail->getImage();
                if (!is_null($image)) {
                    $srcImgDevisDetail = $this->fileHandler->encode_img_base64($filesDirAbsolute.$devisCompanyDetail->getImage());
                    $devisCompanyDetail->setImage_encode_img_base64($srcImgDevisDetail);
                }
            }
            
            $html = $this->renderView('pdf/fiche_devis_entrepise.html.twig', [
                'srcEncoded' => $src,
                'signature' => true,
                'filesDirAbsolute' => $filesDirAbsolute,
                'devisCompany' => $devisCompany,
                'filesDirectory' => $filesDirectory,
                'iterationPercent' => $devisCompany->getIterationPayment()
            ]);
    
            $binary = $wrapper->getPdf($html, ['isRemoteEnabled' => true]);
            $filepath = $this->fileHandler->saveBinary($binary, 'devis_avec_signature.pdf', $devisCompanyDirectory);
            $devisCompany->setPjFilename($filepath);
            $devisCompany->setDateSignature(new \DateTime());
            
            $devisCompany->setAnonymousClientName($anonymousClientName);
            $devisCompany->setAnonymousClientMail($anonymousClientMail);
            $devisCompany->setAnonymousClientPhone($anonymousClientPhone);

            

            $this->entityManager->persist($devisCompany);
            $this->entityManager->flush();
            $this->addFlash(
                'success',
                'Devis signé'
             );
            return $this->redirectToRoute('anonymous_devis_signature_checkout', ['id' => $devisCompany->getId()]);
        }
        return $this->render('user_category/anonymous/devis/signature_devis_company.html.twig', [
            'form' => $form->createView()
        ]);
    }

     /**
     * @Route("/devis/{id}/signature/checkout", name="anonymous_devis_signature_checkout")
     */
    public function anonymous_devis_signature_checkout(DevisCompany $devisCompany, StripeService $stripeService, Request $request, FormFactoryInterface $formFactory)
    {
        $stripePublishableKey = $_ENV['STRIPE_PUBLIC_KEY'];
        $orderDevisCompany = new OrderDigitalDevisCompany();
        // $amountDevis = $devisCompany->getDevisTotalTtc();
        // $stripeIntentSecret = $stripeService->intentSecretKlarna($amountDevis);

        $form = $formFactory
            ->createNamedBuilder("payment-form")
            ->add('token', HiddenType::class, [
                'constraints' => [new NotBlank()],
            ])
            ->getForm();

        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $amount_with_condition_payment = $devisCompany->getDevisTotalTtc() / $devisCompany->getIterationPayment();
            $stripeToken =  $form->get('token')->getData();
            
            $orderDevisCompany->setTotalAmountHt($devisCompany->getDevisTotalHt());
            $orderDevisCompany->setTotalAmountTtc($devisCompany->getDevisTotalTtc());
            $orderDevisCompany->setPaymentCondition($devisCompany->getPaymentCondition());
            $orderDevisCompany->setClientName($devisCompany->getAnonymousClientName());
            $orderDevisCompany->setClientMail($devisCompany->getAnonymousClientMail());
            $orderDevisCompany->setClientPhone($devisCompany->getAnonymousClientPhone());
            $orderDevisCompany->setDevisCompany($devisCompany);
            $orderDevisCompany->setIterationPayment($devisCompany->getIterationPayment());
            $orderDevisCompany->setAmountWithConditionPayment($amount_with_condition_payment);


            // On opte cette option pour le moment (Condition de paiment en 100%)
            // $chargeId = $stripeService
            //     ->createCharge(
            //         $stripeToken, 
            //         $devisCompany->getDevisTotalTtc(), 
            //         ['description' => 'Paiement signature devis digital pour une entreprise']
            // );
            // $orderDevisCompany->setStripeChargeId($chargeId);

            $interval_unit = StripeService::INTERVAL_UNIT_MONTH;
            $customer_descri = 'Téléphone : '. $devisCompany->getAnonymousClientPhone();
            $subSched = $stripeService->create_SubscriptionSchedule_ProductAndPrice($devisCompany->getIterationPayment(), $amount_with_condition_payment, $interval_unit, $devisCompany->getAnonymousClientMail(), $devisCompany->getAnonymousClientName(), $customer_descri);

            $orderDevisCompany->setIterationPayment($devisCompany->getIterationPayment());
            $orderDevisCompany->setAmountWithConditionPayment($amount_with_condition_payment);
            $orderDevisCompany->setStripeCustomerId($subSched['customer_id']);
            $orderDevisCompany->setStripeSubSchedId($subSched['subSched_id']);
            $orderDevisCompany->setStripePriceId($subSched['price_id']);


            $devisCompany->setStatus(DevisCompany::DEVIS_STATUS_INT['SIGNED']);
            $this->entityManager->persist($orderDevisCompany);
            $this->entityManager->flush();
            $this->addFlash('success', 'Devis payé');
            return $this->redirectToRoute('anonymous_devis_company_fiche', ['id' => $devisCompany->getId()]);
        }
        return $this->render('user_category/anonymous/devis/checkout_devis_company.html.twig', [
            // 'stripeIntentSecret' => $stripeIntentSecret,
            'devisCompany' => $devisCompany,
            'stripePublishableKey' => $stripePublishableKey,
            'form' => $form->createView()
        ]);    
    }

}