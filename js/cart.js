$('#cart-box input').prop('checked', true);

// chức năng tăng giảm số lượng
$('.minus').click(function () {
    let $input = $(this).parent().find('input');
    let count = parseInt($input.val()) - 1;
    if (count < 1) {
        count = 1;
    }
    $input.val(count);
});
$('.plus').click(function () {
    let $input = $(this).parent().find('input');
    $input.val(parseInt($input.val()) + 1);
});

// add mã giảm giá
let $voucher = 500000;
$('#apply-voucher button').click(function () {
    $('#result-apply-voucher').css('display', 'block');
    if ($('#apply-voucher input').val() === "") {
        $('#alert-result').html('Bạn chưa nhập mã giảm giá. Vui lòng nhập mã giảm giá');
        $('#alert-result').css('color', '#fb0000');
        $('#result-voucher').css('display', 'none');
        $('.total-voucher').addClass('hide');
    }
    else {
        if ($('#apply-voucher input').val() === "123") {
            $('#alert-result').html('Áp dụng mã giảm giá thành công');
            $('#alert-result').css('color', '#4dd664');
            $('#result-voucher').css('display', 'block');
            $('#result-voucher').html(`Giảm trực tiếp ${$voucher.toLocaleString()} đ`);
            $('.total-voucher').removeClass('hide');
            $('#total-voucher').html(`-${$voucher.toLocaleString()} đ`)
        }
        else {
            $('#alert-result').html('Mã giảm giá không chính xác. Vui lòng nhập lại');
            $('#alert-result').css('color', '#fb0000');
            $('#result-voucher').css('display', 'none');
            $('.total-voucher').addClass('hide');
        }
    }

});

// tính đơn giá
let $priceProduct1 = parseInt(parseInt($('#product-number-1').attr('data-product-price')) * parseInt($('#product-number-1').children().children().children().children('input[type=text]').val()));
let $priceProduct2 = parseInt(parseInt($('#product-number-2').attr('data-product-price')) * parseInt($('#product-number-2').children().children().children().children('input[type=text]').val()));
let $totalBill = $priceProduct1 + $priceProduct2;
let $totalPayment;
if ($('#apply-voucher input').val() === "123") {
    $totalPayment = $totalBill - $voucher;
}
else {
    $totalPayment = $totalBill;
}
$('#product-number-1').children().find('.price').html($priceProduct1.toLocaleString() + " đ");
$('#product-number-2').children().find('.price').html($priceProduct2.toLocaleString() + " đ");
$('#total-cost span').html(($priceProduct1 + $priceProduct2).toLocaleString() + " đ");
$('#total-bill').html($totalBill.toLocaleString() + " đ");
$('#total-payment').html($totalPayment.toLocaleString() + " đ");

// Xóa sản phẩm
let tempProductForDelete;
$('.del-btn').click(function () {
    tempProductForDelete = $(this).parent().parent().parent();
    $('#modal-container').addClass('show');
    $('.modal-box').css('transform', 'translate(0px,180px)');
    $('.modal-box').css('transition', 'transform 0.3s ease-out');
});
$('#delete-all').click(function () {
    tempProductForDelete = $('.product');
    $('#modal-container').addClass('show');
    $('.modal-box').css('transform', 'translate(0px,180px)');
    $('.modal-box').css('transition', 'transform 0.3s ease-out');
    $('.delete-confirm-btn').click(function () {
        $('#content').html('Không có sản phẩm trong giỏ hàng');
        $('#content').css('justify-content', 'center').css('align-items', 'center').css('font-size', '18px').css('background-color','white');
        $('#content').css('background-image','url(../img/empty-product.png)');
        $('#content').css('background-repeat','no-repeat').css('background-position','center');
        fadeModalDelete();
    });
});

function fadeModalDelete() {
    $('#modal-container').removeClass('show');
    $('.modal-box').css('transform', 'none');
}

$('.delete-confirm-btn').click(function () {
    $(tempProductForDelete).css('display', 'none');
    fadeModalDelete();
});

$(window).click(function (event) {
    if ($(event.target).is($('#modal-container'))) {
        $('#modal-container').removeClass('show');
        $('.modal-box').css('transform', 'none');
    }
})

$('#purchase').click(function () {
    window.location.href = './dat-hang.html';
});