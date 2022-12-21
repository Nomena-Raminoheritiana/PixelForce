<?php

namespace App\Controller\Checkout;

use App\Entity\BasketItemAroma;
use App\Entity\OrderAddressAroma;
use App\Entity\OrderAroma;
use App\Form\OrderAddressAromaFormType;
use App\Repository\SecteurRepository;
use App\Repository\UserRepository;
use App\Services\BasketServiceAroma;
use App\Services\ConfigSecteurService;
use App\Services\OrderServiceAroma;
use Doctrine\ORM\EntityManagerInterface;
use Exception;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use Symfony\Component\Form\FormFactoryInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Component\Validator\Constraints\NotBlank;

#[Route(path: '/client/{token}/checkoutaroma')]
class CheckoutControllerAroma extends AbstractController
{
    private $entityManager;
    private $basketService;
    private $userRepository;
    private $session;
    private $configSecteurService;

    
    public function __construct(EntityManagerInterface $entityManager, 
    BasketServiceAroma $basketService, 
    UserRepository $userRepository, 
    SessionInterface $session,
    ConfigSecteurService $configSecteurService)
    {
        $this->entityManager = $entityManager;
        $this->basketService = $basketService;
        $this->session = $session;
        $this->userRepository = $userRepository;
        $this->configSecteurService = $configSecteurService;
    }


    #[Route(path: '/address', name: 'client_aroma_checkout_address')]
    public function address(string $token, Request $request): Response
    {
        $secteurId = $this->session->get('secteurId');
        $agent = $this->userRepository->findAgentByToken($token);
        $address = new OrderAddressAroma();
        $form = $this->createForm(OrderAddressAromaFormType::class, $address);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {

            try{
                $request->getSession()->set('addressAroma', $address);
                return $this->redirectToRoute('client_aroma_checkout_payment', ['token' => $token]);
            } catch(Exception $ex){
                $this->addFlash('danger', $ex->getMessage());
            }
        }

        
        return $this->render('user_category/client/aroma/cart/address.html.twig',[
            'form' => $form->createView(),
            'agent' => $agent,
            'token' => $token
        ]);
        
    }

    
    #[Route(path: '/payment', name: 'client_aroma_checkout_payment')]
    public function payment(string $token, Request $request, FormFactoryInterface $formFactory, OrderServiceAroma $orderService, SecteurRepository $secteurRepository): Response
    {
        $secteurId = $this->session->get('secteurId');
        $secteur = $secteurRepository->find($secteurId);
        $agent = $this->userRepository->findAgentByToken($token);
        $groupKey = BasketItemAroma::getGroupKeyStatic($agent->getId(), $secteurId);
        $basket = $this->basketService->refreshBasket($groupKey);
        $totalCost = $this->basketService->getTotalCostBasket($basket);
        $tva = $this->configSecteurService->findTva($secteur);
        
        $form = $formFactory
            ->createNamedBuilder("payment-form")
            ->add('token', HiddenType::class, [
                'constraints' => [new NotBlank()],
            ])
            ->getForm();

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {

            try{
                $stripeToken =  $form->get('token')->getData();
                $order = new OrderAroma();
                $order->setUser($this->getUser());
                $order->setSecteur($secteur);
                $order->setAgent($agent);
                $order->setAddress($request->getSession()->get('addressAroma'));
                $order = $orderService->saveOrder($order, $stripeToken);
                return $this->redirectToRoute('client_aroma_order_details', ['id' => $order->getId(), 'token' => $token]);
            } catch(Exception $ex){
                $this->addFlash('danger', $ex->getMessage());
            }
        }

        
        return $this->render('user_category/client/aroma/cart/payment.html.twig',[
            'form' => $form->createView(),
            'agent' => $agent,
            'token' => $token,
            'basket' => $basket,
            'totalCost' => $totalCost,
            'tva' => $tva
        ]);
        
    }

    
}
