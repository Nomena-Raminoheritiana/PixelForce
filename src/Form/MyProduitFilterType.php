<?php

namespace App\Form;

use App\Entity\Produit;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\MoneyType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;


use Symfony\Bridge\Doctrine\Form\Type\EntityType;


class MyProduitFilterType extends AbstractType
{
    
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
        ->add('nom', TextType::class, [
            "label" => "Nom",
            "trim" => true,
            "required" => false
        ])
        ->add('description', TextType::class, [
            "label" => "Description",
            "trim" => true,
            "required" => false
        ])
        ->add('prixMin', TextType::class, [
            "label" => "Prix mininum",
            "trim" => true,
            "required" => false
        ])
        ->add('prixMax', TextType::class, [
            "label" => "Prix maximum",
            "trim" => true,
            "required" => false,
        ])
        ->add('sort', ChoiceType::class, [
            "label" => "Trier par",
            'choices'  => [
                'Identifiant' => "p.id",
                'Nom' => "p.nom",
                'Prix' => "p.prix"
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
