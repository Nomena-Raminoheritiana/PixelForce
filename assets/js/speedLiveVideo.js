$(document).ready(function() {

    function launchLiveVideo(container, $options = {})
    {
        let domain = "meet.jit.si";
        let randomString =  Array.apply(null, Array(30)).map(pickRandom).join('');
        let options = {
            "roomName": randomString,
            "parentNode": container,
            "width": $options.width,
            "height": $options.height,
        };
       new JitsiMeetExternalAPI(domain, options);
       return randomString;
    }


    function pickRandom() {
        var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        return possible[Math.floor(Math.random() * possible.length)];
    }





    // appel rapide d'un appel video
    $(this).on('click', '.speed-liveVideo-call', function(e) {
        e.preventDefault();
        // l'utilisateur appelé
        const UserRecepteur = $(this).attr('id');

        // ouvrir modal
        $('.modal#modal-live-Video-Rapide').show();

        // lancé l'appel local
        const idVideo = launchLiveVideo($('#live_video')[0], {
            width:'100%',
            height:'100%'
        })
    })
});
