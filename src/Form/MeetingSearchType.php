<?php

namespace App\Form;

use App\Entity\SearchEntity\MeetingSearch;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class MeetingSearchType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('title', TextType::class, [
                'required' => false,
                'label' => false,
                'attr' => [
                    'placeholder' => 'Libellé'
                ]
            ])
            ->add('startDate', DateType::class, [
                'required' => false,
                'label' => 'Date d\'inscription à partir de',
                'widget' => 'single_text',
            ])
            ->add('endDate', DateType::class, [
                'required' => false,
                'label' => 'Date d\'inscription jusqu\'à',
                'widget' => 'single_text',
            ])
            // ->add('statut', ChoiceType::class, [
            //     'required' => false,
            //     'label' => false,
            //     'choices' => [
            //         'Tous' => null,
            //         'Activé' => 1,
            //         'Banni' => -1
            //     ]
            // ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => MeetingSearch::class,
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
