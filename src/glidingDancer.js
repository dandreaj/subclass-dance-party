var makeGlidingDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = 5;
  this.glideDirection = 'right';
  this.dancerType = 'gliding';
  this.$node.append('<img src="fish-yellow-right.gif"></>');
  this.leftImage = "fish-yellow-left.gif";
  this.rightImage = "fish-yellow-right.gif";

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

  } else if(this.left > $("body").width()-100) {
    this.glideDirection = "left";
    this.setImage(this.leftImage);
  } else if(this.left < 0) {
    this.glideDirection = "right";
    this.setImage(this.rightImage);
  }

  this.setPosition(this.top, this.left);
};

makeGlidingDancer.prototype.lineUp = function(dancerIndex){
  this.glideDirection = "none";
  this.top = ($("body").height())/2 + dancerIndex*25;
  this.left = 100 + dancerIndex * 25;

};