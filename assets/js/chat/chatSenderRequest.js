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

export async function createGroupCanal(nom, users_id)
{
    const bodyRequest = new URLSearchParams();
    bodyRequest.append('nom', nom);
    users_id.forEach(function(id) {
        bodyRequest.append('users[]', id);
    });

    return (await axios.post(Routing.generate('chat_createGroupCanal'), bodyRequest)).data
}

export async function seeCanal(canal_id)
{
    return (await axios.get(Routing.generate('chat_vuMessage', {id:canal_id}))).data;
}

export async function notifyUserTyping(canal_id)
{
    return (await axios.get(Routing.generate('chat_notifyUserTyping', {id:canal_id}))).data;
}

export async function notifyUserStopTyping(canal_id)
{
    return (await axios.get(Routing.generate('chat_notifyUserStopTyping', {id:canal_id}))).data;
}

export async function chat_groupCanal_removeUser(canal_id)
{
    return (await axios.delete(Routing.generate('chat_groupCanal_removeUser', {id:canal_id, includeMe:true}))).data;
}

export async function chat_groupCanal_addUser(canal_id, users_id) {
    const bodyRequest = new URLSearchParams();
    users_id.forEach(function(id) {
        bodyRequest.append('users[]', id);
    });
    return (await axios.post(Routing.generate('chat_groupCanal_addUser', {id:canal_id}), bodyRequest)).data
}

export async function uploadFile(fileUpload) {
    let formData = new FormData();
    formData.append("file", fileUpload.files[0]);
    await fetch('/upload.php', {
        method: "POST",
        body: formData
    });

    return true;
}
