/*
GAME FUNCTION:
- Player must guess a number between a min and max
- Player gets a certain amount of guesses
- Notify player of guesses remaining
- Notify the player of the correct answer if lose
- Let player choose to play again
*/

// Game variables
let min = 1,
  max = 10,
  winningNum = 2,
  guessesLeft = 3;

// UI elements
const game = document.querySelector('#game'),
  minNum = document.querySelector('.min-num'),
  maxNum = document.querySelector('.max-num'),
  guessBtn = document.querySelector('#guess-btn'),
  guessInput = document.querySelector('#guess-input'),
  message = document.querySelector('.message');

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// Listen for guesses
guessBtn.addEventListener('click', function () {
  // Must convert input from string to integer.
  let guess = parseInt(guessInput.value);

  // Validate guess.
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}`, 'red');
  }

  // Check for correct guess.
  if (guess === winningNum) {
    // Disable input.
    guessInput.disabled = true;
    // Change border color.
    guessInput.style.borderColor = 'green';
    setMessage("You're correct!", 'green');
  }
});

function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}