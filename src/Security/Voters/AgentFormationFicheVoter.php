<?php


namespace App\Security\Voters;


use App\Entity\Formation;
use App\Entity\User;
use App\Repository\FormationAgentRepository;
use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;
use Symfony\Component\Security\Core\Authorization\Voter\Voter;

class AgentFormationFicheVoter extends Voter
{

    const AGENT_FICHE = 'agent_fiche';
    /**
     * @var FormationAgentRepository
     */
    private $formationAgentRepository;

    public function __construct(FormationAgentRepository $formationAgentRepository)
    {
        $this->formationAgentRepository = $formationAgentRepository;
    }

    /**
     * Determines if the attribute and subject are supported by this voter.
     *
     * @param string $attribute An attribute
     * @param mixed $subject The subject to secure, e.g. an object the user wants to access or any other PHP type
     *
     * @return bool
     */
    protected function supports(string $attribute, $subject)
    {
        // if the attribute isn't one we support, return false
        if (!in_array($attribute, [self::AGENT_FICHE])) {
            return false;
        }

        // only vote on `Post` objects
        if (!$subject instanceof Formation) {
            return false;
        }

        return true;
    }

    /**
     * Perform a single access check operation on a given attribute, subject and token.
     * It is safe to assume that $attribute and $subject already passed the "supports()" method check.
     *
     * @param mixed $subject
     *
     * @return bool
     */
    protected function voteOnAttribute(string $attribute, $subject, TokenInterface $token)
    {
        $user = $token->getUser();
        if (!$user instanceof User) {
            // the user must be logged in; if not, deny access
            return false;
        }

        /** @var Formation $formation */
        $formation = $subject;
        $formationAgentRelation = $this->formationAgentRepository->findOneBy(['formation' => $formation, 'agent' => $user]);
        $statut = Formation::STATUT_BLOQUEE;
        if($formationAgentRelation) {
            $statut = $formationAgentRelation->getStatut();
        }

        switch ($attribute) {
            case self::AGENT_FICHE:
                return $statut === Formation::STATUT_DISPONIBLE || $statut === Formation::STATUT_TERMINER;
        }

        throw new \LogicException('Non autorisé la formation n\'est pas disponible');
    }
}