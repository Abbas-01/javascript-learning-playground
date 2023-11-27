const findMinMax = (arr) => {
    let max = Math.max(...arr);
    let min = Math.min(...arr);

    return [max, min]

}

let x = [5, 100, 10000, 34, 0];
console.log(findMinMax(x));