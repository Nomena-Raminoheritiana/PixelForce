<?php


namespace App\EventListener;

use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\HttpFoundation\Cookie;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\Event\ExceptionEvent;
use Symfony\Component\HttpKernel\Event\RequestEvent;
use Symfony\Component\HttpKernel\Event\ResponseEvent;
use Symfony\Component\HttpKernel\KernelEvents;

class MercureResponseEvent implements EventSubscriberInterface
{

    public static function getSubscribedEvents(): array
    {
        return [
            KernelEvents::REQUEST => ['onKernelRequest', 9999],
            KernelEvents::RESPONSE => ['onKernelResponse', 9999],
        ];
    }

    public function onKernelRequest( RequestEvent $request)
    {

    }

    public function onKernelResponse()
    {
        if (!in_array($_ENV['MERCURE_JWT_TOKEN'], $_COOKIE)) {
            setcookie($_ENV['MERCURE_NAME_COOKIE'], $_ENV['MERCURE_JWT_TOKEN'], 0, "/", "", false, false);
        }
    }
}