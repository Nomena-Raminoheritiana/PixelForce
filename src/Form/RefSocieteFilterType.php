<?php

namespace App\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\TextType;

class RefSocieteFilterType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('nom', TextType::class, [
                "label" => false,
                "required"=>false,
                "attr" => [
                    "placeholder" => "Nom"
                ]
            ])
            ->add('sort', ChoiceType::class, [
                "label" => false,
                'choices'  => [
                    'Nom' => "r.nom",
                ],
                "required" => false,
                "placeholder" => "Trier par"
            ])
            ->add('direction', ChoiceType::class, [
                "label" => false,
                'choices'  => [
                    'Croissant' => "asc",
                    'Décroissant' => "desc"
                ],
                "required" => false,
                "placeholder" => "Ordre"
            ])
            ;
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([]);
    }
}
