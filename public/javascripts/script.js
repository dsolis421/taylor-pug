$(document).ready(function() {

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

  $('#top-nav .icon, #top-nav a').click(function(){
    var x = document.getElementById("top-nav");
    if (x.className === "toggle-nav") {
        x.className += " responsive";
    } else {
        x.className = "toggle-nav";
    }
    console.log('clicked top nav');
  });

  $('#adoption-process a').mouseenter(function(){
    $('#adoption-message').html($(this).attr('data-message'));
    $('#adoption-message').css({'width': 'auto'});
  });

  $('#partner-links a').mouseenter(function(){
    $('#partner-message').html($(this).attr('data-message'));
    $('#partner-message').css({'width': 'auto'});
  });

  $('#gallery-links a').mouseenter(function(){
    $('#gallery-message').html($(this).attr('data-message'));
    $('#gallery-message').css({'width': 'auto'});
  });

  $('#adoption-process a, #partner-links a, #gallery-links a').mouseleave(function(){
    $('#adoption-message, #partner-message, #gallery-message').empty();
    $('#adoption-message, #partner-message, #gallery-message').css({'width': '0'});
  });

});
