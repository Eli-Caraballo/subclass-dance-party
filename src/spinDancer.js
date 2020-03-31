var MakeSpinDancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="spinDancer dancer"></span>');
  MakeDancer.call(this, top, left, timeBetweenSteps);
};

MakeSpinDancer.prototype = Object.create(MakeDancer.prototype);
MakeSpinDancer.constructor = MakeSpinDancer;

MakeSpinDancer.prototype.step = function() {
  MakeDancer.prototype.step.call(this);
  this.$node.animate({width: '1px'});
  this.$node.animate({width: '10px'});
  this.$node.animate({height: '10px'});
  this.$node.animate({width: '1px'});
  this.$node.animate({height: '1px'});
};
