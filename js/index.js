let playerScore = 0;
let computerScore = 0;

const playerScoreElement = document.querySelector('.player-score');
const computerScoreElement = document.querySelector('.computer-score');
const rockButton = document.querySelector('#btn-rock');
const paperButton = document.querySelector('#btn-paper');
const scissorsButton = document.querySelector('#btn-scissors');
const div = document.querySelector('.output');



// Pick a random choice from rock, paper, or scissors
function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"];
    let choice = Math.floor(Math.random() * 3);
    return choices[choice];
}


function updateScoreDisplay() {
    playerScoreElement.textContent = playerScore;
    computerScoreElement.textContent = computerScore;
}

function checkForWinner() {
    if (playerScore === 5 || computerScore === 5) {
        let winner = playerScore === 5 ? 'Player' : 'Computer';
        div.textContent = (`${winner} wins the game! Play again?`);

        // Reset the scores and update the display
        playerScore = 0;
        computerScore = 0;
        updateScoreDisplay();
    }
}


// Play a single round of rock, paper, scissors
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        div.textContent = "It's a tie!";
    }
    if (playerSelection === "Rock") {
        if (computerSelection === "Paper") {
            div.textContent = "You Lose! Paper beats Rock."            
            computerScore++;
        } else if (computerSelection === "Scissors") {
            div.textContent = "You Win! Rock beats Scissors.";
            playerScore++;
        }
    } else if (playerSelection === "Paper") {
        if (computerSelection === "Rock") {
            div.textContent = "You Win! Paper beats Rock!";
            playerScore++;
        } else if (computerSelection === "Scissors") {
            div.textContent = "You Lose! Scissors beats Paper.";
            computerScore++;
        }
    } else {
        if (computerSelection === "Paper") {
            div.textContent = "You Win! Scissors beats Paper.";
            playerScore++;
        } else if (computerSelection === "Rock") {
            div.textContent = "You Lose! Rock beats Scissors.";
            computerScore++;
        }
    }
    updateScoreDisplay();
    checkForWinner();
}


rockButton.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const playerSelection = 'Rock';
    playRound(playerSelection, computerSelection);
})
paperButton.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const playerSelection = 'Paper';
    playRound(playerSelection, computerSelection);
})
scissorsButton.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const playerSelection = 'Scissors';
    playRound(playerSelection, computerSelection);
})

