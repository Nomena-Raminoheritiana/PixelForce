<?php

namespace App\Models;

class CORS
{

    // cross-site requests allowed domains
    const CORS_ALLOWED_HOSTS = [
        'https://pixelforce.tk',
        'https://redirectmercure.tk',
        'https://prod-env',
        'https://qa-env',
        'https://dev-env',
        'http://local-env',
        'http://localhost',
        'http://localhost:3001',  // CORS is port and scheme "sensitive" !
        'http://localhost:8080',
        'https://redirectmercure.tk/.well-known/mercure',
        // ...
    ];

    // the default CORS allowed origin response
    const CORS_DEFAULT_HOST = 'https://pixelforce.tk';

    // non-trivial headers allowed in API requests, see: https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS
    const CORS_ALLOWED_HEADERS = 'Authorization, Content-Length, Content-Type, X-Requested-With';

    // max time in seconds a browser can cache the CORS settings
    const CORS_MAX_AGE = 120;

    // allowed HTTP methods
    const CORS_ALLOWED_METHODS = 'GET, POST, PUT, HEAD';

}