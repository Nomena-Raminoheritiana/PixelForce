<?php

namespace App\Form;

use App\Entity\Categorie;
use App\Entity\Produit;
use App\Repository\CategorieRepository;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\MoneyType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;


use Symfony\Bridge\Doctrine\Form\Type\EntityType;


class MyProduitFilterType extends AbstractType
{
    private $categorieRepository;
    public function __construct(CategorieRepository $categorieRepository){
        $this->categorieRepository = $categorieRepository;
    }
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $categoryList = $this->categorieRepository->getValidCategories();
        $builder
        ->add('nom', TextType::class, [
            "label" => false,
            "trim" => true,
            "required" => false,
            "attr" => [
                "placeholder" => "Nom"
            ]
        ])
        ->add('description', TextType::class, [
            "label" => false,
            "trim" => true,
            "required" => false,
            "attr" => [
                "placeholder" => "Description"
            ]
        ])
        ->add('categorie', EntityType::class, [
            "label" => false,
            'class'=> Categorie::class,
            'choices' => $categoryList,
            'choice_label' => function(?Categorie $category) {
                return $category ? strtoupper($category->getNom()) : '';
            },
            "required" => false,
            "placeholder" => "Catégorie"
        ])
        ->add('prixMin', TextType::class, [
            "label" => false,
            "trim" => true,
            "required" => false,
            "attr" => [
                "placeholder" => "Prix mininum"
            ]
        ])
        ->add('prixMax', TextType::class, [
            "label" => false,
            "trim" => true,
            "required" => false,
            "attr" => [
                "placeholder" => "Prix maximum"
            ]
        ])
        ->add('sort', ChoiceType::class, [
            "label" => false,
            'choices'  => [
                'Identifiant' => "p.id",
                'Nom' => "p.nom",
                'Prix' => "p.prix"
            ],
            "required" => false,
            "placeholder" => "Trier par"
        ])
        ->add('direction', ChoiceType::class, [
            "label" => false,
            'choices'  => [
                'Croissant' => "asc",
                'Décroissant' => "desc"
            ],
            "required" => false,
            "placeholder" => "Ordre"
        ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([]);
    }
}
