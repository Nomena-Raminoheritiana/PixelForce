// fonction pour lancer une instance liveVideo et de retourner l'id de l'appel
exports.launchLiveVideo = function(container, id, $options = {})
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


exports.generateCode = function() {
    return Array.apply(null, Array(30)).map(function() {
        let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        return possible[Math.floor(Math.random() * possible.length)];
    }).join('');
}

exports.arretJitsi = function()
{
    let iframe = $('#live_video').find('iframe')
    if(iframe.length > 0) {
        iframe.remove();
    }
}