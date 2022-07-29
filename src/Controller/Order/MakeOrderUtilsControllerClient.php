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
use App\Repository\CodePromoSecuRepository;
use App\Services\SearchService;
use App\Util\Search\MyCriteriaParam;
use Doctrine\ORM\EntityManagerInterface;
use Exception;
use Knp\Component\Pager\PaginatorInterface;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormFactoryInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/makeordersecu/utils")
 */
class MakeOrderUtilsControllerClient extends AbstractController
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
     * @Route("/checkCodePromo", name="check_code_promo_secu", methods={"POST"})
     */
    public function codepromo(Request $request, CodePromoSecuRepository $codePromoSecuRepository): JsonResponse
    {
        try{
            $data = json_decode( $request->getContent(), true);
            $code = $data['code'];

            $codePromo = $codePromoSecuRepository->findValid($code);
            if(!$codePromo) throw new Exception("Code invalide");
            
            return new JsonResponse(array('codePromo' => $codePromo));
        } catch(Exception $ex){
            return new JsonResponse(array('message' => $ex->getMessage()), 500);
        }
    }

}