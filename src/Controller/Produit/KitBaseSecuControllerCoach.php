<?php

namespace App\Controller\Produit;

use App\Repository\KitBaseElmtSecuRepository;
use App\Repository\KitBaseSecuRepository;
use Doctrine\ORM\EntityManagerInterface;
use Google\Service\Docs\Request;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;

/**
 * @Route("/coach/kitbasesecu")
 */
class ProduitSecuControllerCoach extends AbstractController
{
    private $entityManager;
    private $kitBaseSecuRepository;
    private $kitBaseElmtSecuRepository;

    public function __construct(EntityManagerInterface $entityManager, KitBaseSecuRepository $kitBaseSecuRepository, KitBaseElmtSecuRepository $kitBaseElmtSecuRepository){
        $this->entityManager = $entityManager;
        $this->kitBaseSecuRepository = $kitBaseSecuRepository;
        $this->kitBaseElmtSecuRepository = $kitBaseElmtSecuRepository;
    }

    /**
     * @Route("/", name="admin_kitbasesecu")
     */
    public function index(Request $request): Response
    {
        $user = (object)$this->getUser();
        $secteur = $user->getUniqueCoachSecteur();
        $kitbase = $secteur->getKitBaseSecu();

        if(!$kitbase){
            return $this->redirectToRoute('');
        }

        return $this->render('user_category/coach/kitbasesecu/kitbasesecu_details.html.twig', [
            'kitbase' => $kitbase,
            'filesDirectory' => $this->getParameter('files_directory_relative')
        ]);

    }
    
}