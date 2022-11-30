<?php

namespace App\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\FileType;

use Symfony\Bridge\Doctrine\Form\Type\EntityType;

use App\Entity\ContratSecu;
use Symfony\Component\Validator\Constraints\File;

use Symfony\Component\Validator\Constraints\NotNull;

class ContratSecuFormType extends AbstractType
{
    
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('nom', TextType::class, [
                "label" => "Nom",
                "trim" => true,
                "required" => false
            ])
            ->add('file', FileType::class, [
                "label" => "Contrat",
                'mapped' => false,
                "required" => false,
                'constraints' => [
                    //new NotNull(["message" => "Fichier obligatoire"]),
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
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => ContratSecu::class,
        ]);
    }
}
