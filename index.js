const numInput = document.querySelector("#numberInput");
const sumBtn = document.querySelector("#sumBtn");
const resetBtn = document.querySelector("#resetBtn");
const form = document.querySelector("form");

let sumOfNum = 0;

sumBtn.addEventListener("click", (e) => {
    const inputNum = parseInt(numInput.value);
    if (!isNaN(inputNum)) {
        sumOfNum += inputNum;
        numInput.value = "";
    } else {
        alert("Please give us a valid Number")
        numInput.value = "";
    }
})
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const inputNum = parseInt(numInput.value);
    numInput.value = `${sumOfNum + inputNum}`;
    sumOfNum = 0;
})
resetBtn.addEventListener("click", (e) => {
    numInput.value = "";
  sumOfNum = 0;  
})