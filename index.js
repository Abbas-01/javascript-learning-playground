const sumArr = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

let x = [2, 4, 51, 9];
console.log(sumArr(x))