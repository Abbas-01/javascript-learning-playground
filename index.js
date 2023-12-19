const time = document.querySelector(".time");
const timeFormat = (hour, min, sec) => {
    return `${hour < 10 ? '0' : ''}${hour} : ${min < 9 ? '0' : ''}${min} : ${sec < 9 ? '0' : ''}${sec}`
};

let count = 0;
let timerFunc;
const stopWatchFunc = () => {
    let sec = 0;
    let min = 0;
    let hour = 0;
    if (count === 0) {
        count = 1;
        time.innerHTML = timeFormat(hour, min, sec);
        timerFunc = setInterval(() => {
            sec++;
            if (sec === 60) {
                sec = 0;
                min++;
                if (min === 60) {
                    min = 0;
                    hour++;
                }
            }
            time.innerHTML = timeFormat(hour, min, sec);  
        }, 1000);    
    } else {
        count = 0;
        clearInterval(timerFunc)
        time.innerHTML = "Start";
    }
};