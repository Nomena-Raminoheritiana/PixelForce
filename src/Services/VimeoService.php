<?php


namespace App\Services;


use Symfony\Component\HttpFoundation\File\UploadedFile;
use Vimeo\Vimeo;

class VimeoService
{
    /** @var Vimeo */
    private $client;

    public function importVideo(UploadedFile $uploadedFile)
    {
        $this->connect();
        $uri = $this->client->upload($uploadedFile,array(
            'name' => 'test1 name',
            'description' => 'description test1',
        ));
        return $uri;
    }

    public function telecharger($uri)
    {
        $this->connect();
        $response = $this->client->request($uri . '?fields=link');
        return $response['body']['link'];
    }

    public function verifierEtat($uri)
    {
        $this->connect();
        $response = $this->client->request($uri . '?fields=transcode.status');
        return $response['body']['transcode']['status'];
    }

    private function connect()
    {
        if(is_null($this->client)) {
            $client = new Vimeo($_ENV['VIMEO_CLIENT_ID'], $_ENV['VIMEO_CLIENT_SECRET'], $_ENV['VIMEO_ACCESS_TOKEN']);
            $client->setCURLOptions([
                CURLOPT_SSL_VERIFYPEER => 0,
                CURLOPT_SSL_VERIFYPEER => 0
            ]);
            $this->client = $client;
        }
        return $this->client;
    }

}
