const revArr = (arr) => {
    let x = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        x.push(arr[i]);
    }
    return x;
}

let x = ["Abbas", "Ali", "Asad"];
console.log(revArr(x))