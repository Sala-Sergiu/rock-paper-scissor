const rock = document.querySelector(".rock-btn");
const paper = document.querySelector(".paper-btn");
const scissors = document.querySelector(".scissors-btn");
const tryAgain = document.querySelector(".try-again");

let score = document.querySelector(".score");
let scoreAi = document.querySelector(".score-ai");
const image = document.querySelector(".image");
const imageAi = document.querySelector(".image-ai");

const humanWin = document.querySelector(".winner-human-text");
const aiWin = document.querySelector(".winner-ai-text");

let playerScore = 0;
let aiScore = 0;

const getComputerChoice = function () {
  const random = Math.trunc(Math.random() * 3) + 1;
  // 1 = rock
  // 2 = paper
  // 3 = scissors
  if (random === 1) {
    let choice = "rock";
    imageAi.src = `./images/${choice}-mirror.png`;
  } else if (random === 2) {
    let choice = "paper";
    imageAi.src = `./images/${choice}-mirror.png`;
  } else {
    let choice = "scissors";
    imageAi.src = `./images/${choice}-mirror.png`;
  }
  return random;
};

const rockLogic = function (random) {
  if (playerScore < 5 && aiScore < 5) {
    if (random === 3) {
      const x = playerScore++;
      Number((score.textContent = playerScore));
    } else if (random === 2) {
      aiScore++;
      Number((scoreAi.textContent = aiScore));
    } else {
      return;
    }

    if (playerScore === 5) {
      humanWin.classList.remove("hidden");
    }
    if (aiScore === 5) {
      aiWin.classList.remove("hidden");
    }
    console.log(playerScore);
    console.log(aiScore);
  }
};

const paperLogic = function (random) {
  if (playerScore < 5 && aiScore < 5) {
    if (random === 3) {
      aiScore++;
      aiScore = Number((scoreAi.textContent = aiScore));
    } else if (random === 2) {
      return;
    } else {
      playerScore++;
      Number((score.textContent = playerScore));
    }

    if (playerScore === 5) {
      humanWin.classList.remove("hidden");
    }
    if (aiScore === 5) {
      aiWin.classList.remove("hidden");
    }
  }
};

const scissorsLogic = function (random) {
  if (playerScore < 5 && aiScore < 5) {
    if (random === 3) {
      return;
    } else if (random === 2) {
      playerScore++;
      Number((score.textContent = playerScore));
    } else {
      aiScore++;
      Number((scoreAi.textContent = aiScore));
    }

    if (playerScore === 5) {
      humanWin.classList.remove("hidden");
    }
    if (aiScore === 5) {
      aiWin.classList.remove("hidden");
    }
  }
};

const refactored = function (logic, string) {
  return function () {
    const random = getComputerChoice();
    // let choice = string;
    console.log(`${string} was selected`);

    if (string) {
      image.src = `./images/${string}.png`;
    }

    logic(random);
  };
};

const resetGame = function () {
  playerScore = 0;
  aiScore = 0;
  score.textContent = 0;
  scoreAi.textContent = 0;
  humanWin.classList.add("hidden");
  aiWin.classList.add("hidden");
};

tryAgain.addEventListener("click", resetGame);

rock.addEventListener("click", refactored(rockLogic, "rock"));

paper.addEventListener("click", refactored(paperLogic, "paper"));

scissors.addEventListener("click", refactored(scissorsLogic, "scissors"));
