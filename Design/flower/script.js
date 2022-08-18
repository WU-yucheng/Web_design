$(function () {
    $('nav a').click(function () {
        var btn = $(this).attr('herf');
        var pos = $(btn).offest();
        $('html, body').animate({ scrollTop: pos.top }, 1000);
    });
});