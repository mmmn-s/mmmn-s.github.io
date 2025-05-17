var scroll;
var winH = $(window).height();
var objTop = $('#intro').offset().top;
$(window).on('scroll', function(){
  scroll = $(window).scrollTop();
  if(scroll >= objTop - winH/2){
    $('#intro').addClass('.show')
  }
});