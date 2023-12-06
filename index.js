const squareRoot = (num) => {
    for (let i = 1; i < num; i++) {
        if (num / i === i) {
            return i;
        }
    }
}

const squareRootsArr = (arr) => {
    return arr.map(squareRoot);
}

const x = [4, 9, 16, 25, 36, 49];
console.log(squareRootsArr(x));
