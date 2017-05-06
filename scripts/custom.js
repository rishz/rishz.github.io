
// preloader

$(window).on('load',function(){
    $('.preloader').fadeOut(1000); // set duration in brackets
});


$(document).ready(function () {
    $('#id1').addClass("line-1 anim-typewriter name");
    $('#id2').addClass("line-1 anim-typewriter2 dev-info");
});


/* HTML document is loaded. DOM is ready. 
-------------------------------------------*/
$(function(){

  // ------- WOW ANIMATED ------ //
  wow = new WOW(
  {
    mobile: false
  });
  wow.init();

  // ------- JQUERY PARALLAX ---- //
  function initParallax() {
    $('#home').parallax("100%", 0.1);
    $('#about').parallax("100%", 0.3);
    // $('#portfolio').parallax("100%", 0.2);
    $('#skills').parallax("100%", 0.3);
    // $('#resume').parallax("100%", 0.1);
    $('#contact').parallax("100%", 0.1);

  }
  initParallax();

  // HIDE MOBILE MENU AFTER CLIKING ON A LINK
  $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
    });

});

