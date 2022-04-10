import axios from 'axios';
import VimeoUpload from './modules/vimeo-upload'
/**
 * capture d'évènement lors du choix de video (via drop ou boutton)
 */
$(document).ready(function() {

    $(this).on('click', '#launch_import', function(e) {
        e.preventDefault();
        handleFileSelect($('#video_formation_fichier'));
    });
});
/**
 * fonction appeler lorsque l'on dépose ou choisisse un fichier via le bouton addFile.
 * Pour chaque fichier, uploader le contenu et affiche le resultat quand c'est terminé.
 */
function handleFileSelect($inputFileSelector) {
    let files = $($inputFileSelector).get(0).files;
    let results = $('#results')[0];

    /* Clear the results div */
    while (results.hasChildNodes()) results.removeChild(results.firstChild)

    /* Rest the progress bar and show it */
    updateProgress(0)
    $('.progress-import-video').removeClass('d-none');

    /* Instantiate Vimeo Uploader */
    (new VimeoUpload({
        name: $('#video_formation_titre').val(),
        description: $('#video_formation_description').val(),
        private: false,
        file: files[0],
        token: process.env.VIMEO_ACCESS_TOKEN,
        upgrade_to_1080: false,
        onError: function(data) {
            console.log(data)
            showMessage('<strong>Erreur</strong>: ' + JSON.parse(data).error, 'danger')
        },
        onProgress: function(data) {
            updateProgress(data.loaded / data.total)
        },
        onComplete: async function(videoId, index) {
            let url = '/videos/' + videoId;

            if (index > -1) {
                /* Le méta data contient tout les détails du video uploadé ito n lien : https://developer.vimeo.com/api/endpoints/videos#/{video_id} */
                url = this.metadata[index].link
                let pretty = JSON.stringify(this.metadata[index], null, 2)
                console.log(pretty) /* echo server data */

            }
            await pushData(videoId);
            location.reload();
        }
    })).upload();

    /* local function: show a user message */
    function showMessage(html, type) {
        /* hide progress bar */
        $('.progress-import-video').addClass('d-none');

        /* display alert message */
        let element = document.createElement('div')
        element.setAttribute('class', 'alert alert-' + (type || 'success'))
        element.innerHTML = html
        results.appendChild(element)
    }
}

async function pushData(videoId)
{
    // appel de l'interlocuteur
    const params = new URLSearchParams();
    params.append('videoId', videoId);
    params.append('titre', $('#video_formation_titre').val());
    params.append('description', $('#video_formation_description').val());
    return (await axios.post(Routing.generate("formationVideo_add"), params)).data;
}


/**
 * Dragover handler to set the drop effect.
 */
function handleDragOver(evt) {
    evt.stopPropagation()
    evt.preventDefault()
    evt.dataTransfer.dropEffect = 'copy'
}

/**
 * Updat progress bar.
 */
function updateProgress(progress) {
    progress = Math.floor(progress * 100)
    var element =  $('.progress-import-video .progress-bar')[0];
    element.setAttribute('style', 'width:' + progress + '%')
    element.innerHTML = '&nbsp;' + progress + '%'
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
