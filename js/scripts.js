//BUSINESS-LOGIC

//creates a a player and sets initial score to zero
function Player(playerName) {
  this.playerName;
  this.roll = 0;
  this.tempscore = 0
  this.totalscore = 0;
  this.turn = turn;
};


//creating random number
var randNumber = function(){
  return Math.floor(6 * Math.random()) +1;
};


//Creates random number,saves it and then returns it

  Player.prototype.rollone = function() {
    if (this.roll === 1) {
      this.tempscore = 0;
      alert("Sorry" + this.playerName + "you rolled a 1! Your turn is over!")

    } else {
      this.tempscore += this.roll;
    }
  }

  // enables the user to hold

 Player.prototype.hold = function() {
   this.totalscore += this.tempscore;
   this.tempscore = 0;
   alert(this.playerName + ", your turn is over, pass the mouse!")
 };

// checks and notifies which player has reahed 100 0r more points
 Player.prototype.winnerCheck = function() {
  if (this.totalscore >= 100) {
    alert(this.playerName + " You are the winner!");
  }
}
