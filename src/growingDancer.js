var MakeGrowingDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.scale(timeBetweenSteps);
  this.$node.addClass('growingDancer');
};

MakeGrowingDancer.prototype = Object.create(MakeDancer.prototype);

MakeGrowingDancer.prototype.constructor = MakeGrowingDancer;
// We want the blinkyDancer to grow, and if possible shrink as well, in scale after 3 seconds

MakeGrowingDancer.prototype.scale = function(time) {
  // MakeDancer.prototype.step.call(this);
  $(this.$node).css({'animation': 'loopingGrow ' + time + 'ms infinite', 'animation-direction': 'alternate' })
};