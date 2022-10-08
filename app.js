

const rock = document.getElementsByClassName('rock')
const paper = document.getElementsByClassName('paper');
const scissors = document.getElementsByClassName('scissors');

var overlay = document.getElementById("overlay");
var replay = document.getElementById("endgame");

const updateMsg = document.getElementById("msg");

const endGameMsg = document.getElementById('endgame-msg');

const replayButton = document.getElementById("replay");

let playerScore = document.getElementById("pScore");
let compScore = document.getElementById("cScore");

let winOrLose = document.getElementById("rounds");
let pScore = 0;
let cScore = 0;
playerScore.innerHTML = pScore;
compScore.innerHTML = cScore;


//array to hold choices
const choiceArray = ["rock", "paper", "scissors"];

//player choice and computer choice
var pChoice = "";
var cChoice = "";

replayButton.addEventListener('click', replayGame)

//Add button event listeners

function compPlay(){
  let index = Math.floor(Math.random() * choiceArray.length);

  return(choiceArray[index]);
};


function updateBlockUI(pChoice)
{
  if(pChoice == "Rock")
  {
    document.getElementById("player").src="rps_img/rocks.png";
  }
  else if(pChoice == "Paper"){
    document.getElementById("player").src="rps_img/paper.png";
  }
  else if(pChoice == "Scissors"){
    document.getElementById("player").src="rps_img/scissors.png";
  }
}

function updateCompUI(cChoice) {
  if(cChoice == "rock")
  {
    document.getElementById("comp").src="rps_img/rocks.png";
  }
  else if(cChoice == "paper")
  {
    document.getElementById("comp").src="rps_img/paper.png";
  }
  else if(cChoice == "scissors")
  {
    document.getElementById("comp").src="rps_img/scissors.png";
  }
}

updateAllUI = () => {
  rock[0].addEventListener("click", function() {
    pChoice = 'Rock';
    cChoice = compPlay();
    let x = choiceArray.indexOf("rock");
    let y = choiceArray.indexOf(cChoice);
    playRound(x,y);
    updateBlockUI(pChoice);
    updateCompUI(cChoice);
    isGameOver();

  });

  paper[0].addEventListener("click", function() {
    pChoice = 'Paper';
    cChoice = compPlay();
    let x = choiceArray.indexOf("paper");
    let y = choiceArray.indexOf(cChoice);
    playRound(x,y);
    updateBlockUI(pChoice);
    updateCompUI(cChoice);
    isGameOver();
    

  });

  scissors[0].addEventListener("click", function() {
    pChoice = 'Scissors';
    cChoice = compPlay();
    let x = choiceArray.indexOf("scissors");
    let y = choiceArray.indexOf(cChoice);
    playRound(x,y);
    updateBlockUI(pChoice);
    updateCompUI(cChoice);
    isGameOver();
    
  });
}


//randomize comp choice


function playRound(x,y){
  //game logic : in array, each index beats the one next to it
  logic(x,y);
}

//5 rounds
function game() {
  updateAllUI();
}

function logic(x,y) {
  if(x === y) {
    console.log("Draw!");
    updateMsg.innerHTML = "Draw!";
    winOrLose.innerHTML = "";
  } else if (x > y){
    //if player = scissors and comp = rock
    if(x == 2 && y == 0){
      winOrLose.innerHTML = `You lose! ${cChoice} beats ${pChoice}!`;
      updateMsg.innerHTML = "You lose :(";
      cScore++;
      compScore.innerHTML = cScore;
    }
    //if player = paper || scissors && comp = rock || paper
    else{
      winOrLose.innerHTML = `You win! ${pChoice} beats ${cChoice}!`;
      pScore++;
      playerScore.innerHTML = pScore;
      updateMsg.innerHTML = "You win :D";
    }
  } else if (x < y) {
        //if player == rock and comp == scissors
    if(x == 0 && y == 2){
      updateMsg.innerHTML = "You win :D";
      winOrLose.innerHTML = `You win! ${pChoice} beats ${cChoice}!`;
      pScore++;
      playerScore.innerHTML = pScore;
    } else{
      updateMsg.innerHTML = "You lose :(";
      winOrLose.innerHTML = `You lose! ${cChoice} beats ${pChoice}!`;
      cScore++;
      compScore.innerHTML = cScore;
    }
  }
}
function isGameOver(){
  if(pScore === 5 || cScore === 5)
  {
    //return pScore === 5 || cScore === 5;
    overlay.classList.add('active');
    replay.classList.add('active');
    if(pScore === 5){
      endGameMsg.innerHTML = "You win! :D";
    }
    else if(cScore === 5){
      endGameMsg.innerHTML = "You lose! :("
    }
  }
}

//function endGame() {
  //  overlay.classList.add('active');
    //replay.classList.add('active');
//}

function replayGame() {
  //reset score
  pScore = 0;
  cScore = 0;

  //reset screen UI
  document.getElementById("player").src="rps_img/avatar.png";
  document.getElementById("comp").src="rps_img/computer.png";

  updateMsg.innerHTML = "Choose your weapon!";
  winOrLose.innerHTML = "First to 5 wins!";
  playerScore.innerHTML = '0';
  compScore.innerHTML = '0';


  overlay.classList.remove('active');
  replay.classList.remove('active');


}
game();

