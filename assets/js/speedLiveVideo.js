import { Modal } from 'bootstrap';
import axios from 'axios';
$(document).ready(function() {

    // fonction pour lancer une instance liveVideo et de retourner l'id de l'appel
    function launchLiveVideo(container, $options = {}, id = null)
    {
        let randomString = id;
        let domain = "meet.jit.si";
        if(id == null) {
             randomString =  Array.apply(null, Array(30)).map(pickRandom).join('');
        }

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
        e.stopPropagation();
        // l'utilisateur appelé
        const userB = $(this).attr('id-recepteur');
        // l'utilisateur demandeur
        const userA = $(this).attr('id-envoyeur');

        // suppression du live antérieur
        $('#live_video').html('');

        // afficher le modal
        let modal = new Modal($('#modal-live-Video-Rapide')[0], { keyboard: false });
        modal.show();

        // lancé l'appel local
        const idVideo = launchLiveVideo($('#live_video')[0], {
            width:'100%',
            height:'100%'
        })

        // appel de l'interlocuteur
        const params = new URLSearchParams();
        params.append('userA', userA);
        params.append('userB', userB);
        params.append('code', idVideo);
        axios.post(Routing.generate('live_videoRapide'), params)
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });


    })

    // stopper le live lorsque l'on ferme le modal
    $(this).on('hidden.bs.modal','#modal-live-Video-Rapide', function () {
        $('#live_video').html('');
    })
});
