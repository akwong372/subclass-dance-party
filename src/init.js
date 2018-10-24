$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    window.dancers.push(dancer);
    $('body').append(dancer.$node);
  });

  $('.lineUpBtn').on('click', function(event) {
    // $('.dancer').addClass('lineUp');
    $('.dancer').animate({'top': '200px', 'margin': '25px'});
  });

  $('.findPartnerBtn').on('click', function(event){
    // try to get the growing dancers to move to the blinky dancers.
    // have them relocate to the same top position
    var blinkyDancer = $('#dancer').position();
    var growingDancerPos = $('#growingDancer').position();
    growingDancerPos.top = blinkyDancer.top;
    growingDancerPos.left = blinkyDancer.left - 35;
    $('#growingDancer').animate(growingDancerPos);
    document.getElementById('dancer').remove();
  });
});

