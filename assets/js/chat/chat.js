import {loaderOff, loaderOn} from "../helpers/Loader";
import {sendMessage} from "./chatSenderRequest";
import {ConversationBaseComponent} from "./components/ConversationBaseComponent";
require('./chat_new_one')
require('./chat_menu')
require('./chatMercureTraitement')
require('./chat_canal_instance')
require('./chatCreateCanal')
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
            $('.chat-list-group-messages').append(conversationBaseComponent.getMessage(message))
            inputText.val('');
            bodyMessage[0].scrollTop = bodyMessage[0].scrollHeight;
            loaderOff(bodyMessage[0]);
            if(emptyMessage.length>0) {
                emptyMessage.remove();
            }
        }

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
});