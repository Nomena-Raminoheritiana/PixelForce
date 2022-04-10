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
     * @Route("/commentaire/add", name="commentaire_add", options={"expose"=true})
     */
    public function add(Request $request)
    {
        $this->commentaireService->setSubject([
            'classWithNamespace' => $request->request->get('classWithNamespace'),
            'id' => $request->request->get('ownerId')
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
           ]
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