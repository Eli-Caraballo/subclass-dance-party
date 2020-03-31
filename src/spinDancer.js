var MakeSpinDancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="spinDancer dancer"></span>');
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.setPosition(top, left);
};

MakeSpinDancer.prototype = Object.create(MakeDancer.prototype);
MakeSpinDancer.constructor = MakeSpinDancer;

MakeSpinDancer.prototype.step = function() {
  MakeDancer.prototype.step.call(this);
  this.$node.slideUp();
};
