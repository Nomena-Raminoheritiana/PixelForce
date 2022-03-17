<?php


namespace App\Twig;


use Twig\Extension\AbstractExtension;
use Twig\TwigFilter;

class CustomFilter extends AbstractExtension
{
    public function getFilters()
    {
        return [
            new TwigFilter('base64_encode', [$this, 'base64_encode']),
            new TwigFilter('base64_decode', [$this, 'base64_decode']),
        ];
    }

    public function base64_encode($string)
    {
        return base64_encode($string);
    }

    public function base64_decode($string)
    {
        return base64_decode($string);
    }
}