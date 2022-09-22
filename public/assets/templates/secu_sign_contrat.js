$(document).ready(function () { 
    var $sigdiv = $("#signature").jSignature({'UndoButton':true});
    $('.btn-clear').click(function (){
        $sigdiv.jSignature('clear');
    });
    $('.btn-save').click(async function (){
        var data = $sigdiv.jSignature('getData', 'default');
        $('#sign-contrat-form_signature').val(data);
        $('#sign_document').submit();
    });
    
});