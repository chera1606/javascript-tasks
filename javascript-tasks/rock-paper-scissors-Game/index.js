function playGame(userChoice) {
  const choices = ["rock", "paper", "scissor"];
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  // Show choices with span elements
  document.querySelector("#user-choice .choice-value").textContent = userChoice;
  document.querySelector("#computer-choice .choice-value").textContent = computerChoice;
  // Determine result
  let result = "";
  let resultColor = "#ff6600"; // default orange for tie

  if (userChoice === computerChoice) {
    result = "It's a Tie!";
    resultColor = "#ff9900"; // orange-ish
  } else if (
    (userChoice === "rock" && computerChoice === "scissor") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissor" && computerChoice === "paper")
  ) {
    result = "BOOM! You Win!";
    resultColor = "green";
  } else {
    result = "My Bad! You Lose!";
    resultColor = "red";
  }

  const winnerSpan = document.querySelector("#winner .choice-value");
  winnerSpan.textContent = result;
  winnerSpan.style.color = resultColor;
}

// Reset game
function resetGame() {
  document.querySelector("#user-choice .choice-value").textContent = "";
  document.querySelector("#computer-choice .choice-value").textContent = "";
  const winnerSpan = document.querySelector("#winner .choice-value");
  winnerSpan.textContent = "";
  winnerSpan.style.color = "#ff6600"; // reset to default
}
