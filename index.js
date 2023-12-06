const convertToString = (arr) => {
    let convertedArr = arr.map(a => {
        return a.toString();
    });
    return convertedArr;
};

const x = [10, 23, 51, 72, 32];
console.log(convertToString(x));

