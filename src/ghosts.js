var Ghosts = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.prepend("<img class='blinky' src='redGhost.gif'/>")
  $(this.$node).attr('class', 'ghosts');
};

Ghosts.prototype = Object.create(MakeDancer.prototype);

Ghosts.prototype.constructor = Ghosts;

