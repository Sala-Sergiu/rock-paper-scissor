const elements = {
  rock: document.querySelector(".rock-btn"),
  paper: document.querySelector(".paper-btn"),
  scissors: document.querySelector(".scissors-btn"),
  tryAgain: document.querySelector(".try-again"),
  score: document.querySelector(".score"),
  scoreAi: document.querySelector(".score-ai"),
  image: document.querySelector(".image"),
  imageAi: document.querySelector(".image-ai"),
  humanWin: document.querySelector(".winner-human-text"),
  aiWin: document.querySelector(".winner-ai-text"),
};

let playerScore = 0;
let aiScore = 0;

const getComputerChoice = function () {
  const random = Math.floor(Math.random() * 3) + 1;
  // 1 = rock
  // 2 = paper
  // 3 = scissors
  const choice = random === 1 ? "rock" : random === 2 ? "paper" : "scissors";
  elements.imageAi.src = `./images/${choice}-mirror.png`;
  return random;
};

const updateScores = function () {
  elements.score.textContent = playerScore;
  elements.scoreAi.textContent = aiScore;
};

const checkWin = function () {
  if (playerScore === 5) {
    elements.humanWin.classList.remove("hidden");
  }
  if (aiScore === 5) {
    elements.aiWin.classList.remove("hidden");
  }
};

const playRound = function (playerChoice) {
  const random = getComputerChoice();
  elements.image.src = `./images/${playerChoice}.png`;

  if (playerScore >= 5 || aiScore >= 5) {
    return;
  }

  if (
    (playerChoice === "rock" && random === 3) ||
    (playerChoice === "paper" && random === 1) ||
    (playerChoice === "scissors" && random === 2)
  ) {
    playerScore++;
  } else if (playerChoice !== "try-again") {
    aiScore++;
  }

  updateScores();
  checkWin();
};

const resetGame = function () {
  playerScore = 0;
  aiScore = 0;
  elements.score.textContent = 0;
  elements.scoreAi.textContent = 0;
  elements.humanWin.classList.add("hidden");
  elements.aiWin.classList.add("hidden");
  elements.image.src = "images/paper.png";
  elements.imageAi.src = "images/paper.png";
};

elements.tryAgain.addEventListener("click", resetGame);

elements.rock.addEventListener("click", function () {
  playRound("rock");
});

elements.paper.addEventListener("click", function () {
  playRound("paper");
});

elements.scissors.addEventListener("click", function () {
  playRound("scissors");
});
