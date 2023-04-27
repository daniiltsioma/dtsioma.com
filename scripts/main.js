$('.position').click(function() {
    if ($(this).hasClass('position__inactive')) {
        $('.position').not($(this)).removeClass('position__active').addClass('position__inactive');
        $(this).removeClass('position__inactive').addClass('position__active');

    }
})