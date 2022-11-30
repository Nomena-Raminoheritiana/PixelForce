<?php

namespace App\Form;

use App\Entity\Meeting;
use App\Entity\MeetingState;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use App\Repository\MeetingStateRepository;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\MoneyType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Validator\Constraints\NotBlank;

use Symfony\Bridge\Doctrine\Form\Type\EntityType;

class MeetingFilterType extends AbstractType
{
    private $meetingStateRepository;
    public function __construct(MeetingStateRepository $meetingStateRepository){
        $this->meetingStateRepository = $meetingStateRepository;
    }
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $meetingStateList = $this->meetingStateRepository->findAll();
        $builder
        ->add('title', TextType::class, [
            "label" => "Libellé",
            "trim" => true,
            "required" => false
        ])
        ->add('start', DateType::class, [
            'label' => "Date de début",
            'widget' => 'single_text',
            'empty_data' => '',
            "required" => false
        ])
        ->add('end', DateType::class, [
            'label' => "Date de fin",
            'widget' => 'single_text',
            'empty_data' => '',
            "required" => false
        ])
        ->add('meetingState', EntityType::class, [
            "label" => "Statut",
            'class'=> MeetingState::class,
            'choices' => $meetingStateList,
            'choice_label' => function(?MeetingState $meetingState) {
                return $meetingState ? strtoupper($meetingState->getName()) : '';
            },
            "required" => false
        ])
        ->add('orderBy', ChoiceType::class, [
            "label" => "Trier par",
            'choices'  => [
                'Identifiant' => "id",
                'Date de début' => "start",
                'Date de fin' => "end",
            ],
            "required" => false,
            'mapped' => false ,
            'data' => 'id' 
        ])
        ->add('order', ChoiceType::class, [
            "label" => "Ordre",
            'choices'  => [
                'Croissant' => "asc",
                'Décroissant' => "desc"
            ],
            "required" => false,
            'mapped' => false  ,
            'data' => 'asc' 
        ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Meeting::class,
        ]);
    }
}
