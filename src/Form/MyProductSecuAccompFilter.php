<?php

namespace App\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\MoneyType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;


use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\Extension\Core\Type\DateTimeType;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;

class MyProductSecuAccompFilter extends AbstractType
{
    
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
        ->add('nom', TextType::class, [
            "label" => "Nom",
            "required" => false,
            "trim" => true
        ])
        ->add('sort', ChoiceType::class, [
            "label" => "Trier par",
            'choices'  => [
                'Nom' => "p.nom"
            ],
            "required" => false
        ])
        ->add('direction', ChoiceType::class, [
            "label" => "Ordre",
            'choices'  => [
                'Croissant' => "asc",
                'Décroissant' => "desc"
            ],
            "required" => false
        ])
        ;

        
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
    }
}
