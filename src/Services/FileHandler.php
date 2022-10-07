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

    public function uploadTmp(UploadedFile $file, $dir = "", $salt = "0")
    {
        $filesystem = new Filesystem();
        $info = pathinfo($file->getClientOriginalName());

        $fileName = $salt.'_'.strtotime("now").'.'.$info['extension'];
        // $fileName = $file->getClientOriginalName();
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

    public function saveBase64($data, $filename){
        // open the output file for writing
        $ifp = fopen( $filename, 'wb' ); 

        // split the string on commas
        // $data[ 0 ] == "data:image/png;base64"
        // $data[ 1 ] == <actual base64 string>
        $data = explode( ',', $data );

        // we could add validation here with ensuring count( $data ) > 1
        fwrite( $ifp, base64_decode( $data[ 1 ] ) );

        // clean up the file resource
        fclose( $ifp ); 

        return $filename; 
    }

    public function saveBinary($data, $filename, $dir){
        $filesystem = new Filesystem();
        $path =Path::join($this->getFilesDirectory(), $dir);
        if(!$filesystem->exists($path))$filesystem->mkdir($path);
        $filePath = Path::join($dir, $filename);
        $ifp = fopen( Path::join($this->getFilesDirectory(), $filePath), 'wb' );
        fwrite( $ifp, $data);
        fclose( $ifp ); 
        return $filePath; 
    }


    public function encode_img_base64( $img_path = false, $img_type = 'png' ){
        if( $img_path ){
            //convert image into Binary data
            $img_data = fopen ( $img_path, 'rb' );
            $img_size = filesize ( $img_path );
            $binary_image = fread ( $img_data, $img_size );
            fclose ( $img_data );
    
            //Build the src string to place inside your img tag
            $img_src = "data:image/".$img_type.";base64,".str_replace ("\n", "", base64_encode($binary_image));
    
            return $img_src;
        }
    
        return false;
    }
}