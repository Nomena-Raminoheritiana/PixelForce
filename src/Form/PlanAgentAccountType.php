<?php

namespace App\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class PlanAgentAccountType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('amount', IntegerType::class, [
                'attr' => ['placeholder' => 'Prix en euro (€)'],
                'label' => false,
                'required' => true
            ])
            ->add('priceName', ChoiceType::class,  [
                'choices' => [
                    'Un secteur' => 'Un secteur',
                    'Plusieurs secteurs' => 'Plusieurs secteurs'
                ],
                'placeholder' => 'Type abonnement',
                'label' => false,
                'required' => true
            ])
            ->add('planDescription', TextareaType::class, [
                'attr' => ['placeholder' => 'Briève description'],
                'label' => false,
                'required'   => true
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            // Configure your form options here
        ]);
    }
}
