export class ConversationBaseComponent {
    getEmptyMessages()
    {
        return '<div class="text-center mt-4 chat-empty-message">' +
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
        const currentUserId = parseInt($('#current-user-id').text());
        let imgs = '';
        if(message.files !=null && message.files.length>0) {
            message.files.forEach(function(url) {
               imgs += '<div class="pb-2 pt-2 mt-2">' +
                            '<img src="'+url+'" alt="le fichier ne peut être charger" class="chat-image" />'+
                       '</div>';
            })
        }
        let avatar = '/user/avatar/'+message.user.id;
        let onerror = 'onerror="this.onerror=null; this.src=\'/assets/vuexy/images/portrait/small/avatar-s-11.jpg\'"'
        if(currentUserId !== message.user.id) {
            return '<li class="list-group-item  pb-2 ps-3 pe-5" data-id-user="'+message.user.id+'">\n' +
                '                <div class="row">\n' +
                '                    <div class="col-2 d-flex">\n' +
                '                        <img src="'+avatar+'" '+onerror+' alt="hugenerd" width="40" height="40" class="rounded-circle my-auto">\n' +
                '                    </div>\n' +
                '                    <div class="col-10 ps-2 rounded-3 bg-light-gray">\n' +
                '                        <span class="fw-bold line-height-13 fs-13">'+message.user.nom+' '+message.user.prenom+'</span><br>\n' +
                '                        <span class="p-0 line-height-13 text-muted fs-11 border-bottom pb-2">Envoyer '+message.renduDateCreationMessage+'</span>\n' +
                imgs+
                '                        <p class=" fs-14 line-height-17 mt-2 mb-0 pt-2 pb-2 ">\n' +
                message.textes+'\n'+
                '                     </p>\n' +
                '                    </div>\n' +
                '                </div>\n' +
                '            </li>\n';
        } else {
            return '<li class="list-group-item ps-5  pb-2 text-end " data-id-user="'+message.user.id+'">\n' +
                '                <div class="row">\n' +
                '                    <div class="col-10 ps-2 rounded-3 bg-light-primary">\n' +
                '                        <span class="fw-bold line-height-13 fs-13 ">'+message.user.nom+' '+message.user.prenom+'</span><br>\n' +
                '                        <span class="p-0 line-height-13 fs-11    border-bottom border-color-light-primary pb-2">Envoyer '+message.renduDateCreationMessage+'</span>\n' +
                imgs+
                '                        <p class=" fs-14 line-height-17 mb-0 mt-2  pt-2 pb-2 ">\n' +
                message.textes+'\n'+
                '                     </p>\n' +
                '                    </div>\n' +
                '                    <div class="col-2 d-flex">\n' +
                '                        <img src="'+avatar+'" '+onerror+' alt="hugenerd" width="40" height="40" class="rounded-circle my-auto">\n' +
                '                    </div>\n' +
                '                </div>\n' +
                '            </li>\n';
        }

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