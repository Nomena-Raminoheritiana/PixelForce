<?php


namespace App\Helpers;


class ClassHelper
{
    public function getShortClass($classWithNamespace)
    {
        $namespaceTab = explode('\\', $classWithNamespace);
        return $namespaceTab[count($namespaceTab) - 1];
    }
}