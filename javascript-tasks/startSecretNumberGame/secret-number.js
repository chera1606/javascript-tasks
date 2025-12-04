/**
 * Let us play a number guessing game.
 * You will ask user for a number between 1 to 10. Once user will enter a number, you will tell user if the entered number is lower or higher. With this information, user will change the number and finally guess the right number. You also need to show the number of attempts made by users to rach to this right guess.
 */

// max number
// min number

// secret number is a random number between the min and max

// get the prommpt from the user as a guess

// Create a variable to store the number of attempts

// Write the logic to check if the guess and the secret number are same. If not continue a loop to ask again.

// Inside loop check if the guess is less than the secret or greater than, accordingly tell if the guess it low or high

// Give the option to play again

document.addEventListener("DOMContentLoaded", () => {
  const MIN_NUMBER = 1;
  const MAX_NUMBER = 10;
  let secretNumber;
  let attempts;

  const guessInput = document.getElementById("guessInput");
  const guessBtn = document.getElementById("guessBtn");
  const restartBtn = document.getElementById("restartBtn");
  const message = document.getElementById("message");

  function startGame() {
    secretNumber = Math.floor(Math.random() * MAX_NUMBER) + 1;
    attempts = 0;
    message.textContent = "";
    guessInput.value = "";
    guessInput.disabled = false;
    guessBtn.disabled = false;
    console.log("Secret Number (for debugging):", secretNumber);
  }

  guessBtn.addEventListener("click", () => {
    const guess = parseInt(guessInput.value);

    if (isNaN(guess) || guess < MIN_NUMBER || guess > MAX_NUMBER) {
      message.textContent = `Please enter a number between ${MIN_NUMBER} and ${MAX_NUMBER}.`;
      return;
    }

    attempts++;

    if (guess < secretNumber) {
      message.textContent = "Too Low! Try again.";
    } else if (guess > secretNumber) {
      message.textContent = "Too High! Try again.";
    } else {
      message.textContent = `🎉 Congrats! You guessed the number in ${attempts} attempts.`;
      guessInput.disabled = true;
      guessBtn.disabled = true;
    }
  });

  restartBtn.addEventListener("click", startGame);

  // Start the game when the page loads
  startGame();
});
