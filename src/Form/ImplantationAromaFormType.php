<?php

namespace App\Form;

use App\Entity\ImplantationAroma;
use FOS\CKEditorBundle\Form\Type\CKEditorType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\CollectionType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Validator\Constraints\File;
use Symfony\Component\Validator\Constraints\Positive;

class ImplantationAromaFormType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        
        $builder
           
            ->add('nom', TextType::class, [
                'label' => 'Nom',
                'required' => true,
                'trim' => true
            ])
            ->add('description', CKEditorType::class,  array(
                'label' => 'Description',
                'config' => array(
                    'uiColor' => '#ffffff',
                ),
            ))
            ->add('filles', CollectionType::class, [
                'label' => false,
                'entry_type' => ImplantationElmtAromaFormType::class,
                'entry_options' => ['label' => false],
                'allow_add' => true,
                'prototype' => true,
                'allow_delete' => true,
                
            ])
            ->add('imageFile', FileType::class, [
                "label" => "Image",
                'mapped' => false,
                "required" => false,
                'constraints' => [
                    new File([
                        // 'maxSize' => '1024k',
                        'mimeTypes' => [
                            'image/jpeg',
                            'image/png',
                        ],
                        'mimeTypesMessage' => 'Image invalide. Le format doit être: .jpeg ou .png',
                    ]) ,

                ]
            ])
            ->add('elementUnique', CheckboxType::class,  [
                "label" => "Lot",
                "required" => false
            ])
            ->add('qteElmt', IntegerType::class, [
                'label' => 'Quantité de chaque produit',
                'constraints' => [
                    new Positive(["message" => "La quantité doit être positive"])
                ],
                'required' => true
            ])
            ->add('qteElmtReassort', IntegerType::class, [
                'label' => 'Quantité de chaque produit pour le réassort',
                'constraints' => [
                    new Positive(["message" => "La quantité doit être positive"])
                ],
                'required' => true
            ])
            ->add('remise', TextType::class, [
                'label' => 'Remise',
                'required' => false,
                'trim' => true
            ])
            ->add('remiseReassort', TextType::class, [
                'label' => 'Remise pour le reassort',
                'required' => false,
                'trim' => true
            ]);    

    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults(['data_class' => ImplantationAroma::class]);
    }
}
