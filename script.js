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
const block = document.querySelector('#block');
const score = document.querySelector('#playerscore');

block.textContent = " ";
score.textContent = " ";

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


if (humanScore == 5) {
  block.textContent = "You won!";
  score.textContent = " ";
} else if (computerScore == 5){
  block.textContent = "I won";
  score.textContent = " ";
}

function playRound(computerChoice, humanChoice) {

  if (humanChoice == computerChoice) {
    result = "tie"
  }

  else if (humanChoice == 1 && computerChoice == 3) {
    humanScore++;
    result = "win";
  } else if (humanChoice == 1 && computerChoice == 2) {
    computerScore++;
    result = "lose";
  } else if (humanChoice == 2 && computerChoice == 1) {
    humanScore++;
    result = "win";
  } else if (humanChoice == 2 && computerChoice == 3) {
    computerScore++;
    result = "lose";
  } else if (humanChoice == 3 && computerChoice == 1) {
    computerScore++;
    result = "lose";
  } else if (humanChoice == 3 && computerChoice == 2) {
    humanScore++;
    result = "win"
  }

  score.textContent = `${humanScore} - ${computerScore}`;
  block.textContent = `You chose ${appropriateMessage}. I chose ${appropriateMessagePc}. You ${result}`;
  if (result == "tie") block.textContent = `It's a tie`;
  if (humanScore > 4 | computerScore > 4) {
    block.textContent = humanScore== 5? 'You won the match!' : 'I won the match!';
    if (humanScore == 5) {
      const jsConfetti = new JSConfetti()
      jsConfetti.addConfetti()
    }
    score.textContent ='';
  }
}


