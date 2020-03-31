var MakeBouncyDancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="bouncyDancer dancer"></span>');
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.step();
  this.setPosition(top, left);
};

MakeBouncyDancer.prototype = Object.create(MakeDancer.prototype);
MakeBouncyDancer.constructor = MakeBouncyDancer;

MakeBouncyDancer.prototype.step = function() {
  MakeDancer.prototype.step.call(this);
  this.$node.slideUp();
};
