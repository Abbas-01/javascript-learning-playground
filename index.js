function randomRange (min, max) {
    let randRange = Math.floor(Math.random() * (max - min + 1)) + min;
    return randRange;
}

console.log(randomRange(5, 10)); // Give us random between 5 and 9 
