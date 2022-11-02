<?php

namespace App\Form;

use App\Entity\CategorieDD;
use App\Entity\ProduitDD;
use App\Repository\CategorieDDRepository;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\MoneyType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;


use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\Extension\Core\Type\DateTimeType;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;

class MyProductDDFilter extends AbstractType
{
    private $CategorieDDRepository;
    public function __construct(CategorieDDRepository $CategorieDDRepository){
        $this->CategorieDDRepository = $CategorieDDRepository;
    }
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $categoryList = $this->CategorieDDRepository->getValidCategories();
        $builder
        ->add('nom', TextType::class, [
            "label" => "Nom",
            "required" => false,
            "trim" => true
        ])
        ->add('categorie', EntityType::class, [
            "label" => "Catégorie",
            'class'=> CategorieDD::class,
            'choices' => $categoryList,
            'choice_label' => function(?CategorieDD $category) {
                return $category ? strtoupper($category->getNom()) : '';
            },
            "required" => false
        ])
        ->add('sort', ChoiceType::class, [
            "label" => "Trier par",
            'choices'  => [
                'Nom' => "p.nom",
                'Catégorie' => "c.nom"
            ],
            "required" => false
        ])
        ->add('direction', ChoiceType::class, [
            "label" => "Ordre",
            'choices'  => [
                'Croissant' => "asc",
                'Décroissant' => "desc"
            ],
            "required" => false
        ])
        ;

        
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
    }
}
