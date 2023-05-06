const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";

const rockBtn = document.querySelector(".rock-btn");
const paperBtn = document.querySelector(".paper-btn");
const scissorsBtn = document.querySelector(".scissors-btn");
const tryAgainBtn = document.querySelector(".try-again");

const humanScoreEl = document.querySelector(".score");
const aiScoreEl = document.querySelector(".score-ai");
const humanImageEl = document.querySelector(".image");
const aiImageEl = document.querySelector(".image-ai");
const humanWinTextEl = document.querySelector(".winner-human-text");
const aiWinTextEl = document.querySelector(".winner-ai-text");

let humanScore = 0;
let aiScore = 0;

function resetGame() {
  humanScore = 0;
  aiScore = 0;
  humanScoreEl.textContent = 0;
  aiScoreEl.textContent = 0;
  humanWinTextEl.classList.add("hidden");
  aiWinTextEl.classList.add("hidden");
  humanImageEl.src = "./images/scissors.png";
  aiImageEl.src = "./images/scissors-mirror.png";
}

function getComputerChoice() {
  const random = Math.trunc(Math.random() * 3) + 1;
  switch (random) {
    case 1:
      aiImageEl.src = `./images/${ROCK}-mirror.png`;
      return ROCK;
    case 2:
      aiImageEl.src = `./images/${PAPER}-mirror.png`;
      return PAPER;
    case 3:
      aiImageEl.src = `./images/${SCISSORS}-mirror.png`;
      return SCISSORS;
  }
}

function handleHumanChoice(humanChoice) {
  const aiChoice = getComputerChoice();
  humanImageEl.src = `./images/${humanChoice}.png`;

  if (humanChoice === aiChoice) {
    return;
  } else if (
    (humanChoice === ROCK && aiChoice === SCISSORS) ||
    (humanChoice === PAPER && aiChoice === ROCK) ||
    (humanChoice === SCISSORS && aiChoice === PAPER)
  ) {
    humanScore++;
  } else {
    aiScore++;
  }

  humanScoreEl.textContent = humanScore;
  aiScoreEl.textContent = aiScore;

  if (humanScore === 5) {
    humanWinTextEl.classList.remove("hidden");
  } else if (aiScore === 5) {
    aiWinTextEl.classList.remove("hidden");
  }
}

rockBtn.addEventListener("click", () => handleHumanChoice(ROCK));
paperBtn.addEventListener("click", () => handleHumanChoice(PAPER));
scissorsBtn.addEventListener("click", () => handleHumanChoice(SCISSORS));
tryAgainBtn.addEventListener("click", resetGame);
