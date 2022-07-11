<?php 

namespace App\Util;

use ReflectionException;
use ReflectionMethod;
use ReflectionNamedType;
use ReflectionType;

class GenericUtil{
    public static function convertPropertyName($key){
        $name = "";
        $tab = explode('_', $key);
        foreach($tab as $part){
            $name .= strtoupper(substr($part, 0, 1)).substr($part, 1);
        }
        return $name;
    }

    public static function getQueryString($prefix, $data){
        if($data === null) return "";
        if(gettype($data) == "array"){
            $result = "";
            $i = 0;
            foreach($data as $key => $value){
                $qs = GenericUtil::getQueryString($prefix."[".$key."]", $value);
                if($qs != "") {
                    if($i > 0) $result .= "&";
                    $result .= $qs;
                    $i++;
                } 
                
            }
            return $result;
        } else {
            return $prefix."=".$data;
        }
        
    }

    

    public static function getGetMethod($class, $property): ?ReflectionMethod{
        $method = new ReflectionMethod($class, "get".GenericUtil::convertPropertyName($property));
        return $method;
    }
    
    public static function getPropertyValue($object, $property){
        $value = $object;
        $tab = explode(".", $property);
        foreach($tab as $part){
            if($value === null) return null;
            if(gettype($value) == "array"){
                if(array_key_exists($part, $value)){
                    $value = $value[$part];
                } else{
                    $value = null;
                }     
            } else if(gettype($value) == "object"){
                $value = GenericUtil::getGetMethod(get_class($value), $part)->invoke($value);
            }
        }
        return $value;
    } 
    
    public static function getReturnType($class, $property): ?string{
        $tab = explode(".", $property);
        for($i = 0; $i<count($tab); $i++){
            try{
                $method = GenericUtil::getGetMethod($class, $tab[$i]);
                $type = $method->getReturnType();
                if($type === null || ($type->isBuiltin() && $i+1 < count($tab)) || !($type instanceof ReflectionNamedType)) return null;
                $class = $type->getName(); 
            } catch(ReflectionException $ex){
                return null;
            }
        }
        return $class;
    }
}