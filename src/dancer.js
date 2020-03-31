// Creates and returns a new dancer object that can step
var MakeDancer = function(top, left, timeBetweenSteps) {
  this.timeBetweenSteps = timeBetweenSteps;
  this.left = left;
  this.top = top;
  this.step();
  this.setPosition(top, left);
};

MakeDancer.prototype.step = function() {
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

MakeDancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: this.top,
    left: this.left
  };
  this.$node.css(styleSettings);
};

MakeDancer.prototype.lineUp = function(){
  var styleSettings = {
    top: 350,
  };
  this.$node.css(styleSettings);
};

MakeDancer.prototype.breakUp = function(){
  this.setPosition(
    $('body').height() * Math.random(),
    $('body').width() * Math.random());
};

MakeDancer.prototype.react = function() {
  var styleSettings = {
    color: orange,
  };
  this.$node.css(styleSettings);
};