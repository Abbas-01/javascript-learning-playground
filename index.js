const squaredArr = (arr) => {
    let squaredArray = arr.map(a => {
        return a * a;
    });
    return squaredArray;
};

const x = [2, 3, 4, 5, 8];
console.log(squaredArr(x));

