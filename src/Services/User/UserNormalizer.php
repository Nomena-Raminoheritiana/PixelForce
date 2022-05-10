<?php


namespace App\Services\User;


use App\Entity\User;
use App\Services\Normalizer;

class UserNormalizer
{
    const USER_PROPS = ['id', 'nom', 'prenom', 'email', 'roles', 'adresse','chatCode'];
    /**
     * @var Normalizer
     */
    private $normalizer;

    public function __construct(Normalizer $normalizer)
    {
        $this->normalizer = $normalizer;
    }

    public function normalize(User $user)
    {
        return $this->normalizer->getNormalizeData($user, self::USER_PROPS);
    }

    public function normalizeArrayUsers($users = []) {
        $usersNormalized = [];
        foreach($users as $user) {
            if($user instanceof User) {
                $data = $this->normalize($user);
                if(!$data['error']) {
                    $usersNormalized[] = $data;
                }
            }
        }
        return $usersNormalized;
    }

}