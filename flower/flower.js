$( document ).ready(function() {
    $(".section-3 a").hover(function () {
        $(this).find(".price"). removeClass("hidden");
    });
    $(".section-3 a").mouseleave(function () {
        $(this).find(".price"). addClass("hidden");
    })
});