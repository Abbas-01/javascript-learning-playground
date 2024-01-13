const boxesContainer = document.querySelector(".boxesWrapper");
const signsContainer = document.querySelector(".signContainer");
const boxes = document.querySelectorAll(".box");
const crossScore = document.querySelector("#crossScore");
const zeroScore = document.querySelector("#zeroScore");
const restartBtn = document.querySelector("#restartBtn");
const winMessage = document.querySelector("#winMessage");
console.log(zeroScore)
let currSign;
let numOfSlots = 9;
let zeroArr = [];
let crossArr = [];

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
        currSign = e.target.id;
        hideSignSeclecingSec()        
    } else if (e.target.id === "zero") {
        currSign = e.target.id;
        hideSignSeclecingSec()
    }
})

function restartGame () {
    currSign = "";
    zeroArr = [];
    crossArr = []
    numOfSlots = 9;
    boxes.forEach(box => {
        box.innerHTML = "";
        box.setAttribute("isClicked", "false");
    });
    restartBtn.parentElement.style.display = "none";
    showSignSeclecingSec();
}
function checkWinner (arr) {
    const methods = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]];            

    for (let method of methods) {
        if (method.every(slot => arr.includes(slot))) {
            return true;
        }
    }
    return false;
}

function displayingSigns (e, num) {
    numOfSlots--;
    if (currSign === "cross") {
        e.target.innerHTML = `<div class="cross"></div>`;
        crossArr.push(num);
        currSign = "zero";
        if (crossArr.length > 2 && checkWinner(crossArr)) {; 
            crossScore.textContent = `${parseInt(crossScore.textContent) + 1}`;
        }
    } else if (currSign === "zero") {
        e.target.innerHTML = `<div class="circle"></div>`;
        zeroArr.push(num);
        currSign = "cross";
        if (zeroArr.length > 2 && checkWinner(zeroArr)) {
            zeroScore.textContent = `${parseInt(zeroScore.textContent) + 1}`;
        }
    }
    if (checkWinner(crossArr))  {
        restartBtn.parentElement.style.display = "block";
        winMessage.innerHTML = `X Wins`;
    } else if (checkWinner(zeroArr)) {
        restartBtn.parentElement.style.display = "block";
        winMessage.innerHTML = `O Wins`;
    } else if (numOfSlots === 0) {
        restartBtn.parentElement.style.display = "block";
        winMessage.innerHTML = `Draw`;
    } 
}
restartBtn.addEventListener("click", restartGame);

boxesContainer.addEventListener("click", (e) => {
    if (currSign) {
        let isClicked = e.target.getAttribute("isClicked");
        if (isClicked === "false") {
            const boxNum = parseInt(e.target.id.replace("box", ""));
            displayingSigns(e, boxNum);
            e.target.setAttribute("isClicked", "true");
        } 
    }
});