<?php

namespace App\Form;

use App\Entity\ContactInformation;
use App\Entity\TypeLogement;
use App\Repository\TypeLogementRepository;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ContactInformationType extends AbstractType
{
    private $typeLogementRepository;
    public function __construct(TypeLogementRepository $typeLogementRepository){
        $this->typeLogementRepository = $typeLogementRepository;
    }

    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $typeLogementList = $this->typeLogementRepository->findAll();
        $builder
            ->add('firstname', TextType::class, [
                'label' => 'Nom',
                'attr' => [
                    'placeholder' => 'Entrer le nom du client'
                ]
            ])
            ->add('lastname', TextType::class, [
                'label' => 'Prénom',
                'attr' => [
                    'placeholder' => 'Entrer le prénom du client'
                ]
            ])
            ->add('email', TextType::class, [
                'label' => 'E-mail',
                'attr' => [
                    'placeholder' => 'Entrer l\'adresse mail du client'
                ]
            ])
            ->add('phone', TextType::class, [
                'label' => 'Téléphone',
                'attr' => [
                    'placeholder' => 'Entrer le numéro téléphone du client'
                ]
            ])
            ->add('address', TextType::class, [
                'label' => 'Adresse',
                'attr' => [
                    'placeholder' => 'Entrer l\'adresse du client'
                ]
            ])
            ->add('rue', TextType::class, [
                'label' => 'Rue',
                'trim' => true,
                'required' => false
            ])
            ->add('numero', TextType::class, [
                'label' => 'Numéro',
                'trim' => true,
                'required' => false
            ])
            ->add('codePostal', TextType::class, [
                'label' => 'Code postal',
                'trim' => true,
                'required' => false
            ])
            ->add('ville', TextType::class, [
                'label' => 'Ville',
                'trim' => true,
                'required' => false
            ])
            ->add('typeLogement', EntityType::class, [
                "label" => "Type du Logement",
                'class'=> TypeLogement::class,
                'choices' => $typeLogementList,
                'choice_label' => function(?TypeLogement $typeLogement) {
                    return $typeLogement ? $typeLogement->getNom() : '';
                },
                'multiple' => false,
                'expanded' => true,
                "required" => false,
                'placeholder' => false
            ])
            ->add('compositionFoyer', TextType::class, [
                'label' => 'Composition du foyer',
                'trim' => true,
                'required' => false
            ])
            ->add('nbrPersonne', NumberType::class, [
                'label' => 'Nombre de personne',
                'required' => false
            ])
            ->add('commentaire', TextareaType::class, [
                'label' => 'Commentaire',
                'required' => false
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => ContactInformation::class,
        ]);
    }
}
