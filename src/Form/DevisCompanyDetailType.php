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
use Symfony\Component\Validator\Constraints\File;

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
            ->add('designation', CKEditorType::class, [
                'label' => false,
                'config' => ['toolbar' => 'note_contact_toolbar']
            ])
            ->add('quantite', IntegerType::class, [
                'label' => false,
                'attr' => [
                    'class' => 'js-quantity'
                ],
                'data' => 1
            ])
            ->add('pu_vente', null, [
                'label' => false,
                'attr' => [
                    'class' => 'js-pu_vente',
                    'step' => 'any'
                ]
            ])
            ->add('file_image', FileType::class,[
                'label_attr' => [
                    'class' => 'label_file'
                ], 
                'attr' => [
                    'class' => 'input_file'
                ],
                'required' => false
            ]);

        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => DevisCompanyDetail::class,
        ]);
    }
}
