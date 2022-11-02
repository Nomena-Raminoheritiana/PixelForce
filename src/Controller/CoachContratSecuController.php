<?php

namespace App\Controller;

use App\Entity\AgentSecteur;
use App\Entity\CoachAgent;
use App\Entity\ContratSecu;
use App\Entity\SearchEntity\UserSearch;
use App\Entity\Secteur;
use App\Entity\User;
use App\Form\ContratSecuFormType;
use App\Form\InscriptionAgentType;
use App\Form\MultipleSecteurType;
use App\Form\ResetPasswordType;
use App\Form\UserLoginType;
use App\Form\UserSearchType;
use App\Form\UserType;
use App\Manager\EntityManager;
use App\Manager\UserManager;
use App\Repository\AgentSecteurRepository;
use App\Repository\CoachAgentRepository;
use App\Repository\CoachSecteurRepository;
use App\Repository\ContratSecuRepository;
use App\Repository\SecteurRepository;
use App\Repository\UserRepository;
use App\Services\AgentSecteurService;
use App\Services\FileHandler;
use App\Services\FormationService;
use Doctrine\ORM\EntityManagerInterface;
use Exception;
use Knp\Component\Pager\PaginatorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/coach/contratsecu")
 */
class CoachContratSecuController extends AbstractController
{
    private $entityManager;
    private $contratSecuRepository;
    private $fileHandler;
    private $documentService;

    public function __construct(EntityManagerInterface $entityManager, ContratSecuRepository $contratSecuRepository, FileHandler $fileHandler){
        $this->entityManager = $entityManager;
        $this->contratSecuRepository = $contratSecuRepository;
        $this->fileHandler = $fileHandler;
    }

    /**
     * @Route("/form", name="coach_contratsecu_form")
     */
    public function new(Request $request): Response
    {
        $isEdit = true;
        $user = (object)$this->getUser();
        $secteur = $user->getUniqueCoachSecteur();
        $contrat = $secteur->getContratSecu();
        if(!$contrat){
            $isEdit = false;
            $contrat = new ContratSecu();
        }
        $form = $this->createForm(ContratSecuFormType::class, $contrat);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {

            try{
                $file = $form->get('file')->getData();
                
                if($file){
                    $filename = $this->fileHandler->upload($file, "secu/contrat");
                    $contrat->setFichier($filename);
                }
                if(!$contrat->getFichier()){
                    throw new Exception("Contrat obligatoire");
                }

                $contrat->setSecteur($secteur);
                $this->entityManager->persist($contrat);
                $this->entityManager->flush();

            } catch(Exception $ex){
                $error = $ex->getMessage();
                $this->addFlash('danger', $error);
            }
        }

        return $this->render('user_category/coach/secu/contrat/contrat_form.html.twig',[
            'form' => $form->createView(),
            'isEdit' => $isEdit,
            'filesDirectory' => $this->getParameter('files_directory_relative'),
            'contrat' =>  $contrat
        ]);
    }
}
