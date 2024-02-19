let old;
document.querySelector("button").addEventListener("click", (e) => {
    let newTime = e.timeStamp;
    old =  (old === undefined || (e.timeStamp - old) > 300) ? e.timeStamp : old;  
    if ((newTime - old) > 10 && (newTime - old) < 300) {
        console.log("Double click")
    }
})