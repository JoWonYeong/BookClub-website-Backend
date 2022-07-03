$(document).ready(function () {
    setInterval(move, 3500);
});

function move() {
    $('.one').css({
        left: '1000px'
    }, 800);
    $('.two').animate({
        left: '-1000px'
    }, 800);
    $('.three').animate({
        left: '0px'
    }, 800);

    changeClass();
}

function changeClass() {
    $('.now1').addClass('three');
    $('.now1').removeClass('one');
    $('.now1').removeClass('now1');

    $('.now2').addClass('one');
    $('.now2').removeClass('two');
    $('.now2').removeClass('now2');

    $('.now3').addClass('two');
    $('.now3').removeClass('three');
    $('.now3').removeClass('now3');


    $('.one').addClass('now1');
    $('.two').addClass('now2');
    $('.three').addClass('now3');
}