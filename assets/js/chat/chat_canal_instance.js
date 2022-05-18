import {ConversationComponent} from "./components/ConversationComponent";
import {showMessageInstance, updateMenu} from "./helpers/chat_helpers"
import {seeCanal} from "./chatSenderRequest";

$(document).ready(function() {
    const conversationComponent = new ConversationComponent();
    // lorsqu'on choisi un canal
    $(this).on('click', '.chat-choose-canal', async function(e) {
        e.preventDefault();
        e.stopPropagation();
        const canal = JSON.parse(decodeURIComponent($(this).attr('data-canal')));
        if($('.chat-canal-instance[data-id="'+canal.id+'"]').length === 0){
            showMessageInstance(canal).then(function(){});
            // on envoie un vu seulement si le canal en questin n'est pas encore vu
            if($('[data-canal-menu-id="'+canal.id+'"]').find('.chat-not-seen').length > 0) {
                await seeCanal(canal.id);
            }

            await updateMenu(canal);
        }
    });

    $(this).on('click', '.chat-canal-instance',async function(e) {
        e.preventDefault();
        if($(this).find('.highlight-canal').length > 0) {
            conversationComponent.removeHighlight(this);
            await seeCanal($(this).attr('data-id'));
            const menuItem = $('.list-group-item')
            menuItem.removeClass('bg-grey-1')
            menuItem.find('.chat-not-seen').remove();
        }
    })
});