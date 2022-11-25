<?php

namespace App\Controller\Basket;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;

use Symfony\Component\HttpFoundation\Request;

use Symfony\Component\Routing\Annotation\Route;
use Doctrine\ORM\EntityManagerInterface;
use App\Entity\BasketItemAroma;
use App\Entity\ImplantationAroma;
use App\Repository\ConfigSecteurRepository;
use App\Repository\SecteurRepository;
use App\Repository\UserRepository;
use App\Services\BasketServiceAroma;
use App\Services\ConfigSecteurService;
use Exception;
use Symfony\Component\HttpFoundation\Session\SessionInterface;

#[Route('/cartaroma/{token}')]
class CartControllerAroma extends AbstractController
{
    private $entityManager;
    private $basketService;
    private $userRepository;
    private $session;
    private $configSecteurService;
    private $secteurRepository;



    public function __construct(EntityManagerInterface $entityManager, 
        BasketServiceAroma $basketService, 
        UserRepository $userRepository, 
        SessionInterface $session,
        SecteurRepository $secteurRepository,
        ConfigSecteurService $configSecteurService)
    {
        $this->entityManager = $entityManager;
        $this->basketService = $basketService;
        $this->userRepository = $userRepository;
        $this->session = $session;
        $this->configSecteurService = $configSecteurService;
        $this->secteurRepository = $secteurRepository;
    }

    #[Route('/', name: 'client_cart_aroma_index')]
    public function index($token): Response
    {
        $secteurId = $this->session->get('secteurId');
        $secteur = $this->secteurRepository->find($secteurId);
        $agent = $this->userRepository->findAgentByToken($token);
        $groupKey = BasketItemAroma::getGroupKeyStatic($agent->getId(), $secteurId);
        $basket = $this->basketService->refreshBasket($groupKey);
        $totalCost = $this->basketService->getTotalCostBasket($basket);
        $tva = $this->configSecteurService->findTva($secteur);
        return $this->render('user_category/client/aroma/cart/cart.html.twig', [
            'basket' => $basket,
            'totalCost' => $totalCost,
            'agent' => $agent,
            'token' => $token,
            'tva' => $tva
        ]);
    }

    
    #[Route('/add/{id}', name: 'client_cart_aroma_add')]
    public function add(string $token, ImplantationAroma $implantation, Request $request): Response
    {
        try{
            $secteurId = $this->session->get('secteurId');
            $agent = $this->userRepository->findAgentByToken($token);
            $quantity = $request->get('quantity', 1);            
            $basketItem = new BasketItemAroma($implantation, $quantity);
            $basketItem->setAgentId($agent->getId());
            $basketItem->setSecteurId($secteurId);
            
            $this->basketService->add($basketItem);
            $this->addFlash('success', $quantity.' '.$implantation->getNom().' ajouté(e)(s) au panier.');
        } catch(Exception $ex){
            $this->addFlash('danger', $ex->getMessage());
        }
        return $this->redirectToRoute('client_cart_aroma_index', ['token' => $token]);
    }

    
    #[Route('/remove/{id}', name: 'client_cart_aroma_remove')]
    public function remove(string $token, ImplantationAroma $implantation, Request $request): Response
    {
        try{
            $secteurId = $this->session->get('secteurId');
            $agent = $this->userRepository->findAgentByToken($token);
            $groupKey = BasketItemAroma::getGroupKeyStatic($agent->getId(), $secteurId);
            $this->basketService->remove($groupKey, $implantation->getId());
            $this->addFlash('success', $implantation->getNom().' supprimé(e) du panier.');
        } catch(Exception $ex){
            $this->addFlash('danger', $ex->getMessage());
        }
        return $this->redirectToRoute('client_cart_aroma_index', ['token' => $token]);
    }

    
    #[Route('/update', name: 'client_cart_aroma_update', methods:"PUT")]
    public function update(string $token, Request $request): JsonResponse
    {
        try{
            $basketItems = json_decode( $request->getContent(), true);
            $secteurId = $this->session->get('secteurId');
            $agent = $this->userRepository->findAgentByToken($token);
            $groupKey = BasketItemAroma::getGroupKeyStatic($agent->getId(), $secteurId);
            $this->basketService->refreshBasket($groupKey, true);
            $this->basketService->updateAll($agent->getId(), $secteurId, $basketItems);
            $this->addFlash('success', 'Votre panier a été mis à jour.');
            return new JsonResponse(array('basket' => $this->basketService->getBasket($groupKey)));
        } catch(Exception $ex){
            return new JsonResponse(array('message' => $ex->getMessage()), 500);
        }
    }
    
    
}
