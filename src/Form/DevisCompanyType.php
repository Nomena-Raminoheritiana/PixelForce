<?php

namespace App\Form;

use App\Entity\DevisCompany;
use App\Entity\DevisCompanyDetail;
use FOS\CKEditorBundle\Form\Type\CKEditorType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CollectionType;
use Symfony\Component\Form\Extension\Core\Type\DateTimeType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Component\Validator\Constraints\NotNull;

class DevisCompanyType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('company_info', CKEditorType::class, [
                "label" => "Information société"
            ])
            ->add('company_logo', FileType::class, [
                'label' => 'Logo société',
                'mapped' => false,
                'required' => false
            ])   
            ->add('client_mail', EmailType::class, [
                'label' => 'Adresse email du client'
            ])
            ->add('client_firstname', TextType::class, [
                'label' => 'Prénom du client'
            ])
            ->add('client_lastname', TextType::class, [
                'label' => 'Nom du client'
            ])
            ->add('client_rdv', DateTimeType::class, [
                'label' => "Date de rendez-vous",
                'widget' => 'single_text',
                'attr' => ['class' => 'datetime-local'],
                "required" => true,
                "constraints" => [
                    new NotBlank(["message" => "Date de rendez-vous obligatoire"])
                ]
            ])
            ->add('client_info', CKEditorType::class, [
                'label' => 'Information client'
            ])
            ->add('devis_company_detail', CollectionType::class, [
                'entry_type' => DevisCompanyDetailType::class,
                'allow_add' => true,
                'allow_delete' => true,
                'label' => false,
                'constraints' =>  new NotNull(['groups' => ['create']]),
                'required'  => true
            ])
            ->add('payment_condition', IntegerType::class, [
                'data' => 100,
                'label' => 'Condition de paiement (%)', 
                'attr' => [
                    'min' => 1,
                    'max' => 100
                ]
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => DevisCompany::class,
        ]);
    }
}
