<?php

namespace App\Form;

use App\Entity\CategorieSecu;
use App\Entity\ProduitSecu;
use App\Repository\CategorieSecuRepository;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\MoneyType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;


use Symfony\Bridge\Doctrine\Form\Type\EntityType;


class MyProduitSecuFilterType extends AbstractType
{
    private $CategorieSecuRepository;
    public function __construct(CategorieSecuRepository $CategorieSecuRepository){
        $this->CategorieSecuRepository = $CategorieSecuRepository;
    }
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $categoryList = $this->CategorieSecuRepository->getValidCategories();
        $builder
        ->add('nom', TextType::class, [
            "label" => "Nom",
            "trim" => true,
            "required" => false
        ])
        ->add('description', TextType::class, [
            "label" => "Description",
            "trim" => true,
            "required" => false
        ])
        ->add('categorie', EntityType::class, [
            "label" => "Catégorie",
            'class'=> CategorieSecu::class,
            'choices' => $categoryList,
            'choice_label' => function(?CategorieSecu $category) {
                return $category ? strtoupper($category->getNom()) : '';
            },
            "required" => false
        ])
        ->add('sort', ChoiceType::class, [
            "label" => "Trier par",
            'choices'  => [
                'Identifiant' => "p.id",
                'Nom' => "p.nom"
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
        $resolver->setDefaults([]);
    }
}
