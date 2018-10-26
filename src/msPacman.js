var MsPacman = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.prepend("<img class='mspacman' src='mspacman.gif'/>")
  $(this.$node).attr('class', 'msPacman');
  $(this.$node).attr('id', 'retro-mspacman')
};

MsPacman.prototype = Object.create(MakeDancer.prototype);

MsPacman.prototype.constructor = MsPacman;
