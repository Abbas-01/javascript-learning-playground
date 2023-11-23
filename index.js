function helo(num) {
    if (typeof num === "number") {
    for (let i = 1; i <= num; i++) {
        if (i % 3 === 0 && i % 5 === 0){
            console.log("FizzBuzz")
        } else if (i % 3 === 0) {
            console.log("Fizz")
        } else if (i % 5 === 0) {
            console.log("Buzz")
        } else {
            console.log(i)
        } 
    }
} else {
    console.log("Numbers are only valid character")
}
} 
helo(30);
// console.log(171 % 3)