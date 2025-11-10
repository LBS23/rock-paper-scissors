
function getComputerChoice() {
    let answer;
    answer = Math.floor(Math.random() * 3);
    if (answer == 0) {
        return "rock";
    }   
    else if (answer == 1) {
        return "paper";
    }
    else {
        return "scissors";
    }
}
function getHumanChoice() {
    let choice;
    choice = prompt("Enter your choice: ")
    return choice;
}


function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice
    computerChoice = computerChoice
    if (computerChoice === "rock" && humanChoice === "scissors") {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    } 
    else if (computerChoice === "scissors" && humanChoice === "paper") {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }
    else if (computerChoice === "paper" && humanChoice === "rock") {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }
    else if (computerChoice === humanChoice) {
        console.log(`It's a draw! both players chose ${humanChoice}`);
    }
    else {
        console.log(`You won! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    }
}
    for (let round = 0; round <5; round++){
    playRound(getHumanChoice(),getComputerChoice())
    }
}

playGame()