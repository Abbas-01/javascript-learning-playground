const findMax = (arr) => {
    return arr.reduce((max, currVal) => {
        return max < currVal ? max = currVal : max;
    }, arr[0])
};

console.log(findMax([2, 3, 4, 12, 74, 1, 23, 62]));