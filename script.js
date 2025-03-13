let computerChoice;
let humanSelection;
let humanScore = 0;
let computerScore = 0;
let appropriateMessage = "";
let appropriateMessagePc = "";
let result = "";


const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

const text = document.querySelector('#text');
const block = document.createElement('p');


function getComputerChoice() {
  computerChoice = Math.floor(Math.random() * 100) + 1
  if (computerChoice < 33) {
    appropriateMessagePc = "rock";
    return 1;
  }
  else if (computerChoice < 66) {
    appropriateMessagePc = "paper";
    return 2;
  }
  else if (computerChoice < 100) {
    appropriateMessagePc = "scissors";
    return 3;
  }
  else console.log("something went wrong");
}

rock.addEventListener("click", () => {
  appropriateMessage = "rock";
  humanSelection = 1;
  playRound(getComputerChoice(), humanSelection);
});
paper.addEventListener("click", () => {
  appropriateMessage = "paper";
  humanSelection = 2;
  playRound(getComputerChoice(), humanSelection);
});
scissors.addEventListener("click", () => {
  appropriateMessage = "scissors";
  humanSelection = 3;
  playRound(getComputerChoice(), humanSelection);
});

function playRound(computerChoice, humanChoice) {

  if (humanChoice == computerChoice) {
    console.log("its a tie!");
    result = "tie"
  }

  else if (humanChoice == 1 && computerChoice == 3) {
    humanScore++;

    console.log("You win! Rock beats Scissors");
  } else if (humanChoice == 1 && computerChoice == 2) {
    computerScore++;
    result = "lose";
    console.log("You lose! Paper beats Rock");
  } else if (humanChoice == 2 && computerChoice == 1) {
    humanScore++;
    result = "win";
    console.log("You win! Paper beats Rock");
  } else if (humanChoice == 2 && computerChoice == 3) {
    computerScore++;
    result = "lose";
    console.log("You lose! Scissors beats Paper");
  } else if (humanChoice == 3 && computerChoice == 1) {
    computerScore++;
    result = "lose";
    console.log("You lose! Rock beats Scissors");
  } else if (humanChoice == 3 && computerChoice == 2) {
    humanScore++;
    result = "win"
    console.log("You win! Scissors beats Paper");
  }
  if (humanChoice != computerChoice) {
    block.textContent = `You chose ${appropriateMessage}. I chose ${appropriateMessagePc}. You ${result}`;
  } else if (humanChoice == computerChoice) {
    block.textContent = `You chose ${appropriateMessage}. I chose ${appropriateMessagePc}. its a ${result}`;
  }
  text.appendChild(block);
}

