const filterPrimeNums = (arr) => {
    return arr.filter(num => {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                return false;       
            }
        }
        return num;
    })
};
const numsArr = [4, 7, 23, 9, 16, 25, 53];
console.log(filterPrimeNums(numsArr))