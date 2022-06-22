<?php


namespace App\Services\Google;

use Exception;
use Google\Client;
// use Google\Service\PeopleService;
use Google\Service\PeopleService as GooglePeopleService;

class PeopleService
{

    /**
     * Returns an authorized API client.
     * @return Client the authorized client object
     */
    function getClient()
    {
        define('STDIN',fopen("php://stdin","r"));

        $redirect_uri = 'https://' . $_SERVER['HTTP_HOST'] . '/agent/contac/import/mobile';
        
        $client = new Client();
        
        $client->setApplicationName('People API PHP Quickstart');
        
        
        $client->setAuthConfig('pixelforce-97faf78647b7.json');
        $client->setRedirectUri($redirect_uri);
        $client->setClientId( $_ENV['OAUTH_GOOGLE_ID']);
        $client->setClientSecret( $_ENV['OAUTH_GOOGLE_SECRET']);
        
        $client->setAccessType('offline');
        $client->setPrompt('select_account consent');
        
        $client->setScopes('https://www.googleapis.com/auth/contacts.other.readonly');
        
        $guzzleClient = new \GuzzleHttp\Client([
            'verify' => false,
            'curl' => [CURLOPT_SSL_VERIFYPEER => false] 
        ]);
        $client->setHttpClient($guzzleClient);


        // Load previously authorized token from a file, if it exists.
        // The file token.json stores the user's access and refresh tokens, and is
        // created automatically when the authorization flow completes for the first
        // time.
        $tokenPath = 'token.json';

        if (file_exists($tokenPath)) {
            $accessToken = json_decode(file_get_contents($tokenPath), true);
            $client->setAccessToken($accessToken);
        }
        
        // If there is no previous token or it's expired.
        if ($client->isAccessTokenExpired()) {
            // Refresh the token if possible, else fetch a new one.

            if ($client->getRefreshToken()) {
                $client->fetchAccessTokenWithRefreshToken($client->getRefreshToken());
            } else {
                // Request authorization from the user.
                $authUrl = $client->createAuthUrl();
                printf("Open the following link in your browser:\n%s\n", $authUrl);
                print 'Enter verification code: ';
                dd($authUrl);
                $authCode = trim(fgets(STDIN));
                // $authCode =  $_GET['code'];
                // $authCode =  $authUrl;
               


                // Exchange authorization code for an access token.
                // dd(
                //     $client,
                //     $authUrl,
                //     $authCode
                // );
                $accessToken = $client->fetchAccessTokenWithAuthCode($authCode);
                $client->setAccessToken($accessToken);

                // Check to see if there was an error.
                if (array_key_exists('error', $accessToken)) {
                    throw new Exception(join(', ', $accessToken));
                }
            }
            // Save the token to a file.
            if (!file_exists(dirname($tokenPath))) {
                mkdir(dirname($tokenPath), 0700, true);
            }
            file_put_contents($tokenPath, json_encode($client->getAccessToken()));
        }
        return $client;
    }


    /**
     * Permet d'appeler la fonction getClient et doit retourner la liste des contacts
     */
    public function getContacts()
    {
         // Get the API client and construct the service object.
         $client = $this->getClient();
         $service = new GooglePeopleService($client);
 
         // Print the names for up to 10 connections.
         try{
             $optParams = array(
                 'pageSize' => 10,
                 'personFields' => 'names,emailAddresses',
             );
             $results = $service->people_connections->listPeopleConnections('people/me', $optParams);
 
             if (count($results->getConnections()) == 0) {
                 print "No connections found.\n";
             } else {
                 print "People:\n";
                 foreach ($results->getConnections() as $person) {
                     if (count($person->getNames()) == 0) {
                         print "No names found for this connection\n";
                     } else {
                         $names = $person->getNames();
                         $name = $names[0];
                         printf("%s\n", $name->getDisplayName());
                     }
                 }
             }
         }
         catch(Exception $e) {
             // TODO(developer) - handle error appropriately
             dd(
                 $e->getMessage()
             );
         } 
    }
}

    