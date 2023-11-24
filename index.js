let arr = {
    a : ["One", "Two", "Three"],
    b : [1, 2, 3],
    c : ["I", "II", "III"]
};

function myArr(x) {
    let z = [];
    z.push(...x);
    return z;
}
console.log(myArr(arr.c));
