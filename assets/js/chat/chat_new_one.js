import {new_chat_component, chatHeaderUserInfos_component} from "./components/chat_new_conversation_component";
import {loaderOff, loaderOn} from "../helpers/Loader";
import {findDestinataire, getMessageByCode} from "./chatSenderRequest";
import {chat_listUser_component} from "./components/chat_listUser_component";
import {chat_messages_component} from "./components/chat_component";

$(document).ready(function() {
    // nouveau message
    $(this).on('click', '.chat-btn-newOne', function(e) {
        e.preventDefault();
        $('.chat-float-newOne').each(function() {
            $(this).remove();
        })
        $('body').append(new_chat_component())
    });

    // recherche d'un utilisateur sur la section nouveau message
    $(this).on('input','#search-user', async function(e) {
        e.preventDefault();
        const bodyMessage = $('.chat-float-newOne>.card-body')
        loaderOn(bodyMessage[0]);
        const users = await findDestinataire($(this).val());
        const template = chat_listUser_component(users);
        bodyMessage.html(template);
        loaderOff(bodyMessage[0]);
    });

    // choix d'un utilisateur pour ouvrir une connexion
    $(this).on('click', '.chat-choose-user', async function(e) {
        e.preventDefault();
        const bodyMessage = $('.chat-float-newOne>.card-body')
        const subHeader = $('.chat-float-newOne>.card-sub-header')
        const user = JSON.parse(decodeURIComponent($(this).attr('data-user')))
        bodyMessage.html('');
        subHeader.html(chatHeaderUserInfos_component(user))
        loaderOn(bodyMessage[0]);
        const messages = await getMessageByCode(user.chatCode);
        // charger les messages
        bodyMessage.html(chat_messages_component(messages));

        $('.chat-btn-send').attr('data-code', user.chatCode);
        loaderOff(bodyMessage[0])
    })

});