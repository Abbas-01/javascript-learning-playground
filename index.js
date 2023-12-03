const sumOfDigits = (num) => {
    if (num < 10) {
        return num;
    } else {
        return num % 10 + sumOfDigits(Math.floor(num / 10));
    }
};
console.log(sumOfDigits(123));
