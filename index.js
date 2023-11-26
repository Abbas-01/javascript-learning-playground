const isEven = (num) => {
    if (num % 2 === 0) {
        return true;
    } else if (num % 2 ==! 0) {
        return false;
    } else {
        return "Numbers are only Valid characters";
    }
}

console.log(isEven(2));
console.log(isEven(5));
console.log(isEven(1));
console.log(isEven(10));
console.log(isEven(34));
console.log(isEven(100023004));