import {loaderOff, loaderOn} from "../helpers/Loader";
import {notifyUserStopTyping, notifyUserTyping, sendMessage, uploadFile} from "./chatSenderRequest";
import {ConversationBaseComponent} from "./components/ConversationBaseComponent";
import {updateMenu} from "./helpers/chat_helpers";
import {readURL} from "../helpers/inputFilePreview";
require('./chat_new_one')
require('./chat_menu')
require('./chatMercureTraitement')
require('./chat_canal_instance')
require('./chatGroupCanal')
$(document).ready(function() {
    // envoyer un message
    $(this).on('click', '.chat-btn-send', async function(e) {
        e.preventDefault();
        const bodyMessage = $(this).closest('.chat-box-container').find('.card-body');
        const inputText = $('.chat-input-textes');
        const emptyMessage = $('.chat-empty-message');
        const conversationBaseComponent = new ConversationBaseComponent();
        loaderOn(bodyMessage[0]);
        // soit on a le canal, soit on a le code
        const code  = $(this).attr('data-code');
        const messageValue = inputText.val();
        if(messageValue.length > 0) {
            const message = await sendMessage(messageValue,code)
            conversationBaseComponent.clearVu(bodyMessage);
            $('.chat-list-group-messages').append(conversationBaseComponent.getMessage(message))
            inputText.val('');
            bodyMessage[0].scrollTop = bodyMessage[0].scrollHeight;
            loaderOff(bodyMessage[0]);
            if(emptyMessage.length>0) {
                emptyMessage.remove();
            }
            await updateMenu(message.canal)
        }

    });

    // upload file
    $(this).on('click','.chat-uploadImage', function(e) {
        e.preventDefault();
        const inputFile = $('<input />', {
            type: 'file',
            class:'d-none'
        })
        $(this).closest('.chat-box-container').find('.chat-files-preview').append(inputFile);
        inputFile.trigger('click');
    })

    $(this).on('change','.chat-box-container input[type="file"]',async function(e){
        e.preventDefault();
        const img = $('<img />', {
            class:'img-item'
        })
        $('.img-container').append(img);
        readURL($(this)[0], img[0]);
        loaderOn(img, false, {
            'loaderWidth' : '25px',
            'loaderHeight' : '25px'
        });
        const fileName = await uploadFile($(this)[0]);
        loaderOff(img);
        const container = $(this).closest('.chat-box-container');
        const fileNameInput = $('<input />', {
            type: 'hidden',
            name: 'files[]',
        });
        fileNameInput.val(fileName);
        container.append(fileNameInput);
    })

    // supprimer le conteneur du message
    $(this).on('click','.chat-btn-close', function(e) {
        e.preventDefault();
        $(this).closest('.chat-box-container').remove();
    })

    $(this).on('click','.chat-btn-minimise', function(e) {
        e.preventDefault();
        $(this).closest('.chat-box-container,.chat-float-menu').addClass('chat-minimised');
        $(this).find('i').removeClass('fa-angle-down').addClass('fa-angle-up');
        $(this).addClass('chat-btn-maximise').removeClass('chat-btn-minimise');
    })

    $(this).on('click','.chat-btn-maximise', function(e) {
        e.preventDefault();
        $(this).closest('.chat-box-container,.chat-float-menu').removeClass('chat-minimised');
        $(this).find('i').removeClass('fa-angle-up').addClass('fa-angle-down');
        $(this).addClass('chat-btn-minimise').removeClass('chat-btn-maximise');
    })

    $(this).on('focus', '.chat-input-textes',async function(e) {
        e.preventDefault();
        const canal_id = $(this).closest('.chat-box-container').attr('data-id');
        await notifyUserTyping(canal_id)
    });

    $(this).on('focusout','.chat-input-textes',async function(e) {
        e.preventDefault();
        const canal_id = $(this).closest('.chat-box-container').attr('data-id');
        await notifyUserStopTyping(canal_id)
    })
});
