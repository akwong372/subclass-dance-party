$(document).ready(function() {
  window.dancers = [];
  window.growers = [];
  window.colorChanger = [];
  window.ghosts = [];
  var ghostSound = new Audio('Soundfiles/pacman_eatghost.wav');
  var score = 0;
  $('.score').html('Score: ' + score);
  // side bar jquery animation
  $('.sidenav').sidenav();


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

    if (dancer instanceof MakeGrowingDancer) {
      window.growers.push(dancer);
    }
    if (dancer instanceof MakeColorChangingDancer) {
      window.colorChanger.push(dancer);
    }

    $('.bodyContainer').append(dancer.$node);
  });
  //end of addDancer


  $('.lineUp').on('click', function(event) {
    // $('.dancer').addClass('lineUp');
    $('.dancer').animate({'top': '243px', 'margin': '25px'});
  });

  $('.pairUp').on('click', function(event){
    // try to get the growing dancers to move to the blinky dancers.
    // have them relocate to the same top position
    var sorted = [window.growers.length, window.colorChanger.length].sort(function (a, b){
      return a - b;
    });
    var longest = sorted[1];
    for (var i = 0; i < longest; i++) {
      var pair1Pos = $(window.growers[i].$node).position();
      var pair2Pos = $(window.colorChanger[i].$node).position();
      pair1Pos.top = pair2Pos.top;
      pair1Pos.left = pair2Pos.left - 35;
      $(window.growers[i].$node).animate(pair1Pos);
    }
    // var blinkyDancer = $('#dancer').position();
    // var growingDancerPos = $('#growingDancer').position();
    // growingDancerPos.top = blinkyDancer.top;
    // growingDancerPos.left = blinkyDancer.left - 35;
    // $('#growingDancer').animate(growingDancerPos);
    // document.getElementById('dancer').remove();
  });

  $('.bodyContainer').mouseover(function(event) {
    console.log(event.target.id);

    if (event.target.id === "growingDancer") {
      console.log('works');
      $('.blinky').attr('src', "vGhost.gif");
    }

    if (event.target.outerHTML !== '<img class="blinky" src="redGhost.gif">') {
      if (event.target.outerHTML === '<img class="blinky" src="vGhost.gif">') {
        ghostSound.play();
      }
      $(event.target).remove();
      score++;
      $('.score').html('Score: ' + score);
    }

  });

  $(document).bind('mousemove', function (e) {
    $('#pacMan').css({
      left: e.pageX - 141,
      top: e.pageY - 100
    });
  });

//audio playback in google chrome
  var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
  if (!isChrome) {
    $('#chromeAudio').remove();
  } else {
    $('#notChromeAudio').remove();
  }



});

