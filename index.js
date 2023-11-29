const countElements = (arr) => {
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
        obj[i + 1] = arr[i];
    }
    return obj
};

let x = ["Abbas", "Ali", "Farzain", "Ghazanfer"];

let a = countElements(x);
console.log(a);

