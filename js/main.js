$('#hamberger').on('click', function () {
    $('#mobile-menu-container').addClass('show');
})


$(window).on('click', function (event) {
    if ($(event.target).is($('#mobile-menu-container'))) {
        $('#mobile-menu-container').removeClass('show');
        $('#mobile-menu input[type=checkbox]').prop('checked', false);
        $('#menu-mobile').css('animation', 'none');
    }
});

$('#logo').on('click', function () {
    window.location.href = '/';
});
$('#logo-tablet-mobile').on('click', function () {
    window.location.href = '/';
});

$('.product-card-gift-img span').html('x1 túi đựng laptop 15"');


