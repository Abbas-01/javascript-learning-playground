const filterOddNums = (arr) => {
    return arr.filter(num => {
        return num % 2 !== 0;
    })
} 
console.log(filterOddNums([1, 2, 3, 4, 5]));