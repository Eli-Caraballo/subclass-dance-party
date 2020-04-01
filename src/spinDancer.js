var MakeSpinDancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="spinDancer dancer"> <img class="bitMoji" src="batman.png"></img></span>');
  MakeDancer.call(this, top, left, timeBetweenSteps);
};

MakeSpinDancer.prototype = Object.create(MakeDancer.prototype);
MakeSpinDancer.constructor = MakeSpinDancer;

MakeSpinDancer.prototype.step = function() {
  MakeDancer.prototype.step.call(this);
  this.$node.animate(
    { deg: 360 },
    {
      duration: 1200,
      step: function(now) {
        $(this).css({ transform: 'rotate(' + now + 'deg)' });
      }
    });
  this.$node.animate(
    { deg: -360 },
    {
      duration: 1200,
      step: function(now) {
        $(this).css({ transform: 'rotate(' + now + 'deg)' });
      }
    });
};
