$(function () {

    /**
     * Permet de mettre à jour les donnés insérées dans les champs ckEditor
     * 
     * Car après avoir intégré CkEditor, les champs d'origines restent null et ckEditor les changent avec ses propres champs personnalisés
     * Les champs d'origines se mettent seulement en display:none
     */
    function updateFieldCkeditor(fields) {
        $.each(fields, function (key, value) {
            $('#' + key).val(value.getData());
        });
    }

    $('#edit-formation').on('click',  function(e){
        e.preventDefault();
        updateFieldCkeditor(CKEDITOR.instances)

    });

    $('#submit-formation').on('click',  function(e){
        e.preventDefault();
        updateFieldCkeditor(CKEDITOR.instances)
    });
    
})
