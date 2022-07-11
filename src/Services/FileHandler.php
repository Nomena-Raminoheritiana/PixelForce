<?php
namespace App\Services;

use Symfony\Component\HttpFoundation\File\Exception\FileException;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\String\Slugger\SluggerInterface;
use Symfony\Component\Filesystem\Filesystem;
use Symfony\Component\Filesystem\Exception\IOExceptionInterface;
use Symfony\Component\Filesystem\Path;
use Symfony\Component\HttpFoundation\File\File;

class FileHandler
{
    private $filesDirectory;
    private $slugger;

    public function __construct($filesDirectory, SluggerInterface $slugger)
    {
        $this->filesDirectory = $filesDirectory;
        $this->slugger = $slugger;
    }


    public function getSafeFilename(UploadedFile $file){
        $originalFilename = pathinfo($file->getClientOriginalName(), PATHINFO_FILENAME);
        $safeFilename = $this->slugger->slug($originalFilename);
        $fileName = $safeFilename.'-'.uniqid().'.'.$file->guessExtension();
        return $fileName;
    }
    public function upload(UploadedFile $file, $dir = "")
    {
        $filesystem = new Filesystem();
        //$fileName = $this->getSafeFilename($file);
        $fileName = $file->getClientOriginalName();
        $path =Path::join($this->getFilesDirectory(), $dir);
        $filePath = Path::join($dir, $fileName);
        try {
            if(!$filesystem->exists($path))$filesystem->mkdir($path);
            $file->move($path, $fileName);
        } catch (FileException $e) {
            // ... handle exception if something happens during file upload
            throw $e;
        }catch (IOExceptionInterface $e) {
            throw $e;
        }
        return $filePath;
    }

    public function getFilesDirectory()
    {
        return $this->filesDirectory;
    }

    public function getFile($filepath){
        $path = Path::join($this->getFilesDirectory(), $filepath);
        $file = new File($path);
        return $file;
    }
}