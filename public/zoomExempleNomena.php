<?php
require_once 'vendor/autoload.php';
include 'config.php';

use \Firebase\JWT\JWT;
use GuzzleHttp\Client;
define('ZOOM_API_KEY','C5nboPLUTfaxopXDGu7rFQ');
define('ZOOM_SECRET_KEY','vtFA9DdSudcre68Bu2XWsp8fMNlBCTTyw8IN');


function getZoomAccessToken() {
    $key = ZOOM_SECRET_KEY;
    $payload = array(
        "iss" => ZOOM_API_KEY,
        'exp' => time() + 3600,
    );

    return JWT::encode($payload, $key,'HS256');
}

function createZoomMeeting() {
    $client = new Client([
        // Base URI is used with relative requests
        'base_uri' => 'https://api.zoom.us',
    ]);

    $response = $client->request('POST', '/v2/users/me/meetings', [
        "headers" => [
            "Authorization" => "Bearer " . getZoomAccessToken()
        ],
        'json' => [
            "topic" => "Let's Learn WordPress",
            "type" => 2,
            "start_time" => "2021-01-30T20:30:00",
            "duration" => "30", // 30 mins
            "password" => "123456"
        ],
        'verify' => false
    ]);
    $response2 = $client->request('GET','/v2/users',[
        'verify' => false,
        "headers" => [
            "Authorization" => "Bearer " . getZoomAccessToken()
        ],

    ]);


    $data2 = json_decode($response2->getBody());
    dump($data2);
    $data = json_decode($response->getBody());
    echo "Join URL: ". $data->join_url;
    echo "<br>";
    echo "Meeting Password: ". $data->password;

    // pour créer un utilisateur
    $curl = curl_init();

    curl_setopt_array($curl, array(
        CURLOPT_URL => "https://api.zoom.us/v2/users",
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_ENCODING => "",
        CURLOPT_MAXREDIRS => 10,
        CURLOPT_TIMEOUT => 30,
        CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
        CURLOPT_CUSTOMREQUEST => "POST",
        CURLOPT_POSTFIELDS => "{\"action\":\"create\",\"user_info\":{\"email\":\"dhjdfkghdskjf@fgkjfdlgjfkd.gh\",\"type\":1,\"first_name\":\"Terry\",\"last_name\":\"Jones\"}}",
        CURLOPT_HTTPHEADER => array(
            "authorization: Bearer {token}",
            "content-type: application/json"
        ),
    ));

    $response = curl_exec($curl);
    $err = curl_error($curl);

    curl_close($curl);

    if ($err) {
        echo "cURL Error #:" . $err;
    } else {
        echo $response;
    }
}

