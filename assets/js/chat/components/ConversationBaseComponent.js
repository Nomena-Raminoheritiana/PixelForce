export class ConversationBaseComponent {
    getEmptyMessages()
    {
        return '<div class="text-center chat-empty-message">' +
            '<i class="fa-solid fa-eye-dropper-empty"></i> Aucun message disponible<br>' +
            '<small class="text-muted">Envoyer un message pour démarrer la discussion</small>'+
            '</div>'
    }

    getMessages(messages)
    {
        let template = '';
        if(messages.length > 0) {
            const that = this
            messages.forEach(function(message) {
                template += that.getMessage(message)
            })
        } else {
            template += this.getEmptyMessages();
        }
        return '<ul class="list-group list-group-flush chat-list-group-messages">\n' +
            template+
            '</ul>'

    }

    getMessage(message)
    {
        let imgs = '';
        if(message.files !=null && message.files.length>0) {
            message.files.forEach(function(url) {
               imgs += '<div class="pb-2 pt-2">' +
                            '<img src="'+url+'" alt="le fichier ne peut être charger" class="chat-image" />'
                       '</div>';
            })
        }
        console.log(message)
        return '<li class="list-group-item  pb-0 ps-3" data-id-user="'+message.user.id+'">\n' +
            '                <div class="row">\n' +
            '                    <div class="col-2">\n' +
            '                        <img src="https://github.com/mdo.png" alt="hugenerd" width="40" height="40" class="rounded-circle">\n' +
            '                    </div>\n' +
            '                    <div class="col-10 ps-2">\n' +
            '                        <span class="fw-bold line-height-13 fs-13">'+message.user.nom+' '+message.user.prenom+'</span><br>\n' +
            '                        <span class="p-0 line-height-13 text-muted fs-12 ">Envoyer '+message.renduDateCreationMessage+'</span>\n' +
                                     imgs+
            '                        <p class=" fs-14 line-height-17 mb-0 pt-2 pb-2 ">\n' +
            message.textes+'\n'+
            '                     </p>\n' +
            '                    </div>\n' +
            '                </div>\n' +
            '            </li>\n';
    }


    getMessageFileTemplate(message)
    {
        let filesTemplate


        return filesTemplate
    }

    clearVu(conversationContainer)
    {
        $(conversationContainer).find('.canal-vu-container').remove();
    }

    clearFile(conversationContainer) {
        $(conversationContainer).find('.chat-files-preview').html('');
    }
}