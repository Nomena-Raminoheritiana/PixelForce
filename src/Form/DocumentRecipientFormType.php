<?php

namespace App\Form;

use App\Entity\Produit;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\FileType;

use Symfony\Bridge\Doctrine\Form\Type\EntityType;

use App\Entity\Categorie;
use App\Entity\Document;
use App\Entity\DocumentRecipient;
use App\Repository\CategorieRepository;
use Symfony\Component\Validator\Constraints\File;

use FOS\CKEditorBundle\Form\Type\CKEditorType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Validator\Constraints\NotNull;

class DocumentRecipientFormType extends AbstractType
{
    
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('nom', TextType::class, [
                "label" => "Nom",
                "trim" => true,
                "required" => false,
                "constraints" => [
                    new NotBlank(["message" => "Nom obligatoire"])
                ]
            ])
            ->add('prenom', TextType::class, [
                "label" => "Prénom",
                "trim" => true,
                "required" => false
            ])
            ->add('email', EmailType::class, [
                "label" => "Adresse email",
                "trim" => true,
                "required" => true,
                'invalid_message' => 'Adresse email invalide',
                "constraints" => [
                    new NotBlank(["message" => "Adresse email obligatoire"])
                ]
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => DocumentRecipient::class,
        ]);
    }
}
