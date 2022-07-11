<?php

namespace App\Form;

use App\Entity\Produit;
use App\Entity\Categorie;
use App\Entity\Order;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\MoneyType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;


use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use App\Repository\CategorieRepository;
use Symfony\Component\Form\Extension\Core\Type\DateTimeType;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;

class ProductStockFilter extends AbstractType
{
    private $categorieRepository;
    public function __construct(CategorieRepository $categorieRepository){
        $this->categorieRepository = $categorieRepository;
    }

    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $categoryList = $this->categorieRepository->findAll();
        $builder
        ->add('nom', TextType::class, [
            "label" => "Nom",
            "required" => false,
            "trim" => true
        ])
        ->add('categorie', EntityType::class, [
            "label" => "Catégorie",
            'class'=> Categorie::class,
            'choices' => $categoryList,
            'choice_label' => function(?Categorie $category) {
                return $category ? strtoupper($category->getNom()) : '';
            },
            "required" => false
        ])
        ->add('qteStockMin', IntegerType::class, [
            "label" => "Quantité stock min",
            "required" => false,
        ])
        ->add('qteStockMax', IntegerType::class, [
            "label" => "Quantité stock max",
            "required" => false
        ])
        ->add('sort', ChoiceType::class, [
            "label" => "Trier par",
            'choices'  => [
                'Nom' => "p.nom",
                'Catégorie' => "c.nom",
                'Quantité stock' => "s.qteStock"
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
