function isinViewport(el) {
  var elementTop = $(el).offset().top + 200;
  var elementBottom = elementTop + $(el).outerHeight();

  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();

  return elementBottom > viewportTop && elementTop < viewportBottom;
}

function displayDataMessage(el, message) {
  $(el).html(message);
  $(el).css({'width': 'auto'});
}

$(document).ready(function() {

  $(document).scroll(function(){
    if(isinViewport($('.featured-gallery'))) {
      $('.featured-gallery > div').css({"background":"rgba(0,0,0,.5)"});
      $('#gallery-links, #gallery-message').css({"opacity":"1"});
    }
  });

  $('#adoption-process a, #partner-links a, #gallery-links a').mouseenter(function(){
    var enteredElement = $(this).parent().attr('id');
    var messageElement = '#' + enteredElement.substr(0,enteredElement.indexOf('-')) + '-message';
    displayDataMessage(messageElement, $(this).attr('data-message'));
  });

  $('#adoption-process a, #partner-links a, #gallery-links a').mouseleave(function(){
    $('#adoption-message, #partner-message, #gallery-message').empty();
    $('#adoption-message, #partner-message, #gallery-message').css({'width': '0'});
  });

});
