var $petqualityselections = ['curious','clumsy','loud','affectionate','playful','calm'];
var $selectedqualities = [];

function toggleSelect() {

}

function getStarted() {
  $('#pet-name-app').empty();
  $('#pet-name-app').append('<h3>Select 3 qualities that best describe your pet</h3>');
  for (var q in $petqualityselections) {
    $('#pet-name-app').append('<div class="pet-quality-selector unselected" data-petquality=' + $petqualityselections[q] + '>'+ $petqualityselections[q] +'</div>');
  }
  $('.pet-quality-selector').click(function(){
    console.log('click quality selector');
    if($(this).hasClass('unselected') && $selectedqualities.length < 3) {
      console.log('had unselected');
      $(this).removeClass('unselected');
      $(this).addClass('selected');
      $selectedqualities.push($(this).attr('data-petquality'));
    } else if ($(this).hasClass('unselected') && $selectedqualities.length >= 3){
      return;
    } else {
      console.log('had selected');
      $(this).removeClass('selected');
      $(this).addClass('unselected');
      var $selectedindex = $selectedqualities.indexOf($(this).attr('data-petquality'));
      $selectedqualities.splice($selectedindex, 1);
      $selectedindex = -1;
    }
  });
}

$(document).ready(function(){

  $('.pet-name-start').click(function(){
    getStarted();
  });

});
