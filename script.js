$(window).scroll(function() {
  let scrolledY = $(window).scrollTop();
  $('.sec1').css('background-position', 'center ' + ((scrolledY)) + 'px');
});