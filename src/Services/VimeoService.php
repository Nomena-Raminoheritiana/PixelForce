<?php


namespace App\Services;

use Symfony\Component\HttpKernel\KernelInterface;
use Vimeo\Vimeo;

class VimeoService
{
    /** @var Vimeo */
    private $client;

    private $project_dir;

    private $uriRegister = [];

    public function __construct(KernelInterface $kernel)
    {

        $this->project_dir = $kernel->getProjectDir();
    }

    public function importVideo($file, $titre, $description)
    {
        $this->connect();
        $uri = $this->client->upload($file, array(
            'name' => $titre,
            'description' => $description,
        ));
        return $uri;
    }

    public function editInformation($uri, $data)
    {
        $this->connect();
        $this->client->request($uri, $data, 'PATCH');
    }

    public function getVideoId($uri)
    {
        $this->connect();
        $video_link = $this->getInfoUri($uri);
        $get_vid_id = explode("/",$video_link);

        $get_vid_id = $get_vid_id['3'];
        return $get_vid_id;
    }

    public function verifierEtat($uri)
    {
        $this->connect();
        $response = $this->client->request($uri . '?fields=transcode.status');
        return $response['body']['transcode']['status'];
    }

    private function getInfoUri($uri)
    {
        $this->connect();
        if(!isset($this->uriRegister[$uri])) {
            $this->uriRegister[$uri] = $this->client->request($uri . '?fields=link');
        }
        dd($this->uriRegister[$uri]);
        return $this->uriRegister[$uri]['body']['link'];
    }

    private function connect()
    {
        if(is_null($this->client)) {
            $client = new Vimeo($_ENV['VIMEO_CLIENT_ID'], $_ENV['VIMEO_CLIENT_SECRET'], $_ENV['VIMEO_ACCESS_TOKEN']);
            $this->client = $client;
        }
        return $this->client;
    }

}
