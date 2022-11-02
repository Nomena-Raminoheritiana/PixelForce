<?php

namespace App\Form;

use App\Entity\RefService;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Component\Form\Extension\Core\Type\TextType;



use FOS\CKEditorBundle\Form\Type\CKEditorType;
class RefServiceFormType extends AbstractType
{
    
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('ref', TextType::class, [
                "label" => "Référence",
                "trim" => true,
                "required" => false,
                "constraints" => [
                    new NotBlank(["message" => "Référence obligatoire"])
                ]
            ])
            ->add('designation', CKEditorType::class,  array(
                'label' => 'Désignation',
                'config' => array(
                    'uiColor' => '#ffffff',
                    //'uiColor' => '#7367f0',


                )))
            ->add('prix', TextType::class, [
                "label" => "Prix",
                "trim" => true,
                "required" => false,
                "constraints" => [
                    new NotBlank(["message" => "Prix obligatoire"])
                ]
            ])    
            
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => RefService::class,
        ]);
    }
}
