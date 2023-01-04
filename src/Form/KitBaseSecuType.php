<?php

namespace App\Form;

use App\Entity\KitBaseElmtSecu;
use App\Entity\KitBaseSecu;
use FOS\CKEditorBundle\Form\Type\CKEditorType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CollectionType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\File;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Component\Validator\Constraints\Regex;

class KitBaseSecuType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        
        $builder
            ->add('nom', TextType::class, [
                'label' => 'Nom',
                'required' => true,
                'trim' => true
            ])
            ->add('description', CKEditorType::class,  [
                'config' => ['uiColor' => '#ffffff'], 
                'required' => false,
                'label' => 'Description'
            ])
            ->add('elmts', CollectionType::class, [
                'label' => false,
                'entry_type' => KitBaseElmtSecuType::class,
                'entry_options' => ['label' => false],
                'allow_add' => true,
                'prototype' => true,
                'allow_delete' => true,
                'delete_empty' => function (KitBaseElmtSecu $fille = null){
                    return null === $fille || $fille->getCheck() != 1;
                }
            ])
            ->add('prix', TextType::class, [
                "label" => "Prix",
                "trim" => true,
                "required" => false,
                "constraints" => [
                    new NotBlank(["message" => "Prix obligatoire"]),
                    new Regex(["pattern"=>'/^[0-9]*([\.])?[0-9]*$/',"match"=>true,"message" => "Le prix n'est pas valide"])
                ]
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
                    ])
                ]
            ])
            ;        
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults(['data_class' => KitBaseSecu::class]);
    }
}
