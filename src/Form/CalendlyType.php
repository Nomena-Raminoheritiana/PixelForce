<?php

namespace App\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Validator\Constraints\Regex;

class CalendlyType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('lienCalendly', TextType::class, [
                "trim" => true,
                "required" => false,
                "constraints" => [
                    new NotBlank(["message" => "Veuillez renseigner le lien de votre Agenda."]),
                    new Regex('/^https:\/\/calendly.com\//',  "Lien Calendly invalide. Il doit être de la forme ci-contre 'https://calendly.com/xxx-xxx'.")
                ]
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            // Configure your form options here
        ]);
    }
}
