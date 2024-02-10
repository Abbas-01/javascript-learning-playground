const keyboardBtnsSec = document.querySelector(".keyboardBtnsSec");
const hangmanFigure = document.querySelector(".hangmanFigure");
const noOfIncorrectGuessesEle = document.querySelector(".noOfIncorrectGuesses");
const GuessingLettersElesWrapper = document.querySelector(".GuessingPhraseSec");
const gameRestartSec = document.querySelector(".gameRestartSec");
const gameRestartBtn = document.querySelector(".gameRestartBtn");
const gameStatusEle = document.querySelector(".gameStatus");

let currentWord, correctGuesses = 0;
const wordsArr = [
    {
        Word: "Elephant",
        Hint: "The largest land mammal with a long trunk and tusks."
    }, {
        Word: "Computer",
        Hint: "An electronic device for processing and storing data."
    }, {
        Word: "Rainbow",
        Hint: "A meteorological phenomenon with colors in the sky."
    }, {
        Word: "Adventure",
        Hint: "An exciting and unusual experience or activity."
    }, {
        Word: "Chocolate",
        Hint: "A sweet food made from roasted and ground cacao seeds."
    }, {
        Word: "Galaxy",
        Hint: "A massive system of stars, gas, dust, and dark matter."
    }, {
        Word: "Butterfly",
        Hint: "An insect with two pairs of large, often colorful wings."
    }, {
        Word: "Symphony",
        Hint: "A long musical composition for full orchestra."
    }, {
        Word: "Mountain",
        Hint: "A large landform that rises prominently above its surroundings."
    }, {
        Word: "Adventure",
        Hint: "An exciting and unusual experience or activity."
    }
];
function creatingKeyboardBtns () {
    const alphabets = Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    keyboardBtnsSec.innerHTML = alphabets.map(letter => `<button class="letter">${letter}</button>`).join("")
}
function gameRestart () {
    [...hangmanFigure.children].forEach(part => {
        part.style.display = "none";
    });
    [...keyboardBtnsSec.children].forEach(ele => {
        ele.removeAttribute("disabled");
        ele.classList.remove("guessed");
    });
    gameInit();
    noOfIncorrectGuessesEle.textContent = "0";    
    correctGuesses = 0;
    gameRestartSec.style.display = "none";  
}
function checkingLettter (btn, letter) {
    if (currentWord.includes(letter)) {
        [...currentWord].forEach((l, i) => {
            if (l === letter) {
                GuessingLettersElesWrapper.children[i].textContent = `${l}`            
                correctGuesses++
            }
        }) 
        if (correctGuesses === currentWord.length) {
            gameRestartSec.style.display = "flex";
            gameStatusEle.textContent = `Congratulations! You won. The word was ${currentWord}`
        }
    } else {
        hangmanFigure.children[parseInt(noOfIncorrectGuessesEle.textContent)].style.display = "block";
        noOfIncorrectGuessesEle.textContent++;
        if (noOfIncorrectGuessesEle.textContent === "6") {
            gameRestartSec.style.display = "flex";
            gameStatusEle.textContent = `Sorry! The word was ${currentWord}`
        }
    }
    btn.setAttribute("disabled", "")
    btn.classList.add("guessed");
}
function gameInit () {
    const randomNum = Math.floor(Math.random() * wordsArr.length); 
    const {Word, Hint} = wordsArr[randomNum]; 
    currentWord = Word.toUpperCase();
    document.querySelector(".hint").textContent = `Hint: ${Hint}`;
    GuessingLettersElesWrapper.innerHTML = [...currentWord].map(() => `<span class="guessLetter"></span>`).join("");
}
keyboardBtnsSec.addEventListener("click", (e) => {
    if (e.target.className === "letter") {
        checkingLettter(e.target, e.target.textContent);
    } 
})
gameRestartBtn.addEventListener("click", gameRestart)
creatingKeyboardBtns();
gameInit();