<?php

namespace App\Form;

use App\Entity\Produit;
use App\Entity\Categorie;
use App\Entity\Order;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\MoneyType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;


use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use App\Repository\CategorieRepository;
use Symfony\Component\Form\Extension\Core\Type\DateTimeType;

class InventaireFilterType extends AbstractType
{
    
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
        ->add('dateMin', DateTimeType::class, [
            "label" => "Date min",
            "required" => false,
            "input_format" => "d/m/Y H:i",
            "widget" => "single_text"
        ])
        ->add('dateMax', DateTimeType::class, [
            "label" => "Date max",
            "required" => false,
            "input_format" => "d/m/Y H:i",
            "widget" => "single_text"
        ])
        ->add('description', TextType::class, [
            "label" => false,
            "required" => false,
            "trim" => true,
            "attr" => [
                "placeholder" => "Description"
            ]
        ])
        ->add('sort', ChoiceType::class, [
            "label" => false,
            'choices'  => [
                'Date' => "i.dateInventaire",
                'Description' => "i.description",
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
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([]);
    }
}
