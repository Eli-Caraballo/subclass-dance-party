describe('bouncyDancer', function() {

  var bouncyDancer;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    bouncyDancer = new MakeBouncyDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(bouncyDancer.$node).to.be.an.instanceof(jQuery);
  });
});