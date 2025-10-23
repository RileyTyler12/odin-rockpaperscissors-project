//Written by Riley Tyler
"use strict";

//Score and Game Variables
let humanScore = 0;
let computerScore = 0;
let roundNum = 1;
let winnnerChosen = false;

//Setup Event Listeners
let elementIDs = ["Rock", "Paper", "Scissors"];
elementIDs.forEach(element => {
    document.getElementById(element).addEventListener("click", (event) => {
        playRound(element, getComputerChoice());
    });
});

//Functions

function setResultsDisplayText(string, reset) {
    let resultsElement = document.getElementById("results");
    if(reset) {
        resultsElement.innerHTMl = "";
        let textElement = document.createElement("p");
        textElement.textContent = string;
        resultsElement.appendChild(textElement);

    }
    else {
        let textElement = document.createElement("p");
        textElement.textContent = string;
        resultsElement.appendChild(textElement);
    }
}

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

//Announce current scores function
function announceCurrentScores() {
    //Announce Current Round and Scores
    setResultsDisplayText("End of round " + roundNum);
    setResultsDisplayText("Human Score: " + humanScore);
    setResultsDisplayText("Computer Score: " + computerScore);
}

//Announce ending and winning game scores function
function announceEndingScores() {
    if (humanScore === computerScore) {
        setResultsDisplayText("Game tied! Your score is " + humanScore + ". Computer score is " + computerScore + ".", true)
    }
    else {
        if (humanScore > computerScore) {
            setResultsDisplayText("You win the game! Your score is " + humanScore + ". Computer score is " + computerScore + ".", true)
        }
        else {
            setResultsDisplayText("You lose the game! Your score is " + humanScore + ". Computer score is " + computerScore + ".", true)
        }
    }
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
            setResultsDisplayText("You tied this round! Try again.", true);
            break;
        case "player":
            setResultsDisplayText("You win this round! Because " + playerChoice + " beats " + computerChoice + ".", true);
            humanScore++;
            break;
        case "computer":
            setResultsDisplayText("You lose this round! Because " + computerChoice + " beats " + playerChoice + ".", true);
            computerScore++
            break;
    }

    //Increment round number
    roundNum++;

    //Call Announce Function
    announceCurrentScores();

    if (humanScore === 5 || computerScore === 5) {
        announceEndingScores();
    }
}