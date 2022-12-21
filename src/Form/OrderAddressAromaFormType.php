<?php

namespace App\Form;

use App\Entity\Address;
use App\Entity\OrderAddressAroma;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Component\Form\Extension\Core\Type\TextType;

class OrderAddressAromaFormType extends AbstractType
{
   
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('address', TextType::class, [
                "label" => "Adresse",
                "required" => true,
                "constraints" => [
                    new NotBlank(["message" => "Adresse obligatoire"])
                ],
                "trim" => true,
            ])
            ->add('city', TextType::class,  [
                "label" => "Ville",
                "required" => false,
                "trim" => true
            ])
            ->add('postalCode', TextType::class,  [
                "label" => "Code Postal",
                "required" => false,
                "trim" => true
            ])
            ->add('longitude', TextType::class,  [
                "label" => "Longitude",
                "required" => false,
                "trim" => true
            ])
            ->add('latitude', TextType::class,  [
                "label" => "Latitude",
                "required" => false,
                "trim" => true
            ])
            
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => OrderAddressAroma::class,
        ]);
    }
}
