let userScore = 0;
let user_score = document.querySelector("#user-score");
let compScore = 0;
let comp_score = document.querySelector("#comp-score");
let images = document.querySelectorAll("img");
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
let resetGame = document.querySelector("#reBtn");

let theme = document.querySelector("#theme");
let currMode = "Dark";
theme.addEventListener("click", () => {
  if (currMode === "Dark") {
    currMode = "light";
    document.querySelector("body").style.backgroundColor = "white";
    images.forEach((img) => {
      img.classList.add("invertClass");
    });

    document.querySelector(".score-board").style.color = "black";
  } else {
    currMode = "Dark";
    document.querySelector("body").style.backgroundColor = "Black";
    images.forEach((img) => {
      img.classList.remove("invertClass");
    });
    document.querySelector(".score-board").style.color = "white";
  }
});
const reset = () => {
  compScore = 0;
  userScore = 0;
  msg.innerText = "Pick Your Move";
  msg.style.backgroundColor = "#081b31";
  user_score.innerText = 0;
  comp_score.innerText = 0;
};

const genCompChoice = () => {
  let options = ["rock", "paper", "scissor"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};
const drawGame = () => {
  msg.innerText = "Draw this Time";
  msg.style.backgroundColor = "Grey";
};
const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    msg.innerText = `You Win! ${userChoice} Beats ${compChoice}`;
    msg.style.backgroundColor = "Green";
    user_score.innerText = userScore;
  } else {
    compScore++;
    msg.innerText = `You Lose. ${compChoice} Beats ${userChoice}`;
    msg.style.backgroundColor = "Red";
    comp_score.innerText = compScore;
  }
};
const playGame = (userChoice) => {
  const compChoice = genCompChoice();
  if (compChoice == userChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissor" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
resetGame.addEventListener("click", reset);
