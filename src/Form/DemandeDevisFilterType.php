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

class DemandeDevisFilterType extends AbstractType
{
    
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
        ->add('nomProduit', TextType::class, [
            "label" => "Produit",
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
        /* ->add('status', ChoiceType::class, [
            "label" => "Statut",
            'choices'  => Order::STATUS_DATA_FORM,
            "required" => false
        ]) */
        ->add('sort', ChoiceType::class, [
            "label" => "Trier par",
            'choices'  => [
                'Date' => "d.dateDemande",
                'Produit' => "p.nom",
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

        if($options['admin']){
            $builder
            ->add('clientName', TextType::class, [
                "label" => "Client",
                "required" => false
            ]);
        }
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults(['admin' => false]);
    }
}
