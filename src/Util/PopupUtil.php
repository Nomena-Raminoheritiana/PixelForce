<?php 

namespace App\Util;

class PopupUtil{
    
    public static function getMapPopup(string $opener, string $popup): array
    {
        $map = [];
        $keys = explode(";", $opener);
        $values = explode(";", $popup);
        for($i=0; $i<count($keys); $i++){
            $map[$keys[$i]] = $values[$i];
        }
        return $map;
    }
}