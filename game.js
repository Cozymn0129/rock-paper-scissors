function getComputerChoice() {
    let ComputerChoice = Math.random()
    if (ComputerChoice < 0.33) {
        return "rock";
    }
    else if (ComputerChoice < 0.66) {
        return "scissors";
    }
    else {
        return "paper";
    }
}

function getHumanChoice() {
    while (true) {
        let humanChoice = prompt("rock, scissors, or paper?");
        if (humanChoice === null) return null;

        let validHumanChoice = humanChoice.trim().toLowerCase();

        const validChoices = ["rock", "scissors", "paper"];
        if (!validChoices.includes(validHumanChoice)) {
            alert("Invalid choice! Please only type rock, scissors, or paper.")
            return getHumanChoice();
        }

        return validHumanChoice;
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    const winPatterns = {
        "rock": "scissors",
        "paper": "rock",
        "scissors": "paper",
    }

    if (winPatterns[humanChoice] === computerChoice) {
        humanScore++;
        return `You win! ${humanChoice} beats ${computerChoice}`
    }
    else if (humanChoice === computerChoice) {
        return `Draw! You both chose ${humanChoice}`
    }
    else {
        computerScore++;
        return `You lose! ${computerChoice} beats ${humanChoice}`
    }
}

function playGame() {
    let playTime = 5;
    for (let i = 0; i < playTime; i++) {
        const humanSelection = getHumanChoice();
        if (humanSelection === null) {
            console.log("Game ended early.");
            return;
        }
        const computerSelection = getComputerChoice();
        console.log(playRound(humanSelection, computerSelection));
    }

    console.log("==== Final Result ====");
    console.log(`You: ${humanScore} | Computer: ${computerScore}`);
    if (humanScore > computerScore) {
        console.log("👑 You are the Champion!");
    }
    else if (humanScore < computerScore) {
        console.log("🤖 Computer wins this time!");
    }
    else {
        console.log("⚖️ It's a draw!");
    }
    console.log("======================")
}
