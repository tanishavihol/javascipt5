// script.js

// Generate a random number between 1 and 100
let randomNumber = Math.floor(Math.random() * 100) + 1;

// Function to check the user's guess
function checkGuess() {
    // Get the user's guess from the input field
    const userGuess = document.getElementById('userGuess').value;

    // Get the message paragraph to display feedback
    const message = document.getElementById('message');

    // Check if the guess is correct
    if (userGuess == randomNumber) {
        message.textContent = 'Congratulations! You guessed the correct number!';
    } else if (userGuess < randomNumber) {
        message.textContent = 'Too low! Try again.';
    } else {
        message.textContent = 'Too high! Try again.';
    }
}
