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
console.log(getComputerChoice())
