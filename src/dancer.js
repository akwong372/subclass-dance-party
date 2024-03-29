// Creates and returns a new this object that can step
var MakeDancer = function(top, left, timeBetweenSteps) {

  // use jQuery to create an HTML <span> tag
  this.$node = $('<div class="dancer" id="dancer"></div>');
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  // create a method that returns the coordinates for the dancer created
  //this.coords = this.$node.getBoundingClientRect();
  // add a id to the dancer span
  this.step();
  this.setPosition(top, left);

  // now that we have defined the this object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body

};

MakeDancer.prototype.step = function() {
  // the basic this doesn't do anything interesting at all on each step,
  // it just schedules the next step
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};


MakeDancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};
