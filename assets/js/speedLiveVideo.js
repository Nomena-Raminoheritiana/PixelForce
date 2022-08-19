import { Modal } from 'bootstrap';
import axios from 'axios';
import {launchLiveVideo,arretJitsi,generateCode} from './liveFunctions'
import { EventSourcePolyfill } from 'event-source-polyfill/src/eventsource.min.js';
$(function() {
    // code de l'appel video
    let code = null;
    let live_en_cours = false;
    let token_annulation_requete = new AbortController();
    let modalJoinCall = 'null';
    let hideModalJoinCall = false;
    let refuserCall = true;

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
        $(this).closest('.users').find('input[type="hidden"][name="users[]"]').each(function() {
            params.append('users[]', $(this).val());
        });
        axios.post(Routing.generate('coach_zoom_liveRapide'), params)
        .then(function (response) {
            live_en_cours = true;
            // lancé l'appel local
            launchLiveVideo($('#live_video')[0], code,{
                width:'100%',
                height:'100%',
                onload: function() {
                    // on cache le loading dès que la video est chargé
                    $('.chargement-live').addClass('d-none');
                }
            });


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

        $('.alert-absolute').html('')

    })

    // rejoindre un reunion
    $(this).on('click','.join-live', function(e) {
        e.preventDefault();
        live_en_cours = true;
        hideModalJoinCall = true;
        refuserCall = false;

        // on supprime le modal d'appel
        if(typeof modalJoinCall == 'object') {
            modalJoinCall.hide();
        } else {
            // reduire tout les autres modals
            modalJoinCall = new Modal($('#ModalJoinCall')[0]);
            modalJoinCall.hide();
        }

        // afficher le modal de live video
        let modal = new Modal($('#modal-live-Video-Rapide')[0], { keyboard: false });
        modal.show();

        // lancé l'appel local
        launchLiveVideo($('#live_video')[0], $(this).attr('id-live'),{
            width:'100%',
            height:'100%',
            onload: function() {
                // on cache le loading dès que la video est chargé
                $('.chargement-live').addClass('d-none');
            }
        });
    });

    // refuser un call
    $(this).on('click', '.remove-live', async function(e) {
        e.preventDefault();
        if(typeof modalJoinCall == 'object') {
            modalJoinCall.hide();
            hideModalJoinCall = true;
        }
    });

    $(this).on('click','.call-rapel', async function(e) {
        e.preventDefault();
        $(this).closest('.alert').remove();
        await axios.post(Routing.generate('coach_zoom_rappelerAgent', {encodedUser:$(this).attr('data-user-id')}))
    });

    // detecter s'il y a un appel entrant
    const elementUrl = document.getElementById("live-call-topic");
    if(elementUrl) {
        const urlDetectionAppel = JSON.parse(elementUrl.textContent);
        const eventDetectionAppelSource = new EventSourcePolyfill(urlDetectionAppel, {
            header : {
                'Authorization': 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtZXJjdXJlIjp7InB1Ymxpc2giOlsiKiJdfX0.c6_7faKRwz4VbZwLt7a1ivjCIi1U6jxNhQ3dPYYY7Ec'
            },
            withCredentials: true
        });
        
        eventDetectionAppelSource.onmessage = async event => {
            const data = JSON.parse(event.data);
            // puis on récupère toute les appels entrants
            const response = await axios.get(Routing.generate('agent_zoom_rejoindreReunion', {code: data.code}))
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
        }
    }


    // detecter un refus d'un live
    const elementUrlRefus = document.getElementById("live-refus-topic");
    if(elementUrlRefus) {
        const urlRefus = JSON.parse(elementUrlRefus.textContent);
        const evenRefusSource = new EventSourcePolyfill(urlRefus, {
            header : {
                'Authorization': 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtZXJjdXJlIjp7InB1Ymxpc2giOlsiKiJdfX0.c6_7faKRwz4VbZwLt7a1ivjCIi1U6jxNhQ3dPYYY7Ec'
            },
            withCredentials: true
        });
        
        evenRefusSource.onmessage = async event => {
            const data = JSON.parse(event.data);
            const alertRefu = $('#model-alert');
            const alertRefuClone = alertRefu.clone();
            const id = 'data-'+data.user.id;
            alertRefuClone.attr('id',id);
            alertRefuClone.removeClass('d-none').addClass(' mb-1');
            alertRefuClone.find('.nom-participant').html(data.user.nom+' '+data.user.prenom);
            $('#modal-live-Video-Rapide').find('.alert-absolute').append(alertRefuClone);
            $('[id="'+id+'"]').addClass('show');
            $('[id="'+id+'"]').find('.call-rapel').attr('data-user-id', data.user.id);
        };
    }


    $(this).on('hide.bs.modal','#ModalJoinCall', async function(e) {
        if(refuserCall) {
            $('.remove-live').each(async function () {
                await axios.get(Routing.generate('agent_zoom_refuserReunion', {code : $(this).attr('id-live')}));
            });
        }

        if(!hideModalJoinCall) {
            $(this).remove();
        }
    });

    $(this).on('show.bs.modal','#ModalJoinCall', async function(e) {
        refuserCall = true;
    })

});
