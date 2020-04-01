describe('spinDancer', function() {

  var spinDancer;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    spinDancer = new MakeSpinDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(spinDancer.$node).to.be.an.instanceof(jQuery);
  });
});