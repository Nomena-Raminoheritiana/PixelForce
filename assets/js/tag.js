$(document).ready(function() {
    let couleurSelectioner = $('[name="tag[couleur]"]').val();
    $('.tag-lg[data-value="'+couleurSelectioner+'"]').addClass('active');
    $(this).on('click', '.tag-lg', function(e) {
        e.preventDefault();
        const value = $(this).attr('data-value');
        $('[name="tag[couleur]"]').val(value);
        $('.tag-lg').each(function() {
            $(this).removeClass('active');
        })
        $(this).addClass('active')
    })
});