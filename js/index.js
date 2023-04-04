
// Pick a random choice from rock, paper, or scissors
function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"];
    let choice = Math.floor(Math.random() * 2);
    return choices[choice];
}

// Play a single round of rock, paper, scissors
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection){
        return "It's a tie!";
    }

    if (playerSelection === "Rock"){
        if (computerSelection === "Paper"){
            return "You Lose! Paper beats Rock.";
        } else if (computerSelection === "Scissors"){
            return "You Win! Rock beats Scissors";
        }
    } else if (playerSelection === "Paper"){
        if (computerSelection === "Rock"){
            return "You Win! Paper beats Rock!";
        } else if (computerSelection === "Scissors"){
            return "You Lose! Scissors beats Paper.";
        }
    } else {
        if (computerSelection === "Paper"){
            return "You Win! Scissors beats Paper.";
        } else if (computerSelection === "Rock"){
            return "You Lose! Rock beats Scissors";
        }
    }
}
