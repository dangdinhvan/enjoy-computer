// function view more btn
let temp = true;
function viewMore() {
    if (temp) {
        $('#product-description-content').css('height', 'fit-content');
        temp = false;
        $('#view-more-btn span').html('Thu nhỏ');
        $('#view-more-btn i').css('transform', 'rotate(180deg)');
    }
    else if (!temp) {
        $('#product-description-content').css('height', '1050px');
        temp = true;
        $('#view-more-btn span').html('Xem thêm');
        $('#view-more-btn i').css('transform', 'none');
    }
}

// carousel same product
$(".products").slick({
    prevArrow:
        '<button class="arrow-slick prev-slick"><i class="fa  fa-angle-left" aria-hidden="true"></i></button>',
    nextArrow:
        '<button class="arrow-slick next-slick"><i class="fa  fa-angle-right caret" aria-hidden="true"></i></button>',
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
        {
            breakpoint: 1025,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
    ]
});


// active img
function activeImg(imgNumber) {
    if (imgNumber === '1') {
        $('#sub-img-1').addClass('sub-img-active');
        $('#sub-img-2').removeClass('sub-img-active');
        $('#sub-img-3').removeClass('sub-img-active');
        $('#sub-img-4').removeClass('sub-img-active');
        $('#sub-img-5').removeClass('sub-img-active');
        $('#sub-img-6').removeClass('sub-img-active');
        $("#imageZoom").attr("src", "img/laptop-img-1.webp");
        $('.containerZoom').css('background-image', 'url("img/laptop-img-1.webp")');
    }
    else if (imgNumber === '2') {
        $('#sub-img-2').addClass('sub-img-active');
        $('#sub-img-1').removeClass('sub-img-active');
        $('#sub-img-3').removeClass('sub-img-active');
        $('#sub-img-4').removeClass('sub-img-active');
        $('#sub-img-5').removeClass('sub-img-active');
        $('#sub-img-6').removeClass('sub-img-active');
        $("#imageZoom").attr("src", "img/laptop-img-2.webp");
        $('.containerZoom').css('background-image', 'url("img/laptop-img-2.webp")');
    }
    else if (imgNumber === '3') {
        $('#sub-img-3').addClass('sub-img-active');
        $('#sub-img-2').removeClass('sub-img-active');
        $('#sub-img-1').removeClass('sub-img-active');
        $('#sub-img-4').removeClass('sub-img-active');
        $('#sub-img-5').removeClass('sub-img-active');
        $('#sub-img-6').removeClass('sub-img-active');
        $("#imageZoom").attr("src", "img/laptop-img-3.webp");
        $('.containerZoom').css('background-image', 'url("img/laptop-img-3.webp")');
    }
    else if (imgNumber === '4') {
        $('#sub-img-4').addClass('sub-img-active');
        $('#sub-img-2').removeClass('sub-img-active');
        $('#sub-img-3').removeClass('sub-img-active');
        $('#sub-img-1').removeClass('sub-img-active');
        $('#sub-img-5').removeClass('sub-img-active');
        $('#sub-img-6').removeClass('sub-img-active');
        $("#imageZoom").attr("src", "img/laptop-img-4.webp");
        $('.containerZoom').css('background-image', 'url("img/laptop-img-4.webp")');
    }
    else if (imgNumber === '5') {
        $('#sub-img-5').addClass('sub-img-active');
        $('#sub-img-2').removeClass('sub-img-active');
        $('#sub-img-3').removeClass('sub-img-active');
        $('#sub-img-4').removeClass('sub-img-active');
        $('#sub-img-1').removeClass('sub-img-active');
        $('#sub-img-6').removeClass('sub-img-active');
        $("#imageZoom").attr("src", "img/laptop-img-5.webp");
        $('.containerZoom').css('background-image', 'url("img/laptop-img-5.webp")');
    }
    else if (imgNumber === '6') {
        $('#sub-img-6').addClass('sub-img-active');
        $('#sub-img-2').removeClass('sub-img-active');
        $('#sub-img-3').removeClass('sub-img-active');
        $('#sub-img-4').removeClass('sub-img-active');
        $('#sub-img-5').removeClass('sub-img-active');
        $('#sub-img-1').removeClass('sub-img-active');
        $("#imageZoom").attr("src", "img/laptop-img-6.webp");
        $('.containerZoom').css('background-image', 'url("img/laptop-img-6.webp")');
    }
}
// buy now button
$('#buy-now-btn').click(function () {
    window.location.href = './cart.html';
});

$(function () {
    $('#img-active').imageZoom({
        zoom: 200
    });
});

