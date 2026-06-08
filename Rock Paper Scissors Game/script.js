let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const computerScorePara = document.querySelector("#computer-score");

const generateComputerChoice = () => {
  const options = ["rock","paper","scissors"];
  const ramdonIndex = Math.floor(Math.random() * 3);
  return options[ramdonIndex];
};

const drawGame = () => {
  msg.innerText = "Game was Draw!";
  msg.style.backgroundColor = "white";
  //console.log("game was draw.");
};

const showWinner = (userWin, userChoice, computerChoice) => {
  if(userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You Win! Your ${userChoice} beats ${computerChoice}`;
    msg.style.backgroundColor = "green";
    //console.log("you win!");
  }
  else {
    computerScore++;
    computerScorePara.innerText = computerScore;
    msg.innerText = `You Lost! ${computerChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
    //console.log("you lose");
  }
};

const playGame = (userChoice) => {
  console.log("user choice = ", userChoice);
  //Generate computer's choice
  const computerChoice = generateComputerChoice();
  console.log("Computer choice is = ", computerChoice);

  if(userChoice === computerChoice) {
    //Draw Game
    drawGame();
  }
  else {
      let userWin = true;
    if (userChoice === "rock" ) {
      //scissors, paper
      userWin = computerChoice === "paper" ? false : true;
    }
    else if (userChoice === "paper" ) {
      //rock, scissors
      userWin = computerChoice === "rock" ? true : false;
    }
    else {
      //rock, paper
      userWin = computerChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, computerChoice);
  };
};

choices.forEach((choice) => {
  // console.log(choice);
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    //console.log("choice was clicked");
    //console.log(userChoice);
    playGame(userChoice);
  });
});
