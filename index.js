const rotateArrLeft = (arr, steps) => {
    steps = steps % arr.length;
    const lastElements = arr.slice(steps - arr.length);
    const rotatedArr = lastElements.concat(arr.slice(0, steps));
    return rotatedArr;
};

let x = [1, 2, 3, 4, 5, 6];
console.log(rotateArrLeft(x, 10));

