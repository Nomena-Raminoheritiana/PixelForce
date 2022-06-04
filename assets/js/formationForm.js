import {mimesVideo, mimesDocument, mimesAudio} from './helpers/FileType'
import {sendVideoToVimeo} from './ImportVideoVimeo'
import circleImage3 from '../images/3-Leg-Preloader.svg'
import axios from 'axios';
require('jquery-validation')
$(document).ready(function () {

    // enregistrement des données du formulaire
    // etape 1 : upload video vers serveur vimeo
    // etap 2 : submit formulaire (symfony : upload + flush Data)
    $(this).on('click','#submit-formation',async function(e) {
        e.preventDefault();
        validationFormulaire(function() {
            progressionBar(0);
            sendVideoToVimeo({
                selector:$('#inputVideo'),
                titre:$('#video-upload-name').text(),
                description:'',
                error: function(data) {
                    alert('erreur lors du téléchargement video '+data)
                },
                progress: function(pourcentage) {
                    progressionBar(pourcentage);
                },
                complete: async function(videoId, url, prettyData) {
                    await saveData(videoId);
                    progressionContainer.remove()
                    progressionLabel.html(
                        '<div class="text-center">' +
                        '   <h1 class="text-success"><i class="fa fa-circle-check"></i></h1>     ' +
                        '   <strong>Formation ajouté avec succès</strong> ' +
                        '</div>');
                    setTimeout(function() {
                        progressionLabel.html('<strong>Rafraichissement de la page ...</strong>')
                        setTimeout(function() {
                            location.reload();
                        },1000)
                    },1000)

                }
            })
        });
    });

    // boutton ajout video (creation input-file + click automatique sur celui-ci)
    $(this).on('click','#btn-add-video', function(e) {
        e.preventDefault();
        const inputFile = $('<input />', {
            type: 'file',
            class:'d-none',
            accept:mimesVideo.join(','),
            id: 'inputVideo'
        });
        $(this).closest('#formation-video').append(inputFile);
        inputFile.trigger('click');
    });

    // video local preview
    $(this).on('change', '#inputVideo', function(e) {
        e.preventDefault();
        let video_upload_preview = $('#video-upload-preview')[0];
        let video_upload_name = $('#video-upload-name')[0];
        let loading_video_container = $('#loading-video-container')[0];
        let loading_video = $('#loading-video')[0];
        let videoSource = $('<source />');
        let videoLocalFile = (this.files)[0];
        $(video_upload_name).removeClass('d-none');
        if(mimesVideo.includes(videoLocalFile.type)) {
            $(video_upload_name).append(videoLocalFile.name)
            $(loading_video_container).removeClass('d-none');
            $('#btn-add-video').addClass('d-none');

            const reader = new FileReader();
            reader.onload = function (e) {
                videoSource.attr('src', e.target.result);
                video_upload_preview.appendChild(videoSource[0]);
                video_upload_preview.load();
                video_upload_preview.play();
            };

            reader.onprogress = function (e) {
                $(loading_video).html(Math.round((e.loaded * 100) / e.total));
            };
            reader.onloadend = function(e) {
                $(loading_video_container).addClass('d-none')
                $(video_upload_preview).removeClass('d-none');
            };

            reader.readAsDataURL(videoLocalFile);
        } else {
            $('#btn-add-video').removeClass('d-none');
            $(video_upload_name).html('Le fichier charger n\'est pas une video')
        }

    })

    // boutton ajout document (creation de plusieur input-file au fur et à mesure du click + click automatique sur chaque input file)
    $(this).on('click','#btn-add-document', function(e) {
        e.preventDefault();
        const inputFile = $('<input />', {
            type: 'file',
            class:'d-none input-file-document',
            accept: mimesDocument.join(',')
        });
        $(this).closest('#formation-document').append(inputFile);
        inputFile.trigger('click');
    });
    // affichage du nom de chaque fichier importer
    $(this).on('change','#formation-document .input-file-document', function(e) {
        e.preventDefault();
        let documentLocalFile = (this.files)[0];
        if(mimesDocument.includes(documentLocalFile.type)) {
            $('#document-upload-name').append('<span class="badge bg-light-info text-dark"><i class="fa-solid fa-book me-2"></i> '+documentLocalFile.name+'</span>').append('<br>')
        }
    })

    // boutton ajout audio (creation de plusieur input-file au fur et à mesure du click + click automatique sur chaque input file)
    $(this).on('click','#btn-add-audio', function(e) {
        e.preventDefault();
        const inputFile = $('<input />', {
            type: 'file',
            class:'d-none input-file-audio',
            accept: mimesAudio.join(',')
        });
        $(this).closest('#formation-audio').append(inputFile);
        inputFile.trigger('click');
    });
    // affichage du nom de chaque fichier importer
    $(this).on('change','#formation-audio .input-file-audio', function(e) {
        e.preventDefault();
        let audioLocalFile = (this.files)[0];
        if(mimesAudio.includes(audioLocalFile.type)) {
            $('#audio-upload-name').append('<span class="badge bg-light-info text-dark"><i class="fa-solid fa-music me-2"></i> '+audioLocalFile.name+'</span>').append('<br>')
        }
    })

    /////// DEBUT FICHE FORMATION ///////
    /**
     * Début fiche formation
     */
    // supprimer un média
    $(this).on('click', '.btn-media-delete', function(e) {
        e.preventDefault();
        let mediaDelete = $('<input />', {
            type: 'hidden',
            class: 'hidden_media_deleted',
            name: 'deleted_media[]',
            value: $(this).attr('data-media-id')
        });
        $('#formation-fiche').append(mediaDelete);
        $(this).closest('.media').first().remove();
    })
    // enregistrement des données du formulaire
    // etape 1 : upload video vers serveur vimeo
    // etap 2 : submit formulaire (symfony : upload + flush Data)
    $(this).on('click','#edit-formation',async function(e) {
        e.preventDefault();
        validationFormulaire(async function() {
             progressionBar(0)
            let fileDeleted = new FormData();
             $('.hidden_media_deleted').each(function() {
                fileDeleted.append('deleted_media[]', $(this).val())
             });
            await saveData();
            (await axios.post(Routing.generate('coach_formation_deleteMedia'),fileDeleted))
             progressionContainer.remove()
            progressionLabel.html(
                '<div class="text-center">' +
                '   <h1 class="text-success"><i class="fa fa-circle-check"></i></h1>     ' +
                '   <strong>Formation modifié avec succès</strong> ' +
                '</div>');
            setTimeout(function() {
                progressionLabel.html('<strong>Rafraichissement de la page ...</strong>')
                setTimeout(function() {
                    location.reload();
                },1000)
            },1000)
        })
    })


});

