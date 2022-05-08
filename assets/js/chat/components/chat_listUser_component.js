import logoGroup from '../../../images/users.jpg'
export function chat_listUser_component(users = [])
{
    let template = '';
    if(users.length > 0) {
        users.forEach(function(user) {
            template += chat_listUser_item_component(user);
        });
    } else {
       return chat_listUser_emptyItem_component();
    }

    return '<ul class="list-group list-group-flush ">\n' +
        template +
        '</ul>';
}

export function chat_listUser_item_component(user)
{
    const userStringified = encodeURIComponent(JSON.stringify(user));
    let component=
        '<li class="list-group-item chat-choose-user  pb-0 ps-3" id="chat-user-'+user.id+'" data-user="'+userStringified+'">\n' +
        '     <div class="row">\n' +
        '         <div class="col-3">\n' +
        '             <img src="https://github.com/mdo.png" alt="hugenerd" width="50" height="50" class="rounded-circle">\n' +
        '          </div>\n' +
        '          <div class="col-9 ps-2">\n' +
        '              <span>'+user.nom+' '+ user.prenom+'</span><br>\n' +
        '              <p class="text-muted fs-12 line-height-13 pb-3 mb-0 border-bottom">\n' +
        '              '+user.email+
        '              </p>\n' +
        '          </div>\n' +
        '     </div>\n'
        '</li>';

    return component;
}

export function chat_listUser_emptyItem_component()
{
    return '<div class="text-center">\n' +
            '   <i class="fa-solid fa-eye-dropper-empty"></i> Aucun résultat '
            '</div>';
}

// debut liste user coté menu flottant

export function chat_list_singleCanal_component(canalsMessage)
{
    let template = '';
    if(canalsMessage.length > 0) {
        canalsMessage.forEach(function(canal) {
            template += chat_list_singleCanal_item_component(canal);
        });
    } else {
        return chat_list_singleCanal_emptyItem_component();
    }

    return '<ul class="list-group list-group-flush ">\n' +
        template +
        '</ul>';
}

export function chat_list_singleCanal_item_component(canalMessage)
{
    const canalStringify = encodeURIComponent(JSON.stringify(canalMessage));
    let component=
        '<li class="list-group-item chat-choose-canal  pb-0 ps-3" data-canal="'+canalStringify+'" data-search="'+canalMessage.nom+'">\n' +
        '     <div class="row">\n' +
        '         <div class="col-3">\n' +
        '             <img src="https://github.com/mdo.png" alt="hugenerd" width="50" height="50" class="rounded-circle">\n' +
        '          </div>\n' +
        '          <div class="col-9 ps-2">\n' +
        '              <span>'+canalMessage.nom+'</span><br>\n' +
        '              <p class="text-muted fs-12 line-height-13 pb-3 mb-0 border-bottom">\n' +
        '              '+canalMessage.lastMessage.textes.slice(0, 80)+
        '              </p>\n' +
        '          </div>\n' +
        '     </div>\n'
        '</li>';

    return component;
}

export function chat_list_singleCanal_emptyItem_component()
{
    return '<div class="text-center text-muted">\n' +
        '   <i class="fa-solid fa-eye-dropper-empty"></i> Aucune conversation disponible '
    '</div>';
}

//  debut liste groupe canal coté menu
export function chat_list_groupeCanal_component(canalsMessage)
{
    let template = '';
    if(canalsMessage.length > 0) {
        canalsMessage.forEach(function(canal) {
            template += chat_list_groupeCanal_item_component(canal);
        });
    } else {
        return chat_list_groupeCanal_emptyItem_component();
    }

    return '<ul class="list-group list-group-flush px-0">\n' +
        template +
        '</ul>';
}

export function chat_list_groupeCanal_item_component(canalMessage)
{
    let lastMessage = canalMessage.lastMessage != null ? canalMessage.lastMessage.textes.slice(0, 80) : 'Envoyer votre premier message';
    const canalStringify = encodeURIComponent(JSON.stringify(canalMessage));
    let component=
        '<li class="list-group-item chat-choose-canal  pb-0 ps-3" data-canal="'+canalStringify+'" data-search="'+canalMessage.nom+'">\n' +
        '     <div class="row">\n' +
        '         <div class="col-3">\n' +
        '             <img src="'+logoGroup+'" alt="hugenerd" width="50" height="50" class="rounded-circle">\n' +
        '          </div>\n' +
        '          <div class="col-9 ps-2">\n' +
        '              <span>'+canalMessage.nom+'</span><br>\n' +
        '              <p class="text-muted fs-12 line-height-13 pb-3 mb-0 border-bottom">\n' +
        '              '+lastMessage+
        '              </p>\n' +
        '          </div>\n' +
        '     </div>\n'
    '</li>';

    return component;
}

export function chat_list_groupeCanal_emptyItem_component()
{
    return '<div class="text-center text-muted py-4">\n' +
        '   <i class="fa-solid fa-eye-dropper-empty"></i> Aucun groupe  '
    '</div>';
}