<?php


namespace App\Services;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\KernelInterface;
use Vimeo\Vimeo;

class VimeoService
{
    /** @var Vimeo */
    private $client;

    private $project_dir;

    public function __construct(KernelInterface $kernel)
    {

        $this->project_dir = $kernel->getProjectDir();
    }

    public function importVideo($file, $titre, $description)
    {

        chmod($this->project_dir.DIRECTORY_SEPARATOR.'/vendor/ankitpokhrel/tus-php/.cache/tus_php.client.cache', 777);
        chmod($this->project_dir.DIRECTORY_SEPARATOR.'/vendor/ankitpokhrel/tus-php/.cache/', 777);
        chmod($this->project_dir.DIRECTORY_SEPARATOR.'/vendor/ankitpokhrel/tus-php/', 777);
        chmod($this->project_dir.DIRECTORY_SEPARATOR.'/vendor/ankitpokhrel/', 777);
        $this->connect();
        $uri = $this->client->upload($file, array(
            'name' => $titre,
            'description' => $description,
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
