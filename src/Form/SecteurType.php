<?php

namespace App\Form;

use App\Entity\Secteur;
use App\Entity\TypeSecteur;
use App\Repository\TypeSecteurRepository;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\NotNull;

class SecteurType extends AbstractType
{
    private $typeSecteurRepository;
    public function __construct(TypeSecteurRepository $typeSecteurRepository){
        $this->typeSecteurRepository = $typeSecteurRepository;
    }
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $types = $this->typeSecteurRepository->findAll();
        $builder
            ->add('nom', null, ['attr' => ['placeholder' => 'Nom du secteur']])
            ->add('description', null, ['attr' => ['placeholder' => 'Description du secteur']])
            ->add('type', EntityType::class, [
                "label" => "Type",
                'class'=> TypeSecteur::class,
                'choices' => $types,
                'choice_label' => function(?TypeSecteur $type) {
                    return $type ? strtoupper($type->getNom()) : '';
                },
                "required" => true,
                "constraints" => [
                    new NotNull(["message" => "Type obligatoire"])
                ]
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Secteur::class,
        ]);
    }
}
