<?php

namespace App\Form;

use App\Entity\AgentSecteur;
use App\Entity\Secteur;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class MultipleSecteurType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
        ->add('secteur', EntityType::class, [
            'label'=> false,
            'class'=> Secteur::class,
            'choice_label' => 'nom',
            'expanded' => true,
            'multiple' => true
        ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => AgentSecteur::class,
        ]);
    }
}
