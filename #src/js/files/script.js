$(document).ready(function () {
    $('.team__slider').slick({
        slidesToShow: 4,
        // slidesToScroll: 2,
        dots: true,
        arrows: false,
    });
});

$(document).ready(function () {
    $('.about__slider').slick({
        rows: 2,
        slidesPerRow: 2,
        dots: true,
        arrows: false,
        speed: 1500,
    });
});


var scrolled;
window.onscroll = function () {
    scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if (scrolled > 100) {
        $(".header").css({ "background": "#87509c" })
    }
    if (scrolled > 40) {
        $(".header").css({
            "height": "100px",
            "padding-top": "-15px",

        })
        $(".header-menu").css({
            "top": "-15px"
        })
    }
    if (scrolled < 40) {
        $(".header").css({
            "height": "144px"
        })
    }
    if (scrolled > 400) {
        $(".header").css({ "background": "#17c2a4" })

    }
    if (scrolled > 1270) {
        $(".header").css({ "background": "#e7f1f8" })
    }
    if (scrolled > 2150) {
        $(".header").css({ "background": "#fff" })
        $(".header__menu").css({ "color": "#e7f1f8" })

    }
    if (scrolled > 2790) {
        $(".header").css({ "background": "#ffdd99" })
    }
    if (scrolled > 4230) {
        $(".header").css({ "background": "#d74680" })
    }
    if (scrolled > 5100) {
        $(".header").css({ "background": "#3c5499" })
    }

}