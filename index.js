const startBtn = document.querySelector("#start");
const stopBtn = document.querySelector("#stop");

const sayDate = (myName) => {
    console.log(myName + " " + Date.now());
}
let invalidID;
startBtn.addEventListener("click", () => {
    invalidID = setInterval(sayDate, 1000, "Abbas");      
});

stopBtn.addEventListener("click", () => {
    clearInterval(invalidID);
});