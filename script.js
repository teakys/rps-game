let computerChoice;
let humanChoice;
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  computerChoice = Math.floor(Math.random() * 100) + 1
  if (computerChoice < 33) {
    computerChoice = 1;
    return computerChoice;
  } else if (computerChoice < 66) {
    computerChoice = 2;
    return computerChoice;
  } else if (computerChoice > 66) {
    computerChoice = 3;
    return computerChoice;
  } else { alert("something went wrong C") }
}

function getHumanChoice() {
  humanChoice = prompt("what do you choose?");
  if (humanChoice === "rock") {
    humanChoice = 1;
    return humanChoice;
  } else if (humanChoice === "paper") {
    humanChoice = 2;
    return humanChoice;
  } else if (humanChoice === "scissors") {
    humanChoice = 3;
    return humanChoice;
  } else { alert("something went wrong H") }
}

function playGame() {

  function playRound(humanChoice, computerChoice) {

    if (humanChoice == computerChoice) {
      console.log("its a tie!");
    } 

    else if (humanChoice == 1 && computerChoice == 3) {
      humanScore += 1; 
      console.log("You win! Rock beats Scissors");
    } else if (humanChoice == 1 && computerChoice == 2) {
      computerScore += 1;
      console.log("You lose! Paper beats Rock");
    } else if (humanChoice == 2 && computerChoice == 1) {
      humanScore += 1;
      console.log("You win! Paper beats Rock");
    } else if (humanChoice == 2 && computerChoice == 3) {
      computerScore += 1;
      console.log("You lose! Scissors beats Paper");
    } else if (humanChoice == 3 && computerChoice == 1) {
      computerScore += 1;
      console.log("You lose! Rock beats Scissors");
    } else if (humanChoice == 3 && computerChoice == 2) {
      humanScore += 1;
      console.log("You win! Scissors beats Paper");
    }
  }

  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();


  for(i = 0; i < 4; i++) {
    playRound(humanSelection, computerSelection);
  }
  if (humanScore > 2) {
    console.log("you win!!!");
  } else {
    console.log("you lose!!");
  }
}

