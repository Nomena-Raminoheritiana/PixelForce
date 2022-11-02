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
                base64_encode(base64_encode($intA).'&12#d5'.base64_encode($intB)) :
                base64_encode(base64_encode($intB).'&12#d5'.base64_encode($intA));
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

    public function desistCode($base64x2)
    {
        $base64x1 = base64_decode($base64x2);
        $arrayBase64 = explode('&12#d5', $base64x1);
        if(count($arrayBase64) > 1) {
            foreach($arrayBase64 as $key => $base64Encode) {
                $arrayBase64[$key] = base64_decode($base64Encode);
            }
            return $arrayBase64;
        }

        return false;
    }
}
