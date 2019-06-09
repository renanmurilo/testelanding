$(function(){
    $(".rolagem").click(function() {
    var href =$(this).attr("href");
    $("body, html").animate({
        scrollTop: $(href).offset().top
        }, 1000)
    });
});