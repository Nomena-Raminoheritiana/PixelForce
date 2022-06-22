<?php

namespace App\Services;

use App\Helpers\GenericUtil;
use SplFileObject;

class ExcelService
{

    public const SEPARATOR = ";";
    public const EXPORT_FILE_NAME = "export.csv";

    public function __construct(){

    }

    public function export(array $data, array $fields, array $headers): ?SplFileObject
    {
        $file = new SplFileObject(ExcelService::EXPORT_FILE_NAME, "w");
        $file->fputcsv(ExcelService::to_utf8($headers), ExcelService::SEPARATOR);
        foreach($data as $obj){
            $row = [];
            foreach($fields as $field){
                $value = GenericUtil::getPropertyValue($obj, $field);
                $row[] = $value;
            }
            $file->fputcsv(ExcelService::to_utf8($row), ExcelService::SEPARATOR);
        }
        return $file;
    }

    public function getrowsInTable(array $data, array $fields)
    {
        $table = [];
        $headers = ["NOM ET PRÉNOMS", "EMAIL", "TÉLÉPHONE", "ADRESSE", "TYPE DU LOGEMENT", "RUE", "NUMÉRO", "CODE POSTAL", "VILLE", "COMPOSITION DU FOYER", "NOMBRE DE PERSONNE", "COMMENTAIRE"];
        $table[] = $headers;
      
        foreach($data as $obj){
            $row = [];
            foreach($fields as $field){
                $value = GenericUtil::getPropertyValue($obj, $field);
                if ($value === null) {
                    $value = '-';
                }else{
                    $value = $value;
                }
                // $value = utf8_decode($value);
                $row[] = $value;
            }
            // dd($row);
                        
            $table[] = $row;
        }
        
        return $table;
    }

    public static function to_utf8(array $tab): ?array
    {
        return array_map("utf8_decode", $tab);
    }
}