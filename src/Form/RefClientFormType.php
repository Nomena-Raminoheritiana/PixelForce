<?php

namespace App\Form;

use App\Entity\RefClient;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Component\Form\Extension\Core\Type\TextType;



use FOS\CKEditorBundle\Form\Type\CKEditorType;
use Symfony\Component\Validator\Constraints\Email;

class RefClientFormType extends AbstractType
{
    
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('nom', TextType::class, [
                "label" => "Nom",
                "trim" => true,
                "required" => true,
                "constraints" => [
                    new NotBlank(["message" => "Nom obligatoire"])
                ]
            ])
            ->add('prenom', TextType::class, [
                "label" => "Prénom(s)",
                "trim" => true,
                "required" => false,
            ])
            ->add('mail', TextType::class, [
                "label" => "Adresse email",
                "trim" => true,
                "required" => false,
                "constraints" => [
                    new Email(["message" => "Adresse email invalide"])
                ]
            ])
            ->add('description', CKEditorType::class,  array(
                'config' => array(
                    'uiColor' => '#ffffff',
                    //'uiColor' => '#7367f0',


                )))
            
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => RefClient::class,
        ]);
    }
}
