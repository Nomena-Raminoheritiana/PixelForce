<?php

namespace App\Form;

use App\Entity\MeetingState;
use App\Entity\SearchEntity\MeetingSearch;
use App\Repository\MeetingStateRepository;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class MeetingSearchType extends AbstractType
{
    protected $repoMeetingState;

    public function __construct(MeetingStateRepository $repoMeetingState)
    {
        $this->repoMeetingState = $repoMeetingState;
    }

    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('title', TextType::class, [
                'required' => false,
                'label' => false,
                'attr' => [
                    'placeholder' => 'Libellé'
                ]
            ])
            ->add('startDate', DateType::class, [
                'required' => false,
                'label' => 'Date début',
                'widget' => 'single_text',
            ])
            ->add('endDate', DateType::class, [
                'required' => false,
                'label' => 'Date fin',
                'widget' => 'single_text',
            ])
            ->add('status', ChoiceType::class, [
                'required' => false,
                'placeholder' => 'Statut',
                'label' => false,
                'choices' => $this->getMeetingState()
            ])
        ;
    }

    private function getMeetingState()
    {
        $choices = $this->repoMeetingState->findAll();
        $output = [];
        foreach ($choices as $k => $v) {
            $output[$v->getName()] = $v->getName();
        }
        return $output;
    }


    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => MeetingSearch::class,
            'method' => 'get',
            'csrf_protection' => false
        ]);
    }

    // on modifie les paramettre (pour les rendre lisibles) dans l'url lors d'une recheche
    public function getBlockPrefix()
    {
        return '';
    }

    
}
