<?php

namespace App\Form;

use App\Entity\KitBaseElmtSecu;
use App\Entity\ProduitSecuAccomp;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Component\Validator\Constraints\Positive;

class KitBaseElmtSecuType extends AbstractType
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
                'class'=> ProduitSecuAccomp::class,
                'choice_label' => function(?ProduitSecuAccomp $produit) {
                    return $produit ? strtoupper($produit->getNom()) : '';
                },
                'constraints' => [
                    new NotBlank(["message" => "Produit obligatoire"])
                ]
            ])
            ->add('qte', IntegerType::class, [
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
        $resolver->setDefaults(['data_class' => KitBaseElmtSecu::class]);
    }
}
