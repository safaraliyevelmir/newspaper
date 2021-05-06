$('.fa-search').click(function () {
    $('.search-screen').animate({
        opacity: '1',
      });
});

$('.fa-search').click(function () {
    $('.search-screen').css("visibility", "visible");
});


$('.exit').click(function () {
    $('.search-screen').animate({
        opacity: '0',
      });
});

$('.exit').click(function () {
    $('.search-screen').css("visibility", "hidden");
});