function getComputerChoice() {

    //generating a random number between 1 and 3
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    //necessary logic for the checking of the numbers and outputing rps
    if (randomNumber === 1) {
        return "rock";
    } else if (randomNumber === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {

    //Explaining the choices
    console.log("Please select one of the folowing using a number:\n1.Rock\n2.Paper\n3.Scissors")
    //Using a prompt I made a selection
    let choice = prompt();
    if (choice == "rock") {
        return "rock";
    } else if (choice == "paper") {
        return "paper";
    } else {
        return "scissors";
    }
}


let humanScore = 0;
let computerScore = 0;
function playRound(humanChoice, computerChoice) {
    if (humanChoice == "rock" && computerChoice == "paper") {
        console.log("You loose!")
        computerScore += 1;
    } else if (humanChoice == "rock" && computerChoice == "rock") {
        console.log("It's a tie!")
    } else if (humanChoice == "rock" && computerChoice == "scissors") {
        console.log("You win!")
        humanScore += 1;
    }

    if (humanChoice == "paper" && computerChoice == "scissors") {
        console.log("You loose!")
        computerScore += 1;
    } else if (humanChoice == "paper" && computerChoice == "paper") {
        console.log("It's a tie!")
    } else if (humanChoice == "paper" && computerChoice == "rock") {
        console.log("You win!")
        humanScore += 1;
    }

    if (humanChoice == "scissors" && computerChoice == "rock") {
        console.log("You loose!")
        computerScore += 1;
    } else if (humanChoice == "scissors" && computerChoice == "scissors") {
        console.log("It's a tie!")
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
        console.log("You win!")
        humanScore += 1;
    }
}

function playGame() {

    for (let i = 0; i < 5; i += 1) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        console.log(humanScore, computerScore);
    }
    console.log("Final score:", humanScore, computerScore);

}

playGame();