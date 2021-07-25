// checkbox filter
$('.all').prop('checked', true);
$('.all').click(function () {
    if ($(this).is(':checked')) {
        $('#hang-san-xuat-checkbox').children().children().children('input:checked').not(this).prop('checked', false);
    }
});
$('#asus').click(function () {
    if ($(this).is(':checked')) {
        $('#hang-san-xuat-checkbox').children().children().children('input:checked').not(this).prop('checked', false);
    }
});
$('#msi').click(function () {
    if ($(this).is(':checked')) {
        $('#hang-san-xuat-checkbox').children().children().children('input:checked').not(this).prop('checked', false);
    }
});
$('#gigabyte').click(function () {
    if ($(this).is(':checked')) {
        $('#hang-san-xuat-checkbox').children().children().children('input:checked').not(this).prop('checked', false);
    }
});
$('#apple').click(function () {
    if ($(this).is(':checked')) {
        $('#hang-san-xuat-checkbox').children().children().children('input:checked').not(this).prop('checked', false);
    }
});
// active sort
function activeSortBtn(sortBtnNumber) {
    if (sortBtnNumber === '1') {
        $('#sort-item-1').addClass('active');
        $('#sort-item-2').removeClass('active');
        $('#sort-item-3').removeClass('active');
        $('#sort-item-4').removeClass('active');
        $('#sort-item-5').removeClass('active');
        $('#sort-item-6').removeClass('active');
    }
    else if (sortBtnNumber === '2') {
        $('#sort-item-2').addClass('active');
        $('#sort-item-1').removeClass('active');
        $('#sort-item-3').removeClass('active');
        $('#sort-item-4').removeClass('active');
        $('#sort-item-5').removeClass('active');
        $('#sort-item-6').removeClass('active');
    }
    else if (sortBtnNumber === '3') {
        $('#sort-item-3').addClass('active');
        $('#sort-item-2').removeClass('active');
        $('#sort-item-1').removeClass('active');
        $('#sort-item-4').removeClass('active');
        $('#sort-item-5').removeClass('active');
        $('#sort-item-6').removeClass('active');
    }
    else if (sortBtnNumber === '4') {
        $('#sort-item-4').addClass('active');
        $('#sort-item-2').removeClass('active');
        $('#sort-item-3').removeClass('active');
        $('#sort-item-1').removeClass('active');
        $('#sort-item-5').removeClass('active');
        $('#sort-item-6').removeClass('active');
    }
    else if (sortBtnNumber === '5') {
        $('#sort-item-5').addClass('active');
        $('#sort-item-2').removeClass('active');
        $('#sort-item-3').removeClass('active');
        $('#sort-item-4').removeClass('active');
        $('#sort-item-1').removeClass('active');
        $('#sort-item-6').removeClass('active');
    }
    else if (sortBtnNumber === '6') {
        $('#sort-item-6').addClass('active');
        $('#sort-item-2').removeClass('active');
        $('#sort-item-3').removeClass('active');
        $('#sort-item-4').removeClass('active');
        $('#sort-item-5').removeClass('active');
        $('#sort-item-1').removeClass('active');
    }
}