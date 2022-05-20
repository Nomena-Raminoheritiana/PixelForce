$(document).on('ready', function() {
    if ($('.nav-link.menu-toggle').hasClass('is-active')) {
        $('.sidenav-overlay').addClass('show');
    }
})