import {createGroupCanal, findDestinataire} from "./chatSenderRequest";
import {loaderOff, loaderOn} from "../helpers/Loader";
import {CanalGroupsComponent} from "./components/CanalGroupsComponent";
import {MenuComponent} from "./components/MenuComponent";
import {Modal} from 'bootstrap'

$(document).ready(function() {
    const canalsComponent = new CanalGroupsComponent()
    $(this).on('input','#chatSearchUser', async function(e) {
        e.preventDefault();
        const boxCreationContainer = $('#chatModalCreateGroups');
        const searchValue = $(this).val();
        const divChat_usersList = boxCreationContainer.find('.chat_usersList');
        if(searchValue.length > 0) {
            divChat_usersList.html('');
            loaderOn(divChat_usersList[0], 'ON');
            const users = await findDestinataire(searchValue);
            divChat_usersList.html(canalsComponent.getListUser(users))
            loaderOff(divChat_usersList[0]);
        } else {
            divChat_usersList.html('')
        }
    })

    $(this).on('click','.chat-select-user', function(e) {
        e.preventDefault();
        const user = JSON.parse(decodeURIComponent($(this).attr('data-user')))
        const chat_userBadgeList = $('.chat_userBadgeList');
        if($('#chat-badgeUser-'+user.id).length === 0) {
            chat_userBadgeList.append(canalsComponent.userBadge(user));
        }

    });

    $(this).on('click','#chat-btn-createCanal', async function(e) {
        e.preventDefault();
        const inputNom = $('#chat_inputCanalName');
        const nom = inputNom.val();
        const alertError = $('.alert-empty-name');
        let users_id = [];
        $('.chat-badgeUser').each(function() {
            users_id.push($(this).attr('data-user-id'))
        });
        if(nom.length === 0){
            alertError.removeClass('d-none');
        }
        const canalMessage = await createGroupCanal(nom, users_id);
        if(canalMessage.error) {
            alertError.removeClass('d-none')
        } else {
           const menuComponent = new MenuComponent();
           const groupInstance = menuComponent.getGroupsCanalItem(canalMessage);
           $('.chat-list-groupCanal').append(groupInstance);
       $('[data-bs-dismiss="modal"]').trigger('click')
        }

    })
    $(this).on('hidden.bs.modal','#chatModalCreateGroups', function(e) {
        $('#chat_inputCanalName').val('');
        $('.chat-badgeUser').each(function() {
            $(this).remove();
        });
        $('.chat_usersList').html('');
        $('#chatSearchUser').val('');
    })
});