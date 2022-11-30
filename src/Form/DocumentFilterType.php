<?php

namespace App\Form;

use App\Entity\Categorie;
use App\Entity\Produit;
use App\Repository\CategorieRepository;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\MoneyType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;


use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\Extension\Core\Type\DateTimeType;

class DocumentFilterType extends AbstractType
{
    
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
        ->add('nom', TextType::class, [
            "label" => "Nom",
            "trim" => true,
            "required" => false
        ])
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
        ->add('sort', ChoiceType::class, [
            "label" => "Trier par",
            'choices'  => [
                'Identifiant' => "d.id",
                'Nom' => "d.nom",
                'Date' => "d.dateCreation"
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
        $resolver->setDefaults([]);
    }
}
