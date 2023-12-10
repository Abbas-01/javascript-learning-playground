const productOfElements = (arr) => {
    return arr.reduce((acc, currVal) => acc * currVal, 1);
}

console.log(productOfElements([5, 2, 11, 2, 3]));