function setGalleryInput(value) {
  $('.gallery-page-input').val(value);
}

function gotoGalleryPage(value) {
  window.location.href = "/gallery/" + value;
}

$(document).ready(function() {
  var $patharray = window.location.pathname.split( '/' );
  var $currentpage = Number($patharray[$patharray.length - 1]);
  var $maxgallery = $('.gallery-section .gallery-nav:first-of-type p .gallery-max').html();

  setGalleryInput($currentpage);

  $('.min-gallery-page').click(function(){
    gotoGalleryPage(1);
  });

  $('.max-gallery-page').click(function(){
    gotoGalleryPage($maxgallery);
  });

  $('.prev-gallery-page').click(function(){
    if($currentpage <= 1) {
      return;
    } else {
      gotoGalleryPage($currentpage - 1);
    }
  });

  $('.next-gallery-page').click(function(){
    if($currentpage >= $maxgallery) {
      return;
    } else {
      gotoGalleryPage($currentpage + 1);
    }
  });

  $('.gallery-page-input').keypress(function(k){
    if(k.which == 13) {
      gotoGalleryPage($(this).val());
    }
  });

});
