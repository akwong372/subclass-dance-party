describe('colorChangingDancer', function() {

  var colorChangingDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    colorChangingDancer =  new MakeColorChangingDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(colorChangingDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a color function that changes the color from red to blue', function() {
    // sinon.spy(colorChangingDancer.$node, 'toggle');
    colorChangingDancer.color(timeBetweenSteps);
    expect(colorChangingDancer.color).to.be.a('function');
  });
  //try to check and see if the color is actually changing from red to blue.
});