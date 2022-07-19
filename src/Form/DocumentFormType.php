<?php

namespace App\Form;

use App\Entity\Produit;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\FileType;

use Symfony\Bridge\Doctrine\Form\Type\EntityType;

use App\Entity\Categorie;
use App\Entity\Document;
use App\Repository\CategorieRepository;
use Symfony\Component\Validator\Constraints\File;

use FOS\CKEditorBundle\Form\Type\CKEditorType;
use Symfony\Component\Validator\Constraints\NotNull;

class DocumentFormType extends AbstractType
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
            ->add('message', CKEditorType::class,  array(
                'config' => array(
                    'uiColor' => '#ffffff',
                    //'uiColor' => '#7367f0',


                )))   
            ->add('file', FileType::class, [
                "label" => "Fichier",
                'mapped' => false,
                "required" => true,
                'constraints' => [
                    new NotNull(["message" => "Fichier obligatoire"]),
                    new File([
                        // 'maxSize' => '1024k',
                        'mimeTypes' => [
                            "application/pdf", 
                            "application/x-pdf"
                        ],
                        'mimeTypesMessage' => 'Sélectionner un fichier PDF valide',
                    ])
                ]
            ])
            ->add('amount', TextType::class, [
                "label" => "Montant à payer (TTC - TVA 20%)",
                "trim" => true,
                "required" => true,
                "constraints" => [
                    new NotBlank(["message" => "Montant à payer obligatoire"])
                ]
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Document::class,
        ]);
    }
}
