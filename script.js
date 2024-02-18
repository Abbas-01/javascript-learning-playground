const quizStrtBtn = document.querySelector(".quizStrtBtn");
const quizSec = document.querySelector(".quizSec");
const quizQuestionEle = document.querySelector(".quizQuestion");
const optionsWrapper = document.querySelector(".optionsWrapper");
const nxtQuizBtn = document.querySelector(".nxtQuizBtn");
const noOfCorrectAns = document.querySelector(".noOfCorrectAns");
const quizResultSec = document.querySelector(".quizResultSec");
const quizRestartBtn = document.querySelector(".restartQuizBtn");
const secsEle = document.querySelector(".secs");

let availableQuestions = [];
let timerInterval;

function addingAvailableQuestions () {
    for (let i = 0; i < quizArr.length; i++) {
        availableQuestions.push(quizArr[i]);
    }
}
function creatingOptions (questionNum) {
    const correctOptionEle = document.createElement("li");
    const correctOptionNum = Math.floor(Math.random() * availableQuestions[questionNum].wrongOptions.length);
    availableQuestions[questionNum].wrongOptions.forEach((opt, i) => {
        if (correctOptionNum === i) {
            correctOptionEle.textContent = `${availableQuestions[questionNum].correctOption}`   
            correctOptionEle.classList.add("options", "correctOption");
            optionsWrapper.appendChild(correctOptionEle)
        }
        const wrongOptionEle = document.createElement("li");
        wrongOptionEle.classList.add("options");
        wrongOptionEle.textContent = `${opt}`;
        optionsWrapper.appendChild(wrongOptionEle)
    })

}
function displayingQuestion () {
    const questionNum = Math.floor(Math.random() * availableQuestions.length); 
    quizQuestionEle.textContent = `${availableQuestions[questionNum].question}`;
    creatingOptions(questionNum);
    availableQuestions.splice(questionNum, 1);
}
function questionTime () {
    // clearInterval(timerInterval);
    timerInterval = setInterval(timer, 1000);
    function timer () {
        secsEle.textContent--;
        if (secsEle.textContent === "0") {
            stoppingTimer(timerInterval);
            if (availableQuestions.length === 0) {
                showingResult();
                timer.style.display = "none";
            } else {
                showingNxtQuestion()
            }
        }
    }        
}
function stoppingTimer() {
    clearInterval(timerInterval);
}
// timer()
quizStrtBtn.addEventListener("click", () => {
    quizStrtBtn.style.display = "none";
    quizSec.style.display = "block";
    addingAvailableQuestions();
    displayingQuestion();
    questionTime();
})
function isCorrect (selectedOption) {
    const correctOptionEle = optionsWrapper.querySelector(".correctOption");
    correctOptionEle.style.border = "1px solid green";
    correctOptionEle.style.backgroundColor =  "#eafcce";
    if (selectedOption.classList.contains("correctOption")) {
        noOfCorrectAns.textContent++;
    } else {
        selectedOption.style.border = "1px solid red"
        selectedOption.style.backgroundColor = "#ffc6c6"
    }
}
function showingResult () {
    setTimeout(() => {
        document.querySelector(".quizQuestionSec").style.display ="none";
        quizResultSec.style.display = "block";      
        document.querySelector(".timer").style.display = "none"
    }, 1000)
}
function changingCursors (cursor, pointerEvent) {
    const optionsEle = document.querySelectorAll(".options");
    optionsWrapper.style.cursor = cursor;
    optionsEle.forEach(opt => {
        opt.style.pointerEvents = pointerEvent;
    })
}
function handlingClickOnOptions (evt) {
    const selectedOption = evt.target;
    changingCursors("not-allowed", "none");
    isCorrect(selectedOption);
    stoppingTimer()
    if (availableQuestions.length === 0) {
        showingResult()
    }
    nxtQuizBtn.removeAttribute("disabled");
}
function showingNxtQuestion () {
    changingCursors("pointer", "auto");
    optionsWrapper.innerHTML = "";
    displayingQuestion();
    secsEle.textContent = "10";
    questionTime();
    nxtQuizBtn.setAttribute("disabled", "");
}
function resetQuiz () {
    quizResultSec.style.display = "none";
    document.querySelector(".quizQuestionSec").style.display = "block";
    document.querySelector(".timer").style.display = "block";
    noOfCorrectAns.textContent = "0";
    optionsWrapper.innerHTML = "";
    addingAvailableQuestions();
    showingNxtQuestion();
}
optionsWrapper.addEventListener("click", (evt) => {
    if (evt.target.classList.contains("options")) {
        handlingClickOnOptions(evt);
    }
})
nxtQuizBtn.addEventListener("click", showingNxtQuestion);
quizRestartBtn.addEventListener("click", resetQuiz);