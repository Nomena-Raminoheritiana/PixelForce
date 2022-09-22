<?php

namespace App\Form;

use App\Entity\Mouvement;
use App\Entity\Produit;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Component\Validator\Constraints\NotNull;
use Symfony\Component\Validator\Constraints\Positive;

class ElmtEntreeType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        
        $builder
            /* ->add('realCheck', CheckboxType::class, [
                'label' => false,
                'required' => false
            ]) */
            ->add('produitlib', TextType::class, [
                'label' => false,
                'mapped' => false,
                'attr' => ['readonly' => true]
            ])
            ->add('produit', EntityType::class, [
                'label' => false,
                'required' => false,
                'class'=> Produit::class,
                'choice_label' => function(?Produit $produit) {
                    return $produit ? strtoupper($produit->getNom()) : '';
                },
                'constraints' => [
                    new NotBlank(["message" => "Produit obligatoire"])
                ]
            ])
            ->add('entree', IntegerType::class, [
                'label' => false,
                'constraints' => [
                    new Positive(["message" => "La quantité doit être positive"])
                ],
                'required' => true
            ])
            ->add('check', HiddenType::class, [
                'label' => false,
                'required' => true
            ])
        ;
        
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults(['data_class' => Mouvement::class]);
    }
}
