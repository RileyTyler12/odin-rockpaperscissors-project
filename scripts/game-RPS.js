//Written by Riley Tyler


//Functions

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

//Play Game Function
function playGame() {
    //Score Variables
    let humanScore = 0;
    let computerScore = 0;

    //Game Loop for 5 rounds then declare game winner
    let roundNum = 1;
    while (roundNum <= 5) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);

        //Announce Current Round and Scores
        console.log("End of round " + roundNum);
        console.log("Human Score: " + humanScore);
        console.log("Computer Score: " + computerScore);

        roundNum++;
    }
    if (humanScore === computerScore) {
        console.log("Game tied! Your score is " + humanScore + ". Computer score is " + computerScore + ".")
    }
    else {
        if (humanScore > computerScore) {
            console.log("You win the game! Your score is " + humanScore + ". Computer score is " + computerScore + ".")
        }
        else {
            console.log("You lose the game! Your score is " + humanScore + ". Computer score is " + computerScore + ".")
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
}

//Start the game by calling playGame function
playGame();