import {loaderOff, loaderOn} from "../helpers/Loader";
import {getMessageByCode} from "./chatSenderRequest";
import {ConversationComponent} from "./components/ConversationComponent";

$(document).ready(function() {
    const conversationComponent = new ConversationComponent();
    // lorsqu'on choisi un canal
    $(this).on('click', '.chat-choose-canal',async  function(e) {
        e.preventDefault();
        const canal = JSON.parse(decodeURIComponent($(this).attr('data-canal')))
        $('.chat-canal-instance').each(function() {
            $(this).remove();
        })
        $('body').append(conversationComponent.getConversationContainer(canal));
        const chat_instance = $('#canal-'+canal.id);
        const chat_instance_body = $(chat_instance).find('.card-body');
        loaderOn(chat_instance_body[0]);
        const messages = await getMessageByCode(canal.code);
        // charger les messages
        chat_instance_body.html(conversationComponent.getMessages(messages));
        chat_instance_body[0].scrollTop = chat_instance_body[0].scrollHeight;
        loaderOff(chat_instance_body[0]);
    })
});