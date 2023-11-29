const rotateArrLeft = (arr, steps) => {
    steps = steps % arr.length;
    const rotatedArr = arr.slice(steps).concat(arr.slice(0, steps));
    return rotatedArr;
};

let x = [1, 2, 3, 4, 5, 6];
console.log(rotateArrLeft(x, 4));

