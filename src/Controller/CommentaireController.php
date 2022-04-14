<?php


namespace App\Controller;

use App\Entity\Commentaire;
use App\Manager\EntityManager;
use App\Services\CommentaireService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class CommentaireController extends AbstractController
{


    /**
     * @var CommentaireService
     */
    private $commentaireService;
    /**
     * @var EntityManager
     */
    private $entityManager;

    public function __construct(CommentaireService $commentaireService, EntityManager $entityManager)
    {
        $this->commentaireService = $commentaireService;
        $this->entityManager = $entityManager;
    }

    /**
     * @Route("/commentaire/charger", name="commentaire_charger", options={"expose"=true})
     */
    public function charger(Request $request)
    {
        $template = base64_decode($request->request->get('template'));
        $ownerId = base64_decode($request->request->get('ownerId'));
        $classWithNamespace = base64_decode($request->request->get('classWithNamespace'));
        $allComments =  $this->commentaireService->loadAll($template, $ownerId, $classWithNamespace);
        return $this->json([
            'commentaires' => $allComments
        ]);
    }

    /**
     * @Route("/commentaire/add", name="commentaire_add", options={"expose"=true})
     */
    public function add(Request $request)
    {
        $this->commentaireService->setSubject([
            'classWithNamespace' => base64_decode($request->request->get('classWithNamespace')),
            'id' => base64_decode($request->request->get('ownerId'))
            ]);
        /** @var Commentaire $commentaire */
        $commentaire = $this->commentaireService->add(
            $request->request->get('textes'),
            $request->request->get('parent_id'),
        );

        return $this->json([
           'commentaire' => [
               'id' => $commentaire->getId(),
               'textes' => $commentaire->getTextes()
           ],
            'template' => $this->commentaireService->getTemplate(base64_decode($request->request->get('template')), ['commentaire' => $commentaire])
        ]);
    }

    /**
     * @Route("/commentaire/edit/{id}", name="commentaire_edit", options={"expose"=true})
     */
    public function edit(Commentaire $commentaire, Request $request)
    {
        $commentaire->setTextes($request->request->get('textes'));
        $this->entityManager->save($commentaire);
        return $this->json([
            'commentaire' => [
                'id' => $commentaire->getId(),
                'textes' => $commentaire->getTextes()
            ]
        ]);
    }

}