var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
function neznauPochemuNoRabotaet (){

  if (gamePattern.length != 0 ){
    main();
  };};

var level = 0;
$("h1").one("click",function (){
   $("#level-title").text("Level 1");
    setTimeout(function() {
          nextSequence();
        }, 1250);

   setTimeout (function () {
    neznauPochemuNoRabotaet();}, 1300);
    });
var time;
function main (){
$(".btn").click(function() {
  var userChosenColour = this.id;
  userClickedPattern.push(userChosenColour);

  if (gamePattern[userClickedPattern.length-1] === userClickedPattern[userClickedPattern.length-1]){
    if (gamePattern.length === userClickedPattern.length){
         time = setTimeout(function() {
          nextSequence();
        }, 1250);


    }
  }
  else {
    playSound("wrong");
    $("body").addClass("game-over");
    setTimeout(function(){
      $("body").removeClass("game-over");
    }, 200);
    $("h1").text("Game Over, Restart");

        clearTimeout(time);
        restart();
    }
  playSound(userChosenColour);
  animatePress(userChosenColour);
});
}
function nextSequence() {
  level++;
  $("#level-title").text("Level " + level);
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColors[randomNumber];
  gamePattern.push(randomChosenColour);
 // $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
  userClickedPattern = [];

$("#" + randomChosenColour).addClass("scale1");
      setTimeout(function(){
      $("#" + randomChosenColour).removeClass("scale1");
}, 100);
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
  $(('h1')).one("click",function (){
      document.location.reload();
    // $("#level-title").text("Level " + level);
});

}

