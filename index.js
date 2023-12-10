const totalSum = (arr) => {
    return arr.reduce((acc, currVal) => acc+currVal, 0);
}

console.log(totalSum([1, 2, 3, 4, 5]));
