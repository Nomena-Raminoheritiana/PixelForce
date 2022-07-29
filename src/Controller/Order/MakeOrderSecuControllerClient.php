<?php

namespace App\Controller\Order;

use App\Controller\BaseControllerClient;
use App\Entity\Order;
use App\Entity\ProduitSecu;
use App\Entity\TypeAbonnementSecu;
use App\Entity\Utilisateur;
use App\Form\OrderClientFilterType;
use App\Repository\OrderRepository;
use App\Repository\TypeAbonnementSecuRepository;
use App\Repository\UserRepository;
use App\Services\SearchService;
use App\Util\Search\MyCriteriaParam;
use Doctrine\ORM\EntityManagerInterface;
use Exception;
use Knp\Component\Pager\PaginatorInterface;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormFactoryInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/client/{token}/makeordersecu")
 */
class MakeOrderSecuControllerClient extends AbstractController
{
    private $entityManager;
    private $userRepository;
    private $session;

    public function __construct(EntityManagerInterface $entityManager, UserRepository $userRepository, SessionInterface $session)
    {
        $this->entityManager = $entityManager;
        $this->userRepository = $userRepository;
        $this->session = $session;
    }

    /**
     * @Route("/{id}", name="client_make_ordersecu_abonnement")
     */
    public function index($token, ProduitSecu $produit, Request $request, FormFactoryInterface $formFactory, TypeAbonnementSecuRepository $typeAbonnementSecuRepository): Response
    {
        
        $agent = $this->userRepository->findAgentByToken($token);
        $types = $typeAbonnementSecuRepository->findAll();
        $form = $formFactory
            ->createNamedBuilder("abonnement-form")
            ->add('typeAbonnement', EntityType::class, array(
                'label' => false,
                'label_attr' => array(
                    'class' => 'radio'
                ),
                'required' => true,
                'class' => TypeAbonnementSecu::class,
                'choices' => $types,
                'choice_label' => function(?TypeAbonnementSecu $type) {
                    return $type ? $type->getNom().' '.number_format($type->getPrix(), 2, ',', ' ').' €' : '';
                },
                'expanded' => true,
                'data' => $types[0]
            ))
            ->add('codePromo', TextType::class, [
                "label" => "Code Promo",
                "trim" => true,
                "required" => false
            ])
            ->getForm();

        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {

            try{
                
            } catch(Exception $ex){
                $error = $ex->getMessage();
            }

        }
        
        return $this->render('user_category/client/secu/makeorder/makeorder_abonnement.html.twig', [
            'produit' => $produit,
            'filesDirectory' => $this->getParameter('files_directory_relative'),
            'form' => $form->createView(),
            'token' => $token,
            'agent' => $agent,
            'types' => $types
        ]);

    }

    

}