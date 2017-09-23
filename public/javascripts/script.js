function lazyLoadIntro() {
  setTimeout(function(){
    $('#top-nav, .header h1, #walk-in').css("opacity","1");
    if($(window).width() <= 437){
      $('#top-nav').css('background','#462310');
    }
  }, 1000);
}

$(document).ready(function() {

  //lazyLoadIntro();

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
      $('.toggle-nav').css('background','#341509');
    } else if ($scroll == 0 && $(window).width() > 437) {
      $('.toggle-nav').css('background','none');
    }
  });

  $('#top-nav .icon, #top-nav a').click(function(){
    var x = document.getElementById("top-nav");
    if (x.className === "toggle-nav") {
        x.className += " responsive";
    } else {
        x.className = "toggle-nav";
    }
    console.log('clicked top nav');
  });
});
