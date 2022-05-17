<?php

namespace App\Services;

use Cocur\Slugify\Slugify;
use Symfony\Component\HttpFoundation\File\Exception\FileException;
use Symfony\Component\HttpFoundation\File\UploadedFile;

class FileUploader
{
    private $targetDirectory;
    private $slugger;

    public function __construct(DirectoryManagement $directoryManagement)
    {
        $this->targetDirectory = $directoryManagement->getMediaFolder();
        $this->slugger = new Slugify();
    }

    public function upload(?UploadedFile $file = null, $targetFolder = null)
    {
        if($file != null) {
            $this->targetDirectory = $targetFolder ? $targetFolder : $this->targetDirectory;
            $originalFilename = pathinfo($file->getClientOriginalName(), PATHINFO_FILENAME);
            $safeFilename = $this->slugger->slugify($originalFilename);
            $fileName = $safeFilename.'-'.uniqid().'.'.$file->guessExtension();

            try {
                $file->move($this->getTargetDirectory(), $fileName);
            } catch (FileException $e) {
                return null;
            }

            return $fileName;
        }
       return false;
    }

    public function getTargetDirectory()
    {
        return $this->targetDirectory;
    }
}
