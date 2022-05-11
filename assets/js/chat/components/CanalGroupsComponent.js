export class CanalGroupsComponent {
    users=[];
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