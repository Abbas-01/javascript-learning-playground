const findMinMax = (arr) => {
    let min = arr[0];
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if(arr[i] < min) {
            min = arr[i];
        }
        if (arr[i] > max) {
            max = arr[i];
        }
    }


    return [min, max];

}

let x = [19, 43, 51, 69, 77, 92, 1];
console.log(findMinMax(x));