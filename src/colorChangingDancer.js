var MakeColorChangingDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
};

// we want to create a color changing dancer
// every second color changes to new color

MakeColorChangingDancer.prototype = Object.create(MakeDancer.prototype);

MakeColorChangingDancer.prototype.constructor = MakeColorChangingDancer;