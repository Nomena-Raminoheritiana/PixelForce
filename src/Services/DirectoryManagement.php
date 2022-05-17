<?php

namespace App\Services;

use App\Manager\EntityManager;
use Cocur\Slugify\Slugify;
use Symfony\Component\HttpKernel\KernelInterface;
use Symfony\Component\Yaml\Yaml;

class DirectoryManagement
{
    private $mediaFolder = 'media';
    private $mediaFolder_User = 'user';
    private $chat_folder = 'chat';
    private $project_dir;
    private $slugify;

    public function __construct(KernelInterface $kernel)
    {
        $this->slugify = new Slugify();
        $this->project_dir = $kernel->getProjectDir();
    }

    public function getProjectDir(): string
    {
        return $this->project_dir;
    }

    public function getMediaFolder()
    {
        return $this->project_dir.DIRECTORY_SEPARATOR.$this->mediaFolder;
    }

    public function getMediaFolder_User()
    {
        return $this->getMediaFolder().DIRECTORY_SEPARATOR.$this->mediaFolder_User;
    }

    public function getMediaChatFolder()
    {
        return $this->getMediaFolder().DIRECTORY_SEPARATOR.$this->chat_folder;
    }

}
