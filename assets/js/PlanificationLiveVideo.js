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
    })
})
