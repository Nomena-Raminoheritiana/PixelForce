<?php

namespace App\Form;

use App\Entity\User;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class UserType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('nom', TextType::class, [
                'attr' => [
                    'placeholder' => 'Entrer votre nom'
                ]
            ])
            ->add('prenom', TextType::class, [
                'attr' => [
                    'placeholder' => 'Entrer votre prénom'
                ]
            ])
            ->add('dateNaissance', DateType::class, [
                'widget' => 'single_text',
                'input'  => 'datetime_immutable',
                'attr'   => [
                    'placeholder' => 'Votre date de naissance'
                ]
            ])
            ->add('adresse', TextType::class, [
                'attr' => [
                    'placeholder' => 'Votre Adresse'
                ]
            ])
            ->add('numeroSecurite', TextType::class, [
                'attr' => [
                    'placeholder' => 'XXXXXXXXXX'
                ]
            ])
            ->add('rib', TextType::class, [
                'label' => 'RIB',
                'attr' => [
                    'placeholder' => 'XXXXXXXXXX'
                ]
            ])
            ->add('photo', FileType::class)
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => User::class,
        ]);
    }
}
