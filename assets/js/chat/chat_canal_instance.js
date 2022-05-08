import {chat_canal_component} from "./components/chat_new_conversation_component";
import {loaderOff, loaderOn} from "../helpers/Loader";
import {getMessageByCode} from "./chatSenderRequest";
import {chat_messages_component} from "./components/chat_component";

$(document).ready(function() {
    // lorsqu'on choisi un canal
    $(this).on('click', '.chat-choose-canal',async  function(e) {
        e.preventDefault();
        const canal = JSON.parse(decodeURIComponent($(this).attr('data-canal')))
        $('.chat-canal-instance').each(function() {
            $(this).remove();
        })
        $('body').append(chat_canal_component(canal));
        const chat_instance = $('#canal-'+canal.id);
        const chat_instance_body = $(chat_instance).find('.card-body');
        loaderOn(chat_instance_body[0]);
        const messages = await getMessageByCode(canal.code);
        // charger les messages
        chat_instance_body.html(chat_messages_component(messages));
        chat_instance_body[0].scrollTop = chat_instance_body[0].scrollHeight;
        loaderOff(chat_instance_body[0]);
    })
});