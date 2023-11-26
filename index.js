const numChecker = (num) => {
    if (num > 0) {
        return "Positive";
    } else if (num === 0) {
        return "Zero";
    } else if (num < 0) {
        return "Negative";
    }
}
console.log(numChecker(5));
console.log(numChecker(-2));
console.log(numChecker(0));



const numCheckerTernary = (num) => {
    return (num > 0) ? "Positive" : (num === 0) ? "Zero" : (num < 0) ? "Negative" : "Numbers are only valid character";
};

console.log(numCheckerTernary(-1))
console.log(numCheckerTernary(1))
console.log(numCheckerTernary(0))