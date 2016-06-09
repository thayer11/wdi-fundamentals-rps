
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
        if (move ==undefined)
        {move =getInput()}
            return move; 
}
   
var getComputerMove=function(move){
    if (move ==undefined)
    {move =randomPlay()}
        return move;
}


var getWinner = function(playerMove, computerMove){
    var winner;
if (playerMove===computerMove){
    winner = "tie";
}
if (playerMove === "rock"){
 if (computerMove === "scissors"){
    winner = "player";
} else {
    winner = "computer";
    }
}

if (playerMove === "paper") {
 if (computerMove === "scissors"){
    winner = "computer";
} else {
    winner = "player";
    }
}

if (playerMove === "scissors") {
  if (computerMove === "rock"){
    winner = "computer";
} else {
    winner = "player"
        }
    }
    console.log ('Player chose' + playerMove + 'while computer chose' + computerMove + 'so the winner is,' + winner);
return winner;
}

var playToFive= function(playerWins, computerWins) {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    console.log(winner);
    while (computerWins < 5 && playerWins < 5) {
    var winner = getWinner(getPlayerMove(), getComputerMove());
    if (winner === "computer"){
    console.log(winner);
    computerWins +=1;
}
    else if (winner === "player"){
    console.log(winner);
    playerWins +=1;
}
console.log ('The score is' +playerWins + 'to' + computerWins + '.');
 }       
    
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    return [playerWins, computerWins];
}

playToFive();