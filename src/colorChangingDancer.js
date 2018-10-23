var MakeColorChangingDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.color(timeBetweenSteps);
  this.$node.addClass('colorChangingDancer');
};

// we want to create a color changing dancer
// every second color changes to new color

MakeColorChangingDancer.prototype = Object.create(MakeDancer.prototype);

MakeColorChangingDancer.prototype.constructor = MakeColorChangingDancer;

MakeColorChangingDancer.prototype.color = function(time) {
  $(this.$node).css({'animation': 'loopingColor ' + time + 'ms infinite', 'animation-direction': 'alternate' });
};