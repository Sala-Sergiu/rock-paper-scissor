const getComputerChoice = function () {
  const random = Math.trunc(Math.random() * 3) + 1;
  if (random === 1) {
    return "1 rock";
  } else if (random === 2) {
    return "2 paper";
  } else {
    return "3 scissor";
  }
};

console.log(getComputerChoice());
