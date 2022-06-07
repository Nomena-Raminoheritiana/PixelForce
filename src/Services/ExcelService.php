<?php

namespace App\Services;

use App\Util\GenericUtil;
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

    public static function to_utf8(array $tab): ?array
    {
        return array_map("utf8_decode", $tab);
    }
}