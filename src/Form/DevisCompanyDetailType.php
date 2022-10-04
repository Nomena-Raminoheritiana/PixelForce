<?php

namespace App\Form;

use App\Entity\DevisCompanyDetail;
use FOS\CKEditorBundle\Form\Type\CKEditorType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class DevisCompanyDetailType extends AbstractType
{
    protected $tvaDefault;

    public function __construct()
    {
        $this->tvaDefault = 20;
    }


    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('reference', TextType::class, [
                'label' => false
            ])
            ->add('designation', CKEditorType::class, ['label' => false])
            ->add('quantite', IntegerType::class, ['label' => false])
            ->add('pu_vente', IntegerType::class, ['label' => false])
            ->add('tva', IntegerType::class, [
                'data' => $this->tvaDefault,
                'label' => false,
                'attr' => [
                    'readonly' => true
                ]
            ])
            // ->add('montant_ht', IntegerType::class, ['label' => false])
            ->add('image', FileType::class, [
                "label" => 'Logo société',
                'mapped' => false,
                "required" => false
            ])   
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => DevisCompanyDetail::class,
        ]);
    }
}
