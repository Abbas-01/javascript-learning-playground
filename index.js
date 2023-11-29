const chunkedArray = (arr, chunkSize) => {
    let chunckArr = [];
    let chunkedArr = [];
    for (let i = 0; i < arr.length; i++) {
        chunckArr.push(arr[i]);  

        if (chunckArr.length === chunkSize || i === arr.length - 1) {
            chunkedArr.push([...chunckArr]);
            chunckArr = [];
        }
    }
    return chunkedArr;
}

let x = ["Abbas", "Ali", "Asad", "adas", "dfdfg", "dfaf", "asdfhasufs"];
let a = chunkedArray(x, 3);
let y = [1, 2, 3, 4, 5, 6, 7];
let b = chunkedArray(y, 4);
console.log(a);
console.log(b);