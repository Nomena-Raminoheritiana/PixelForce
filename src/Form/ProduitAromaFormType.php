<?php

namespace App\Form;

use App\Entity\Product;
use App\Entity\ProduitAroma;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Validator\Constraints\File;

class ProduitAromaFormType extends AbstractType
{

    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
       
        $builder
            ->add('nom', TextType::class, [
                "label" => "Nom",
                "trim" => true,
                "required" => false,
                "constraints" => [
                    new NotBlank(["message" => "Nom obligatoire"])
                ]
            ])
            ->add('description', TextareaType::class,  [
                "label" => "Description",
                "trim" => true,
                "required" => false
            ])
            ->add('prix', TextType::class, [
                "label" => "Prix HT",
                "trim" => true,
                "required" => false,
                "constraints" => [
                    new NotBlank(["message" => "Prix obligatoire"])
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
                    ]) ,

                ]
            ])
            
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => ProduitAroma::class,
        ]);
    }
}
