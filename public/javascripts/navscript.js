$(document).ready(function() {

  $('#top-nav .icon, #top-nav a').click(function(){
    var x = document.getElementById("top-nav");
    if (x.className === "toggle-nav") {
        x.className += " responsive";
    } else {
        x.className = "toggle-nav";
    }
    console.log('clicked top nav');
  });

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
    if ($scroll > 50) {
      $('.toggle-nav').css('background','#462310');
    } else if ($scroll == 0) {
      $('.toggle-nav').css('background','none');
    }
  });

});
