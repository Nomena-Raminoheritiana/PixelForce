import logoGroup from "../../../images/users.jpg";

export class MenuComponent {

    // debut liste user coté menu flottant

     getSingleCanal(canalsMessage)
    {
        let template = '';
        if(canalsMessage.length > 0) {
            const thisObj = this;
            canalsMessage.forEach(function(canal) {
                template += thisObj.getSingleCanalItem(canal);
            });
        } else {
            return this.getEmptySingleCanalMessage();
        }

        return '<ul class="list-group list-group-flush ">\n' +
            template +
            '</ul>';
    }

   getSingleCanalItem(canalMessage)
    {
        const canalStringify = encodeURIComponent(JSON.stringify(canalMessage));
        const lastMessage = canalMessage.lastMessage ? canalMessage.lastMessage.textes.slice(0, 80) : 'Commencer votre première conversation...';
        const seenClass = !canalMessage.isSeen ? 'bg-grey-1':'';
        const eyeSlashSection = !canalMessage.isSeen ?
            ' <div class="col-2 text-danger chat-not-seen">' +
            '        <i class="fa-solid fa-eye-slash"></i>'+
            ' </div>' : '';
        const lastMessageClass = !canalMessage.isSeen? 'col-7' : 'col-9';
        let component=
            '<li class="list-group-item chat-choose-canal '+seenClass+' pb-0 ps-3" data-canal-menu-id="'+canalMessage.id+'" data-canal="'+canalStringify+'" data-search="'+canalMessage.nom+'">\n' +
            '     <div class="row">\n' +
            '         <div class="col-3">\n' +
            '             <img src="https://github.com/mdo.png" alt="hugenerd" width="50" height="50" class="rounded-circle">\n' +
            '          </div>\n' +
            '          <div class="'+lastMessageClass+' ps-2">\n' +
            '              <span>'+canalMessage.nom+'</span><br>\n' +
            '              <p class="text-muted fs-12 line-height-13 pb-3 mb-0 border-bottom">\n' +
            '              '+lastMessage+
            '              </p>\n' +
            '          </div>\n' +
                       eyeSlashSection+
            '     </div>\n'
            '</li>';

        return component;
    }

    getEmptySingleCanalMessage()
    {
        return '<div class="text-center text-muted">\n' +
            '   <i class="fa-solid fa-eye-dropper-empty"></i> Aucune conversation disponible '
        '</div>';
    }

   //  debut liste groupe canal coté menu
    getGroupsCanal(canalsMessage)
    {
        let template = '';
        if(canalsMessage.length > 0) {
            const thisObj = this
            canalsMessage.forEach(function(canal) {
                template += thisObj.getGroupsCanalItem(canal);
            });
        } else {
            return this.getEmptyGroupsCanalMessage();
        }

        return '<ul class="list-group list-group-flush chat-list-groupCanal px-0">\n' +
            template +
            '</ul>';
    }

    getGroupsCanalItem(canalMessage)
    {
        let lastMessage = canalMessage.lastMessage != null ? canalMessage.lastMessage.textes.slice(0, 80) : 'Envoyer votre premier message';
        const canalStringify = encodeURIComponent(JSON.stringify(canalMessage));
        return '<li class="list-group-item chat-choose-canal  pb-0 ps-3" data-canal="' + canalStringify + '" data-search="' + canalMessage.nom + '">\n' +
            '     <div class="row">\n' +
            '         <div class="col-3">\n' +
            '             <img src="' + logoGroup + '" alt="hugenerd" width="50" height="50" class="rounded-circle">\n' +
            '          </div>\n' +
            '          <div class="col-9 ps-2 border-bottom">\n' +
            '              <span>' + canalMessage.nom + '</span><br>\n' +
            '              <p class="text-muted fs-12 line-height-13 pb-3 mb-0 ">\n' +
            '              ' + lastMessage +
            '              </p>\n' +
            '             <div class="text-end pb-3 chat-groupe-action"> \n' +
            '                <a href="#" class="chat-add-users text-success" data-canal-id="'+canalMessage.id+'"><i class="fa-solid fa-user-plus"></i></a>\n' +
            '                <a href="#" class="chat-remove-user text-danger ms-2" data-canal-id="'+canalMessage.id+'"><i class="fa-solid fa-right-from-bracket"></i></a>\n' +
            '             </div>'+
            '          </div>\n' +
            '     </div>\n' +
            '</li>';
    }

    getEmptyGroupsCanalMessage()
    {
        return '<div class="text-center text-muted py-4">\n' +
            '   <i class="fa-solid fa-eye-dropper-empty"></i> Aucun groupe  '
        '</div>';
    }
}