var makeGlidingDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = 5;
  this.glideDirection = 'right';
  this.$node.css({"border-color":"blue"});
  this.dancerType = 'gliding';

};

makeGlidingDancer.prototype = Object.create(makeDancer.prototype);
makeGlidingDancer.prototype.constructor = makeGlidingDancer;

makeGlidingDancer.prototype.oldStep = makeDancer.prototype.step;

makeGlidingDancer.prototype.step = function (){
  this.oldStep();
  if(this.glideDirection === 'right') {
    this.left = this.left + 1;
  }

  if(this.glideDirection === 'left') {
    this.left = this.left - 1;
  }

  if(this.glideDirection === "none"){

  } else if(this.left > $("body").width()-20) {
    this.glideDirection = "left";
  } else if(this.left < 0) {
    this.glideDirection = "right";
  }



  this.setPosition(this.top, this.left);
};

makeGlidingDancer.prototype.lineUp = function(dancerIndex){
  this.glideDirection = "none";
  this.top = ($("body").height())/2;
  this.left = 100 + dancerIndex * 25;

};