function getComputerChoice() {
    let ComputerChoice = Math.random()
    if (ComputerChoice < 0.33) {
        return "rock";
    }
    else if (ComputerChoice < 0.66) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

let humanScore = 0;
let computerScore = 0;

const roundMsg = document.createElement("p");
const scoreMsg = document.createElement("p");
const finalMsg = document.createElement("p");

const playerScoreSpan = document.getElementById("playerScore");
const computerScoreSpan = document.getElementById("computerScore");
const resultDiv = document.getElementById("result");
const resetButton = document.getElementById("resetButton");

resetButton.addEventListener("click", resetGame);

const gameButtons = document.querySelectorAll(".game-button");

gameButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        playRound(btn.id, getComputerChoice());
    });
});

function resetGame() {
    humanScore = 0;
    computerScore = 0;

    playerScoreSpan.textContent = humanScore;
    computerScoreSpan.textContent = computerScore;

    roundMsg.textContent = "";
    scoreMsg.textContent = "";
    finalMsg.textContent = "";
    resultDiv.textContent = "Game has been reset!";

    gameButtons.forEach(btn => {
        btn.disabled = false;
    });
}

resultDiv.appendChild(roundMsg);
resultDiv.appendChild(scoreMsg);
resultDiv.appendChild(finalMsg);

function playRound(humanChoice, computerChoice) {
    const winPatterns = {
        "rock": "scissors",
        "paper": "rock",
        "scissors": "paper",
    }

    let message = "";

    if (winPatterns[humanChoice] === computerChoice) {
        humanScore++;
        message = `✅ You win! ${humanChoice} beats ${computerChoice}`;
    } else if (humanChoice === computerChoice) {
        message = `⚖️ Draw! You both chose ${humanChoice}`;
    } else {
        computerScore++;
        message = `❌ You lose! ${computerChoice} beats ${humanChoice}`;
    }

    updateScore(message);
}

function updateScore(roundMessage) {
    roundMsg.textContent = roundMessage;
    scoreMsg.textContent = `Score → You: ${humanScore} | Computer: ${computerScore}`;

    playerScoreSpan.textContent = humanScore;
    computerScoreSpan.textContent = computerScore;

    if (humanScore >= 5 || computerScore >= 5) {
        announceWinner();
    }
}

function announceWinner() {
    if (humanScore > computerScore) {
        finalMsg.textContent = "👑 You are the Champion!";
    } else {
        finalMsg.textContent = "🤖 Computer wins this time!";
    }

    gameButtons.forEach(btn => btn.disabled = true);
}
