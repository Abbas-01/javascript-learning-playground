let arr = {
    a : ["One", "Two", "Three"],
    b : [1, 2, 3],
    c : ["I", "II", "III"]
};

function myArr(x) {
    let z = [];
    let numIden;
    if (x === arr.a) {
        numIden = "Cardinal"
    } else if (x === arr.b) {
        numIden = "Natural"
    } else if (x === arr.c) {
        numIden = "Roman"
    }
    for (let i = 0; i < x.length; i++) {
    z.push(`This is ${x[i]} ${numIden} Number`);
    }
    return z;
}
console.log(myArr(arr.a));
