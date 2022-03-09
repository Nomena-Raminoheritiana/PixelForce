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
}
