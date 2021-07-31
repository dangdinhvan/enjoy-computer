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
    window.location.href = 'https://dangdinhvan.github.io/enjoy-computer/index.html';
});
$('#logo-tablet-mobile').on('click', function () {
    window.location.href = 'https://dangdinhvan.github.io/enjoy-computer/index.html';
});

$('.product-card-gift-img span').html('x1 túi đựng laptop 15"');

$(function () {
    if (window.matchMedia('(max-width: 576px)').matches) {
        $('#input-search-tablet-mobile').attr("placeholder", "Tìm kiếm");
    } else {
        $('#input-search-tablet-mobile').attr("placeholder", "Tìm kiếm sản phẩm");
    }
});

$('#phone-fixed').click(function () {
    $('#phone-container').addClass('show');
    $('.phone-box').css('transform', 'translate(0px,100px)');
    $('.phone-box').css('transition', 'transform 0.3s ease-out');
});

$('#phone-header-btn').click(function () {
    $('#phone-container').addClass('show');
    $('.phone-box').css('transform', 'translate(0px,100px)');
    $('.phone-box').css('transition', 'transform 0.3s ease-out');
});
function fade() {
    $('#phone-container').removeClass('show');
    $('.phone-box').css('transform', 'none');
}
$(window).click(function (event) {
    if ($(event.target).is($('#phone-container'))) {
        $('#phone-container').removeClass('show');
        $('.phone-box').css('transform', 'none');
    }
})

$('#search-btn').click(function () {
    window.location.href = 'https://dangdinhvan.github.io/enjoy-computer/laptop.html';
});





