$(document).ready(function () {
    $('.checkme').click(function () {
        var parent = $(this).closest('.checkbox-card');
        if ($(this).is(':checked')) {
            parent.find('.passport-box').slideDown();
            parent.find('.apply-box').slideUp();
        } else {
            parent.find('.passport-box').slideUp();
            parent.find('.apply-box').slideDown();
        }
    });
});
