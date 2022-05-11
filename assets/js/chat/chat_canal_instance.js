import {loaderOff, loaderOn} from "../helpers/Loader";
import {getMessageByCode} from "./chatSenderRequest";
import {ConversationComponent} from "./components/ConversationComponent";
import {showMessageInstance} from "./helpers/chat_helpers"

$(document).ready(function() {
    const conversationComponent = new ConversationComponent();
    // lorsqu'on choisi un canal
    $(this).on('click', '.chat-choose-canal',async  function(e) {
        e.preventDefault();
        const canal = JSON.parse(decodeURIComponent($(this).attr('data-canal')))
        $('.chat-canal-instance').each(function() {
            $(this).remove();
        })
        await showMessageInstance(canal);
    })
});