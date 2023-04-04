
// Pick a random choice from rock, paper, or scissors
function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"];
    let choice = Math.floor(Math.random() * 2);
    return choices[choice];
}

// Play a single round of rock, paper, scissors
function playRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        alert("It's a tie!");
        return 0;
    }

    if (playerSelection === "Rock") {
        if (computerSelection === "Paper") {
            alert( "You Lose! Paper beats Rock.");
            return 1;
        } else if (computerSelection === "Scissors") {
            alert( "You Win! Rock beats Scissors");
            return 2;
        }
    } else if (playerSelection === "Paper") {
        if (computerSelection === "Rock") {
            alert( "You Win! Paper beats Rock!");
            return 2;
        } else if (computerSelection === "Scissors") {
            alert("You Lose! Scissors beats Paper.");
            return 1;
        }
    } else {
        if (computerSelection === "Paper") {
            alert("You Win! Scissors beats Paper.");
            return 2;
        } else if (computerSelection === "Rock") {
            alert("You Lose! Rock beats Scissors");
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
        alert("You win this game!");
    } else {
        alert("You lost this game.");
    }
}
