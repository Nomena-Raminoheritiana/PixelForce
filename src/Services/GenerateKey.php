<?php


namespace App\Services;


class GenerateKey
{
    /**
     * Retourne 6 nombres au hasard : 123456
     * @return int
     */
    public function generateSixDigitKey()
    {
        return mt_rand(100000,999999);
    }

    public function generateCode(?int $intA = null, ?int $intB = null) {
        if($intA && $intB) {
            $code = $intA<$intB ?
                base64_encode(base64_encode($intA).base64_encode($intB)) :
                base64_encode(base64_encode($intB).base64_encode($intA));
            return $code;
        }
        $characters = '0123456789abcdefghijklmnopqrs092u3tuvwxyzaskdhfhf9882323ABCDEFGHIJKLMNksadf9044OPQRSTUVWXYZ';
        $charactersLength = strlen($characters);
        $code = '';
        for ($i = 0; $i < 40; $i++) {
            $code .= $characters[rand(0, $charactersLength - 1)];
        }
        return $code;
    }
}
