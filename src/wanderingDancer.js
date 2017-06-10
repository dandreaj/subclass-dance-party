var makeWanderingDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = 5;
  this.counter = 0;
  this.topDirection = 1;
  this.leftDirection = 1;
  this.$node.append('<img src="fish-blue-right.gif"></>');
  this.stepOptions = [-1,0,1];
  this.dancerType = 'wandering';
  this.rightImage = "fish-blue-right.gif";
  this.leftImage = "fish-blue-left.gif";

};

makeWanderingDancer.prototype = Object.create(makeDancer.prototype);
makeWanderingDancer.prototype.constructor = makeWanderingDancer;

makeWanderingDancer.prototype.oldStep = makeDancer.prototype.step;

makeWanderingDancer.prototype.step = function (){
  this.oldStep();
  if(this.left > $("body").width()-100){
    this.leftDirection = -1;
  } else if(this.left < 0){
    this.leftDirection = 1;
  }

  if(this.top > $("body").height()-100){
    this.topDirection = -1;
  } else if(this.top < 32){
    this.topDirection = 1;
  }

  if(this.counter % 200 ===0){
    this.topDirection = this.stepOptions[(Math.floor(Math.random() * (3 - 1 + 1)) + 1)-1];
    this.leftDirection = this.stepOptions[(Math.floor(Math.random() * (3 - 1 + 1)) + 1)-1];
    if (this.leftDirection === -1){
      this.setImage(this.leftImage);
    } else if (this.leftDirection === 1){
      this.setImage(this.rightImage);
    }

  }
  this.left = this.left + this.leftDirection;
  this.top = this.top + this.topDirection;
  this.setPosition(this.top, this.left);
  this.counter++;
};

makeWanderingDancer.prototype.lineUp = function(dancerIndex){
  this.counter = 0;
  this.stepOptions = [0,0,0];
  this.top = ($("body").height())/2 + dancerIndex * 25;
  this.left = 100 + dancerIndex * 25;
};