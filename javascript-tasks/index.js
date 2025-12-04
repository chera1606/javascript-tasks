function rockPaperScissorsGame() {
  console.log("Rock , peper, seciddors game");
  const userChoice = prompt(
    "Enter your choice (rock, paper, scissor): "
  ).toLowerCase();
  let computerChoice;
  const randomNmber = Math.floor(Math.random() * 3) + 1;
  if (randomNmber === 1) {
    computerChoice = "rock";
  } else if (randomNmber === 1) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissor";
  }

  console.log("user choice:", userChoice);
  console.log("computer choice:", computerChoice);

  if (
    (computerChoice === "rock" && userChoice === "scissor") ||
    (computerChoice === "scissor" && userChoice === "paper") ||
    (computerChoice === "paper" && userChoice === "rock")
  ) {
    console.log("My Bad !!! You Lose");
  } else if (computerChoice === userChoice) {
    console.log("It's a Tie !!!");
  } else if (
    (computerChoice === "scissor" && userChoice === "rock") ||
    (computerChoice === "paper" && userChoice === "scissor") ||
    (computerChoice === "rock" && userChoice === "paper")
  ) {
    console.log("BOOMM !!! You Win !!!");
  } else {
    console.log("Invalid choice, please try again.");
  }

  const playAgainPrompt = prompt("Do you want to play again? (yes/no)");
  const playAgain = playAgainPrompt ? playAgainPrompt.toLowerCase() : "no";
  if (playAgain === "yes") {
    rockPaperScissorsGame();
  } else {
    console.log("Thanks for playing! Goodbye.");
  }
}
rockPaperScissorsGame();
