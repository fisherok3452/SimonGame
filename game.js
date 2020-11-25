var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];

// var started = false;
var level = 0;
$(document).one("click",function (){
    nextSequence();
    $("#level-title").text("Level " + level);

    });
// $("body").click(function() {
//   if (!started) {
//     $("#level-title").text("Level " + level);
//     nextSequence();
//     started = true;
//   }
// });
$(".btn").click(function() {
  var userChosenColour = this.id;
  userClickedPattern.push(userChosenColour);

  if (gamePattern[userClickedPattern.length-1] === userClickedPattern[userClickedPattern.length-1]){
    if (gamePattern.length === userClickedPattern.length){
      setTimeout(function() {
        nextSequence();
      }, 1000);
    }
  }
  else {
    playSound("wrong");
    $("body").addClass("game-over");
    setTimeout(function(){
      $("body").removeClass("game-over");
    }, 200);
    $("h1").text("Game Over, Restart");
    setTimeout(function(){
      restart();
    },100);

  }
  playSound(userChosenColour);
  animatePress(userChosenColour);
})

function nextSequence() {
  level++;
  $("#level-title").text("Level " + level);
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColors[randomNumber];
  gamePattern.push(randomChosenColour);
  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
  userClickedPattern = [];
}


function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColour) {
  $("." + currentColour).addClass("pressed");
  setTimeout(function() {
    $("." + currentColour).removeClass("pressed");
  }, 100);
}
function restart(){
   level = 0;
  gamePattern = [];
  userClickedPattern = [];
  $(document).one("click",function (){
    nextSequence();
    $("#level-title").text("Level " + level);

    });
}
