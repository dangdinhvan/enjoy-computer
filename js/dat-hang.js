$('#confirm-purchase').click(function () {
    if ($('#user-name').val() === '' || $('#phone-number').val() === '' || $('#email').val() === '' || $('#province').val() === 'tinh' || $('#address-input').val() === '') {
        if ($('#user-name').val() === '') {
            $('.user-name').addClass('show');
        }
        else if ($('#user-name').val() !== '') {
            $('.user-name').removeClass('show');
        }
        if ($('#phone-number').val() === '') {
            $('.phone-number').addClass('show');
        }
        else if ($('#phone-number').val() !== '') {
            $('.phone-number').removeClass('show');
        }
        if ($('#email').val() === '') {
            $('.email').addClass('show');
        }
        else if ($('#email').val() !== '') {
            $('.email').removeClass('show');
        }
        if ($('#province').val() === 'tinh') {
            $('.province').addClass('show');
        }
        else if ($('#province').val() !== 'tinh') {
            $('.province').removeClass('show');
        }
        if ($('#address-input').val() === '') {
            $('.address-input').addClass('show');
        }
        else if ($('#address-input').val() !== '') {
            $('.address-input').removeClass('show');
        }
    }
    else {
        window.location.href = './thank-you.html';
    }

});