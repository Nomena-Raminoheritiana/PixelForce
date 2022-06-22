<?php

namespace App\Services;

use Cocur\Slugify\Slugify;
use Symfony\Component\Filesystem\Filesystem;
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

    public function upload(UploadedFile $file = null, $targetFolder = null, $fileName=null)
    {
        if($file != null) {
            // suppression de l'ancien fichier s'il existe
            $Oldfile = $targetFolder.DIRECTORY_SEPARATOR.$fileName;
            if($fileName && file_exists($Oldfile)) {
                $filesystem = new Filesystem();
                $filesystem->remove($Oldfile);
            }
            // upload fichier
            $this->targetDirectory = $targetFolder ? $targetFolder : $this->targetDirectory;
            $originalFilename = pathinfo($file->getClientOriginalName(), PATHINFO_FILENAME);
            $safeFilename = $this->slugger->slugify($originalFilename);
            try{
                $fileName = $safeFilename.'-'.uniqid().'.'.$file->guessExtension();
            }catch(\LogicException $e) {
                $extension = pathinfo($file->getClientOriginalName(), PATHINFO_EXTENSION);
                $fileName = $safeFilename.'-'.uniqid().'.'.$extension;
            }

            try {
                $file->move($this->getTargetDirectory(), $fileName);
            } catch (FileException $e) {
                return null;
            }
        }
        return $fileName;
    }

    public function getTargetDirectory()
    {
        return $this->targetDirectory;
    }
}
