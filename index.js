const avergeArr = (arr) => {
    let sumOfElements = 0;
    for (let i = 0; i < arr.length; i++) {
        sumOfElements += arr[i];
    }
    let elementsAverage = sumOfElements/arr.length;

    return elementsAverage;
}

let x = [1, 2, 3, 4, 5];
console.log(avergeArr(x));