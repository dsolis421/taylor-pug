function lazyLoadIntro() {
  setTimeout(function(){
    $('#rescue-nav, #intro > div').css("opacity","1");
    if($(window).width() <= 437){
      $('#rescue-nav').css('background','#005005');
    }
  }, 700);
}

$(document).ready(function() {

  lazyLoadIntro();

  $(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top - 60
          }, 500);
          return false;
        }
      }
    });
  });

  $(document).scroll(function(){
    var $scroll = $(document).scrollTop();
    if ($scroll > 150) {
      $('#rescue-nav').css('background','#005005');
    } else if ($scroll == 0 && $(window).width() > 437) {
      $('#rescue-nav').css('background','none');
    }
  });

  $('#rescue-navbar-collapse a, #logo').click(function(){
    $('#rescue-navbar-collapse').removeClass("in");
    $('#rescue-navbar-collapse').attr("aria-expanded",false);
  });
});
