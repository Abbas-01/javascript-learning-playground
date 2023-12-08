const positiveNums = (arr) => {
    return arr.filter(num => {
        return num > 0;
    })
} 

const numbersArr = [32, -6, -1, -11, 7, 22];
console.log(positiveNums(numbersArr));