$(function() {
    $('.search_bar').click(function(evt) {
        $('.search_bar').addClass('input_filled');

    });
    $('.search_input').blur(function(evt) {
        var val = $(evt.target).prop('value');
        if (val.trim() === '')
            $('.search_bar').removeClass('input_filled');
    });
});
