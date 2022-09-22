<?php

namespace App\Form;

use App\Entity\OrderAddress;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\Extension\Core\Type\RepeatedType;
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
            ->add('address', TextType::class, [
                "label" => "Adresse",
                "trim" => true,
                "required" => false,
                "constraints" => [
                    new NotBlank(["message" => "Adresse obligatoire"])
                ]
            ])
            ->add('city', TextType::class, [
                "label" => "Ville",
                "trim" => true,
                "required" => false
            ])
            ->add('postalCode', TextType::class, [
                "label" => "Code postal",
                "trim" => true,
                "required" => false
            ])
            ->add('latitude', TextType::class, [
                "label" => "Latitude",
                "trim" => true,
                "required" => false,
                "disabled" => false,
                "constraints" => [
                    new NotBlank(["message" => "Latitude obligatoire"])
                ]
            ])
            ->add('longitude', TextType::class, [
                "label" => "Longitude",
                "trim" => true,
                "required" => false,
                "disabled" => false,
                "constraints" => [
                    new NotBlank(["message" => "Longitude obligatoire"])
                ]
            ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => OrderAddress::class
        ]);
    }
}
