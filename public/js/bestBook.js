$(document).ready(function () {
    var $img = $('.img');
    var $text = $('.text');

    var $prevBtn = $('#prevBtn');
    var $nextBtn = $('#nextBtn');
    var index = 0;

    $img.not('.active').fadeOut(100);
    $text.not('.active').hide();

    $prevBtn.click(function () {
        $img.hide();
        $text.hide();

        $img.eq(index).removeClass('active');
        $text.eq(index).removeClass('active');

        index--;
        if (index <= -1) {
            index = $img.length - 1;
        }

        $img.eq(index).addClass('active');
        $text.eq(index).addClass('active');
        $img.eq(index).fadeIn(300);
        $text.eq(index).show();
    })
    $nextBtn.click(function () {
        $img.hide();
        $text.hide();

        $img.eq(index).removeClass('active');
        $text.eq(index).removeClass('active');

        index++;
        if (index >= $img.length) {
            index = 0;
        }

        $img.eq(index).addClass('active');
        $text.eq(index).addClass('active');
        $img.eq(index).fadeIn(300);
        $text.eq(index).show();
    });
});