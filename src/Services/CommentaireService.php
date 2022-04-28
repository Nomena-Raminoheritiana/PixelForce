<?php


namespace App\Services;


use App\Entity\Commentaire;
use App\Helpers\ClassHelper;
use App\Manager\EntityManager;
use App\Manager\ObjectManager;
use App\Repository\CommentaireRepository;
use Doctrine\ORM\Mapping\Entity;
use Symfony\Component\Security\Core\Security;
use Twig\Environment;

class CommentaireService
{
    /**
     * @var ObjectManager
     */
    private $objectManager;

    /**
     * @var Security
     */
    private $security;
    /**
     * @var CommentaireRepository
     */
    private $commentaireRepository;
    private $subject = [];
    /**
     * @var ClassHelper
     */
    private $classHelper;
    /**
     * @var Environment
     */
    private $twig;
    /**
     * @var EntityManager
     */
    private $entityManager;

    public function __construct(
        ObjectManager $objectManager,
        Security $security,
        CommentaireRepository $commentaireRepository,
        ClassHelper $classHelper,
        Environment $twig,
        EntityManager $entityManager
    )
    {
        $this->objectManager = $objectManager;
        $this->security = $security;
        $this->commentaireRepository = $commentaireRepository;
        $this->classHelper = $classHelper;
        $this->twig = $twig;
        $this->entityManager = $entityManager;
    }

    public function add($textes, $parent_id = null)
    {
        if($textes) {
            $parent = $this->commentaireRepository->findOneBy(['id' => $parent_id]);
            $subjectParams = !empty($this->subject) ? $this->subject : [];
            $commentaire = $this->objectManager->createObject(Commentaire::class, array_merge([
                'textes' => $textes,
                'user' => $this->security->getUser(),
                'parent' => $parent
            ], $subjectParams), false, [], true);
            if($parent) {
                // insérer après le commentaire
                $this->commentaireRepository->persistAsLastChildOf($commentaire, $parent);
            }
            $this->entityManager->flush();

            return $commentaire;
        }
        return new Commentaire();
    }

    public function setSubject($subject = ['classWithNamespace' => null, 'id' => null])
    {
        $classMethod = $this->classHelper->getShortClass($subject['classWithNamespace']);
        $object = $this->objectManager->get($subject['classWithNamespace'], $subject['id']);
        $this->subject[$classMethod] = $object;
    }

    public function loadAll($template, $ownerId, $classWithNamespace)
    {
        $objectOwner = $this->objectManager->get($classWithNamespace, $ownerId);
        $shortClass = $this->classHelper->getShortClass($classWithNamespace);
        $paramFind[$shortClass] = $objectOwner;
        $paramFind['lvl'] = 0;
        $commentaires = $this->commentaireRepository->findBy($paramFind);
        return $this->getTemplate($template, [
            'commentaires' => $commentaires
        ]);
    }

    public function loadSousCommentaire( $parent_id, $template)
    {
        $commentaire_parent = $this->commentaireRepository->findOneBy(['id' => $parent_id]);
        if($commentaire_parent) {
            $sousCommentaire = $this->commentaireRepository->getChildren($commentaire_parent, true);
            return $this->getTemplate($template, [
                'commentaires' => $sousCommentaire,
            ]);
        }
        return false;
    }

    public function getTemplate($template, $params)
    {
        return $this->twig->render($template, $params);
    }


    public function remove(Commentaire $commentaire)
    {
        if (!empty($commentaire)) {
            foreach ($this->commentaireRepository->children($commentaire) as $child) {
                $this->remove($child);
            }
            $this->commentaireRepository->removeFromTree($commentaire);
            $this->entityManager->flush();
        }
    }
}