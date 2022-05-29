<?php


namespace App\Form\Validator;


use Symfony\Component\Validator\Constraint;
use Symfony\Component\Validator\ConstraintValidator;

class PasswordConstraintValidator extends ConstraintValidator
{

    /**
     * Checks if the passed value is valid.
     *
     * @param mixed $value The value that should be validated
     */
    public function validate($value, Constraint $constraint)
    {

        if (!preg_match('/[.\-#*^@~&()[\]]+/', $value, $matches) ||
            !preg_match('/[A-Z]+/', $value, $matches) ||
            !preg_match('/[a-z]+/', $value, $matches) ||
            !preg_match('/[0-9]+/', $value, $matches)) {

            // the argument must be a string or an object implementing __toString()
            $this->context->buildViolation($constraint->message)
                ->addViolation();
        }
    }
}