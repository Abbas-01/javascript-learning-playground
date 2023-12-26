const body = document.querySelector("body");
const startBtn = document.querySelector("#start");
const stopBtn = document.querySelector("#stop");

let invalidID;
function randomColor () {
    let color = "";
    for (let i = 0; i < 3; i++) {
        color += ` ${Math.floor(Math.random() * 256)}` 
    }
    return body.style.backgroundColor = `rgb(${color})`
}

startBtn.addEventListener("click", () => {
    if (!invalidID){
        invalidID = setInterval(randomColor, 1000);
    }
})

stopBtn.addEventListener("click", () => {
    clearInterval(invalidID);
    invalidID = null;
})