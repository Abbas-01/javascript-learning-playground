function hello(par) {
    let x = par;
    if (x === 1) {
        console.log("Alpha");
    } else if (x === 2) {
        console.log("Beta");
    } else if (x === 3) {
        console.log("Gamma");
    } else if (x === 4) {
        console.log("Delta");
    } else {
        console.log("Only intial four numbers");
    }
}

hello(3);
