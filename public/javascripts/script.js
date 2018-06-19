function isinViewport(el) {
  var elementTop = $(el).offset().top + 200;
  var elementBottom = elementTop + $(el).outerHeight();

  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();

  return elementBottom > viewportTop && elementTop < viewportBottom;
}

$(document).ready(function() {

  $(document).scroll(function(){
    if(isinViewport($('.featured-gallery'))) {
      $('.featured-gallery > div').css({"background":"rgba(0,0,0,.5)"});
      $('#gallery-links, #gallery-message').css({"opacity":"1"});
    }
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
