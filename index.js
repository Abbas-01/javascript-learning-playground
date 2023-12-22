let randonNum = Math.ceil(Math.random() * 100);

const guessInput = document.querySelector("#guessField");
const submitBtn = document.querySelector("#subt");
const userGuesses = document.querySelector("#guesses");
const remaining = document.querySelector("#remainingGuess");
const lowHigh = document.querySelector("#lowOrHigh");
const userResults = document.querySelector(".resultingParas");

let prevGuesses = [];
let playGame = true;

const div = document.createElement("div");

if (playGame) {
    submitBtn.addEventListener("click", (e) => {
        e.preventDefault();
        const userGuess = parseInt(guessInput.value);
        guessValidation(userGuess);
    })
}

function guessValidation (guess) {
    console.log(prevGuesses)
    if (isNaN(guess)) {
        alert("Please give us a valid Number");
    } else if (guess < 1) {
        alert("Please give us a number greater than 1");
    } else if (guess > 100) {
        alert("Please give us a number less than 100");
    } else if (prevGuesses.indexOf(guess) >= 0) {
        alert("Pleas give us unique numbers");
    } else {
        prevGuesses.push(guess);
        checkGuess(guess);
    }
    guessInput.value = "";
}
function checkGuess (guess) {
    if (remaining.innerHTML < 1) {
        lowHigh.innerHTML = `Game Over, The number was ${randonNum}`
        endGame();
    } else {
        remaining.innerHTML--;
        userGuesses.innerHTML += `${guess} `;
        displayGuess(guess)
    }
     
}
function displayGuess (guess) {
    if (guess === randonNum) {
        lowHigh.innerHTML = "Congratulations! you have guessed right"
        endGame();
    } else if (guess > randonNum) {
        lowHigh.innerHTML = "Your guess is greater than the number"
    } else if (guess < randonNum) {
        lowHigh.innerHTML = "Your guess is less than the number"
    }
}
function endGame () {
    playGame = false;
    guessInput.setAttribute("disabled", "");
    userResults.appendChild(div);
    div.classList.add("startBtn")
    div.innerHTML = `<h2 class="newGameBtn">Start a New Game</h2>`;
    newGame();
}
function newGame() {
    const startGameBtn = document.querySelector(".newGameBtn");
    startGameBtn.addEventListener("click", (e) => {
        randonNum = Math.ceil(Math.random() * 100);
        playGame = true;
        guessInput.removeAttribute("disabled")
        userResults.removeChild(div);
        prevGuesses = []
        remaining.innerHTML = 10;
        userGuesses.innerHTML = "";
        lowHigh.innerHTML = "";
    })
}