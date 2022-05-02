<?php


namespace App\Helpers;


use ParagonIE\Halite\Alerts\InvalidMessage;
use ParagonIE\Halite\Symmetric\Crypto;
use ParagonIE\Halite\Symmetric\EncryptionKey;
use ParagonIE\HiddenString\HiddenString;

class Cryptographie
{
    public function encrypt(String $string)
    {
       return Crypto::encrypt(
            new HiddenString(htmlentities($string,ENT_QUOTES,"UTF-8")),
            new EncryptionKey(
                new HiddenString($_ENV['CRYPTAGE_KEY'])
            )
        );
    }

    public function decrypt(String $string)
    {
       try {
           return (Crypto::decrypt(
               $string,
               new EncryptionKey(
                   new HiddenString($_ENV['CRYPTAGE_KEY'])
               )
           ))->getString();
       } catch(InvalidMessage $e)
       {
           return $string;
       }
    }

}