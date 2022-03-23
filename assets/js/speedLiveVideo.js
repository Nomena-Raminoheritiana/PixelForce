import { Modal } from 'bootstrap';
import axios from 'axios';
$(document).ready(function() {
    // code de l'appel video
    let code = null;
    let live_en_cours = false;
    let token_annulation_requete = new AbortController();
    let modalJoinCall = 'null';
    let hideModalJoinCall = false;

    // fonction pour lancer une instance liveVideo et de retourner l'id de l'appel
    function launchLiveVideo(container, id, $options = {})
    {
        let randomString = id;
        let domain = "meet.jit.si";
        let options = {
            "roomName": randomString,
            "parentNode": container,
            "width": $options.width,
            "height": $options.height,
        };
       new JitsiMeetExternalAPI(domain, options);
    }


    function generateCode() {
        return Array.apply(null, Array(30)).map(function() {
            let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            return possible[Math.floor(Math.random() * possible.length)];
        }).join('');
    }

    function arretJitsi()
    {
        let iframe = $('#live_video').find('iframe')
        if(iframe.length > 0) {
            iframe.remove();
        }
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
       arretJitsi();

        // on charge le loading
        $('.chargement-live').removeClass('d-none');

        // afficher le modal
        let modal = new Modal($('#modal-live-Video-Rapide')[0], { keyboard: false });
        modal.show();

        // generer le code
        code = generateCode();

        // appel de l'interlocuteur
        const params = new URLSearchParams();
        params.append('userA', userA);
        params.append('userB', userB);
        params.append('code', code);
        params.append('signal', token_annulation_requete.signal);
        $(this).closest('.users').find('[name="users[]"]').each(function() {
            if(this.checked) {
               params.append('users[]', $(this).val());
            }
        });
        axios.post(Routing.generate('live_videoRapide'), params)
        .then(function (response) {
            live_en_cours = true;
            // lancé l'appel local
            launchLiveVideo($('#live_video')[0], code,{
                width:'100%',
                height:'100%'
            });
            // on cache le loading dès que la video est chargé
            $('.chargement-live').addClass('d-none');

        })
        .catch(function (error) {
            console.log(error);
        });


    });

    // stopper le live lorsque l'on ferme le modal
    $(this).on('hide.bs.modal','#modal-live-Video-Rapide', function () {
        arretJitsi();
        if(live_en_cours === false) {
            // on annule la requete de creation de live
            token_annulation_requete.abort()
        } else {
            axios.get(Routing.generate('live_destruct', {
                'code' :  code
            }))
            live_en_cours = false;
        }

    })

    // rejoindre un reunion
    $(this).on('click','.join-live', function(e) {
        e.preventDefault();
        live_en_cours = true;
        // on supprime le modal d'appel
        if(typeof modalJoinCall == 'object') {
            hideModalJoinCall = true;
            modalJoinCall.hide();
        }

        // TODO: on met en pause le setInterval qui detecte les apples entrant

        // reduire tout les autres modals
        let modal = new Modal($('#ModalJoinCall')[0]);
        modal.hide();

        // afficher le modal de live video
        modal = new Modal($('#modal-live-Video-Rapide')[0], { keyboard: false });
        modal.show();

        // lancé l'appel local
        launchLiveVideo($('#live_video')[0], $(this).attr('id-live'),{
            width:'100%',
            height:'100%'
        });
    });

    // supprimer un live coté répondeur
    $(this).on('click', '.remove-live', async function(e) {
        e.preventDefault();
        await axios.get(Routing.generate('live_destruct', {code : $(this).attr('id-live')}))
        if(typeof modalJoinCall == 'object') {
            modalJoinCall.hide();
            hideModalJoinCall = true;
        }
    });

    // detecter s'il y a un appel entrant
    setInterval(async function() {
       const response = await axios.get(Routing.generate('live_joinLiveVideo'))
        if(typeof response.data != 'object'  && live_en_cours === false) {
            // afficher le modal
            if($('#ModalJoinCall').length>0) {
                $('#ModalJoinCall').replaceWith(response.data);
            } else {
                $('body').append(response.data);
            }
            if(typeof modalJoinCall != 'object') {
                modalJoinCall = new Modal($('#ModalJoinCall')[0], { keyboard: false});
                modalJoinCall.show();
            } else {
                modalJoinCall.hide();
                modalJoinCall = new Modal($('#ModalJoinCall')[0], { keyboard: false});
                modalJoinCall.show();
            }
        } else if(typeof modalJoinCall == 'object') {
            modalJoinCall.hide();
            modalJoinCall = '';
        }

    }, 5000);

    $(this).on('hide.bs.modal','#ModalJoinCall', function(e) {
        if(!hideModalJoinCall) {
            $(this).remove();
        }
    })

});
