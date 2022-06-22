<?php

namespace App\Form;

use App\Entity\SearchEntity\UserSearch;
use App\Entity\Secteur;
use Doctrine\ORM\EntityRepository;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class UserSearchType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('prenom', TextType::class, [
                'required' => false,
                'label' => false,
                'attr' => [
                    'placeholder' => 'Nom ou prénom'
                ]
            ])
            ->add('email', TextType::class, [
                'required' => false,
                'label' => false,
                'attr' => [
                    'placeholder' => 'Email'
                ]
            ])
            ->add('telephone', TextType::class, [
                'required' => false,
                'label' => false,
                'attr' => [
                    'placeholder' => 'Téléphone'
                ]
            ])
            ->add('secteur', EntityType::class, [
                'required' => false,
                'placeholder' => 'Tous les secteurs',
                'label' => false,
                'class'=> Secteur::class,
                'choice_label' => 'nom'
            ])
            ->add('dateInscriptionMin', DateType::class, [
                'required' => false,
                'label' => 'Date d\'inscription à partir de',
                'widget' => 'single_text',
            ])
            ->add('dateInscriptionMax', DateType::class, [
                'required' => false,
                'label' => 'Date d\'inscription jusqu\'à',
                'widget' => 'single_text',
            ])
            ->add('active', ChoiceType::class, [
                'required' => false,
                'label' => false,
                'choices' => [
                    'Tous' => null,
                    'Activé' => 1,
                    'Banni' => -1
                ]
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => UserSearch::class,
            'method' => 'get',
            'csrf_protection' => false
        ]);
    }

    // on modifie les paramettre (pour les rendre lisibles) dans l'url lors d'une recheche
    public function getBlockPrefix()
    {
        return '';
    }

    
}
