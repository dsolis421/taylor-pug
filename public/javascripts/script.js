function lazyLoadIntro() {
  setTimeout(function(){
    $('#top-nav, .header').css("opacity","1");
    if($(window).width() <= 437){
      $('#top-nav').css('background','#005005');
    }
  }, 700);
}

function walkInPaws() {
  setTimeout(function(){
    $('#walk-in i:nth-of-type(1)').css("opacity","1");
  }, 500);
  setTimeout(function(){
    $('#walk-in i:nth-of-type(2)').css("opacity","1");
  }, 1000);
  setTimeout(function(){
    $('#walk-in i:nth-of-type(3)').css("opacity","1");
  }, 1500);
  setTimeout(function(){
    $('#walk-in i:nth-of-type(4)').css("opacity","1");
  }, 2000);
  setTimeout(function(){
    $('#walk-in i:nth-of-type(5)').css("opacity","1");
    $('#walk-in i:nth-of-type(1)').css("opacity","0");
  }, 2500);
  setTimeout(function(){
    $('#walk-in i:nth-of-type(6)').css("opacity","1");
    $('#walk-in i:nth-of-type(2)').css("opacity","0");
  }, 3000);
  setTimeout(function(){
    $('#walk-in i:nth-of-type(3)').css("opacity","0");
  }, 3500);
  setTimeout(function(){
    $('#walk-in i:nth-of-type(4)').css("opacity","0");
  }, 4000);
  setTimeout(function(){
    $('#walk-in i:nth-of-type(5)').css("opacity","0");
  }, 4500);
  setTimeout(function(){
    $('#walk-in i:nth-of-type(6)').css("opacity","0");
  }, 5000);
}

$(document).ready(function() {

  lazyLoadIntro();
  walkInPaws();

  setInterval(walkInPaws, 5200);

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
