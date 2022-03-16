<html>
<head>
    <script src='https://meet.jit.si/external_api.js'></script>
</head>
<body>

<button id="start" type="button">Start</button>
<div id="jitsi-container">
</div>

<script>
    var button = document.querySelector('#start');
    var container = document.querySelector('#jitsi-container');
    var api = null;

    button.addEventListener('click', () => {
        var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var stringLength = 30;

        function pickRandom() {
            return possible[Math.floor(Math.random() * possible.length)];
        }


        var randomString = Array.apply(null, Array(stringLength)).map(pickRandom).join('');


        var domain = "meet.jit.si";
        var options = {
            "roomName": randomString,
            "parentNode": container,
            "width": 600,
            "height": 600,
        };
        api = new JitsiMeetExternalAPI(domain, options);

    });

</script>
</body>
</html>
