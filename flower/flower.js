$( document ).ready(function() {
    $(".section-3 a").hover(function () {
        $(this).find(".price"). removeClass("hidden");
    });
    $(".section-3 a").mouseleave(function () {
        $(this).find(".price"). addClass("hidden");
    })

   /* slick slider event*/
    $(".vertical-center-4").slick({
        dots: false,
        autoplay:true,
        arrows: false,
        autoplaySpeed: 2000

    });
});