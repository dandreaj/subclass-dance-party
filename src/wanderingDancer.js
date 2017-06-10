var makeWanderingDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = 5;
  this.counter = 0;
  this.topDirection = 1;
  this.leftDirection = 1;
  this.$node.css({"border-color":"yellow", "border-radius":0});
  this.stepOptions = [-1,0,1];
  this.dancerType = 'wandering';

};

makeWanderingDancer.prototype = Object.create(makeDancer.prototype);
makeWanderingDancer.prototype.constructor = makeWanderingDancer;

makeWanderingDancer.prototype.oldStep = makeDancer.prototype.step;

makeWanderingDancer.prototype.step = function (){
  this.oldStep();
  if(this.left > $("body").width()-20){
    this.leftDirection = -1;
  } else if(this.left < 0){
    this.leftDirection = 1;
  }

  if(this.top > $("body").height()-20){
    this.topDirection = -1;
  } else if(this.top < 32){
    this.topDirection = 1;
  }

  if(this.counter % 200 ===0){
    this.topDirection = this.stepOptions[(Math.floor(Math.random() * (3 - 1 + 1)) + 1)-1];
    this.leftDirection = this.stepOptions[(Math.floor(Math.random() * (3 - 1 + 1)) + 1)-1];
  }
  this.left = this.left + this.leftDirection;
  this.top = this.top + this.topDirection;
  this.setPosition(this.top, this.left);
  this.counter++;
};

makeWanderingDancer.prototype.lineUp = function(dancerIndex){
  this.counter = 0;
  this.stepOptions = [0,0,0];
  this.top = ($("body").height())/2;
  this.left = 100 + dancerIndex * 25;
};