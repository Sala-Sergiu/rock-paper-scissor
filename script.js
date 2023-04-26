const rock = document.querySelector(".rock-btn");
const paper = document.querySelector(".paper-btn");
const scissors = document.querySelector(".scissors-btn");

const tryAgain = document.querySelector(".try-again");
let score = document.querySelector(".score");
let scoreAi = document.querySelector(".score-ai");
const image = document.querySelector(".image");
const imageAi = document.querySelector(".image-ai");

let playerScore = "";
let aiScore = "";

// console.log("default", score);
// console.log("playerscore", playerScore);
// console.log("airscore", aiScore);

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

rock.addEventListener("click", function () {
  const random = getComputerChoice();
  let choice = "rock";
  console.log(`${choice} was selected`);

  if (choice === "rock") {
    image.src = `./images/${choice}.png`;
  }

  if (random === 3) {
    playerScore++;
    Number((score.textContent = playerScore));

    console.log("player score", playerScore);
    console.log("---score", +score.textContent);
  } else if (random === 2) {
    aiScore++;
    Number((scoreAi.textContent = aiScore));

    console.log("aiscore", playerScore);
    console.log("---score", +score.textContent);
  } else {
    return;
  }
});

paper.addEventListener("click", function () {
  let choice = "paper";
  console.log(`${choice} was selected`);
  if (choice === "paper") {
    image.src = `./images/${choice}.png`;
  }
});

scissors.addEventListener("click", function () {
  let choice = "scissors";
  console.log(`${choice} was selected`);
  if (choice === "scissors") {
    image.src = `./images/${choice}.png`;
  }
});
