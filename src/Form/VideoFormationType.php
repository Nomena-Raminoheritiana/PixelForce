<?php

namespace App\Form;

use App\Entity\VideoFormation;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\File;

class VideoFormationType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('titre')
            ->add('description', TextareaType::class, [
                'attr' => [
                    'rows' => 10
                ]
            ])
            ->add('fichier', FileType::class, [
                'mapped' => false,
                'attr' => [
                    'accept' => "video/mp4,video/x-m4v,video/*"
                ],
                'constraints' => [
                    new File([],
                        '2147483648'
                    )
                ],
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => VideoFormation::class,
        ]);
    }
}
