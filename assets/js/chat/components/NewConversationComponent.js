import {Base64} from "../../helpers/base64";
import {ConversationBaseComponent} from "./ConversationBaseComponent";

export class NewConversationComponent extends ConversationBaseComponent{
    getHeader(user)
    {
        return '<div class="mt-3 ms-2">\n' +
            '    <span type="button" class="btn btn-primary fw-bold btn-sm position-relative">\n' +
            '         '+user.nom+' '+user.prenom+'\n' +
            '    <span class="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">\n' +
            '       <span class="visually-hidden">New alerts</span>\n' +
            '       </span>\n' +
            '    </span>\n'+
            '</div>'
    }
    getConversationContainer() {
        return '<div class="card shadow fs-14  chat-float-newOne chat-box-container mb-0 shadow-sm" style="width: 18rem;">\n' +
            '    <div class="card-header bg-princ w-100 py-3">\n' +
            '        <div class="row">\n' +
            '            <div class="col-8 d-flex">\n' +
            '                <div class="my-auto">\n' +
            '                    <b class="ms-2 ">Nouveau Message <i class="fa-brands fa-facebook-messenger"></i></b>\n' +
            '                </div>\n' +
            '            </div>\n' +
            '            <div class="col-4 text-end">\n' +
            '                <a href="#" class="text-white chat-btn-minimise me-2"><i class="fa-solid fa-angle-down"></i></a>\n' +
            '                <a href="#" class="text-white chat-btn-close"><i class="fa-solid fa-close"></i></a>\n' +
            '            </div>\n' +
            '        </div>\n' +
            '\n' +
            '    </div>\n' +
            '    <div class="card-sub-header">\n' +
            '        <div class="input-group">\n' +
            '            <input type="text" class="form-control  rounded-0 border-0 border-bottom py-3 fs-12" id="search-user" placeholder="Entrer le nom/e-mail du destinataire" aria-label="Recipient\'s username with two button addons">\n' +
            '        </div>\n' +
            '    </div>\n' +
            '    <div class="card-body px-0">\n' +
            '        <!-- zone de messages --> \n' +
            '\n' +
            '    </div>\n' +
            '    <div class="card-footer p-0">\n' +
            '        <div class="py-3 ps-2">\n' +
            '            <!-- <a href="#" class="text-danger pe-2"><i class="fa-solid fa-video"></i></a> -->\n' +
            '            <!-- <a href="#" class="text-secondary"><i class="fa-solid fa-image"></i></a> -->\n' +
            '        </div>\n' +
            '        <div class="input-group bg-white">\n' +
            '            <input type="text" class="form-control border-0 border-top  fs-12 rounded-0 py-3 chat-input-textes" placeholder="Entrer votre message ..." aria-label="Recipient\'s username with two button addons">\n' +
            '            <button class="btn btn-outline-secondary text-primary border-0 border-top chat-btn-send" type="button"><i class="fa-solid fa-paper-plane"></i></button>\n' +
            '        </div>\n' +
            '\n' +
            '    </div>\n' +
            '</div>'
    }

    getListUser(users = [])
    {
        let template = '';
        if(users.length > 0) {
            const that = this;
            users.forEach(function(user) {
                template += that.getListUserItem(user);
            });
        } else {
            return this.getEmptyListUserMessage();
        }

        return '<ul class="list-group list-group-flush ">\n' +
            template +
            '</ul>';
    }

    getListUserItem(user)
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

    getEmptyListUserMessage()
    {
        return '<div class="text-center">\n' +
            '   <i class="fa-solid fa-eye-dropper-empty"></i> Aucun résultat '
        '</div>';
    }

}