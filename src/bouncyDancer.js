var MakeBouncyDancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="bouncyDancer dancer"> <img class="bitMoji" src="eli.png"></img></span>');
  MakeDancer.call(this, top, left, timeBetweenSteps);
};

MakeBouncyDancer.prototype = Object.create(MakeDancer.prototype);
MakeBouncyDancer.constructor = MakeBouncyDancer;

MakeBouncyDancer.prototype.step = function() {
  MakeDancer.prototype.step.call(this);
  this.$node.animate({
    left: "1000px",
  }, "slow");
};
