$(document).ready(function () {
   $(this).on('click', 'a.add-mail', function(e) {
       e.preventDefault();
       let mailContainer = $('.mail-container').first().clone();
       $('.mail-container').last().after(mailContainer);
   })
});