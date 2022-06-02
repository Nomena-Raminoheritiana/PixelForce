<?php


namespace App\Controller;

use App\Entity\User;
use App\Entity\AgentSecteur;
use App\Form\InscriptionAgentType;
use App\Manager\EntityManager;
use App\Manager\UserManager;
use App\Repository\AgentSecteurRepository;
use App\Repository\SecteurRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class AgentInscriptionController extends AbstractController
{
    /**
     * @var EntityManager
     */
    private $entityManager;
    /**
     * @var UserManager
     */
    private $userManager;


    public function __construct(EntityManager $entityManager, UserManager $userManager)
    {
        $this->entityManager = $entityManager;
        $this->userManager = $userManager;
    }


    /**
     * @Route("/inscription/agent/index", name="agent_inscription")
     */
    public function inscriptionAgent(Request $request, SecteurRepository $secteurRepository, AgentSecteurRepository $tset)
    {
        $user = new User();
        $agentSecteur = new AgentSecteur();
        $form = $this->createForm(InscriptionAgentType::class, $user);
        $form->handleRequest($request);


        if($form->isSubmitted() && $form->isValid()) {
            $this->userManager->setUserPasword($user, $request->request->get('inscription_agent')['password']['first'], '', false);
            $agentSecteur->setUser($user);
            $secteur = $secteurRepository->find($request->request->get('inscription_agent')['secteur']['secteur']);
            $agentSecteur->setSecteur($secteur);
            $user->setRoles([ User::ROLE_AGENT ]);
            $this->entityManager->save($user);
            $this->entityManager->save($agentSecteur);

            $this->addFlash('success','Votre inscription sur Pixelforce a été effectuée avec succès. Veuillez attendre la validation de votre coach pour accéder à la plateforme.');
            return $this->redirectToRoute('app_login');

        }

        return $this->render('security/inscription/form.html.twig', [
            'form' => $form->createView()
        ]);

    }
}
