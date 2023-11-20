
function randRange(max, min) {
    let randnumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randnumber
}
console.log(randRange(6, 2));