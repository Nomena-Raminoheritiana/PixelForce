import {Base64} from "../../helpers/base64";
import {ConversationBaseComponent} from "./ConversationBaseComponent";

export class ConversationComponent extends ConversationBaseComponent {
    getConversationContainer(canal) {
        let inputCacheUser = '';
        canal.membres.forEach(function(user){
            inputCacheUser+='<input type="hidden" name="users[]" value="'+Base64.encode(user.id)+'" />\n';
        });

        // début initialisation du vu lorsque l'instance est chargé
        // si le canal est un singleCanal
        let vuTemplate = '';
        if(!canal.isGroup && canal.vus.length === 2) {
            vuTemplate = this.getVuTemplate()[0].outerHTML;
        }

        const isGroup = canal.isGroup ? 'true': 'false';
        return '<div class="card shadow fs-14  chat-canal-instance chat-box-container mb-0 shadow-sm  " data-isGroup="'+isGroup+'" data-id="'+canal.id+'" id="canal-'+canal.id+'" style="width: 18rem;">\n' +
            '    <div class="card-header bg-princ text-white w-100 py-3">\n' +
            '        <div class="row">\n' +
            '            <div class="col-8 d-flex">\n' +
            '                <div class="my-auto">\n' +
            '                    <b class="ms-2 ">'+canal.nom+' <i class="fa-brands fa-facebook-messenger"></i></b>\n' +
            '                </div>\n' +
            '            </div>\n' +
            '            <div class="col-4 text-end">\n' +
            '                <a href="#" class="text-white chat-btn-minimise me-2"><i class="fa-solid fa-angle-down"></i></a>\n' +
            '                <a href="#" class="text-white chat-btn-close"><i class="fa-solid fa-close"></i></a>\n' +
            '            </div>\n' +
            '        </div>\n' +
            '\n' +
            '    </div>\n' +
            '    <div class="card-body px-0">\n' +
            '        <!-- zone de messages --> \n' +
            '         '+vuTemplate+'\n' +
            '    </div>\n' +
            '    <div class="card-footer p-0">\n' +
            '        <div class="chat-files-preview"></div>'+
            '        <div class="py-3 ps-2">\n' +
            '           <span class="users">' +
            inputCacheUser+
            '                <a href="#" class="text-danger speed-liveVideo-call pe-2"><i class="fa-solid fa-video"></i></a>' +
            '           </span> ' +
            '            <a href="#" class="text-secondary chat-uploadImage"><i class="fa-solid fa-image"></i></a>\n' +
            '        </div>\n' +
            '        <div class="input-group bg-white">\n' +
            '            <input type="text" class="form-control border-0 border-top  fs-12 rounded-0 py-3 chat-input-textes" placeholder="Entrer votre message ..." aria-label="Recipient\'s username with two button addons">\n' +
            '            <button class="btn btn-outline-secondary text-primary border-0 border-top chat-btn-send" data-code="'+canal.code+'" type="button"><i class="fa-solid fa-paper-plane"></i></button>\n' +
            '        </div>\n' +
            '\n' +
            '    </div>\n' +
            '</div>'
    }

    removeHighlight($currentObject)
    {
        $($currentObject).find('.card-header').removeClass('highlight-canal  bg-success text-white').addClass('bg-princ')
    }

    addHighligh($currentObject)
    {
        $($currentObject).find('.card-header').addClass('highlight-canal bg-success text-white').removeClass('bg-princ')
    }

    getVuTemplate()
    {
        const template = $('<div />', {
            class:'canal-vu-container text-end pe-3'
        });
        const vuTemplate = '<span class="fs-11 text-muted"><i class="fa-solid fa-eye"></i> <span>vu</span></span>'
        template.html(vuTemplate);
        return template;
    }

    addVu(conversationContainer)
    {
        // si un vu existe déjà pas la peine de le rendre à nouveau
        let canalVuContainer = $(conversationContainer).find('.canal-vu-container');
        if(canalVuContainer.length === 0) {
            $(conversationContainer).find('.card-body').append(this.getVuTemplate());
        }

    }


    addUserTyping(conversationContainer, user)
    {
        // si un template existe déjà pas la peine de le rendre à nouveau
        let canalUserTyping = $(conversationContainer).find('.canal-userTyping');
        if(canalUserTyping.length === 0) {
            const template = $('<div />', {
                class:'canal-userTyping py-2 px-3  text-muted fs-11 text-end'
            });
            const vuTemplate = '<span class="fw-bold">'+user.prenom+' '+user.nom+'</span> est en train d\'écrire...';
            template.html(vuTemplate);
            $(conversationContainer).find('.card-body').append(template);
        }



    }

    removeUserTyping(conversationContainer) {
        $(conversationContainer).find('.canal-userTyping').remove();
    }
}