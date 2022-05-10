import {loaderOff, loaderOn} from "../helpers/Loader";
import {findDestinataire, getMessageByCode} from "./chatSenderRequest";
import {NewConversationComponent} from "./components/NewConversationComponent";

$(document).ready(function() {
    const newConversationComponent = new NewConversationComponent();
    // nouveau message
    $(this).on('click', '.chat-btn-newOne', function(e) {
        e.preventDefault();
        $('.chat-float-newOne').each(function() {
            $(this).remove();
        })
        $('body').append(newConversationComponent.getConversationContainer())
    });

    // recherche d'un utilisateur sur la section nouveau message
    $(this).on('input','#search-user', async function(e) {
        e.preventDefault();
        const bodyMessage = $('.chat-float-newOne>.card-body')
        loaderOn(bodyMessage[0]);
        const users = await findDestinataire($(this).val());
        const template = newConversationComponent.getListUser(users);
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
        subHeader.html(newConversationComponent.getHeader(user))
        loaderOn(bodyMessage[0]);
        const messages = await getMessageByCode(user.chatCode);
        // charger les messages
        bodyMessage.html(newConversationComponent.getMessages(messages));

        $('.chat-btn-send').attr('data-code', user.chatCode);
        loaderOff(bodyMessage[0])
    })

});