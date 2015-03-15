$(function() {
    function setHeight() {
        windowHeight = $(window).innerHeight();
        $('.sidebar').css('height', windowHeight - 100);
    };
    setHeight();
    attachHandlers();

})

function attachHandlers() {
    $('.hamburger').click(function(evt) {
        $('.sidebar').toggleClass('hide');
    });
}
