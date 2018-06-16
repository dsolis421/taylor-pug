// This script requires jQuery and jquery-form plugin
// You can use these ones from Cloudflare CDN:
// <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js" integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4=" crossorigin="anonymous"></script>
// <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.form/4.2.2/jquery.form.min.js" integrity="sha256-2Pjr1OlpZMY6qesJM68t2v39t+lMLvxwpa8QlRjJroA=" crossorigin="anonymous"></script>
//
function gotoContactForm() {
  $('html,body').animate({
    scrollTop: $('#rescuecontactForm').offset().top - 80
  }, 500);
};

$('#rescuecontactForm').submit(function (event) {
    event.preventDefault();
    var extraData = {};
    $('#rescuecontactForm').ajaxSubmit({
        data: extraData,
        dataType: 'jsonp',  // This won't really work. It's just to use a GET instead of a POST to allow cookies from different domain.
        success: function () {
          console.log('it workd');

        },
        error: function () {
            // Submit of form should be successful but JSONP callback will fail because Google Forms
            // does not support it, so this is handled as a failure.
            console.log('it worked error');
            // You can also redirect the user to a custom thank-you page:
            // window.location = 'http://www.mydomain.com/thankyoupage.html'
        }
    });
    $('#formmessage').html('Your message has been sent!');
    gotoContactForm();
    setTimeout(function(){
      $('#rescuecontactForm')[0].reset();
      /*$('#1560045526,#1176579230,#1858718691,#1440955550,#1295326129,#2017356482').val('');
      $("#1554761659").val($("#1554761659:first").val());
      $("#1497778772").val($("#1497778772:first").val());*/
    }, 1000);
});

$(document).ready(function(){

  $('.contact-button').click(function(){
    gotoContactForm();
  });

});
