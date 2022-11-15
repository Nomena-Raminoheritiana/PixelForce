<?php

namespace App\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\TextType;

class RefServiceFilterType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('ref', TextType::class, [
                "label" => false,
                "required"=>false,
                "attr" => [
                    "placeholder" => "Référence"
                ]
            ])
            ->add('prixMin', TextType::class, [
                "label" => false,
                "trim" => true,
                "required" => false,
                "attr" => [
                    "placeholder" => "Prix mininum"
                ]
            ])
            ->add('prixMax', TextType::class, [
                "label" => false,
                "trim" => true,
                "required" => false,
                "attr" => [
                    "placeholder" => "Prix maximum"
                ]
            ])
            ->add('sort', ChoiceType::class, [
                "label" => false,
                'choices'  => [
                    'Référence' => "r.ref",
                    'Prix' => "r.prix"
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
