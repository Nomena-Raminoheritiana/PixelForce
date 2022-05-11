import {ConversationComponent} from "./components/ConversationComponent";
import {showMessageInstance} from "./helpers/chat_helpers";

$(document).ready(function() {
    // detecter s'il y a un message
    const urlDetectionAppel = JSON.parse(document.getElementById("chat-newMessage-topic").textContent);
    const eventDetectionAppelSource = new EventSource(urlDetectionAppel);
    eventDetectionAppelSource.onmessage = async event => {
        const conversationComponent = new ConversationComponent();
        const message = JSON.parse(event.data);
        console.log(message);
        const canal = message.canal;
        const user = message.user;
        // si une instance est ouverte
        const jCanal = $('#canal-'+canal.id);
        jCanal.find('.chat-list-group-messages').append(conversationComponent.getMessage(message));
        // si l'instance n'est pas ouverte
        if(jCanal.length === 0 ) {
            await showMessageInstance(canal);
        }
        // s'il n'existe pas dans le menu

    }
});