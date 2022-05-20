export class CanalGroupsComponent {
    users=[];
    getModalAddUser(canal_id)
    {
        return '<!-- Modal -->\n' +
            '<div class="modal fade text-start chat-modal-addUsers chat-modal-container" id="chatModalAddUsers" data-canal-id="'+canal_id+'" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">\n' +
            '    <div class="modal-dialog">\n' +
            '        <div class="modal-content">\n' +
            '            <div class="modal-header">\n' +
            '                <h5 class="modal-title" id="exampleModalLabel">Ajouter des membres dans le groupe</h5>\n' +
            '                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>\n' +
            '            </div>\n' +
            '            <div class="modal-body">\n'+
            '               <div class="alert alert-success alert-empty-name d-none" role="alert">\n' +
            '                    Enregistrement effectué\n' +
            '                </div>'+
            '                <div class="chat_userBadgeList mb-2">\n' +
            '\n' +
            '                </div>\n' +
            '                <div>\n' +
            '                    <label for="exampleFormControlInput1" class="form-label">Ajouter des membres</label>\n' +
            '                    <input type="text" class="form-control chatSearchUser" id="chatSearchUser" placeholder="Rechercher un utilisateur">\n' +
            '                </div>\n' +
            '                <div class="chat_usersList mt-2">\n' +
            '\n' +
            '                </div>\n' +
            '            </div>\n' +
            '\n' +
            '            <div class="modal-footer">\n' +
            '                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>\n' +
            '                <button type="button" class="btn btn-primary" id="chat-btn-addUsers">Enregistrer</button>\n' +
            '            </div>\n' +
            '        </div>\n' +
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
            '<li class="list-group-item chat-select-user  pb-0 ps-3" id="chat-user-'+user.id+'" data-user="'+userStringified+'">\n' +
            '     <div class="row">\n' +
            '         <div class="col-2">\n' +
            '             <img src="https://github.com/mdo.png" alt="hugenerd" width="50" height="50" class="rounded-circle">\n' +
            '          </div>\n' +
            '          <div class="col-10 ps-2">\n' +
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


    userBadge(user)
   {
       return '<span class="badge bg-primary me-2 chat-badgeUser" data-user-id="'+user.id+'" id="chat-badgeUser-'+user.id+'">'+user.nom+' '+user.prenom+' ' +
           '<a href="#" onclick="$(this).parent().remove()" class="ms-2 text-white bg-danger px-1 rounded chat-delete-badgeUser"><i class="fa fa-close"></i></a>' +
           '</span>'
   }

   clearUserBadge()
   {
       $('.chat-badgeUser').each(function() {
          $(this).remove();
       });
   }
}