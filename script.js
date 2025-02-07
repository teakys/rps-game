let computerChoice;
let humanChoice;
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    computerChoice = Math.floor(Math.random() * 100) + 1
  if (computerChoice < 33 && (humanChoice == 1|humanChoice == 2|humanChoice == 3)) {
    console.log("And I have chosen Rock");
    computerChoice = 1;
    return computerChoice;
  } else if (computerChoice < 66 && (humanChoice == 1|humanChoice == 2|humanChoice == 3)) {
    console.log("And I have chosen Paper");
    computerChoice = 2;
    return computerChoice;
  } else if (computerChoice > 66 && (humanChoice == 1|humanChoice == 2|humanChoice == 3)) {
    console.log("And I have chosen Scissors");
    computerChoice = 3;
    return computerChoice;
  } else {}
}

function getHumanChoice() {
  humanChoice = prompt("Rock, Paper or Scissors?");
  if (humanChoice.toLowerCase() === "rock") {
    console.log("You have chosen Rock");
    humanChoice = 1;
    return humanChoice;
  } else if (humanChoice.toLowerCase() === "paper") {
    console.log("You have chosen Paper");
    humanChoice = 2;
    return humanChoice;
  } else if (humanChoice.toLowerCase() === "scissors") {
    console.log("You have chosen Scissors");
    humanChoice = 3;
    return humanChoice;
  } else { alert("You have mispelled. Try again.") }
}

function playGame() {

  alert("Let's play a best of 5");
    
  function playRound(computerChoice, humanChoice) {

    if (humanChoice == undefined | computerChoice == undefined)  {}

    else if (humanChoice == computerChoice) {
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

  while (humanScore < 3 && computerScore < 3) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(computerSelection, humanSelection);
    console.log("");
    console.log(`The score is Human: ${humanScore} : Computer: ${computerScore}`);
    console.log("");
  }
  if (humanScore > computerScore) {
    console.log("You Win!");
  } else if (humanScore == computerScore) {
    console.log("Its a Tie!");
  } else {
    console.log("You Lose!");
  }
  humanScore = 0;
  computerScore = 0;
}