async function saveData(videoId = '')
{
    let documentsData = [];
    let audiosData = [];
    // préparation du formulaire, fichiers Documents et Audios
    let fileDocuments = new FormData();
    let fileAudios = new FormData();
    let formData = new FormData($('form[name="formation"]')[0])
    $('#formation-document').find('input[type="file"]').each(function() {
        fileDocuments.append('documents[]', this.files[0]);
        const document = {
            name : this.files[0].name,
            mimeType: this.files[0].type,
            type: 'document'
        };
        documentsData.push(document);
    });
    $('#formation-audio').find('input[type="file"]').each(function() {
        fileAudios.append('audios[]', this.files[0]);
        const audio = {
            name : this.files[0].name,
            mimeType: this.files[0].type,
            type:'audio'
        };
        audiosData.push(audio);
    });
    const img_loader = $('<img src="'+circleImage3+'" />');
    progressionContainer.replaceWith(img_loader);
    progressionContainer = $(img_loader)
    progressionLabel.html('<strong>Téléchargement des documents en cours ...</strong>');
    // envoie des fichiers Documents
    const responseDocuments = (await axios.post(Routing.generate('coach_formation_uploadDocument'), fileDocuments, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })).data;
    if(!responseDocuments.error) {
        responseDocuments.files.forEach(function(e, i) {
            documentsData[i].slug = e;
        });
    }
    progressionLabel.html('<strong>Téléchargement des audios en cours ...</strong>')
    // envoie des fichiers audios
    const responseAudios = (await axios.post(Routing.generate('coach_formation_uploadAudio'), fileAudios, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })).data;
    if(!responseAudios.error) {
        responseAudios.files.forEach(function(e, i) {
            audiosData[i].slug = e;
        });
    }
    progressionLabel.html('<strong>Finalisation ...</strong>');
    // récuperation de tout les médias importé, qu'importe que ce soit un document ou un fichier audio
    const mediasData = documentsData.concat(audiosData);
    // console.log(mediasData);
    formData.append('mediasData', JSON.stringify(mediasData));
    formData.append('video_id', videoId);
    (await axios.post($('#formation, #formation-fiche').attr('action'),formData)).data;
}

let calc,progressionContainer, calcChild,progression,progressionLabel = null;
function progressionBar(pourcentage)
{
    if(calc == null) {
        calc = $('<div />', {
            class: 'w-100 h-100 position-absolute top-0 start-0 d-flex',
            style: 'background: rgba(255,255,255,0.7)'
        });

        calcChild = $('<div />', {
            class: 'm-auto w-100 text-center'
        });

        progressionContainer = $('<div />', {
            class:'progress w-50 mx-auto mb-2 shadow-sm'
        });

        progression = $('<div />', {
            class:'progress-bar progress-bar-striped bg-primary',
            role:'progressbar'
        });
        progressionLabel = $('<div />', {
            class:'text-center'
        }).html('<strong>Téléchargement de la video en cours ...</strong>');
        progression.html(pourcentage);
        progressionContainer.html(progression);
        calcChild.html(progressionContainer);
        calcChild.append(progressionLabel)
        calc.html(calcChild);

        $('#form-formation').append(calc)
    } else {
        progression.html(pourcentage+'%');
        progression.css({
            width: pourcentage+'%'
        });

        progression.attr('aria-valuenow', pourcentage)
    }
}

function validationFormulaire(callback)
{
    $('#formation, #formation-fiche').validate({
        // in 'rules' user have to specify all the constraints for respective fields
        rules : {
            'formation[titre]' : "required",
            'formation[description]' : "required",
            'formation[description_deblocage]' : "required",
            'formation[contenu]' : "required",
        },
        // in 'messages' user have to specify message as per rules
        messages : {
            'formation[titre]' : "<i class='fa fa-warning'></i> Veuillez entrer une titre",
            'formation[description]' : "<i class='fa fa-warning'></i> La description est obligatoire",
            'formation[description_deblocage]' : "<i class='fa fa-warning'></i> Las description pour le déblocage est obligatoire",
            'formation[contenu]' : '<i class=\'fa fa-warning\'></i> Veuillez entrer le contenu de la formation'
        },
        submitHandler: function() {

            if($('#inputVideo').length === 0) {
                const alert = '<div class="alert alert-danger my-2" role="alert">\n' +
                    '  La vidéo est obligatoire\n' +
                    '</div>';
                $('#formation').prepend(alert);

            } else {
                callback();
            }
        }
    });
    $('#formation, #formation-fiche').submit();
}
(function(i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function() {
        (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date();
    a = s.createElement(o),
        m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m)
})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');
ga('create', 'UA-57984417-1', 'auto');
ga('send', 'pageview');
