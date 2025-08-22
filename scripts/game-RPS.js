//Written by Riley Tyler

//Initial Variables
let humanScore = 0;
let computerScore = 0;

//Functions
//

//getComputerChoice Function
function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * (3 - 1 + 1)) + 1; //Get random number between 1 and 3 inclusive
    let choice;
    switch(randomNum) { //Determine computer choice based on randomNum
        case 1:
            choice = "rock";
            break;
        case 2:
            choice = "paper";
            break;
        case 3:
            choice = "scissors";
            break;
    }
    return choice;
}

//getHumanChoice Function
function getHumanChoice() {
    let choice = prompt("Rock, Paper, Scissors! What is your choice?");
    return choice;
}

//playRound Function
function playRound(humanChoice, computerChoice) {
    let playerChoice = humanChoice.toLowerCase(); //toLowerCase to be case insensitive
    let winner;

    if (playerChoice === computerChoice) { //Determine Results
        winner = "tie";
    }
    else {
        switch(playerChoice) {
            case "rock":
                if (computerChoice === "scissors") {
                    winner = "player";
                }
                else {
                    winner = "computer";
                }
                break;
            case "scissors":
                if (computerChoice === "paper") {
                    winner = "player";
                }
                else {
                    winner = "computer";
                }
                break;
            case "paper":
                if (computerChoice === "rock") {
                    winner = "player";
                }
                else {
                    winner = "computer";
                }
                break;
        }
    }

    switch(winner) { //Announce Winner
        case "tie":
            console.log("You tied this round! Try again.");
            break;
        case "player":
            console.log("You win this round! Because " + playerChoice + " beats " + computerChoice + ".");
            humanScore++;
            break;
        case "computer":
            console.log("You lose this round! Because " + computerChoice + " beats " + playerChoice + ".");
            computerScore++
            break;
    }
}

//Start Game
