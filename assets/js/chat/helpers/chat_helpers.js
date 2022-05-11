import {ConversationComponent} from "../components/ConversationComponent";
import {loaderOff, loaderOn} from "../../helpers/Loader";
import {getMessageByCode} from "../chatSenderRequest";

export async function showMessageInstance(canal)
{
    const conversationComponent = new ConversationComponent();
    $('body').append(conversationComponent.getConversationContainer(canal));
    const chat_instance = $('#canal-'+canal.id);
    const chat_instance_body = $(chat_instance).find('.card-body');
    loaderOn(chat_instance_body[0]);
    const messages = await getMessageByCode(canal.code);
    // charger les messages
    chat_instance_body.html(conversationComponent.getMessages(messages));
    chat_instance_body[0].scrollTop = chat_instance_body[0].scrollHeight;
    loaderOff(chat_instance_body[0]);
}