var $ss_sub_confirm = false;

function postStory() {
  $.ajax({
      crossDomain: true,
      url: "https://docs.google.com/forms/d/e/1FAIpQLScHFSzuMz6bIKLqmgM7E-dgZ539h0G8KE7kAUSYlu8npoJUFw/formResponse",
      type: "POST",
      dataType: "xml",
      data: $('#rescue-story-form').serialize(),
      success: function(data) {
          console.log('Submission successful');
      },
      error: function(xhr, status, error) {
          console.log('Submission failed: ' + error);
      }
  });
  $('input, textarea').val("")
}

$(document).ready(function(){
  /*$(function() {
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

  $("#share-my-story").click(function(){
    $('#rescue-story-form').fadeIn("slow");
    $('html, body').animate({
      scrollTop: $('#rescue-story-form').offset().top - 20
    }, 500);
  });*/

  $('#rescue-story-form').submit(function(event) {
    event.preventDefault();
    if($ss_sub_confirm){
      postStory();
      $('#rescue-story-form input[type="submit"]').attr('value','Submit');
      $('#rescue-form-message').html('<h4>Thank you for sharing!</h4><p>Check back on our home page to see a link to your story.</p>');
      $('#rescue-story-form input[type="submit"]').css('display','none');
    } else {
      $('#rescue-form-message').html('<h4>You\'re about to send us your amazing story.</h4>\
       <p>Is it written exactly they way you like?</p>')
      $('#rescue-story-form input[type="submit"]').attr('value','Yes I\'m Sure');
      $ss_sub_confirm = true;
    }
  });
})
