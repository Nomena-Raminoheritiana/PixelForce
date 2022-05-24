import {ConversationComponent} from "../components/ConversationComponent";
import {loaderOff, loaderOn} from "../../helpers/Loader";
import {getGroupeCanal, getMessageByCode, getSingleCanal} from "../chatSenderRequest";
import {MenuComponent} from "../components/MenuComponent";
import {NewConversationComponent} from "../components/NewConversationComponent";

export async function showMessageInstance(canal=null)
{
    const conversationComponent = canal !=null ? new ConversationComponent() : new NewConversationComponent();
    const chatBoxContainer = $('.chat-box-container');
    if(chatBoxContainer.length === 3) {
        chatBoxContainer.first().remove()
    }
    let messageConversationContainer = $('.chat-conversations-container')
    if(messageConversationContainer.length === 0) {
         messageConversationContainer = $('<div />', {
            class: 'chat-conversations-container d-flex'
        });
         $('body').append(messageConversationContainer)
    }

    $(messageConversationContainer).append(conversationComponent.getConversationContainer(canal));
    if(canal != null) {
        const chat_instance = $('#canal-'+canal.id);
        const chat_instance_body = $(chat_instance).find('.card-body');
        loaderOn(chat_instance_body[0]);
        const messages = await getMessageByCode(canal.code);
        // charger les messages
        chat_instance_body.prepend(conversationComponent.getMessages(messages));
        chat_instance_body[0].scrollTop = chat_instance_body[0].scrollHeight;
        loaderOff(chat_instance_body[0]);
        return chat_instance;
    }

    return null;
}

export async function updateMenu(canal)
{
    const menuComponent = new MenuComponent();
    if(canal.isGroup) {
        getGroupeCanal().then(function(groupeCanals) {
            $('.chat-groupe-canal').html(menuComponent.getGroupsCanal(groupeCanals))
        })
    } else {
        getSingleCanal().then(function(singleCanals) {
            $('.chat-single-canal').html(menuComponent.getSingleCanal(singleCanals))
        });
    }
}