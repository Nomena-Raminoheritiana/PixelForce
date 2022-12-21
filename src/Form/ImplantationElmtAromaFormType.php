<?php

namespace App\Form;

use App\Entity\ImplantationElmtAroma;
use App\Entity\ProduitAroma;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Component\Validator\Constraints\Positive;
use Symfony\Component\Validator\Constraints\PositiveOrZero;

class ImplantationElmtAromaFormType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        
        $builder
            
            ->add('produitlib', TextType::class, [
                'label' => false,
                'attr' => ['readonly' => true]
            ])
            ->add('produit', EntityType::class, [
                'label' => false,
                'required' => false,
                'class'=> ProduitAroma::class,
                'choice_label' => function(?ProduitAroma $produit) {
                    return $produit ? $produit->getNom() : '';
                },
                'constraints' => [
                    new NotBlank(["message" => "Produit obligatoire"])
                ]
            ])
            ->add('prixProduitFormated', TextType::class, [
                'label' => false,
                'attr' => ['readonly' => true]
            ])
            ->add('prixProduit', HiddenType::class)
            // ->add('prixConseilleProduit', TextType::class, [
            //     'label' => false,
            //     'attr' => ['readonly' => true]
            // ])
            ->add('prix', TextType::class, [
                'label' => false,
                'attr' => ['readonly' => true]
            ])
            ->add('montant', TextType::class, [
                'label' => false,
                'attr' => ['readonly' => true]
            ])
            ->add('qteGratuit', IntegerType::class, [
                'label' => false,
                'constraints' => [
                    new PositiveOrZero(["message" => "La quantité doit être positive"])
                ],
                'required' => false
            ])
            ->add('statut', HiddenType::class, [
                'label' => false,
                'required' => true
            ])
        ;
        
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults(['data_class' => ImplantationElmtAroma::class]);
    }
}
