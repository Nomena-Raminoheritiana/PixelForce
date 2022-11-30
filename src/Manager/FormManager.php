<?php


namespace App\Manager;


use Symfony\Component\Form\FormFactoryInterface;
use Symfony\Component\HttpFoundation\Request;

class FormManager
{
    /**
     * @var FormFactoryInterface
     */
    private $form;

    public function __construct(FormFactoryInterface $form)
    {
        $this->form = $form;
    }

    public function getForm($type, $data = null, $options=[], ?Request $request = null, $callback = null)
    {
       $data2 = \substr($type, 0, -4);
       $data2 = str_replace('\Form\\','\Entity\\', $data2);
       $data = $data ? $data : new $data2();
       $form =  $this->form->create($type, $data, $options);
       if($request) {
           $form->handleRequest($request);
           if($form->isSubmitted() && $form->isValid()) {
               /** @var callable $callback */
              return $callback($form->getData(), $request);
           }
       }
       return $form;
    }

}