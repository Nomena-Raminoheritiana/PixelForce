<?php

namespace App\Form;

use App\Entity\ProduitDD;
use App\Entity\User;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Security\Core\Security;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\FileType;

use Symfony\Bridge\Doctrine\Form\Type\EntityType;

use App\Entity\CategorieDD;
use App\Repository\CategorieDDRepository;
use Symfony\Component\Validator\Constraints\File;

use FOS\CKEditorBundle\Form\Type\CKEditorType;
class ProduitDDFormType extends AbstractType
{
    private $CategorieDDRepository;
    /**
     * @var Security
     */
    private $security;

    public function __construct(CategorieDDRepository $CategorieDDRepository, Security $security){
        $this->CategorieDDRepository = $CategorieDDRepository;
        $this->security = $security;
    }
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        /** @var  $user User */
        $user = $this->security->getUser();
        $secteur = $user->getSecteurByCoach();
        $categoryList = $this->CategorieDDRepository->findBy(['secteur' => $secteur]);
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
                'class'=> CategorieDD::class,
                'choices' => $categoryList,
                'choice_label' => function(?CategorieDD $category) {
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
            'data_class' => ProduitDD::class,
        ]);
    }
}
