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
        
        // $cookie = $request->cookies->get('mercureAuthorization02');
        // dd('sdf');


        // $cookies = [];
        // foreach ($request->getRequest()->cookies as $key => $value ) {
        //     $cookies[$key] = $value ;
        // }
        // dd($request->getRequest());

        // // if (in_array($cookies['PHPSESSID'], $cookies)) {
        // //     # code...
        // // }
        
            
        
        // dd($cookies);
        // dd(
        //     $request->getRequest(),
        //     // $request->cookies->get('_ga'),
        //     // $request->cookies->all()
        // );
    }

    public function onKernelResponse(ResponseEvent $event)
    {
        // check to see if onKernelController marked this as a token "auth'ed" request
        if (!$token = $event->getRequest()->attributes->get('auth_token')) {
            return;
        }

        $token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtZXJjdXJlIjp7InB1Ymxpc2giOlsiKiJdfX0.c6_7faKRwz4VbZwLt7a1ivjCIi1U6jxNhQ3dPYYY7Ec7';
        $response = $event->getResponse();

        $response->headers->setCookie(
            Cookie::create(
                'mercureAuthorization',
                $token,
                0,
                '/',
                'pixelforce.tk',
                false,
                false,
                false,
                'lax'
            )
        );
        $response->send();
    }
}