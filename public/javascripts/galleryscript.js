function setGalleryInput(value) {
  $('.gallery-page-input').val(value);
  console.log('set gallery input ' + value);
}

function gotoGalleryPage(value) {
  window.location.href = "/gallery/" + value;
}

const observer = lozad(); // lazy loads elements with default selector as '.lozad'

$(document).ready(function() {
  var $patharray = window.location.pathname.split( '/' );
  var $currentpage = $patharray[$patharray.length - 1];
  var $maxgallery = $('.gallery-section .gallery-nav:first-of-type p .gallery-max').html();

  setGalleryInput($currentpage);
  observer.observe();

  $('.min-gallery-page').click(function(){
    gotoGalleryPage(1);
  });

  $('.max-gallery-page').click(function(){
    console.log($maxgallery);
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
