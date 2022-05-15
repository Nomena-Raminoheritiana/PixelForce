import {ConversationComponent} from "../components/ConversationComponent";
import {loaderOff, loaderOn} from "../../helpers/Loader";
import {getGroupeCanal, getMessageByCode, getSingleCanal} from "../chatSenderRequest";
import {MenuComponent} from "../components/MenuComponent";

export async function showMessageInstance(canal)
{
    const conversationComponent = new ConversationComponent();
    $('body').append(conversationComponent.getConversationContainer(canal));
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