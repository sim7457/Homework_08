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

    $('#header .flex_inner .writing>a').on('click', function (e) {
        e.preventDefault();
        $('#header .flex_inner .sub02_gnb').toggleClass('on');
    })


})