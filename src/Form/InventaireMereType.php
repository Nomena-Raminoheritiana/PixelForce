<?php

namespace App\Form;

use App\Entity\InventaireFille;
use App\Entity\InventaireMere;
use App\Entity\Mouvement;
use App\Models\EntreeMere;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CollectionType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\DateTimeType;

class InventaireMereType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        
        $builder
            ->add('dateInventaire', DateTimeType::class, [
                'label' => "Date de l'inventaire",
                'date_widget' => 'single_text',
                'time_widget' => 'single_text',

                // 'format' => 'yyyy-MM-dd',
                // 'html5' => false,

                'required' => false,
                'trim' => true
            ])
            ->add('description', TextareaType::class, [
                'label' => 'Description',
                'required' => false,
                'trim' => true
            ])
            ->add('inventaireFilles', CollectionType::class, [
                'label' => false,
                'entry_type' => InventaireFilleType::class,
                'entry_options' => ['label' => false],
                'allow_add' => true,
                'prototype' => true,
                'allow_delete' => true,
                'delete_empty' => function (InventaireFille $fille = null){
                    return null === $fille || $fille->getCheck() != 1;
                }
            ]);        
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults(['data_class' => InventaireMere::class]);
    }
}
