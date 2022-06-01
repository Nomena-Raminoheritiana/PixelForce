<?php


namespace App\Form\Validator;


use Symfony\Component\Validator\Constraint;

class PasswordConstraint extends Constraint
{
    public $message = 'Le mot de passe doit contenir en minimum un caractère majuscule et miniscule, un chiffre, un symbole ou un caractère d\'espacement';
    public $mode = 'strict'; // If the constraint has configuration options, define them as public properties
}