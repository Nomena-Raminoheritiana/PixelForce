import {
    chat_groupCanal_addUser,
    chat_groupCanal_removeUser,
    createGroupCanal,
    findDestinataire
} from "./chatSenderRequest";
import {loaderOff, loaderOn} from "../helpers/Loader";
import {CanalGroupsComponent} from "./components/CanalGroupsComponent";
import {MenuComponent} from "./components/MenuComponent";
import {Modal} from 'bootstrap'

$(function() {
    const canalsComponent = new CanalGroupsComponent()
    $(this).on('input','.chatSearchUser', async function(e) {
        e.preventDefault();
        const boxCreationContainer = $(this).closest('.chat-modal-container');
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
        const users_id = getUserIdsByBadge($(this).closest('.chat-modal-container'));

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

    $(this).on('hidden.bs.modal','.chat-modal-addUsers', function(e) {
        $(this).remove();
    });

    $(this).on('click', '#chat-btn-addUsers',async function(e){
        e.preventDefault();
        const modal_container = $(this).closest('.chat-modal-container')
        const users_id = getUserIdsByBadge(modal_container);
        await chat_groupCanal_addUser(modal_container.attr('data-canal-id'), users_id)
        modal_container.find('.alert-success').removeClass('d-none');
        setTimeout(function() {
            $(modal_container).find('[data-bs-dismiss="modal"]').trigger('click')
        }, 500)
    })

    $(this).on('click', '.chat-remove-user',async function(e){
        e.preventDefault();
        e.stopPropagation()
        await chat_groupCanal_removeUser($(this).attr('data-canal-id'));
        $(this).closest('.chat-choose-canal').remove()
    })


});

function getUserIdsByBadge(container)
{
    let users_id = [];
    $(container).find('.chat-badgeUser').each(function() {
        users_id.push($(this).attr('data-user-id'))
    });
    return users_id;
}