$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    var heroImageBottom = $(".page-content").offset().top;

    if (scroll >= (heroImageBottom-70)) {
        $("nav").addClass("scrolled-nav");
        $(".dropdown-menu").addClass("dropdown-menu-scrolled");
    } else {
        $("nav").removeClass("scrolled-nav");
        $(".dropdown-menu").removeClass("dropdown-menu-scrolled");
    }
});
