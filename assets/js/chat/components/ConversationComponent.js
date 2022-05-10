import {Base64} from "../../helpers/base64";
import {ConversationBaseComponent} from "./ConversationBaseComponent";

export class ConversationComponent extends ConversationBaseComponent {
    getConversationContainer(canal) {
        let inputCacheUser = '';
        canal.membres.forEach(function(user){
            inputCacheUser+='<input type="hidden" name="users[]" value="'+Base64.encode(user.id)+'" />\n';
        });

        return '<div class="card shadow fs-14  chat-canal-instance chat-box-container shadow-sm position-absolute bottom-0 " id="canal-'+canal.id+'" style="width: 18rem;">\n' +
            '    <div class="card-header py-3">\n' +
            '        <div class="row">\n' +
            '            <div class="col-8 d-flex">\n' +
            '                <div class="my-auto">\n' +
            '                    <b class="ms-2 ">'+canal.nom+' <i class="fa-brands fa-facebook-messenger"></i></b>\n' +
            '                </div>\n' +
            '            </div>\n' +
            '            <div class="col-4 text-end">\n' +
            '                <a href="#" class="text-secondary chat-btn-minimise me-2"><i class="fa-solid fa-angle-down"></i></a>\n' +
            '                <a href="#" class="text-secondary chat-btn-close"><i class="fa-solid fa-close"></i></a>\n' +
            '            </div>\n' +
            '        </div>\n' +
            '\n' +
            '    </div>\n' +
            '    <div class="card-body px-0">\n' +
            '        <!-- zone de messages --> \n' +
            '\n' +
            '    </div>\n' +
            '    <div class="card-footer p-0">\n' +
            '        <div class="py-3 ps-2">\n' +
            '           <span class="users">' +
            inputCacheUser+
            '                <a href="#" class="text-danger speed-liveVideo-call pe-2"><i class="fa-solid fa-video"></i></a>' +
            '           </span> ' +
            '            <!-- <a href="#" class="text-secondary"><i class="fa-solid fa-image"></i></a> -->\n' +
            '        </div>\n' +
            '        <div class="input-group bg-white">\n' +
            '            <input type="text" class="form-control border-0 border-top  fs-12 rounded-0 py-3 chat-input-textes" placeholder="Entrer votre message ..." aria-label="Recipient\'s username with two button addons">\n' +
            '            <button class="btn btn-outline-secondary text-primary border-0 border-top chat-btn-send" data-code="'+canal.code+'" type="button"><i class="fa-solid fa-paper-plane"></i></button>\n' +
            '        </div>\n' +
            '\n' +
            '    </div>\n' +
            '</div>'
    }
}