import {launchLiveVideo} from './liveFunctions'
$(document).ready(function() {
    // lorsque l'on coche tout le monde dans la liste des agents
    $(this).on('change', '[name="all-agents"]', function(e) {
        if(this.checked) {
            // on coche tout le monde
            $('.agentChecker input[type="checkbox"]').each(function() {
                $(this).prop('checked', true);
            })
        } else {
            // on décoche tout le monde
            $('.agentChecker input[type="checkbox"]').each(function() {
                $(this).prop('checked', false);
            })
        }
    });

    // si la page lancer live est appelé
    if($('.video-live-contents').length >0) {
        launchLiveVideo($('.video-live-contents')[0], $('.video-live-contents').attr('data-code'),{
            width:'100%',
            height:'100%',
            onload: function() {
                $('.loading-live').remove();
                clearInterval(interval);
            }
        })
    }

})
