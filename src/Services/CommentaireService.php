<?php


namespace App\Services;


use App\Entity\Commentaire;
use App\Manager\ObjectManager;
use App\Repository\CommentaireRepository;
use Symfony\Component\Security\Core\Security;

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

    public function __construct(ObjectManager $objectManager, Security $security, CommentaireRepository $commentaireRepository)
    {
        $this->objectManager = $objectManager;
        $this->security = $security;
        $this->commentaireRepository = $commentaireRepository;
    }

    public function add($textes, $parent_id = null)
    {
        $parent = $this->commentaireRepository->findOneBy(['id' => $parent_id]);
        $subjectParams = !empty($this->subject) ? $this->subject : [];
        $commentaire = $this->objectManager->createObject(Commentaire::class, array_merge([
            'textes' => $textes,
            'user' => $this->security->getUser(),
            'parent' => $parent
        ], $subjectParams), false, [], true);
        // insérer après le commentaire
        $this->commentaireRepository->persistAsLastChildOf($commentaire, $parent);
        return $commentaire;
    }

    public function setSubject($subject = ['classWithNamespace' => null, 'id' => null])
    {
        $namespaceTab = explode('\\', $subject['classWithNamespace']);
        $classMethod = $namespaceTab[count($namespaceTab - 1)];
        $object = $this->objectManager->get($subject['classWithNamespace'], $subject['id']);
        $this->subject[$classMethod] = $object;
    }

}