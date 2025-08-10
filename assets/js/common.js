$(window).scroll(function (){
  $(".animeBlur").each(function(){
    var hit		= $(this).offset().top;
    var scroll	= $(window).scrollTop();
    var wHeight	= $(window).height();
    if (scroll > hit - wHeight + wHeight/4){
      $(this).addClass("animeEnd");
    }
  });
});

document.addEventListener("scroll", function () {
  const parallax = document.querySelector(".bgSakura");
  let offset = window.scrollY;
  parallax.style.backgroundPositionY = offset * -0.5 + "px";
});