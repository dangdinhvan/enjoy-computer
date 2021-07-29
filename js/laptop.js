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
// filter mobile show-hide
let caretDownTemp = true;
let filterMobileTemp = true;
$('.fa-caret-down').click(function () {
    if (caretDownTemp === true) {
        $('#filter-mobile-content').addClass('show');
        $('.fa-caret-down').css('transform', 'rotate(180deg)');
        caretDownTemp = false;
        $('.filter-mobile-item-content').removeClass('show');
        $('.fa-minus').removeClass('fa-minus').addClass('fa-plus');
    }
    else if (caretDownTemp === false) {
        $('#filter-mobile-content').removeClass('show');
        $('.fa-caret-down').css('transform', 'none');
        caretDownTemp = true;
        $('.filter-mobile-item-content').removeClass('show');
        $('.fa-minus').removeClass('fa-minus').addClass('fa-plus');
    }
});


$('.fa-plus').click(function () {
    if (filterMobileTemp === true) {
        $(this).parent().parent().parent().find('.filter-mobile-item-content').addClass('show');
        $(this).removeClass('fa-plus').addClass('fa-minus');
        filterMobileTemp = false;
    }
    else if (filterMobileTemp === false) {
        $(this).parent().parent().parent().find('.filter-mobile-item-content').removeClass('show');
        $(this).addClass('fa-plus').removeClass('fa-minus');
        filterMobileTemp = true;
    }
});


$('.filter-mobile-item-content div').click(function(){
    $(this).addClass('active-filter-mobile');
});

// set height = width laptop-theo-nhu-cau-item img
$('#laptop-theo-nhu-cau-item img').height($('#laptop-theo-nhu-cau-item img').width()+"px");