const valInput = document.querySelector("#valueInput");
const btns = document.querySelectorAll("button");
const btnsArr = Array.from(btns);

let exp = "";

function handleNumberBtnClick (btn) {
    const number = btn.innerHTML;
    exp += number;
    valInput.value += number;    
};
function handleSymbolBtnClick (btn) {
    const sign = btn.innerHTML;
    if (exp === "") {   
        return;
    } else if (exp.length === 1) {
        exp += sign;
        valInput.value += sign;
    } else if (sign === "-") {
        if (exp[exp.length - 1] === "*") {
            exp += sign;
            valInput.value += sign;
        }  
    } else if(!isNaN(exp[exp.length-1])) {
        exp += sign;
        valInput.value += sign;
    } else {
        return;
    }
};
function handlePercentageBtnClick () {
    let num = "";
    const expArr = exp.split("");
    if (exp === "") {
        return;
    } else {
        for (let i = exp.length - 1; i >= 0; i--) {
            if (!isNaN(exp[i])) {
                num += exp[i];
                expArr.pop();
            } else {
                break;
            }
        }
        exp = expArr.join("");
        let finalVal = num.split("").reverse().join("");
        finalVal = finalVal / 100;
        valInput.value += "%*";
        exp += finalVal + "*";
    }
}
function handleEvaluateBtnClick () {
    try {
        const result = new Function("return " + exp)();
        exp = result.toString();
        valInput.value = exp;
    } catch {
        alert("Expression Error")
    }
};

function handleDeleteBtnClick () {
    if (valInput.value.length === 1) {
        exp = "";
    } 
    if (valInput.value.length > 0) {
        const expArr = exp.split("");
        const inputArr = valInput.value.split("");
        expArr.pop();
        inputArr.pop();
        exp = expArr.join("");
        valInput.value = inputArr.join("");        
        console.log(exp)
    }
};

function handleResetBtnClick () {
    exp = "";
    valInput.value = "";
};

btnsArr.map(btn => {
    btn.addEventListener("click", (e) => {
        e.preventDefault();
        if(btn.classList.contains("num")) {
            handleNumberBtnClick(btn);
        } else if (btn.classList.contains("symbol")) {
            handleSymbolBtnClick(btn);
        } else if (btn.classList.contains("percentageBtn")) {
            handlePercentageBtnClick();
        } else if (btn.classList.contains("evaluateBtn")) {
            handleEvaluateBtnClick();      
        } else if (btn.classList.contains("delBtn")) {
            handleDeleteBtnClick();
        } else if (btn.classList.contains("resBtn")) {
            handleResetBtnClick();
        }
    })
});