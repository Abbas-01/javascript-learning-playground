const valInput = document.querySelector("#valueInput");
const numBtns = document.querySelectorAll(".num");
const symbolBtns = document.querySelectorAll(".symbol");
const calculateBtn = document.querySelector(".calBtn");
const resetBtn = document.querySelector(".resBtn");
const symbolBtnsArr = Array.from(symbolBtns);

let exp = "";

function updateInputValue () {
    valInput.value = exp;
}

function handleNumberBtnClick (btn) {
    const value = btn.firstElementChild.innerHTML;
    exp += value;
    updateInputValue()    
}
function handleSymbolBtnClick (btn) {
    const sign = btn.firstElementChild.innerHTML;

    if (exp === "") {
        alert("Please give a number first")   
        return;
    } else if (exp.length === 1) {
        exp += sign;
    } else if(!isNaN(exp[exp.length-1])) {
        exp += sign;
    } else {
        alert("Please give a number after a sign")
    }
    updateInputValue()
}

function handleCalculateBtnClick () {
    try {
        const result = new Function("return " + exp)();
        valInput.value = result;
        exp = result.toString();
    } catch {
        alert("Expression Error")
    }
}
function handleResetBtnClick () {
    exp = "";
    updateInputValue();
}
numBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
        e.preventDefault()
        handleNumberBtnClick(btn)
    })
})

symbolBtnsArr.map(btn => { 
    btn.addEventListener("click", () => {
        handleSymbolBtnClick(btn)
      })
})

calculateBtn.addEventListener("click", (e) => {
    e.preventDefault();
    handleCalculateBtnClick();
})

resetBtn.addEventListener("click", (e) => {
    e.preventDefault();
    handleResetBtnClick()
})
