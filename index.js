const remDuplicate = (arr) => {
    let nonDuplicate = [];
    for (let i = 0; i < arr.length; i++) {
        if (!arr.includes(arr[i], i + 1)) {
            nonDuplicate.push(arr[i]);
        }
    }
    return nonDuplicate;
}
let a = [1, 2, 5, 2, 1, 34, 51]
console.log(remDuplicate(a));