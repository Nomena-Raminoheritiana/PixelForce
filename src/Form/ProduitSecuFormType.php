<?php

namespace App\Form;

use App\Entity\ProduitSecu;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\FileType;

use Symfony\Bridge\Doctrine\Form\Type\EntityType;

use App\Entity\CategorieSecu;
use App\Repository\CategorieSecuRepository;
use Symfony\Component\Validator\Constraints\File;

use FOS\CKEditorBundle\Form\Type\CKEditorType;
class ProduitSecuFormType extends AbstractType
{
    private $CategorieSecuRepository;
    public function __construct(CategorieSecuRepository $CategorieSecuRepository){
        $this->CategorieSecuRepository = $CategorieSecuRepository;
    }
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $categoryList = $this->CategorieSecuRepository->findAll();
        $builder
            ->add('nom', TextType::class, [
                "label" => "Nom",
                "trim" => true,
                "required" => false,
                "constraints" => [
                    new NotBlank(["message" => "Nom obligatoire"])
                ]
            ])
            ->add('description', CKEditorType::class,  array(
                'config' => array(
                    'uiColor' => '#ffffff',
                    //'uiColor' => '#7367f0',


                )))
            ->add('categorie', EntityType::class, [
                "label" => "Catégorie",
                'class'=> CategorieSecu::class,
                'choices' => $categoryList,
                'choice_label' => function(?CategorieSecu $category) {
                    return $category ? strtoupper($category->getNom()) : '';
                },
                "required" => false,
                "constraints" => [
                    new NotBlank(["message" => "Catégorie obligatoire"])
                ]
            ])
            ->add('imageFile', FileType::class, [
                "label" => "Image",
                'mapped' => false,
                "required" => false,
                'constraints' => [
                    new File([
                        // 'maxSize' => '1024k',
                        'mimeTypes' => [
                            'image/jpeg',
                            'image/png',
                        ],
                        'mimeTypesMessage' => 'Image invalide. Le format doit être: .jpeg ou .png',
                    ])
                ]
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => ProduitSecu::class,
        ]);
    }
}
