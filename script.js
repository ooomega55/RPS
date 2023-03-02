const playerScoreText = document.querySelector('#playerScoreText');
const compScoreText = document.querySelector('compScoreText');
const resultText = document.querySelector('#resultText');
const rpsoptions = document.querySelectorAll('.rpsoptions');

let player;
let computer;
let result;

rpsoptions.forEach(button => button.addEventListener('click', () => {
  player = button.textContent
  getComputerChoice();
  playerScoreText.textContent = 'Player: ${player}';
  compScoreText.textContent = 'Computer: ${computer}';
  resultText.textContent = determineWinner();
}));



function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      computer = 'rock';
    case 1:
      computer =  'paper';
    case 2:
      computer =  'scissors';
  }
};


function determineWinner() {
  if (player == computer) {
    return "The game is a tie!";
  }
  else if (computer == 'rock') {
      return (player == 'paper') ? "You suck" : "Nice, you won!"
  }
  else if (computer == 'paper') {
      return (player == 'scissors') ? "You suck" : "Nice, you won!"
  }
  else if (computer == 'scissors') {
      return (player == 'rock') ? "You suck" : "Nice, you won!"
    }
} 

//const getPlayerChoice = (playerInput) => {
 // playerInput = playerInput.toLowerCase();

 // if (
   // playerInput === 'rock' ||
  //  playerInput === 'paper' ||
//playerInput === 'scissors'
 // ) {
 //   return playerInput;
//  } else {
 //   console.log("Error! Type rock, paper, or scissors.");
//  }
//};


//const playGame = (choice) => {
  //const playerChoice = getPlayerChoice(choice);
  //const computerChoice = getComputerChoice();
  //document.getElementById(playerchoice);
  //console.log("You threw: " + userChoice);
  //console.log("The computer threw:" + computerChoice);
  //console.log(determineWinner(userChoice, computerChoice));
  //document.getElementById('rock');
  //document.getElementById('paper');
  //document.getElementById('scissors');
//};


