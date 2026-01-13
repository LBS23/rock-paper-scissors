const btn = document.querySelectorAll("button");
const human = document.querySelector(".human-score");
const computer = document.querySelector(".computer-score");
const rounds = document.querySelector(".round-played");
const finalScore = document.querySelector("#final-score");

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
let round = 0;
function playGame() {
    let computerScore = 0;
    let humanScore = 0;
    function playRound(computerC, humanC){
        if (computerC.toLowerCase() === humanC.toLowerCase()){
            computerScore +=1;
            computer.textContent = `Computer Score: ${computerScore}`
            human.textContent = `Your Score: ${humanScore}`
            rounds.textContent = `Rounds Played: ${round}`
        }
        else if (computerC === "paper" && humanC === "rock"){
            computerScore += 1;
            
            computer.textContent = `Computer Score: ${computerScore}`;
            human.textContent = `Your Score: ${humanScore}`;
            rounds.textContent = `Rounds Played: ${round}`;
        }
        else if (computerC === "scissors" && humanC === "paper"){
            computerScore += 1;
            
            computer.textContent = `Computer Score: ${computerScore}`;
            human.textContent = `Your Score: ${humanScore}`;
            rounds.textContent = `Rounds Played: ${round}`;
        }
        else if (computerC === "rock" && humanC === "scissors") {
            computerScore +=1;
            
            computer.textContent = `Computer Score: ${computerScore}`;
            human.textContent = `Your Score: ${humanScore}`;
            rounds.textContent = `Rounds Played: ${round}`;
        }
        else {
            humanScore +=1;
            computer.textContent = `Computer Score: ${computerScore}`;
            human.textContent = `Your Score: ${humanScore}`;
            rounds.textContent = `Rounds Played: ${round}`;
        }
    }
        btn.forEach((button) => {
            button.addEventListener('click', () =>{    
                humanSelection = button.id;
                round +=1;
                comp = getComputerChoice();
                playRound(comp,humanSelection);
                console.log(round)
                if (round == 5){
                    btn.forEach((button) =>{
                        button.disabled = true;
                        console.log(button.disabled)
                        
                    });
                    if (humanScore > computerScore){
                        finalScore.textContent = "Congrats, You Won!";
                    }
                    else {
                        finalScore.textContent = "Unlucky, You Lose!";
                    }
                }
        }
        
)})
}





playGame()