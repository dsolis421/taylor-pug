//variables to available sections for color and qualities
var $petcolors = ['black',
  'yellow','brown','grey',
  'white','auburn','cinnamon'];
var $petqualityselections = ['curious','strong',
  'clumsy','loud','affectionate', 'mischievous',
  'playful','calm','protective'];
//variables collect color and qualities data
var $selectedtype = '';
var $selectedgender = [];
var $selectedcolors = [];
var $selectedqualities = [];
//variables indicate if section is displayed
var $genderspawned = false;
var $colorsspawned = false;
var $qualitiesspawned = false;
var $suggestnamespawned = false;

function toggleSelect(selector) {
  //console.log(selector);
  if($(selector).hasClass('unselected')) {
    //console.log('had unselected');
    $(selector).removeClass('unselected');
    $(selector).addClass('selected');
  } else {
    //console.log('had selected');
    $(selector).removeClass('selected');
    $(selector).addClass('unselected');
  }
}

function askPetGender() {
  $genderspawned = true;
  $('#pet-gender-choices').append('<div class="pet-name-selector unselected" data-petgender="male"> Male </div>');
  $('#pet-gender-choices').append('<div class="pet-name-selector unselected" data-petgender="female"> Female </div>');
  $('#pet-gender-choices').append('<div class="pet-name-selector unselected" data-petgender="any"> Doesn\'t Matter </div>');
  $('#pet-gender-choices .pet-name-selector').click(function(){
    toggleSelect($('#pet-gender-choices .selected'));
    if($(this).hasClass('unselected')) {
      toggleSelect($(this));
      if($(this).attr('data-petgender') === 'male'){
        $selectedgender = ['male'];
      } else if($(this).attr('data-petgender') === 'female'){
        $selectedgender = ['female'];
      } else {
        $selectedgender = ['male','female'];
      }
    }
    if(!$colorsspawned){
      askPetColor();
    }
    console.log('selected gender',$selectedgender);
  });
}


function askPetColor() {
  //console.log('trying to spawn pet colors');
  $colorsspawned = true;
  $('#pet-color').append('<p>Select all that apply</p>');
  for (var c in $petcolors) {
    $('#pet-color-choices').append('<div class="pet-name-selector unselected" data-petcolor=' + $petcolors[c] + '>'+ $petcolors[c] +'</div>');
  }
  $('#pet-color-choices .pet-name-selector').click(function(){
    console.log('clicked color selector');
    if($(this).hasClass('unselected')) {
      toggleSelect($(this));
      $selectedcolors.push($(this).attr('data-petcolor'));
    } else {
      toggleSelect($(this));
      var $selectedindex = $selectedcolors.indexOf($(this).attr('data-petcolor'));
      $selectedcolors.splice($selectedindex, 1);
      $selectedindex = -1;
    }
    if(!$qualitiesspawned){
      askPetQualities();
    }
    console.log($selectedcolors);
  });
}

function askPetQualities() {
  $qualitiesspawned = true;
  $('#pet-qualities').append('<p>Select up to 3</p>');
  for (var q in $petqualityselections) {
    $('#pet-quality-choices').append('<div class="pet-name-selector unselected" data-petquality=' + $petqualityselections[q] + '>'+ $petqualityselections[q] +'</div>');
  }
  $('#pet-quality-choices .pet-name-selector').click(function(){
    console.log('click quality selector');
    if($(this).hasClass('unselected') && $selectedqualities.length < 3) {
      toggleSelect($(this));
      $selectedqualities.push($(this).attr('data-petquality'));
    } else if ($(this).hasClass('unselected') && $selectedqualities.length >= 3){
      return;
    } else {
      toggleSelect($(this));
      var $selectedindex = $selectedqualities.indexOf($(this).attr('data-petquality'));
      $selectedqualities.splice($selectedindex, 1);
      $selectedindex = -1;
    }
  console.log($selectedqualities);
  if(!$suggestnamespawned){
    $suggestnamespawned = true;
    $('#pet-name-app').append('<div class="pet-name-choices"><div class="suggest-name">Suggest Name</div></div>');
    $(".suggest-name").click(function(){
      suggestName();
    });
  }
  });
}

function suggestName(){
  console.log('suggested clicked');
  if($selectedtype != '' &&
      $selectedgender.length > 0 &&
      $selectedcolors.length > 0 &&
      $selectedqualities.length > 0){
        console.log('met the criteria for routing');
        window.location.href = `/petname/${$selectedtype}/${$selectedgender}/${$selectedcolors}/${$selectedqualities}`;
  }
}

$(document).ready(function(){

  $('#pet-type-choices .pet-name-selector').click(function(){
    $selectedtype = $(this).attr('data-pettype');
    if($(this).hasClass('unselected')) {
      if($(this).attr('data-pettype') === 'dog'){
        toggleSelect(this);
        if($('.pet-name-selector[data-pettype="cat"]').hasClass('selected')){
          toggleSelect($('.pet-name-selector[data-pettype="cat"]'));
        }
      } else {
        toggleSelect(this);
        if($('.pet-name-selector[data-pettype="dog"]').hasClass('selected')){
          toggleSelect($('.pet-name-selector[data-pettype="dog"]'));
        }
      }
    }
    if(!$genderspawned){
      askPetGender();
    }
    console.log('selected pet type ', $selectedtype);
  });

});
