var MakeBlinkyDancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="blinkyDancer dancer"></span>');
  MakeDancer.call(this, top, left, timeBetweenSteps);
};

MakeBlinkyDancer.prototype = Object.create(MakeDancer.prototype);
MakeBlinkyDancer.constructor = MakeBlinkyDancer;

MakeBlinkyDancer.prototype.step = function() {
  MakeDancer.prototype.step.call(this);
  this.$node.toggle();
};