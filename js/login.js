// show tab sign-in sign-up
$(function () {
    const signInContent = $("#sign-in").html();
    $("#tab-content").html(signInContent);
});
$(".nav.nav-tabs .nav-item").click(function () {
    $(".nav-link").removeClass("active");

    const aElement = $(this).children();
    aElement.addClass("active");

    const tabId = aElement.attr("href");
    const tabContent = $(tabId).html();
    $("#tab-content").html(tabContent);
});

//validate sign-in btn
function validateSignIn() {
    if ($('#user-name-email').val() === '' || $('#password').val() === '') {
        if ($('#user-name-email').val() === '') {
            $('.user-name-email').addClass('show');
        }
        else if ($('#user-name-email').val() !== '') {
            $('.user-name-email').removeClass('show');
        }
        if ($('#password').val() === '') {
            $('.password').addClass('show');
        }
        else if ($('#password').val() !== '') {
            $('.password').removeClass('show');
        }
    }
    else {
        $('.resault-sign-in-up').html('Đăng nhập thành công')
        $('.resault-sign-in-up').css('color', '#349c45')
        setTimeout(() => {
            window.location.href = './index.html';
        }, 1000);
    }
}

//validate sign-up btn
function validateSignUp() {
    if ($('#user-name-email-up').val() === '' || $('#password-up').val() === '' || $('#password-again-up').val() === '' || $('#fullname-up').val() === '' || $('#phone-number-up').val() === '') {
        if ($('#user-name-email-up').val() === '') {
            $('.user-name-email-up').addClass('show');
        }
        else if ($('#user-name-email-up').val() !== '') {
            $('.user-name-email-up').removeClass('show');
        }
        if ($('#password-up').val() === '') {
            $('.password-up').addClass('show');
        }
        else if ($('#user-name-email-up').val() !== '') {
            $('.password-up').removeClass('show');
        }
        if ($('#password-again-up').val() === '') {
            $('.password-again-up').addClass('show');
        }
        else if ($('#password-again-up').val() !== '') {
            $('.password-again-up').removeClass('show');
        }
        if ($('#fullname-up').val() === '') {
            $('.fullname-up').addClass('show');
        }
        else if ($('#fullname-up').val() !== '') {
            $('.fullname-up').removeClass('show');
        }
        if ($('#phone-number-up').val() === '') {
            $('.phone-number-up').addClass('show');
        }
        else if ($('phone-number-up').val() !== '') {
            $('.phone-number-up').removeClass('show');
        }
    }
    else{
        $('.resault-sign-in-up').html('Đăng ký thành công')
        $('.resault-sign-in-up').css('color', '#349c45')
        setTimeout(() => {
            window.location.href = './login.html';
        }, 1000);
    }
}