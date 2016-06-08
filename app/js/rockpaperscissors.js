
////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////
var getPlayerMove=function(move){
        if (move !==null)
        {return move}
        else (move =getInput())
}
   
var getComputerMove=function(move){
    if (move !==null)
    {return move}
    else (move =randomPlay())
}


var getWinner=fuction(playerMove, computerMove){
if (playerMove===computerMove){
    return "tie";
}
if (playerMove === "rock"){
 if (computerMove === "scissors"){
    return "player";
} else {
    return "computer";
    }
}

if (playerMove === "paper") {
 if (computerMove === "scissors"){
    return "computer";
} else {
    return "player";
    }
}

if (playerMove === "scissors") {
  if (computerMove === "rock"){
    return "computer";
} else {
    return "player"
        }
    }
}
var playToFive= function(playerWins, computerWins) {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0; 
    var computerWins = 0;
    while (computerWins < 5 && playerWins < 5);
    
        console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
    
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    return [playerWins, computerWins];
}

