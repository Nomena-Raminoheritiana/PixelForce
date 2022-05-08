import axios from "axios";

export async function findDestinataire(finder) {
    if(finder.length > 1){
        return (await axios.get(Routing.generate('user_findDest', {finder: finder}))).data;
    }
    return [];
}

export async function getMessageByCode(code=null)
{
    if(code !== null) {
        return (await axios.get(Routing.generate('chat_getMessage_byCode', {code : code}))).data
    }

    return [];
}

export async function sendMessage(message, code) {
    // envoyer un message
    const bodyRequest = new URLSearchParams();
    bodyRequest.append('textes', message);
    return (await axios.post(
                Routing.generate('chat_addMessage', {code : code}),
                bodyRequest
        )).data;
}

export async function getSingleCanal()
{
  return (await axios.get(Routing.generate('chat_getCanalSingleMessage'))).data;
}

export async function getGroupeCanal()
{
    return (await axios.get(Routing.generate('chat_getCanalMessage'))).data;
}