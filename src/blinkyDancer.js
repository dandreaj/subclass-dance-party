var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = 500;
  this.dancerType = 'blinky';
  this.$node.append('<img src="fish-puff.gif"></>');
  this.size = 100;
};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
makeBlinkyDancer.prototype.oldStep = makeDancer.prototype.step;

makeBlinkyDancer.prototype.step = function() {

    // call the old version of step at the beginning of any call to this new version of step
    this.oldStep();

    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    if(this.size === 100){
      this.size = 50;
    } else {
      this.size = 100;
    }
    this.$node.find('img').attr('width', this.size);
   // this.$node.toggle(),
};

makeBlinkyDancer.prototype.lineUp = function(dancerIndex){

  this.top = ($("body").height())/2 + dancerIndex*25;
  this.left = 100 + dancerIndex * 25;
  this.setPosition(this.top,this.left);
};