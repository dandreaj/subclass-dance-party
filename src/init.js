$(document).ready(function() {
  window.dancers = [];
  window.fishies = [];

  $('.addDancerButton').on('click', function(event) {

    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    dancers.push(dancer);
    $('body').append(dancer.$node);

    $('.dancer').mouseover(function(){
      $(this).css({"border": "30px solid white", "border-radius":"30px"});
    });
  });

  $('.lineUpButton').on('click',function(event){
    for(var i=0;i<window.dancers.length;i++){
      window.dancers[i].lineUp(i);
    }
  });

//-----------------------------------------

  $('.addFishButton').on('click', function(event) {
    var fishMakerFunctionName = $(this).data('fish-maker-function-name');
    var fishMakerFunction = window[fishMakerFunctionName];
    var fish = new fishMakerFunction(
      ($("body").height()-100) * Math.random(),
      ($("body").width()-100) * Math.random(),
      Math.random() * 1000
    );
    fishies.push(fish);
    $('body').append(fish.$node);
  });

  $('.fishifyButton').on('click', function(event) {
    $('body').find('.addDancerButton').toggle();
    $('body').find('.addFishButton').toggle();
    $('body').find('.fishifyButton').toggle();
    $('body').find('.formationButton').toggle();
    $('body').find('.dotButton').toggle();
    $('body').find('.lineUpButton').toggle();
    $('body').css('background-image','url("background-ocean.jpg")');
    $('body').find('.dancer').remove();
    window.dancers = [];

  });

  $('.dotButton').on('click', function(event) {
    $('body').find('.addDancerButton').toggle();
    $('body').find('.addFishButton').toggle();
    $('body').find('.fishifyButton').toggle();
    $('body').find('.dotButton').toggle();
    $('body').find('.lineUpButton').toggle();
    $('body').find('.formationButton').toggle();
    $('body').css('background-image','none');
    $('body').find('.fish').remove();
    window.fishies = [];
  });

  $('.formationButton').on('click', function(event) {
    for (var i = 0 ; i < fishies.length ; i++){
      fishies[i].setSpeed(5);
      fishies[i].glideDirection = 'right';
      if (fishies[i].type === 'yellow') {
        fishies[i].getInFormation($('body').height() / 2 + i*40, $('body').width() / 2 + i * 20);
      } else if (fishies[i].type === 'puff') {
        fishies[i].getInFormation($('body').height() / 2 + i*40, $('body').width() / 2 + i * 20 + 50);
      }
    }
  });


});

