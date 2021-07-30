
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