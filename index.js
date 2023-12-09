const isPrimeNum = (num) => {
    for (let i = 2; i < num; i++) {
        if (num % 2 === 0) {
            return false
        }
    }
    return true;
}
const primeNum = (arr) => {
    return arr.filter(num => {
        if (isPrimeNum(num)) {
            return num;
        }
    });

}

const x = [2, 4, 3, 5, 7, 6, 11, 13];
console.log(primeNum(x));
