<?php

namespace App\Form;

use App\Entity\OrderAddress;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\Extension\Core\Type\RepeatedType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Component\Validator\Constraints\File;
use Symfony\Component\Validator\Constraints\NotNull;

class OrderAddressType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('nom', TextType::class, [
                "label" => "Nom *",
                "trim" => true,
                "required" => true,
                "constraints" => [
                    new NotBlank(["message" => "Nom obligatoire"])
                ]
            ])
            ->add('prenom', TextType::class, [
                "label" => "Prénom *",
                "trim" => true,
                "required" => true,
                "constraints" => [
                    new NotBlank(["message" => "Prénom obligatoire"])
                ]
            ])
           
            ->add('paysRegion', TextType::class, [
                "label" => "Pays/région *",
                "trim" => true,
                "required" => true,
                "constraints" => [
                    new NotBlank(["message" => "Pays/région obligatoire"])
                ]
            ])
            ->add('rue', TextType::class, [
                "label" => "Numéro et nom de rue *",
                "trim" => true,
                "required" => true,
                "attr" => ["placeholder" => "Numéro et nom de rue"],
                "constraints" => [
                    new NotBlank(["message" => "Numéro et nom de rue obligatoires"])
                ]
            ])
            ->add('postalCode', TextType::class, [
                "label" => "Code postal *",
                "trim" => true,
                "required" => true,
                "constraints" => [
                    new NotBlank(["message" => "Code postal obligatoires"])
                ]
            ])
            ->add('address', TextType::class, [
                "label" => false,
                "trim" => true,
                "required" => false,
                "attr" => ["placeholder" => "Bâtiment, appartement, lot, etc. (facultatif)"],  
            ])
            ->add('city', TextType::class, [
                "label" => "Ville *",
                "trim" => true,
                "required" => true,
                "constraints" => [
                    new NotBlank(["message" => "Ville obligatoire"])
                ]
            ])
            ->add('provinceDepartement', TextType::class, [
                "label" => "Province/département *",
                "trim" => true,
                "required" => true,
                "constraints" => [
                    new NotBlank(["message" => "Province/département obligatoire"])
                ]
            ])
            ->add('telephone', TextType::class, [
                "label" => "Téléphone *",
                "trim" => true,
                "required" => true,
                "constraints" => [
                    new NotBlank(["message" => "Téléphone obligatoire"])
                ]
            ])
            ->add('email', TextType::class, [
                "label" => "E-mail *",
                "trim" => true,
                "required" => true,
                "constraints" => [
                    new NotBlank(["message" => "E-mail obligatoire"])
                ]
            ])
            ->add('notes', TextareaType::class,  [
                "label" => "Notes (facultatif)",
                "required" => false
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => OrderAddress::class
        ]);
    }
}
