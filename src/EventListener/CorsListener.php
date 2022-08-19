<?php


namespace App\EventListener;

use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Event\ExceptionEvent;
use Symfony\Component\HttpKernel\Event\RequestEvent;
use Symfony\Component\HttpKernel\Event\ResponseEvent;
use Symfony\Component\HttpKernel\KernelEvents;
use App\Models\CORS;

class CorsListener implements EventSubscriberInterface
{
    public static function getSubscribedEvents(): array
    {
        return [
            KernelEvents::REQUEST => ['onKernelRequest', 9999],
            KernelEvents::RESPONSE => ['onKernelResponse', 9999],
        ];
    }


    public function onKernelRequest(RequestEvent $event): void
    {

        // Don't do anything if it's not the master request.
        if (!$event->isMasterRequest()) {
            return;
        }
        $request = $event->getRequest();
        $method  = $request->getRealMethod();
        if ('OPTIONS' === strtoupper($method)) {
            $response = new Response();
            $event->setResponse($response);
        }
    }

    public function onKernelResponse(ResponseEvent $event): void
    {

        // Don't do anything if it's not the master request.
        if (!$event->isMasterRequest()) {
            return;
        }

        // get website url, from which the user is accessing, otherwise the default host (Access-Control-Allow-Origin header only support one value)
        $host = CORS::CORS_DEFAULT_HOST;

        $referer = $event->getRequest()->server->get('HTTP_REFERER');
        if ($referer) {
            $parts = parse_url($referer);
            if (is_array($parts) && array_key_exists('scheme', $parts) && array_key_exists('host', $parts)) {
                $referer = $parts["scheme"] . "://" . $parts["host"];
                if(isset($parts['port'])) {
                    $referer .= ':' . $parts['port'];
                }
                if(in_array($referer, CORS::CORS_ALLOWED_HOSTS)) {
                    $host = $referer;
                }
            }
        } elseif ($referer === null) {
            $host = '*';
        }

        $response = $event->getResponse();
        $response->headers->set('Access-Control-Allow-Origin', $host);
        $response->headers->set('Access-Control-Allow-Headers', CORS::CORS_ALLOWED_HEADERS);
        $response->headers->set('Access-Control-Expose-Headers', CORS::CORS_ALLOWED_HEADERS);
        $response->headers->set('Access-Control-Allow-Methods', CORS::CORS_ALLOWED_METHODS);
        $response->headers->set('Access-Control-Max-Age', CORS::CORS_MAX_AGE);
        header("Access-Control-Allow-Origin: https://pixelforce.tk:3000");
        header("Access-Control-Allow-Origin: https://redirectmercure.tk");
        header("Access-Control-Allow-Origin: https://redirectmercure.tk/.well-known/mercure");
        
        // dd('eto');
        // header()
        
        // dd(get_headers('https://127.0.0.1:8000/'));
    }

    
}