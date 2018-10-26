describe('Ghosts', function() {

  var ghosts, clock;
  var timeBetweenSteps = 100;
  var ghostSound = new Audio('Soundfiles/pacman_eatghost.wav')

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    ghosts =  new Ghosts(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(ghosts.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a sound for eating a ghost', function() {
    expect(ghostSound).to.not.equal(undefined);
  });
});