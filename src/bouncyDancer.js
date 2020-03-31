var MakeBouncyDancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="bouncyDancer dancer"></span>');
  MakeDancer.call(this, top, left, timeBetweenSteps);
};

MakeBouncyDancer.prototype = Object.create(MakeDancer.prototype);
MakeBouncyDancer.constructor = MakeBouncyDancer;

MakeBouncyDancer.prototype.step = function() {
  MakeDancer.prototype.step.call(this);
  // this.$node.animate({
  //   'top' : '1000'
  // }, 5000, function(){
  //   this.hide();
  // });
};
