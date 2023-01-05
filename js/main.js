$(function () {
    $('#header .flex_inner .gnb>ul>li').hover(function () {
        var idx = $(this).parent().index();
        $(this).addClass('on');

    }, function () {
        $(this).removeClass('on');
    })

    $('.main_slick .right .inner').slick({
        autoplay: true,
        autoplaySpeed: 1500,


    })



})