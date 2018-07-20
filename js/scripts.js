//BUSINESS-LOGIC

//creates a a player and sets initial score to zero
function Player(playerName) {
  this.playerName;
  this.roll = 0;
  this.tempScore = 0
  this.totalScore = 0;

};


//creating random number
var randNumber = function(){
  return Math.floor(6 * Math.random()) +1;
};


//Creates random number,saves it and then returns it

  Player.prototype.rollone = function() {
    if (this.roll === 1) {
      this.tempScore = 0;
      alert("Sorry you rolled a 1! Your turn is over!")

    } else {
      this.tempScore += this.roll;
    }
  }

  // enables the user to hold

 Player.prototype.hold = function() {
   this.totalScore += this.tempScore;
   this.tempScore = 0;
   alert(" Your turn is over, pass the mouse!")
 };

// checks and notifies which player has reahed 100 0r more points
 Player.prototype.winnerCheck = function() {
  if (this.totalScore >= 100) {
    alert(" You are the winner!");
  };
};


//USER-INTERFACE-LOGIC

$(document).ready(function() {
  var player1 = new Player("Player 1");
  var player2 = new Player("Player 2");

// display the player's rollscore and temporary score
  $("button#player1-roll").click(function(event) {
    player1.roll = randNumber();
    $("#die-roll-1").text(player1.roll);
    player1.rollone();
    $("#round-total-1").text(player1.tempScore);
  });


  $("button#player2-roll").click(function(event) {
    player2.roll = randNumber();
    $("#die-roll-2").text(player2.roll);
    player2.rollone();
    $("#round-total-2").text(player2.tempScore);
  });

  //display the player's total score and returns temporary score and rollscore back to zer0
  $("button#player1-hold").click(function(event) {
    player1.hold();
    $("#total-score-1").text(player1.totalScore);
    $("#round-total-1").empty();
    $("#die-roll-1").empty();
    player1.winnerCheck();
  });

  $("button#player2-hold").click(function(event) {
    player2.hold();
    $("#total-score-2").text(player2.totalScore);
    $("#round-total-2").empty();
    $("#die-roll-2").empty();
    player2.winnerCheck();
  });
});
