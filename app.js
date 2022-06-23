//array to hold choices
const choices = ["rock", "paper", "scissors"];

//randomize comp choice
function compPlay(){
  let index = Math.floor(Math.random() * choices.length);

  return(choices[index]);
}

function playRound(){
  compChoice = compPlay();
  response = prompt("Rock, Paper, or Scissors?");
  let playerChoice = response.toLowerCase();

  //game logic : in array, each index beats the one next to it
  let x = choices.indexOf(playerChoice);
  let y = choices.indexOf(compChoice);

  if(x === y) {
    return("Draw!");
  } else if (x > y){
    //if player = scissors and comp = rock
    if(x == 2 && y == 0){
      return(`You lose! ${compChoice} beats ${playerChoice}!`);
    }
    //if player = paper || scissors && comp = rock || paper
    else{
      return(`You win! ${playerChoice} beats ${compChoice}!`);
    }
  } else if (x < y) {
        //if player == rock and comp == scissors
    if(x == 0 && y == 2){
      return(`You win! ${playerChoice} beats ${compChoice}!`);
    } else{
      return(`You lose! ${compChoice} beats ${playerChoice}!`);
    }
  }
}
//5 rounds
function game() {
  for(let i = 0; i < 5; i++) {
    console.log(playRound());
  }
}

game();


