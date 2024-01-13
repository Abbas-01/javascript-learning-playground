const boxesContainer = document.querySelector(".boxesWrapper");
const signsContainer = document.querySelector(".signContainer");
const boxes = document.querySelectorAll(".box");
const crossScore = document.querySelector("#crossScore");
const zeroScore = document.querySelector("#zeroScore");
const restartBtn = document.querySelector("#restartBtn");
const winMessage = document.querySelector("#winMessage");


let currSign;
let numOfSlots = 9;
function showSignSeclecingSec() {
    document.querySelector(".signSelectingSec").style.display = "flex";
    boxesContainer.style.display = "none";    
}

function hideSignSeclecingSec() {
    document.querySelector(".signSelectingSec").style.display = "none";
    boxesContainer.style.display = "flex";    
}

signsContainer.addEventListener("click", (e) => {
    if (e.target.id === "cross") {
        currSign = "X";
        hideSignSeclecingSec()        
    } else if (e.target.id === "zero") {
        currSign = "O";
        hideSignSeclecingSec()
    }
})

function restartGame () {
    currSign = "";
    numOfSlots = 9;
    boxes.forEach(box => {
        box.innerHTML = "";
        box.setAttribute("isClicked", "false");
        box.classList.remove("X");
        box.classList.remove("O");
    });
    restartBtn.parentElement.style.display = "none";
    showSignSeclecingSec();
}

function checkWinner (sign) {
    const winingCombinations = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];            
    for (let combination of winingCombinations) {
        if (combination.every(index => boxes[index].classList.contains(sign))) {
            return true;
        }
    }
    return false;
}

function displayingSigns (e) {
    numOfSlots--;
    if (currSign === "X") {
        e.target.innerHTML = `<div class="cross"></div>`;
        e.target.classList.add(currSign);

        if (checkWinner(currSign)) {    
            crossScore.textContent = `${parseInt(crossScore.textContent) + 1}`;
        }
    } else if (currSign === "O") {
        e.target.innerHTML = `<div class="circle"></div>`;
        e.target.classList.add(currSign);

        if (checkWinner(currSign)) {
            zeroScore.textContent = `${parseInt(zeroScore.textContent) + 1}`;
        }
    }
    if (checkWinner(currSign))  {
        restartBtn.parentElement.style.display = "block";
        winMessage.innerHTML = `${currSign} Wins`;
    } else if (numOfSlots === 0) {
        restartBtn.parentElement.style.display = "block";
        winMessage.innerHTML = `Draw`;
    } 
    currSign = (currSign === "O") ? "X" : "O"; 
}
restartBtn.addEventListener("click", restartGame);

boxesContainer.addEventListener("click", (e) => {
    if (currSign) {
        let isClicked = e.target.getAttribute("isClicked");
        if (isClicked === "false") {
            displayingSigns(e);
            e.target.setAttribute("isClicked", "true");
        } 
    }
});