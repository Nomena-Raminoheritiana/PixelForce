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

        return '<ul class="list-group list-group-flush px-0">\n' +
            template +
            '</ul>';
    }

    getGroupsCanalItem(canalMessage)
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

    getEmptyGroupsCanalMessage()
    {
        return '<div class="text-center text-muted py-4">\n' +
            '   <i class="fa-solid fa-eye-dropper-empty"></i> Aucun groupe  '
        '</div>';
    }
}