function watch() {
    let sec = 0;
    let min = 0;
    let hour = 0;
    setInterval(() => {
        sec++;
        if (sec === 60) {
            sec = 0;
            min++;
            if (min === 60) {
                min = 0;
                hour++;
                console.log("Hours" + hour);
            }
            console.log("Here" + min);
        }
        console.log(sec)
    }, 10);
    
}
watch();