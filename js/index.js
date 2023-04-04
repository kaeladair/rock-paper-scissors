
// Pick a random choice from rock, paper, or scissors
function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"];
    let choice = Math.floor(Math.random() * 2);
    return choices[choice];
}

// Play a single round of rock, paper, scissors
function playRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        console.log("It's a tie!");
        return 0;
    }

    if (playerSelection === "Rock") {
        if (computerSelection === "Paper") {
            console.log( "You Lose! Paper beats Rock.");
            return 1;
        } else if (computerSelection === "Scissors") {
            console.log( "You Win! Rock beats Scissors");
            return 2;
        }
    } else if (playerSelection === "Paper") {
        if (computerSelection === "Rock") {
            console.log( "You Win! Paper beats Rock!");
            return 2;
        } else if (computerSelection === "Scissors") {
            console.log("You Lose! Scissors beats Paper.");
            return 1;
        }
    } else {
        if (computerSelection === "Paper") {
            console.log("You Win! Scissors beats Paper.");
            return 2;
        } else if (computerSelection === "Rock") {
            console.log("You Lose! Rock beats Scissors");
            return 1;
        }
    }
}

// Plays a game of five rounds and keeps a score
function game() {
    let playerScore = 0;

    for (let i = 0; i < 5; i++) {
        let playerSelection = window.prompt("Enter your choice! (Rock, Paper, Scissors):");
        let computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);
        if (result === 2) {
            playerScore += 1;
        }
    }

    if (playerScore >= 3) {
        console.log("You win this game!");
    } else {
        console.log("You lost this game.");
    }
}
