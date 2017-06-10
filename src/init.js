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
      $(this).css({"opacity": "1"});
    });
  });

  $('.lineUpButton').on('click',function(event){
    for(var i=0;i<window.dancers.length;i++){
      window.dancers[i].lineUp(i);
    }
  });

//-----------------------------------------

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

