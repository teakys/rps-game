let computerChoice;
let humanChoice;
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  computerChoice = Math.floor(Math.random() * 100) + 1
  if (computerChoice < 33) {
    console.log("And I have chosen rock");
    computerChoice = 1;
    return computerChoice;
  } else if (computerChoice < 66) {
    console.log("And I have chosen paper");
    computerChoice = 2;
    return computerChoice;
  } else if (computerChoice > 66) {
    console.log("And I have chosen scissors");
    computerChoice = 3;
    return computerChoice;
  } else { alert("something went wrong C") }
}

function getHumanChoice() {
  humanChoice = prompt("Rock, Paper or Scissors?");
  if (humanChoice.toLowerCase() === "rock") {
    console.log("You have chosen rock");
    humanChoice = 1;
    return humanChoice;
  } else if (humanChoice.toLowerCase() === "paper") {
    console.log("You have chosen paper");
    humanChoice = 2;
    return humanChoice;
  } else if (humanChoice.toLowerCase() === "scissors") {
    console.log("You have chosen scissors");
    humanChoice = 3;
    return humanChoice;
  } else { alert("something went wrong H") }
}

function playGame() {

  function playRound(computerChoice, humanChoice) {

    if (humanChoice == computerChoice) {
      console.log("its a tie!");
    } 

    else if (humanChoice == 1 && computerChoice == 3) {
      humanScore++;
      console.log("You win! Rock beats Scissors");
    } else if (humanChoice == 1 && computerChoice == 2) {
      computerScore++;
      console.log("You lose! Paper beats Rock");
    } else if (humanChoice == 2 && computerChoice == 1) {
      humanScore++;
      console.log("You win! Paper beats Rock");
    } else if (humanChoice == 2 && computerChoice == 3) {
      computerScore++;
      console.log("You lose! Scissors beats Paper");
    } else if (humanChoice == 3 && computerChoice == 1) {
      computerScore++;
      console.log("You lose! Rock beats Scissors");
    } else if (humanChoice == 3 && computerChoice == 2) {
      humanScore++;
      console.log("You win! Scissors beats Paper");
    }
  }

  for(i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(computerSelection, humanSelection);
    console.log("");
    console.log(`The score is Human: ${humanScore} : Computer: ${computerScore}`);
    console.log("");
  }
  if (humanScore > computerScore) {
    console.log("you win!!!");
  } else if (humanScore == computerScore) {
    console.log("its a tie!!!");
  } else {
    console.log("you lose!!!");
  }
  humanScore = 0;
  computerScore = 0;
}



