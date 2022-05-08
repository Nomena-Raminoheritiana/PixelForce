export function empty_messages_component()
{
    return '<div class="text-center chat-empty-message">' +
                '<i class="fa-solid fa-eye-dropper-empty"></i> Aucun message disponible<br>' +
                '<small class="text-muted">Envoyer un message pour démarrer la discussion</small>'+
            '</div>'
}

export function  chat_messages_component(messages)
{
    let template = '';
    if(messages.length > 0) {
        messages.forEach(function(message) {
            template += chat_message_component(message)
        })
    } else {
        template += empty_messages_component();
    }
    return '<ul class="list-group list-group-flush chat-list-group-messages">\n' +
              template+
           '</ul>'

}

export function chat_message_component(message)
{
    return '<li class="list-group-item  pb-0 ps-3">\n' +
    '                <div class="row">\n' +
    '                    <div class="col-2">\n' +
    '                        <img src="https://github.com/mdo.png" alt="hugenerd" width="40" height="40" class="rounded-circle">\n' +
    '                    </div>\n' +
    '                    <div class="col-10 ps-2">\n' +
    '                        <span class="fw-bold line-height-13 fs-13">'+message.user.nom+' '+message.user.prenom+'</span><br>\n' +
    '                        <span class="p-0 line-height-13 text-muted fs-12 ">Envoyer le 13-12-2022 à 13h 30min</span>\n' +
    '                        <p class=" fs-14 line-height-17 mb-0 pt-2 pb-2 ">\n' +
                                 message.textes+'\n'+
     '                     </p>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </li>\n';
}